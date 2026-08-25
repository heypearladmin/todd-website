export type PdfGuideConfig = {
  label: string;
  shortName: string;
  pdfSrc: string;
  source: string;
};

// Keyed by blog post slug. Adding a new gated guide only requires an entry
// here — the blog template renders the lead form automatically whenever
// article.slug matches a key.
export const PDF_GUIDES: Record<string, PdfGuideConfig> = {
  "texas-option-period-earnest-money-guide": {
    label: "Texas Option Period & Earnest Money Guide",
    shortName: "Option Period & Earnest Money",
    pdfSrc: "/pdfs/texas-option-period-earnest-money-guide.pdf",
    source: "Website Buyer Guide — Option Period & Earnest Money",
  },
  "downtown-new-braunfels-neighborhood-guide": {
    label: "Downtown New Braunfels Neighborhood Guide",
    shortName: "Downtown New Braunfels Neighborhood",
    pdfSrc: "/pdfs/downtown-new-braunfels-neighborhood-guide.pdf",
    source: "Website Buyer Guide — Downtown New Braunfels Neighborhood Guide",
  },
  "winning-offer-new-braunfels-texas": {
    label: "Winning Offer Guide",
    shortName: "Winning Offer",
    pdfSrc: "/downloads/winning-offer-new-braunfels-texas.pdf",
    source: "Website Buyer Guide — Winning Offer",
  },
  "home-inspection-new-braunfels-texas": {
    label: "Home Inspection Guide",
    shortName: "Home Inspection",
    pdfSrc: "/downloads/home-inspection-new-braunfels-texas.pdf",
    source: "Website Buyer Guide — Home Inspection",
  },
  "home-insurance-new-braunfels-texas": {
    label: "Home Insurance Guide",
    shortName: "Home Insurance",
    pdfSrc: "/downloads/home-insurance-new-braunfels-texas.pdf",
    source: "Website Buyer Guide — Home Insurance",
  },
  "closing-costs-new-braunfels-texas": {
    label: "Closing Costs Guide",
    shortName: "Closing Costs",
    pdfSrc: "/downloads/closing-costs-new-braunfels-texas.pdf",
    source: "Website Buyer Guide — Closing Costs",
  },
};
