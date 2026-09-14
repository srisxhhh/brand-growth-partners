import { useState } from "react";
import { WHATSAPP_NUMBER, whatsappLink } from "@/lib/site";
import { trackWhatsAppClick } from "@/lib/analytics";

const QUICK_REPLIES = [
  "I'd like to know what you handle.",
  "I want help with ads and content.",
  "What would this cost for my brand?",
];

/** Floating WhatsApp chat launcher shown on every page. */
export function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const start = (message: string) => {
    const body = message.trim() || "Hi Well Handled, I'd like to talk.";
    trackWhatsAppClick("Site", "chat_widget");
    window.open(whatsappLink(body), "_blank", "noopener,noreferrer");
    setOpen(false);
    setText("");
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 print:hidden">
      {open ? (
        <div className="w-[min(20rem,calc(100vw-2.5rem))] border border-border bg-card shadow-lg">
          <div className="flex items-center justify-between bg-agree px-4 py-3 text-agree-foreground">
            <div>
              <p className="font-display text-lg leading-none">Well Handled</p>
              <p className="mt-1 font-sans text-[0.7rem] opacity-90">Replies the same working day</p>
            </div>
            <button
              type="button"
              aria-label="Close chat"
              onClick={() => setOpen(false)}
              className="text-lg leading-none"
            >
              ×
            </button>
          </div>

          <div className="p-4">
            <p className="font-sans text-sm leading-relaxed text-muted-foreground">
              Hi — tell us what you need and we'll continue on WhatsApp.
            </p>

            <div className="mt-3 flex flex-col gap-2">
              {QUICK_REPLIES.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => start(q)}
                  className="border border-border px-3 py-2 text-left font-sans text-xs hover:bg-secondary"
                >
                  {q}
                </button>
              ))}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                start(text);
              }}
              className="mt-4"
            >
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                maxLength={500}
                placeholder="Type a message…"
                className="w-full border border-border bg-background px-3 py-2.5 font-sans text-sm outline-none focus:border-foreground"
              />
              <button
                type="submit"
                className="mt-3 w-full bg-agree px-4 py-3 text-xs uppercase tracking-[0.2em] text-agree-foreground"
              >
                Send on WhatsApp
              </button>
            </form>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close WhatsApp chat" : "Chat on WhatsApp"}
        aria-expanded={open}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-agree text-agree-foreground shadow-lg"
      >
        <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.34 4.97L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.02h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.35c0-4.53 3.7-8.22 8.25-8.22 2.2 0 4.27.86 5.83 2.41a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.2-8.24 8.2zm4.52-6.15c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-1.99-1.23-.74-.65-1.23-1.46-1.38-1.71-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.22.25-.85.84-.85 2.03 0 1.2.87 2.35.99 2.51.12.17 1.71 2.6 4.15 3.65.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.22-.16-.47-.28z" />
        </svg>
      </button>

      <span className="sr-only">WhatsApp {WHATSAPP_NUMBER}</span>
    </div>
  );
}
