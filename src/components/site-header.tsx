import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-5 sm:px-8">
        <Link to="/" className="font-display text-xl tracking-tight sm:text-2xl">
          Well Handled
        </Link>
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <Link
            to="/portfolio"
            className="text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground"
          >
            Portfolio
          </Link>
          <Link
            to="/case-studies"
            className="text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground"
          >
            Case studies
          </Link>
          <Link
            to="/founder"
            className="text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground"
          >
            Founder
          </Link>
          <Link
            to="/"
            hash="contact"
            className="border border-foreground px-4 py-2 text-xs uppercase tracking-[0.18em] hover:bg-foreground hover:text-background"
          >
            Enquire
          </Link>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <Link to="/" className="font-display text-base tracking-tight text-foreground">
          Well Handled
        </Link>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
