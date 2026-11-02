type Props = {
  /** Show the "ClaudeInFinance" wordmark next to the mark. */
  wordmark?: boolean;
  className?: string;
};

/** Brand mark: two overlapping rounded cards (beige behind, orange in front). */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      role="img"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="12"
        width="18"
        height="12"
        rx="3"
        className="fill-cream-200"
      />
      <rect
        x="11"
        y="7"
        width="18"
        height="13"
        rx="3.5"
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
