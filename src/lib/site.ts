/** Central place for the contact details and embeds used across the site. */
export const WHATSAPP_NUMBER = "919511202129";
export const CONTACT_EMAIL = "contact@wellhandled.in";
export const CALENDAR_LINK = "https://calendar.app.google/YGvR4W2VDJmZPqFJ9";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
