import type { Metadata } from "next";
import { AboutEditorial } from "./AboutEditorial";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.brand}. ${site.description}`,
};

export default function AboutPage() {
  return <AboutEditorial />;
}
