import { hasAnalyticsConsent, onConsentChange } from "./consent";
import { getAttribution } from "./attribution";

type Params = Record<string, string | number | boolean>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const queue: Array<{ name: string; params: Params }> = [];
let listening = false;

function attributionParams(): Params {
  const a = getAttribution();
  const out: Params = {};
  for (const [key, value] of Object.entries(a)) {
    if (typeof value === "string" && value) out[key] = value;
  }
  return out;
}

function dispatch(name: string, params: Params) {
  const payload = { ...attributionParams(), ...params, page_path: window.location.pathname };
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

function flush() {
  while (queue.length) {
    const item = queue.shift();
    if (item) dispatch(item.name, item.params);
  }
}

/** Fire-and-forget analytics event. Only sent once the visitor opts in. */
export function trackEvent(name: string, params: Params = {}) {
  if (typeof window === "undefined") return;

  if (!hasAnalyticsConsent()) {
    // Hold events until (and unless) consent is granted.
    if (queue.length < 25) queue.push({ name, params });
    if (!listening) {
      listening = true;
      onConsentChange((value) => {
        if (value === "granted") flush();
        else queue.length = 0;
      });
    }
    return;
  }

  dispatch(name, params);
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

export function trackCalendarClick(serviceTitle: string, source: string) {
  trackEvent("calendar_click", { service: serviceTitle, source });
  bumpLocalCounter(`calendar:${serviceTitle}:${source}`);
}

export function trackSpamBlocked(serviceTitle: string, reason: string) {
  trackEvent("lead_form_blocked", { service: serviceTitle, reason });
}
