/** Central place for the contact details and embeds used across the site. */
export const WHATSAPP_NUMBER = "919511202129";
export const CONTACT_EMAIL = "contact@wellhandled.in";

/**
 * Paste the Google Form "embed" link here (Send > `<>` > the src URL).
 * While this is empty, the site shows a short note instead of the form.
 */
export const GOOGLE_FORM_EMBED_URL = "";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
