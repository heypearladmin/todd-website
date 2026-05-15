import { HomeExplore } from "@/components/home/HomeExplore";
import { HomeFinalCta } from "@/components/home/HomeFinalCta";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeMarket } from "@/components/home/HomeMarket";
import { HomeNeighborhoods } from "@/components/home/HomeNeighborhoods";
import { HomeSocialProof } from "@/components/home/HomeSocialProof";
import { HomeTrust } from "@/components/home/HomeTrust";
import { HomeVideoAuthority } from "@/components/home/HomeVideoAuthority";

export default function HomePage() {
  return (
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
  );
}
