import Link from "next/link";

// Global fallback for pathnames that do not match a locale segment.
export default function GlobalNotFound() {
  return (
    <html lang="fr">
      <body
        style={{
          backgroundColor: "#faf9f5",
          color: "#1f1d1a",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: "40rem",
            margin: "0 auto",
            padding: "7rem 1.5rem",
            textAlign: "center",
          }}
        >
          <span
            style={{ fontSize: "3.75rem", fontWeight: 700, color: "#d97757" }}
          >
            404
          </span>
          <h1 style={{ marginTop: "1rem", fontSize: "1.875rem" }}>
            Page introuvable / Page not found
          </h1>
          <p style={{ marginTop: "1.5rem" }}>
            <Link href="/fr" style={{ color: "#d97757", fontWeight: 600 }}>
              Retour a l&apos;accueil / Back to home
            </Link>
          </p>
        </div>
      </body>
    </html>
  );
}
