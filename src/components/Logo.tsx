type Props = {
  /** Show the "ClaudeInFinance" wordmark next to the mark. */
  wordmark?: boolean;
  className?: string;
};

/** Brand mark: three overlapping rounded cards (faint + beige behind, orange in front). */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      role="img"
      aria-hidden="true"
    >
      <rect
        x="2"
        y="14.5"
        width="15"
        height="11"
        rx="2.6"
        className="fill-cream-200"
        fillOpacity="0.55"
      />
      <rect
        x="7.5"
        y="10.5"
        width="16"
        height="11.5"
        rx="2.9"
        className="fill-cream-200"
      />
      <rect
        x="13"
        y="6.5"
        width="17"
        height="12"
        rx="3.2"
        className="fill-terracotta"
      />
    </svg>
  );
}

export default function Logo({ wordmark = true, className }: Props) {
  return (
    <span className={"flex items-center gap-2 " + (className ?? "")}>
      <LogoMark className="h-7 w-7 shrink-0" />
      {wordmark && (
        <span className="font-sans text-xl font-bold leading-none tracking-tight">
          <span className="text-ink">ClaudeIn</span>
          <span className="text-terracotta">Finance</span>
        </span>
      )}
    </span>
  );
}
