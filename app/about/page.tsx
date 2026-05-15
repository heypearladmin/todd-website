import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.brand}. ${site.description}`,
};

export default function AboutPage() {
  return (
    <main id="main" className="bg-paper">
      <section className="section-wrap py-24 md:py-32 lg:py-40">
        <p className="type-eyebrow">About</p>
        <h1 className="type-display mt-4 max-w-3xl">
          A guide before an agent.
        </h1>
        <p className="type-dek mt-6 max-w-measure-wide">
          Fifteen years in the New Braunfels corridor. Limestone porches, river bends,
          and a thousand small decisions that turn a contract into a home. Field notes
          first, paperwork second.
        </p>
        <div className="mt-10 flex flex-wrap gap-6 text-sm font-medium">
          <Link href={site.contactPath} className="editorial-link">
            Start a conversation
          </Link>
          <Link href={site.neighborhoodsPath} className="editorial-link">
            Neighborhood guides
          </Link>
        </div>
      </section>
    </main>
  );
}
