import { getRequestConfig } from "next-intl/server";
import type { AbstractIntlMessages } from "next-intl";
import { routing, locales, type Locale } from "./routing";

function isLocale(value: string | undefined): value is Locale {
  return value !== undefined && (locales as readonly string[]).includes(value);
}

type Messages = Record<string, unknown>;

/** Deep-merge: values in `override` win, missing ones fall back to `base`. */
function deepMerge(base: Messages, override: Messages): Messages {
  const out: Messages = { ...base };
  for (const [key, value] of Object.entries(override)) {
    const prev = out[key];
    if (
      value &&
      typeof value === "object" &&
      !Array.isArray(value) &&
      prev &&
      typeof prev === "object" &&
      !Array.isArray(prev)
    ) {
      out[key] = deepMerge(prev as Messages, value as Messages);
    } else {
      out[key] = value;
    }
  }
  return out;
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = isLocale(requested) ? requested : routing.defaultLocale;

  const defaultMessages = (
    await import(`../../messages/${routing.defaultLocale}.json`)
  ).default as Messages;

  const messages =
    locale === routing.defaultLocale
      ? defaultMessages
      : deepMerge(
          defaultMessages,
          (await import(`../../messages/${locale}.json`)).default as Messages,
        );

  return {
    locale,
    messages: messages as unknown as AbstractIntlMessages,
  };
});
