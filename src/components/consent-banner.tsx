import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { getConsent, setConsent, type ConsentValue } from "@/lib/consent";
import { captureAttribution } from "@/lib/attribution";

export function ConsentBanner() {
  const [choice, setChoice] = useState<ConsentValue | null | "pending">("pending");

  useEffect(() => {
    captureAttribution();
    setChoice(getConsent());
  }, []);

  const decide = (value: ConsentValue) => {
    setConsent(value);
    setChoice(value);
  };

  const open = choice === null;

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          role="dialog"
          aria-label="Cookie preferences"
          className="fixed inset-x-3 bottom-3 z-50 border border-border bg-card p-5 shadow-lg sm:inset-x-auto sm:right-6 sm:bottom-6 sm:max-w-md sm:p-6"
        >
          <span className="eyebrow">Cookies</span>
          <h2 className="mt-2 font-display text-2xl font-medium italic tracking-tight">
            A small ask before we measure anything
          </h2>
          <p className="mt-2 font-sans text-sm leading-relaxed text-muted-foreground">
            We use analytics cookies only to see which campaigns bring founders to us. Nothing runs
            until you say yes.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => decide("granted")}
              className="inline-flex items-center justify-center bg-agree px-6 py-3 text-xs uppercase tracking-[0.2em] text-agree-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              Accept
            </button>
            <button
              type="button"
              onClick={() => decide("denied")}
              className="inline-flex items-center justify-center border border-foreground px-6 py-3 text-xs uppercase tracking-[0.2em] transition-colors hover:bg-foreground hover:text-background"
            >
              Decline
            </button>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
