type LogoProps = {
  className?: string;
};

/**
 * Marque ClaudeInFinance : livre ouvert creme sur pastille terracotta.
 * Meme dessin que /icon.svg (favicon) pour garder une identite unique.
 */
export function LogoMark({ className = "h-7 w-7" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      role="img"
      aria-label="ClaudeInFinance"
    >
      <rect width="32" height="32" rx="7.5" fill="#d97757" />
      <path
        fill="#faf8f3"
        d="M15.1 9.5C14 7.8 12.1 6.8 9.8 6.8H6A1.6 1.6 0 0 0 4.4 8.4V21A1.6 1.6 0 0 0 6 22.6h3.8c2.3 0 4.2 1 5.3 2.7Z"
      />
      <path
        fill="#faf8f3"
        d="M16.9 9.5C18 7.8 19.9 6.8 22.2 6.8H26a1.6 1.6 0 0 1 1.6 1.6V21a1.6 1.6 0 0 1-1.6 1.6h-3.8c-2.3 0-4.2 1-5.3 2.7Z"
      />
    </svg>
  );
}

export default function Logo({
  size = "md",
}: {
  size?: "sm" | "md";
}) {
  return (
    <span className="flex items-center gap-2.5 text-ink">
      <LogoMark className={size === "sm" ? "h-6 w-6" : "h-7 w-7"} />
      <span
        className={`font-display font-semibold tracking-tight ${
          size === "sm" ? "text-lg" : "text-xl"
        }`}
      >
        ClaudeInFinance
        <span className="font-body italic text-terracotta">.com</span>
      </span>
    </span>
  );
}
