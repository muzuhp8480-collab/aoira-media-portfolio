/**
 * Aiora Media - Studio Configuration
 */
export const STUDIO_CONFIG = {
  // Aiora Media Business WhatsApp Number:
  // Must be international digits WITHOUT the '+' sign, dashes, or spaces.
  // Specified number: +91 9747368480
  whatsAppNumber: "919747368480",
  formattedPhone: "+91 9747368480",
  location: "Kottakkal, Malappuram Dt",

  // Studio Details
  studioName: "Aiora Media",
  studioEmail: "contact@aioramedia.com",
  tagline: "Graphic Design • Video Editing",
  servicesTagline: "High Quality • Medium Quality • Base Quality Video Production",
  
  // Navigation links matching the exact requested order:
  // 1. Home
  // 2. High Quality
  // 3. Medium Quality
  // 4. Base Quality
  // 5. Categories (Perfume, Product, Service, Food, Nesto)
  // 6. Contact & WhatsApp
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "High Quality", href: "#high-quality" },
    { label: "Medium Quality", href: "#medium-quality" },
    { label: "Base Quality", href: "#base-quality" },
    { label: "Categories", href: "#categories" },
    { label: "Contact", href: "#contact" }
  ]
};
