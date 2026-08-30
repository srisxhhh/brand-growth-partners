const KEY = "wh_lead_submissions";
const WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_IN_WINDOW = 3;
const COOLDOWN_MS = 30 * 1000;
/** Humans need at least this long to fill the form. */
export const MIN_FILL_MS = 3000;

export type RateVerdict = { ok: true } | { ok: false; reason: "cooldown" | "limit"; message: string };

function read(): number[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    const list = raw ? (JSON.parse(raw) as number[]) : [];
    const now = Date.now();
    return list.filter((t) => now - t < WINDOW_MS);
  } catch {
    return [];
  }
}

export function checkRateLimit(): RateVerdict {
  const times = read();
  const now = Date.now();
  const last = times[times.length - 1];
  if (last !== undefined && now - last < COOLDOWN_MS) {
    const wait = Math.ceil((COOLDOWN_MS - (now - last)) / 1000);
    return { ok: false, reason: "cooldown", message: `Just a moment — try again in ${wait}s.` };
  }
  if (times.length >= MAX_IN_WINDOW) {
    return {
      ok: false,
      reason: "limit",
      message: "You've sent a few enquiries already. Message us directly on WhatsApp instead.",
    };
  }
  return { ok: true };
}

export function recordSubmission() {
  if (typeof window === "undefined") return;
  try {
    const times = [...read(), Date.now()];
    window.localStorage.setItem(KEY, JSON.stringify(times));
  } catch {
    /* ignore */
  }
}
