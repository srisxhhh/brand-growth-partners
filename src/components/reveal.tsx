import type { ReactNode } from "react";

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
