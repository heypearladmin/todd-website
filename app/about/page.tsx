import type { Metadata } from "next";
import { AboutEditorial } from "./AboutEditorial";
import { JsonLd } from "@/components/seo/JsonLd";
import { personSchema, breadcrumbSchema } from "@/lib/seo/schemas";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.brand}. ${site.description}`,
  alternates: {
    canonical: `${site.websiteUrl}/about`,
  },
  openGraph: {
    title: `About ${site.brand}`,
    description: `About ${site.brand}. ${site.description}`,
    url: `${site.websiteUrl}/about`,
    type: "profile",
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd schema={personSchema() as Record<string, unknown>} />
      <JsonLd
        schema={
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
          ]) as Record<string, unknown>
        }
      />
      <AboutEditorial />
    </>
  );
}
