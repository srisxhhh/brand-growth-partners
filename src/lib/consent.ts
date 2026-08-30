const KEY = "wh_consent";

export type ConsentValue = "granted" | "denied";

const listeners = new Set<(value: ConsentValue | null) => void>();

export function getConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw === "granted" || raw === "denied" ? raw : null;
  } catch {
    return null;
  }
}

export function setConsent(value: ConsentValue) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(KEY, value);
  } catch {
    /* ignore */
  }
  for (const listener of listeners) listener(value);
}

export function onConsentChange(listener: (value: ConsentValue | null) => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function hasAnalyticsConsent(): boolean {
  return getConsent() === "granted";
}
