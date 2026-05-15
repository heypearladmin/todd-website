import Image from "next/image";
import Link from "next/link";
import { NewsletterForm } from "@/components/NewsletterForm";
import { newsletterCopy } from "@/lib/home-content";
import { site } from "@/lib/site";

const footerNav: { label: string; href: string }[] = [
  { label: "Neighborhoods", href: site.neighborhoodsPath },
  { label: "Explore", href: "/explore" },
  { label: "Journal", href: site.blogPath },
  { label: "About", href: site.aboutPath },
  { label: "Contact", href: site.contactPath },
];

const socialLinks: { label: string; href: string }[] = [
  { label: "Facebook", href: site.social.facebook },
  { label: "Instagram", href: site.social.instagram },
  { label: "LinkedIn", href: site.social.linkedin },
  { label: "YouTube", href: site.social.youtube },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-paper-deep">
      <div aria-hidden className="paper-grain pointer-events-none absolute inset-0 opacity-70" />

      <div className="section-wrap relative pt-section-y pb-12 md:pt-section-y-md">
        {/* sign-off + newsletter */}
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Link
              href="/"
              className="inline-flex items-center gap-4 transition-opacity duration-cinema ease-cinema hover:opacity-85"
              aria-label={`${site.brand} home`}
            >
              <span className="relative block h-20 w-20 shrink-0">
                <Image
                  src={site.logoSrc}
                  alt={site.logoAlt}
                  fill
                  sizes="80px"
                  className="object-contain"
                />
              </span>
              <span className="flex flex-col">
                <span className="font-display text-[1.25rem] font-semibold tracking-tight text-ink">
                  {site.brand}
                </span>
                <span className="caption !text-ink/55">New Braunfels, Texas</span>
              </span>
            </Link>

            <div className="mt-10 flex items-center gap-3">
              <span className="tick" aria-hidden />
              <p className="eyebrow">A closing note</p>
            </div>
            <p className="display-md mt-6 text-ink">
              The map is easy. The feeling takes longer. Let us walk it together.
            </p>
            <p className="mt-6 max-w-[40rem] text-[0.9375rem] leading-[1.78] text-ink/65">
              {site.description}
            </p>
          </div>

          <div className="lg:col-span-6 lg:pl-8">
            <div className="flex items-center gap-3">
              <span className="tick" aria-hidden />
              <p className="eyebrow">{newsletterCopy.eyebrow}</p>
            </div>
            <h2 className="display-md mt-6 text-ink">{newsletterCopy.title}</h2>
            <p className="mt-5 max-w-[34rem] text-[0.9375rem] leading-[1.7] text-ink/65">
              {newsletterCopy.dek}
            </p>
            <div className="mt-7">
              <NewsletterForm variant="inline" />
            </div>
          </div>
        </div>

        {/* link rail */}
        <div className="mt-20 grid grid-cols-2 gap-8 border-t border-ink/[0.08] pt-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <p className="caption !text-ink/50">Contact</p>
            <ul className="mt-4 space-y-2.5 text-[0.9375rem]">
              <li>
                <a href={site.phoneHref} className="editorial-link">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={site.emailHref} className="editorial-link break-all">
                  {site.email}
                </a>
              </li>
              <li className="pt-2 text-[0.8125rem] leading-relaxed text-ink/55">
                {site.brokerage.address}
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="caption !text-ink/50">Sections</p>
            <ul className="mt-4 space-y-2.5 text-[0.9375rem]">
              {footerNav.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="editorial-link">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="caption !text-ink/50">Off site</p>
            <ul className="mt-4 space-y-2.5 text-[0.9375rem]">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="editorial-link"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="caption !text-ink/50">Brokerage</p>
            <p className="mt-4 text-[0.875rem] leading-relaxed text-ink/55">
              {site.brokerage.name}
              <br />
              <span className="text-[0.8125rem]">{site.brokerage.licenseLine}</span>
            </p>
          </div>
        </div>

        {/* colophon */}
        <div className="mt-16 border-t border-ink/[0.08] pt-8 md:mt-20 md:pt-10">
          <div className="flex flex-col items-start justify-between gap-4 text-[0.78rem] text-muted md:flex-row md:items-center">
            <p className="tracking-wide">
              © {new Date().getFullYear()} {site.legalName} · Equal Housing Opportunity
            </p>
            <p className="caption !text-ink/45">
              New Braunfels · Comal and Guadalupe corridors · Hill Country, Texas
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
