import { HomeExplore } from "@/components/home/HomeExplore";
import { HomeFinalCta } from "@/components/home/HomeFinalCta";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeMarket } from "@/components/home/HomeMarket";
import { HomeNeighborhoods } from "@/components/home/HomeNeighborhoods";
import { HomeSocialProof } from "@/components/home/HomeSocialProof";
import { HomeTrust } from "@/components/home/HomeTrust";
import { HomeVideoAuthority } from "@/components/home/HomeVideoAuthority";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  organizationSchema,
  webSiteSchema,
  realEstateAgentSchema,
  localBusinessSchema,
} from "@/lib/seo/schemas";

export default function HomePage() {
  return (
    <>
      <JsonLd schema={organizationSchema() as Record<string, unknown>} />
      <JsonLd schema={webSiteSchema() as Record<string, unknown>} />
      <JsonLd schema={realEstateAgentSchema() as Record<string, unknown>} />
      <JsonLd schema={localBusinessSchema() as Record<string, unknown>} />
      <main id="main">
        <HomeHero />
        <HomeTrust />
        <HomeExplore />
        <HomeVideoAuthority />
        <HomeNeighborhoods />
        <HomeSocialProof />
        <HomeMarket />
        <HomeFinalCta />
      </main>
    </>
  );
}
