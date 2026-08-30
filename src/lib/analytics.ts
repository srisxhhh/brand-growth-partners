type Params = Record<string, string | number | boolean>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Fire-and-forget analytics event. Works with gtag/dataLayer when present, no-ops otherwise. */
export function trackEvent(name: string, params: Params = {}) {
  if (typeof window === "undefined") return;
  const payload = { ...params, page_path: window.location.pathname };
  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", name, payload);
    } else {
      window.dataLayer = window.dataLayer ?? [];
      window.dataLayer.push({ event: name, ...payload });
    }
  } catch {
    /* analytics must never break the UI */
  }
}

/** Local conversion counters so per-service performance is visible even without a provider. */
export function bumpLocalCounter(key: string) {
  if (typeof window === "undefined") return;
  try {
    const store = "wh_counters";
    const raw = window.localStorage.getItem(store);
    const data = raw ? (JSON.parse(raw) as Record<string, number>) : {};
    data[key] = (data[key] ?? 0) + 1;
    window.localStorage.setItem(store, JSON.stringify(data));
  } catch {
    /* ignore */
  }
}

export function trackLeadSubmit(serviceTitle: string) {
  trackEvent("lead_form_submit", { service: serviceTitle });
  bumpLocalCounter(`lead:${serviceTitle}`);
}

export function trackWhatsAppClick(serviceTitle: string, source: string) {
  trackEvent("whatsapp_click", { service: serviceTitle, source });
  bumpLocalCounter(`whatsapp:${serviceTitle}:${source}`);
}

export function trackSpamBlocked(serviceTitle: string, reason: string) {
  trackEvent("lead_form_blocked", { service: serviceTitle, reason });
}
