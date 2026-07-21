export const site = {
  brand: "Todd Spencer",
  legalName: "Todd Spencer Real Estate",
  tagline: "The Local Insider for Living in New Braunfels",
  description:
    "A trusted local insider helping people live, buy, and thrive in New Braunfels and Comal County. River life, neighborhood guides, and no pressure real estate.",

  // Contact
  phone: "(512) 665-3747",
  phoneHref: "tel:+15126653747",
  email: "todd@todd-spencer.com",
  emailHref: "mailto:todd@todd-spencer.com",
  websiteUrl: "https://todd-spencer.com",

  // Brokerage
  brokerage: {
    name: "eXp Realty, LLC",
    licenseLine: "Licensed in Texas",
    address: "New Braunfels, Texas",
  },

  // Brand mark
  logoSrc: "/images/exp-realty-logo.svg",
  logoAlt: "eXp Realty logo",

  // Open Graph — must be an absolute URL so social previews work in production
  ogImage: "https://todd-spencer.com/images/og-todd-spencer-new-braunfels.jpg",

  // Agent portrait
  agentName: "Todd Spencer",
  agentPortraitSrc: "/images/todd-spencer-editorial-portrait.jpg",
  agentPortraitAlt:
    "Editorial portrait of Todd Spencer along the Comal riverwalk in New Braunfels at golden hour.",

  // Social
  social: {
    facebook: "https://www.facebook.com/ToddSpencerNewBraunfelsRealtor",
    instagram: "https://www.instagram.com/toddspencer.realtor",
    linkedin: "https://www.linkedin.com/in/todd-spencer-411810b0/",
    youtube: "https://www.youtube.com/@ToddSpencer-x7b",
    zillow: "https://www.zillow.com/profile/todd_spencer3",
    realtorCom: "https://www.realtor.com/realestateagents/619d6efa8f0fdce36f22bbb5",
  },

  // Route paths
  contactPath: "/contact",
  neighborhoodsPath: "/neighborhoods",
  aboutPath: "/about",
  blogPath: "/blog",
  termsPath: "/terms",
  policiesPath: "/policies",

  // A2P 10DLC / Twilio compliance — company name shown in SMS & AI consent copy.
  complianceCompanyName: "eXp Realty",
} as const;

export type SiteConfig = typeof site;
