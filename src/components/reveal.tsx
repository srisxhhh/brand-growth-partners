import type { ReactNode } from "react";

/** Kept for compatibility with pages that still pass motion variants. */
export const fadeUp = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.4 } },
};

export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
};

/**
 * Lightweight presentation helpers. Heavy scroll/parallax motion was removed
 * for performance; these now render a single, cheap CSS fade.
 */

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div className={`fade-in ${className ?? ""}`} style={delay ? { animationDelay: `${delay}s` } : undefined}>
      {children}
    </div>
  );
}

export function RevealGroup({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={`fade-in ${className ?? ""}`}>{children}</div>;
}

export function RisingText({ text, className }: { text: string; className?: string; delay?: number }) {
  return <span className={className}>{text}</span>;
}
