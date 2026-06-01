"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";

/* ─────────────────────────────────────────────────────────────────────────────
   TOKEN PALETTE  (dark-system on top of the existing brand palette)
───────────────────────────────────────────────────────────────────────────── */
// bg: #09090f  surface: #111118  card: #16161e  border: rgba(255,255,255,0.07)
// accent-blue: #4E89C0  accent-gold: #C9924B  text: #e8e6f0  muted: #8b8a9a

/* ─────────────────────────────────────────────────────────────────────────────
   TABLE OF CONTENTS
───────────────────────────────────────────────────────────────────────────── */
const sections = [
  { id: "s1",  num: "01", label: "Welcome & Introduction" },
  { id: "s2",  num: "02", label: "Scope of Services" },
  { id: "s3",  num: "03", label: "Visibility & Discoverability" },
  { id: "s4",  num: "04", label: "Content Authority Systems" },
  { id: "s5",  num: "05", label: "Lead Capture & Growth" },
  { id: "s6",  num: "06", label: "AI Automation & Nurture" },
  { id: "s7",  num: "07", label: "Client Responsibilities" },
  { id: "s8",  num: "08", label: "PearlOS Infrastructure" },
  { id: "s9",  num: "09", label: "Performance Disclaimer" },
  { id: "s10", num: "10", label: "Confidentiality" },
  { id: "s11", num: "11", label: "Communication Standards" },
  { id: "s12", num: "12", label: "Minimum Commitment & Billing" },
  { id: "s13", num: "13", label: "Termination" },
  { id: "s14", num: "14", label: "Electronic Acceptance" },
  { id: "s15", num: "15", label: "Limitation of Liability" },
];

/* ─────────────────────────────────────────────────────────────────────────────
   ANIMATION VARIANTS
───────────────────────────────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const cardReveal = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

/* ─────────────────────────────────────────────────────────────────────────────
   REUSABLE PRIMITIVES
───────────────────────────────────────────────────────────────────────────── */
function SectionWrapper({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={stagger}
      className="scroll-mt-24 border-b border-white/[0.06] py-20 lg:py-28"
    >
      {children}
    </motion.section>
  );
}

function SectionHeader({ num, title, subtitle }: { num: string; title: string; subtitle?: string }) {
  return (
    <motion.div variants={fadeUp} className="mb-12">
      <span className="font-display text-[4rem] font-semibold leading-none tracking-tight text-white/[0.06] select-none">
        {num}
      </span>
      <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#e8e6f0] md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-xl text-[1.0625rem] leading-relaxed text-[#8b8a9a]">{subtitle}</p>
      )}
    </motion.div>
  );
}

function ProseBlock({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={fadeUp}
      className="max-w-[800px] text-[1.0625rem] leading-[1.8] text-[#a8a6b8]"
    >
      {children}
    </motion.div>
  );
}

function HighlightPanel({ children, accent = "blue" }: { children: React.ReactNode; accent?: "blue" | "gold" | "amber" }) {
  const colors = {
    blue:  "border-[#4E89C0]/40 bg-[#4E89C0]/[0.06]",
    gold:  "border-[#C9924B]/40 bg-[#C9924B]/[0.06]",
    amber: "border-amber-400/40 bg-amber-400/[0.06]",
  };
  const dots = {
    blue:  "bg-[#4E89C0]",
    gold:  "bg-[#C9924B]",
    amber: "bg-amber-400",
  };
  return (
    <motion.div
      variants={fadeUp}
      className={`mt-8 max-w-[800px] rounded-2xl border ${colors[accent]} p-6 md:p-8`}
    >
      <div className={`mb-4 h-1 w-10 rounded-full ${dots[accent]}`} />
      <div className="text-[1rem] leading-[1.8] text-[#c8c6d8]">{children}</div>
    </motion.div>
  );
}

function PremiumCard({
  title,
  body,
  tag,
  icon,
}: {
  title: string;
  body: string;
  tag?: string;
  icon?: React.ReactNode;
}) {
  return (
    <motion.div
      variants={cardReveal}
      whileHover={{ y: -4, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#16161e] p-6 md:p-7 transition-shadow duration-500 hover:shadow-[0_20px_60px_-20px_rgba(78,137,192,0.25)]"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#4E89C0]/[0.04] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      {icon && <div className="mb-4 text-[#4E89C0]">{icon}</div>}
      {tag && (
        <span className="mb-3 inline-block font-display text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-[#4E89C0]">
          {tag}
        </span>
      )}
      <h3 className="font-display text-[1.125rem] font-semibold tracking-tight text-[#e8e6f0]">
        {title}
      </h3>
      <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-[#8b8a9a]">{body}</p>
    </motion.div>
  );
}

function PillarCard({ num, title, body }: { num: string; title: string; body: string }) {
  return (
    <motion.div
      variants={cardReveal}
      whileHover={{ y: -6, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#16161e] p-7 md:p-8 transition-shadow duration-500 hover:border-[#4E89C0]/30 hover:shadow-[0_24px_64px_-20px_rgba(78,137,192,0.3)]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#4E89C0]/[0.05] via-transparent to-[#C9924B]/[0.03] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
      <span className="font-display text-[3.5rem] font-semibold leading-none tracking-tighter text-white/[0.05] select-none">
        {num}
      </span>
      <p className="mt-1 font-display text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#4E89C0]">
        Pillar {num}
      </p>
      <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-[#e8e6f0]">
        {title}
      </h3>
      <p className="mt-3 text-[0.9375rem] leading-relaxed text-[#8b8a9a]">{body}</p>
    </motion.div>
  );
}

function FlowArrow() {
  return (
    <div className="flex flex-col items-center py-1">
      <div className="h-6 w-px bg-gradient-to-b from-[#4E89C0]/50 to-[#4E89C0]/10" />
      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className="text-[#4E89C0]/50">
        <path d="M6 8L0 0h12L6 8z" fill="currentColor" />
      </svg>
    </div>
  );
}

function FlowStep({ label, sub }: { label: string; sub?: string }) {
  return (
    <motion.div
      variants={cardReveal}
      className="rounded-xl border border-white/[0.07] bg-[#16161e] px-6 py-4 text-center"
    >
      <p className="font-display text-[1rem] font-semibold text-[#e8e6f0]">{label}</p>
      {sub && <p className="mt-1 text-[0.8125rem] text-[#8b8a9a]">{sub}</p>}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   ICONS
───────────────────────────────────────────────────────────────────────────── */
const IconGlobe = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);
const IconSearch = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);
const IconMap = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/>
  </svg>
);
const IconBot = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><line x1="12" y1="7" x2="12" y2="11"/><line x1="8" y1="15" x2="8" y2="15"/><line x1="16" y1="15" x2="16" y2="15"/>
  </svg>
);
const IconShield = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const IconZap = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);
const IconBarChart = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
  </svg>
);
const IconLock = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);
const IconCheckCircle = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);
const IconMenu = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);
const IconX = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

/* ─────────────────────────────────────────────────────────────────────────────
   READING PROGRESS BAR
───────────────────────────────────────────────────────────────────────────── */
function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0%" }}
      className="fixed top-0 left-0 right-0 z-[100] h-[2px] bg-gradient-to-r from-[#4E89C0] via-[#6ba8d4] to-[#C9924B]"
    />
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   TOC SIDEBAR
───────────────────────────────────────────────────────────────────────────── */
function TableOfContents({ activeId, mobileOpen, onToggle }: {
  activeId: string;
  mobileOpen: boolean;
  onToggle: () => void;
}) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    if (mobileOpen) onToggle();
  };

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden xl:block sticky top-24 h-fit w-56 shrink-0">
        <p className="mb-4 font-display text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-[#4E89C0]">
          Contents
        </p>
        <nav className="flex flex-col gap-0.5">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`group flex items-center gap-2.5 rounded-lg px-3 py-2 text-left text-[0.8125rem] transition-all duration-300 ${
                activeId === s.id
                  ? "bg-[#4E89C0]/10 text-[#4E89C0]"
                  : "text-[#8b8a9a] hover:bg-white/[0.04] hover:text-[#c8c6d8]"
              }`}
            >
              <span className={`shrink-0 font-display text-[0.625rem] font-semibold tracking-widest transition-colors duration-300 ${
                activeId === s.id ? "text-[#4E89C0]" : "text-white/20 group-hover:text-white/40"
              }`}>
                {s.num}
              </span>
              <span className="leading-snug">{s.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Mobile FAB + drawer */}
      <div className="xl:hidden">
        <button
          onClick={onToggle}
          aria-label="Toggle table of contents"
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#4E89C0] shadow-[0_8px_32px_rgba(78,137,192,0.4)] transition-transform duration-300 hover:scale-105"
        >
          {mobileOpen ? <IconX /> : <IconMenu />}
        </button>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed bottom-22 right-6 z-50 w-72 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111118] shadow-[0_24px_80px_rgba(0,0,0,0.6)]"
            >
              <div className="border-b border-white/[0.06] px-5 py-4">
                <p className="font-display text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-[#4E89C0]">
                  Contents
                </p>
              </div>
              <nav className="max-h-[60vh] overflow-y-auto p-3">
                {sections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => scrollTo(s.id)}
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[0.875rem] transition-all duration-200 ${
                      activeId === s.id
                        ? "bg-[#4E89C0]/10 text-[#4E89C0]"
                        : "text-[#8b8a9a] hover:bg-white/[0.04] hover:text-[#c8c6d8]"
                    }`}
                  >
                    <span className="font-display text-[0.625rem] font-semibold tracking-widest text-white/25">
                      {s.num}
                    </span>
                    {s.label}
                  </button>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────────────────────────────────────── */
export function ClientServiceAgreement() {
  const [activeId, setActiveId] = useState("s1");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        setActiveId(entry.target.id);
      }
    }
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(handleObserver, {
      rootMargin: "-15% 0px -70% 0px",
    });
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observerRef.current?.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, [handleObserver]);

  return (
    <div className="bg-[#09090f] text-[#e8e6f0]">
      <ReadingProgress />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pb-24 pt-20 md:pb-32 md:pt-28">
        {/* ambient glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#4E89C0]/[0.07] blur-[120px]" />
          <div className="absolute -left-20 top-40 h-[400px] w-[500px] rounded-full bg-[#C9924B]/[0.04] blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-[80rem] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.p
              variants={fadeUp}
              className="font-display text-[0.6875rem] font-medium uppercase tracking-[0.32em] text-[#4E89C0]"
            >
              Client Service Agreement
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="mt-4 font-display text-4xl font-semibold tracking-tight text-[#e8e6f0] md:text-5xl lg:text-6xl"
              style={{ lineHeight: 1.06, letterSpacing: "-0.03em" }}
            >
              GEO by HeyPearl
              <br />
              <span className="text-[#4E89C0]">Client Service Agreement</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-[#8b8a9a] md:text-[1.125rem]"
            >
              The governing framework for GEO by HeyPearl's AI Authority &amp;
              Discoverability Infrastructure.
            </motion.p>

            {/* Metadata cards */}
            <motion.div variants={stagger} className="mt-8 flex flex-wrap gap-3">
              {[
                { label: "Effective Date", value: "June 2025" },
                { label: "Agreement Version", value: "v2.1" },
              ].map((m) => (
                <motion.div
                  key={m.label}
                  variants={cardReveal}
                  className="rounded-xl border border-white/[0.07] bg-[#16161e] px-5 py-3"
                >
                  <p className="font-display text-[0.625rem] font-medium uppercase tracking-[0.24em] text-[#8b8a9a]">
                    {m.label}
                  </p>
                  <p className="mt-0.5 font-display text-[0.9375rem] font-semibold text-[#e8e6f0]">
                    {m.value}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Trust badges */}
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-2">
              {[
                "AI Authority Infrastructure",
                "Discoverability Systems",
                "PearlOS Powered",
                "Enterprise Framework",
              ].map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-[#4E89C0]/25 bg-[#4E89C0]/[0.07] px-3.5 py-1.5 font-display text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-[#4E89C0]"
                >
                  {badge}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── BODY: TOC + CONTENT ───────────────────────────────────────────── */}
      <div className="mx-auto max-w-[80rem] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="border-t border-white/[0.06]" />
        <div className="flex gap-12 xl:gap-16 2xl:gap-20">
          <TableOfContents
            activeId={activeId}
            mobileOpen={mobileNavOpen}
            onToggle={() => setMobileNavOpen((v) => !v)}
          />

          {/* Content column */}
          <main id="main" className="min-w-0 flex-1 py-12">

            {/* ── S1: WELCOME ───────────────────────────────────────────── */}
            <SectionWrapper id="s1">
              <SectionHeader
                num="01"
                title="Welcome & Introduction"
                subtitle="This Agreement establishes the foundational relationship between GEO by HeyPearl and the Client engaging its AI Authority & Discoverability Infrastructure."
              />
              <ProseBlock>
                <p>
                  Thank you for choosing GEO by HeyPearl. This Client Service Agreement
                  ("Agreement") constitutes the entire legal and operational framework
                  governing the relationship between HeyPearl Inc. ("GEO by HeyPearl,"
                  "HeyPearl," "we," "us," or "our") and the individual or entity ("Client,"
                  "you," or "your") engaging our AI Authority &amp; Discoverability
                  Infrastructure services.
                </p>
                <p className="mt-5">
                  By activating services through payment, the Client acknowledges having read,
                  understood, and agreed to all terms, conditions, disclaimers, and
                  obligations set forth in this Agreement. This Agreement is legally binding
                  and supersedes all prior verbal or written representations, proposals, or
                  understandings.
                </p>
              </ProseBlock>

              <motion.div variants={stagger} className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  {
                    title: "AI Authority",
                    body: "Position your brand as the definitive authority inside AI-driven search environments, ensuring recommended presence across generative engines.",
                  },
                  {
                    title: "Discoverability",
                    body: "Engineer visibility across generative engines and AI-native discovery systems — from ChatGPT to Perplexity and beyond.",
                  },
                  {
                    title: "Infrastructure",
                    body: "Deploy a proprietary ecosystem built on PearlOS that compounds authority over time and scales with your business.",
                  },
                ].map((c) => (
                  <PremiumCard key={c.title} title={c.title} body={c.body} />
                ))}
              </motion.div>
            </SectionWrapper>

            {/* ── S2: SCOPE ─────────────────────────────────────────────── */}
            <SectionWrapper id="s2">
              <SectionHeader
                num="02"
                title="Scope of Services"
                subtitle="GEO by HeyPearl delivers a comprehensive, multi-pillar AI authority ecosystem engineered to maximize your brand's visibility across next-generation search environments."
              />
              <ProseBlock>
                <p>
                  The services provided under this Agreement encompass four interconnected
                  pillars of AI authority infrastructure. Each pillar operates as an
                  integrated component of the Client's broader authority ecosystem, managed
                  and optimized through the PearlOS platform. Services are provided on a
                  subscription basis and are subject to the terms herein.
                </p>
                <p className="mt-5">
                  The specific deliverables, cadence, and scope of each pillar will be
                  outlined in the Client's onboarding documentation and service schedule.
                  HeyPearl reserves the right to modify tactical execution within each
                  pillar in order to optimize performance, provided that the strategic
                  objectives and deliverable categories remain consistent with those agreed
                  upon at onboarding.
                </p>
              </ProseBlock>

              <motion.div variants={stagger} className="mt-10 grid gap-5 sm:grid-cols-2">
                <PillarCard
                  num="I"
                  title="Visibility & Discoverability Infrastructure"
                  body="Generative Engine Optimization (GEO), Answer Engine Optimization (AEO), and hyperlocal authority positioning to ensure your brand surfaces across every major AI-driven discovery system."
                />
                <PillarCard
                  num="II"
                  title="Content Authority Systems"
                  body="AI-optimized content production, SEO infrastructure, social authority amplification, newsletter systems, and reputation management engineered for maximum authority compounding."
                />
                <PillarCard
                  num="III"
                  title="Lead & Growth Infrastructure"
                  body="Full-funnel lead capture architecture, conversion-optimized landing frameworks, and growth systems designed to transform discoverability into measurable client acquisition."
                />
                <PillarCard
                  num="IV"
                  title="AI Automation & Nurture"
                  body="Conversational AI engagement systems, automated nurture sequences, database reactivation protocols, and pipeline automation built to operate at enterprise scale."
                />
              </motion.div>
            </SectionWrapper>

            {/* ── S3: VISIBILITY ────────────────────────────────────────── */}
            <SectionWrapper id="s3">
              <SectionHeader
                num="03"
                title="Visibility & Discoverability Infrastructure"
                subtitle="A multi-layered authority positioning system engineered to ensure your brand is consistently surfaced, cited, and recommended across AI-native search environments."
              />
              <ProseBlock>
                <p>
                  GEO by HeyPearl's Visibility &amp; Discoverability Infrastructure
                  represents the foundational layer of your AI authority ecosystem. This
                  infrastructure is architected to engineer your brand's presence across
                  the full spectrum of AI-native discovery channels, including but not
                  limited to large language model outputs, generative search results, and
                  AI-powered recommendation engines.
                </p>
                <p className="mt-5">
                  Services within this pillar include ongoing Generative Engine
                  Optimization (GEO), Answer Engine Optimization (AEO), and hyperlocal
                  authority positioning. All efforts are executed within the constraints of
                  each platform's terms of service and are subject to platform-level
                  algorithmic factors outside of HeyPearl's direct control.
                </p>
              </ProseBlock>

              <motion.div variants={stagger} className="mt-10 grid gap-4 sm:grid-cols-3">
                <PremiumCard
                  icon={<IconGlobe />}
                  title="Generative Engine Optimization"
                  tag="GEO"
                  body="Strategic content and authority signals engineered to ensure consistent brand citation within large language model outputs and generative search environments."
                />
                <PremiumCard
                  icon={<IconSearch />}
                  title="Answer Engine Optimization"
                  tag="AEO"
                  body="Structured authority content optimized for featured placement within AI-powered answer engines, including Perplexity, ChatGPT Search, and Google's AI Overviews."
                />
                <PremiumCard
                  icon={<IconMap />}
                  title="Hyperlocal Authority"
                  tag="Positioning"
                  body="Precision-targeted visibility strategies that establish your brand as the dominant local authority within your geographic and competitive market."
                />
              </motion.div>

              {/* Visual framework */}
              <motion.div variants={stagger} className="mt-12 flex flex-col items-center gap-0">
                <motion.p variants={fadeUp} className="mb-6 font-display text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-[#8b8a9a]">
                  Authority Framework
                </motion.p>
                {["Authority", "Discoverability", "Conversion"].map((step, i) => (
                  <div key={step} className="flex w-full max-w-xs flex-col items-center">
                    <FlowStep label={step} />
                    {i < 2 && <FlowArrow />}
                  </div>
                ))}
              </motion.div>
            </SectionWrapper>

            {/* ── S4: CONTENT AUTHORITY ─────────────────────────────────── */}
            <SectionWrapper id="s4">
              <SectionHeader
                num="04"
                title="Content Authority Systems"
                subtitle="A comprehensive content infrastructure engineered to compound your brand's authority across every digital surface where your prospects make decisions."
              />
              <ProseBlock>
                <p>
                  Content Authority Systems represent HeyPearl's proprietary approach to
                  establishing and maintaining brand authority through strategic content
                  production, distribution, and amplification. All content produced under
                  this Agreement is designed to function as durable authority assets that
                  compound in value over time.
                </p>
                <p className="mt-5">
                  Content deliverables are produced in accordance with the Client's
                  approved brand voice, messaging guidelines, and strategic objectives as
                  established during onboarding. The Client acknowledges that content
                  strategy and tactical execution may evolve in response to platform
                  algorithm updates, market conditions, and performance data.
                </p>
                <p className="mt-5">
                  All content produced by HeyPearl on behalf of the Client remains the
                  intellectual property of the Client upon full payment of all fees
                  associated with its production. HeyPearl retains the right to reference
                  the existence of the Client relationship (without disclosing confidential
                  strategy) for general portfolio and capability representation purposes,
                  unless the Client objects in writing.
                </p>
              </ProseBlock>

              <motion.div variants={stagger} className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { title: "AI Authority Content", body: "Long-form, structured content engineered for maximum citation probability within AI-driven search and recommendation environments." },
                  { title: "SEO Infrastructure", body: "Technical SEO foundations, entity optimization, and semantic content structures built to perform across traditional and AI-native search." },
                  { title: "Social Authority", body: "Strategic social content systems designed to build consistent authority signals across platforms that AI systems monitor and reference." },
                  { title: "Newsletter Systems", body: "Branded newsletter infrastructure that deepens audience authority positioning while creating compounding engagement and retention assets." },
                  { title: "Reputation Amplification", body: "Review generation, monitoring, and amplification systems that reinforce your brand's authority signals across all major reputation platforms." },
                ].map((c) => (
                  <PremiumCard key={c.title} title={c.title} body={c.body} />
                ))}
              </motion.div>
            </SectionWrapper>

            {/* ── S5: LEAD CAPTURE ──────────────────────────────────────── */}
            <SectionWrapper id="s5">
              <SectionHeader
                num="05"
                title="Lead Capture & Growth Infrastructure"
                subtitle="A conversion-engineered growth system that transforms your AI authority into a predictable, scalable client acquisition machine."
              />
              <ProseBlock>
                <p>
                  The Lead Capture &amp; Growth Infrastructure pillar encompasses all
                  systems, assets, and automation sequences designed to convert
                  discoverability into qualified leads and, ultimately, into client
                  acquisitions. This infrastructure is built within and managed through the
                  PearlOS platform.
                </p>
                <p className="mt-5">
                  Lead capture assets produced under this Agreement may include, but are
                  not limited to: landing pages, lead magnets, conversion-optimized forms,
                  booking systems, and funnel infrastructure. The performance of lead
                  capture assets is subject to factors including, but not limited to,
                  traffic quality, market conditions, and offer-market fit. HeyPearl does
                  not guarantee specific lead volumes or conversion rates.
                </p>
                <p className="mt-5">
                  The Client is responsible for timely follow-up with all leads generated
                  through the infrastructure. HeyPearl's obligation is limited to the
                  delivery of the infrastructure itself and the ongoing optimization thereof.
                  Conversion of leads to clients remains the Client's operational
                  responsibility.
                </p>
              </ProseBlock>

              {/* Conversion journey */}
              <motion.div variants={stagger} className="mt-12">
                <motion.p variants={fadeUp} className="mb-6 text-center font-display text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-[#8b8a9a]">
                  Client Acquisition Journey
                </motion.p>
                <div className="flex flex-col items-center gap-0">
                  {[
                    { label: "Discovery", sub: "AI & search surfaces" },
                    { label: "Authority", sub: "Brand credibility signals" },
                    { label: "Lead Capture", sub: "Conversion infrastructure" },
                    { label: "Nurture", sub: "Automated engagement" },
                    { label: "Client Acquisition", sub: "Revenue generation" },
                  ].map((step, i, arr) => (
                    <div key={step.label} className="flex w-full max-w-sm flex-col items-center">
                      <FlowStep label={step.label} sub={step.sub} />
                      {i < arr.length - 1 && <FlowArrow />}
                    </div>
                  ))}
                </div>
              </motion.div>
            </SectionWrapper>

            {/* ── S6: AI AUTOMATION ─────────────────────────────────────── */}
            <SectionWrapper id="s6">
              <SectionHeader
                num="06"
                title="AI Automation & Nurture Systems"
                subtitle="Enterprise-grade AI automation infrastructure engineered to engage, nurture, and convert your audience at scale — 24 hours a day, 7 days a week."
              />
              <ProseBlock>
                <p>
                  AI Automation &amp; Nurture Systems represent HeyPearl's proprietary
                  infrastructure for deploying intelligent automation at every stage of
                  the client engagement lifecycle. All automation systems are configured,
                  deployed, and managed within the PearlOS platform.
                </p>
                <p className="mt-5">
                  The Client acknowledges that all automated communications deployed on
                  their behalf comply with applicable federal and state regulations,
                  including the Telephone Consumer Protection Act (TCPA) and CAN-SPAM Act,
                  subject to the Client's provision of compliant contact databases and
                  appropriate consent documentation. The Client assumes full responsibility
                  for the compliance of their contact database and the consent status of
                  all contacts therein.
                </p>
              </ProseBlock>

              <motion.div variants={stagger} className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    tag: "Module A",
                    title: "Conversational AI Engagement",
                    body: "Intelligent AI-powered conversational systems deployed across website, social, and messaging channels to engage prospects, qualify leads, and schedule appointments in real time.",
                  },
                  {
                    tag: "Module B",
                    title: "Nurture Automations",
                    body: "Multi-channel, behavior-triggered nurture sequences that deliver the right message at the right moment across email, SMS, and direct messaging channels.",
                  },
                  {
                    tag: "Module C",
                    title: "Database Reactivation",
                    body: "Systematic reactivation campaigns targeting dormant contacts within the Client's existing database, engineered to surface and convert previously inactive opportunities.",
                  },
                  {
                    tag: "Module D",
                    title: "Pipeline Automation",
                    body: "End-to-end pipeline management automation that tracks, stages, and advances opportunities through the sales cycle with minimal manual intervention.",
                  },
                ].map((c) => (
                  <PremiumCard key={c.tag} tag={c.tag} title={c.title} body={c.body} />
                ))}
              </motion.div>
            </SectionWrapper>

            {/* ── S7: CLIENT RESPONSIBILITIES ───────────────────────────── */}
            <SectionWrapper id="s7">
              <SectionHeader
                num="07"
                title="Client Responsibilities & Collaboration"
                subtitle="The Client's active partnership is essential to the success of the GEO by HeyPearl infrastructure. These responsibilities define the Client's role in ensuring optimal outcomes."
              />
              <ProseBlock>
                <p>
                  GEO by HeyPearl's infrastructure is designed to operate with maximum
                  efficiency; however, optimal performance requires the Client's active
                  collaboration and timely fulfillment of the responsibilities outlined
                  herein. The Client's failure to fulfill these responsibilities may
                  materially impact the performance of the infrastructure and shall not
                  constitute grounds for refund, service credit, or early termination
                  without penalty.
                </p>
              </ProseBlock>

              <motion.div variants={stagger} className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: <IconCheckCircle />,
                    title: "Content Review & Approval",
                    body: "The Client agrees to review and approve all content assets within five (5) business days of submission. Delays in review may result in corresponding delays in delivery timelines.",
                  },
                  {
                    icon: <IconCheckCircle />,
                    title: "Strategic Collaboration",
                    body: "The Client agrees to attend scheduled strategy sessions, provide requested business information, and maintain open communication channels with their designated HeyPearl strategist.",
                  },
                  {
                    icon: <IconCheckCircle />,
                    title: "Authority Building Participation",
                    body: "The Client agrees to actively participate in authority-building activities including review generation, testimonial collection, and content sourcing as directed by the HeyPearl team.",
                  },
                  {
                    icon: <IconCheckCircle />,
                    title: "Communication Expectations",
                    body: "The Client agrees to respond to HeyPearl's communications within three (3) business days and to designate a primary point of contact for all service-related communications.",
                  },
                ].map((c) => (
                  <PremiumCard key={c.title} icon={c.icon} title={c.title} body={c.body} />
                ))}
              </motion.div>

              <HighlightPanel accent="blue">
                <strong className="text-[#e8e6f0]">Important:</strong> The Client agrees
                to provide accurate, complete, and lawfully obtained data, credentials,
                and access required for service delivery. HeyPearl shall not be liable for
                any adverse outcomes resulting from the Client's failure to provide
                accurate information or timely approvals.
              </HighlightPanel>
            </SectionWrapper>

            {/* ── S8: PEARLOS ───────────────────────────────────────────── */}
            <SectionWrapper id="s8">
              <SectionHeader num="08" title="PearlOS Infrastructure" />

              {/* Hero statement */}
              <motion.div
                variants={fadeUp}
                className="relative overflow-hidden rounded-2xl border border-[#4E89C0]/20 bg-gradient-to-br from-[#0d1829] to-[#09090f] p-8 md:p-12"
              >
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute right-0 top-0 h-[300px] w-[400px] rounded-full bg-[#4E89C0]/[0.08] blur-[80px]" />
                  <div className="absolute bottom-0 left-0 h-[200px] w-[300px] rounded-full bg-[#C9924B]/[0.05] blur-[60px]" />
                </div>
                <div className="relative">
                  <p className="mb-6 font-display text-[0.6875rem] font-medium uppercase tracking-[0.32em] text-[#4E89C0]">
                    Operating System
                  </p>
                  <blockquote className="font-display text-2xl font-semibold leading-snug tracking-tight text-[#e8e6f0] md:text-3xl">
                    "PearlOS is not a tool. It is the operating system upon which every
                    dimension of your authority infrastructure is built, managed, and
                    compounded."
                  </blockquote>
                </div>
              </motion.div>

              <ProseBlock>
                <p className="mt-8">
                  PearlOS serves as the unified intelligence layer through which all GEO
                  by HeyPearl services are deployed, monitored, and optimized. The Client
                  acknowledges that access to PearlOS is granted as a component of their
                  service subscription and does not constitute a transfer of ownership,
                  license, or intellectual property rights in the PearlOS platform itself.
                </p>
                <p className="mt-5">
                  PearlOS access is provided exclusively for the Client's use in
                  connection with their GEO by HeyPearl services. Upon termination of
                  this Agreement, the Client's access to PearlOS will be suspended, and
                  all infrastructure, automations, and systems built within the platform
                  will be preserved for a period of thirty (30) days to allow for data
                  export, after which they may be permanently deleted.
                </p>
              </ProseBlock>

              <motion.div variants={stagger} className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  {
                    icon: <IconZap />,
                    title: "Optimization",
                    body: "Real-time performance intelligence that continuously refines every dimension of your authority infrastructure for maximum compounding impact.",
                  },
                  {
                    icon: <IconBot />,
                    title: "Automation",
                    body: "End-to-end workflow automation that orchestrates your AI systems, nurture sequences, and pipeline operations without manual intervention.",
                  },
                  {
                    icon: <IconBarChart />,
                    title: "Reporting",
                    body: "Comprehensive authority and performance reporting that provides transparent visibility into infrastructure performance, reach, and ROI trajectory.",
                  },
                ].map((c) => (
                  <motion.div
                    key={c.title}
                    variants={cardReveal}
                    whileHover={{ y: -4, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
                    className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-br from-[#16161e] to-[#111118] p-6 md:p-7 transition-shadow duration-500 hover:border-[#4E89C0]/30 hover:shadow-[0_20px_60px_-20px_rgba(78,137,192,0.3)]"
                  >
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "radial-gradient(circle at 50% 0%, rgba(78,137,192,0.08), transparent 70%)" }} />
                    <div className="relative">
                      <div className="mb-4 text-[#4E89C0]">{c.icon}</div>
                      <h3 className="font-display text-lg font-semibold tracking-tight text-[#e8e6f0]">{c.title}</h3>
                      <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-[#8b8a9a]">{c.body}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </SectionWrapper>

            {/* ── S9: PERFORMANCE DISCLAIMER ────────────────────────────── */}
            <SectionWrapper id="s9">
              <SectionHeader
                num="09"
                title="Performance Disclaimer"
                subtitle="Transparent performance expectations built on professional integrity."
              />
              <ProseBlock>
                <p>
                  GEO by HeyPearl is committed to delivering best-in-class AI authority
                  and discoverability infrastructure. HeyPearl employs proven frameworks,
                  strategic expertise, and proprietary systems to maximize the Client's
                  performance. However, the Client acknowledges and agrees to the
                  following important disclosures:
                </p>
              </ProseBlock>

              <motion.div
                variants={fadeUp}
                className="mt-8 max-w-[800px] overflow-hidden rounded-2xl border border-amber-400/25 bg-amber-400/[0.04]"
              >
                <div className="border-b border-amber-400/20 px-6 py-4 md:px-8">
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                    <p className="font-display text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-amber-400">
                      Performance Notice
                    </p>
                  </div>
                </div>
                <div className="space-y-4 p-6 text-[1rem] leading-[1.8] text-[#c8c6d8] md:p-8">
                  <p>
                    <strong className="text-[#e8e6f0]">No Guaranteed Outcomes.</strong>{" "}
                    HeyPearl does not guarantee specific search rankings, lead volumes,
                    revenue outcomes, or AI citation frequency. All results are
                    influenced by factors outside HeyPearl's direct control, including
                    algorithmic changes, competitive dynamics, and market conditions.
                  </p>
                  <p>
                    <strong className="text-[#e8e6f0]">AI Platform Variability.</strong>{" "}
                    The behavior of third-party AI platforms, including but not limited to
                    ChatGPT, Perplexity, Google AI Overviews, and other generative engines,
                    is subject to continuous change. HeyPearl cannot guarantee consistent
                    or permanent placement within any third-party AI system's outputs.
                  </p>
                  <p>
                    <strong className="text-[#e8e6f0]">Timeline Expectations.</strong>{" "}
                    AI authority and discoverability infrastructure requires time to build
                    meaningful compounding effects. The Client should anticipate a
                    foundational period of 60–90 days before significant discoverability
                    gains become measurable. HeyPearl's commitment is to strategic
                    excellence throughout this process.
                  </p>
                  <p>
                    <strong className="text-[#e8e6f0]">Client Cooperation Dependency.</strong>{" "}
                    Performance outcomes are materially dependent on the Client's timely
                    fulfillment of their responsibilities as outlined in Section 7 of this
                    Agreement. HeyPearl shall not be held responsible for performance
                    deficiencies resulting from delayed client response, withheld approvals,
                    or inadequate cooperation.
                  </p>
                </div>
              </motion.div>
            </SectionWrapper>

            {/* ── S10: CONFIDENTIALITY ──────────────────────────────────── */}
            <SectionWrapper id="s10">
              <SectionHeader
                num="10"
                title="Confidentiality"
                subtitle="A mutual framework of trust, discretion, and intellectual property protection governing all information exchanged under this Agreement."
              />
              <ProseBlock>
                <p>
                  Both parties acknowledge that in the course of this engagement, each
                  may be exposed to information that is proprietary, confidential, or
                  commercially sensitive. Both parties agree to maintain the strictest
                  confidence with respect to all such information and to use it solely
                  for the purposes of fulfilling their obligations under this Agreement.
                </p>
              </ProseBlock>

              <motion.div variants={stagger} className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  {
                    icon: <IconShield />,
                    title: "Mutual Confidentiality",
                    body: "Both HeyPearl and the Client agree to hold all proprietary business information, strategies, data, and operational details in strict confidence for a period of three (3) years following the termination of this Agreement.",
                  },
                  {
                    icon: <IconLock />,
                    title: "Proprietary Infrastructure",
                    body: "The Client acknowledges that all HeyPearl methodologies, frameworks, systems, and the PearlOS platform constitute proprietary intellectual property and trade secrets of HeyPearl Inc.",
                  },
                  {
                    icon: <IconShield />,
                    title: "Intellectual Property",
                    body: "Content and deliverables produced for the Client become the Client's property upon full payment. All underlying frameworks, methodologies, and platform IP remain exclusively owned by HeyPearl.",
                  },
                ].map((c) => (
                  <PremiumCard key={c.title} icon={c.icon} title={c.title} body={c.body} />
                ))}
              </motion.div>

              <HighlightPanel accent="blue">
                Neither party shall disclose the other party's confidential information
                to third parties without prior written consent, except as required by law
                or regulatory mandate. In the event of a legally compelled disclosure,
                the disclosing party shall provide the other party with reasonable advance
                notice to permit the seeking of appropriate protective relief.
              </HighlightPanel>
            </SectionWrapper>

            {/* ── S11: COMMUNICATION STANDARDS ─────────────────────────── */}
            <SectionWrapper id="s11">
              <SectionHeader
                num="11"
                title="Communication Standards"
                subtitle="Clear, professional, and efficient communication protocols that ensure alignment and momentum throughout the engagement."
              />
              <ProseBlock>
                <p>
                  HeyPearl maintains a structured communication framework to ensure all
                  client engagements operate with clarity, accountability, and strategic
                  alignment. The Client agrees to engage with HeyPearl's communication
                  systems and personnel in a professional and respectful manner consistent
                  with enterprise business standards.
                </p>
                <p className="mt-5">
                  All official service communications, including strategy updates,
                  deliverable submissions, and billing notifications, will be delivered via
                  email to the Client's designated contact address. The Client is
                  responsible for maintaining an accurate and active email address on file
                  with HeyPearl and for monitoring communications therefrom.
                </p>
                <p className="mt-5">
                  Client communications that are abusive, threatening, or unprofessional
                  in nature shall constitute grounds for immediate suspension of services
                  and, at HeyPearl's sole discretion, termination of this Agreement
                  without refund. HeyPearl is committed to maintaining a professional
                  working environment for all team members and reserves the right to
                  enforce this standard.
                </p>
                <p className="mt-5">
                  Strategic review sessions will be scheduled on a cadence mutually agreed
                  upon at onboarding. The Client agrees to attend or provide advance
                  notice of cancellation no less than 24 hours prior to any scheduled
                  session. Repeated failure to attend scheduled sessions may result in
                  reduced service capacity and shall not constitute grounds for service
                  credit or fee adjustment.
                </p>
              </ProseBlock>
            </SectionWrapper>

            {/* ── S12: BILLING ──────────────────────────────────────────── */}
            <SectionWrapper id="s12">
              <SectionHeader
                num="12"
                title="Minimum Commitment & Billing"
                subtitle="Transparent investment terms designed to align long-term strategic commitment with compounding infrastructure value."
              />
              <ProseBlock>
                <p>
                  GEO by HeyPearl's AI Authority &amp; Discoverability Infrastructure is
                  built to deliver compounding results over time. Accordingly, a minimum
                  commitment period is required to allow the infrastructure sufficient time
                  to establish authority signals, compound discoverability, and generate
                  measurable outcomes.
                </p>
              </ProseBlock>

              <motion.div variants={stagger} className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "90-Day Minimum Commitment",
                    body: "This Agreement is subject to a minimum initial commitment of ninety (90) calendar days from the date of first payment. The Client agrees that this minimum commitment period is non-cancellable and all fees within this period are non-refundable, regardless of the Client's satisfaction with interim results.",
                  },
                  {
                    title: "Billing Cadence",
                    body: "Fees are billed on a recurring monthly basis, in advance, on the same calendar date each month as the initial payment. The Client authorizes HeyPearl to charge the payment method on file for all recurring fees. A 5-day grace period applies to failed payments before services are suspended.",
                  },
                  {
                    title: "Non-Refundable Infrastructure Work",
                    body: "All setup, onboarding, and infrastructure build-out work performed by HeyPearl is non-refundable. This includes, but is not limited to, PearlOS configuration, content foundation development, automation builds, and initial authority positioning work.",
                  },
                  {
                    title: "Investment Acknowledgment",
                    body: "The Client acknowledges that GEO by HeyPearl represents a strategic infrastructure investment, not a transactional service. The Client agrees that the minimum commitment period is reasonable given the nature of the services provided and the time required to generate meaningful authority compounding.",
                  },
                ].map((c) => (
                  <PremiumCard key={c.title} title={c.title} body={c.body} />
                ))}
              </motion.div>

              <HighlightPanel accent="gold">
                <strong className="text-[#e8e6f0]">Late Payment Policy.</strong> Invoices
                not paid within the grace period will result in a temporary suspension of
                services. Services will be reinstated within one (1) business day of
                payment receipt. HeyPearl reserves the right to charge a reinstatement
                fee of $150 for accounts suspended more than once within any 12-month
                period. Accounts delinquent beyond 30 days may be referred for collection,
                and the Client shall be responsible for all associated collection costs,
                including reasonable attorney's fees.
              </HighlightPanel>
            </SectionWrapper>

            {/* ── S13: TERMINATION ──────────────────────────────────────── */}
            <SectionWrapper id="s13">
              <SectionHeader
                num="13"
                title="Termination"
                subtitle="Clearly defined off-ramp procedures that protect both parties and ensure professional continuity."
              />
              <ProseBlock>
                <p>
                  <strong className="text-[#e8e6f0]">Termination After Minimum Commitment.</strong>{" "}
                  Following the completion of the 90-day minimum commitment period, either
                  party may terminate this Agreement with thirty (30) calendar days' written
                  notice. Notice must be delivered via email to the designated contact
                  address of the receiving party. Fees for services rendered during the
                  notice period remain due and payable.
                </p>
                <p className="mt-5">
                  <strong className="text-[#e8e6f0]">Termination for Cause.</strong>{" "}
                  HeyPearl reserves the right to terminate this Agreement immediately and
                  without refund in the event of: (a) the Client's failure to pay any
                  amount due within 30 days of the due date; (b) the Client's breach of
                  any material term of this Agreement; (c) the Client's engagement in
                  conduct that is abusive, threatening, or otherwise unprofessional toward
                  HeyPearl personnel; or (d) any activity by the Client that exposes
                  HeyPearl to legal liability or reputational harm.
                </p>
                <p className="mt-5">
                  <strong className="text-[#e8e6f0]">Post-Termination.</strong>{" "}
                  Upon termination, the Client's access to PearlOS will be suspended. All
                  content assets and deliverables for which the Client has paid in full
                  will be made available for export for a period of 30 days. HeyPearl will
                  cease all active campaign management, automation deployment, and ongoing
                  optimization activities as of the termination effective date.
                </p>
                <p className="mt-5">
                  <strong className="text-[#e8e6f0]">Effect of Termination.</strong>{" "}
                  Termination of this Agreement shall not relieve either party of
                  obligations accrued prior to the termination date. Confidentiality
                  obligations, intellectual property provisions, limitation of liability
                  terms, and payment obligations survive termination.
                </p>
              </ProseBlock>
            </SectionWrapper>

            {/* ── S14: ELECTRONIC ACCEPTANCE ───────────────────────────── */}
            <SectionWrapper id="s14">
              <SectionHeader
                num="14"
                title="Electronic Acceptance"
                subtitle="The legal framework governing the Client's binding acceptance of this Agreement through electronic means."
              />
              <ProseBlock>
                <p>
                  The Client acknowledges and agrees that electronic acceptance of this
                  Agreement, including acceptance through the submission of payment, is
                  legally valid and binding under the Electronic Signatures in Global and
                  National Commerce Act (E-SIGN Act) and applicable state electronic
                  signature laws.
                </p>
                <p className="mt-5">
                  By submitting payment toward GEO by HeyPearl services, the Client
                  represents and warrants that: (a) they have the legal authority to enter
                  into this Agreement on behalf of themselves or the entity they represent;
                  (b) they have read and understood all terms, conditions, and provisions
                  of this Agreement; and (c) they agree to be legally bound by all such
                  terms, conditions, and provisions.
                </p>
                <p className="mt-5">
                  This Agreement may be updated by HeyPearl from time to time. The Client
                  will be notified of material updates via email. Continued use of services
                  following notification of updates constitutes acceptance of the revised
                  Agreement. HeyPearl will maintain a version history and the current
                  Agreement will remain accessible at heypearl.io/client-service-agreement.
                </p>
              </ProseBlock>

              <motion.div
                variants={fadeUp}
                className="mt-8 max-w-[800px] overflow-hidden rounded-2xl border border-[#4E89C0]/30 bg-gradient-to-br from-[#4E89C0]/[0.07] to-transparent"
              >
                <div className="border-b border-[#4E89C0]/20 px-6 py-4 md:px-8">
                  <p className="font-display text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-[#4E89C0]">
                    Electronic Acceptance Notice
                  </p>
                </div>
                <div className="p-6 text-[1rem] leading-[1.8] text-[#c8c6d8] md:p-8">
                  The Client's submission of payment toward GEO by HeyPearl services
                  constitutes full acceptance of this Agreement, including all sections,
                  terms, conditions, disclaimers, and legal provisions contained herein.{" "}
                  <strong className="text-[#e8e6f0]">
                    No separate written signature is required.
                  </strong>
                </div>
              </motion.div>
            </SectionWrapper>

            {/* ── S15: LIMITATION OF LIABILITY ──────────────────────────── */}
            <SectionWrapper id="s15">
              <SectionHeader
                num="15"
                title="Limitation of Liability"
                subtitle="Legal provisions governing the allocation of risk between the parties, presented with full transparency."
              />
              <ProseBlock>
                <p>
                  To the fullest extent permitted by applicable law, HeyPearl's total
                  aggregate liability to the Client arising out of or related to this
                  Agreement, whether in contract, tort, negligence, or otherwise, shall
                  not exceed the total fees actually paid by the Client to HeyPearl in the
                  three (3) months immediately preceding the event giving rise to the claim.
                </p>
              </ProseBlock>

              <motion.div variants={stagger} className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Exclusion of Consequential Damages",
                    body: "In no event shall HeyPearl be liable for any indirect, incidental, special, consequential, punitive, or exemplary damages, including lost profits, lost revenue, lost data, or business interruption, arising out of or related to this Agreement, even if HeyPearl has been advised of the possibility of such damages.",
                  },
                  {
                    title: "Third-Party Platform Liability",
                    body: "HeyPearl shall not be liable for any damages, losses, or liabilities arising from changes to, or the actions of, third-party platforms including search engines, AI systems, social media platforms, or any other external service upon which GEO by HeyPearl's services depend.",
                  },
                  {
                    title: "Force Majeure",
                    body: "HeyPearl shall not be liable for any failure or delay in performance resulting from circumstances beyond its reasonable control, including acts of God, natural disasters, governmental actions, strikes, internet disruptions, or platform outages.",
                  },
                  {
                    title: "Indemnification",
                    body: "The Client agrees to indemnify, defend, and hold harmless HeyPearl and its officers, directors, employees, and agents from and against any claims, liabilities, damages, and costs arising from the Client's breach of this Agreement, the Client's use of deliverables, or the Client's business operations.",
                  },
                ].map((c) => (
                  <PremiumCard key={c.title} title={c.title} body={c.body} />
                ))}
              </motion.div>

              <HighlightPanel accent="blue">
                <strong className="text-[#e8e6f0]">Governing Law &amp; Dispute Resolution.</strong>{" "}
                This Agreement shall be governed by and construed in accordance with the
                laws of the State of Texas, without regard to its conflict of law
                provisions. Any disputes arising under this Agreement shall first be
                subject to good-faith negotiation, and if unresolved, shall be submitted
                to binding arbitration in accordance with the rules of the American
                Arbitration Association. The arbitration shall take place in Austin, Texas.
                The prevailing party shall be entitled to recover reasonable attorney's fees.
              </HighlightPanel>
            </SectionWrapper>

            {/* ── AGREEMENT ACCEPTANCE ──────────────────────────────────── */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="py-20 lg:py-28"
            >
              <motion.div
                variants={fadeUp}
                className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-br from-[#111118] to-[#09090f] p-8 md:p-12 lg:p-16"
              >
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[#4E89C0]/[0.06] blur-[100px]" />
                </div>
                <div className="relative max-w-[700px]">
                  <p className="font-display text-[0.6875rem] font-medium uppercase tracking-[0.32em] text-[#4E89C0]">
                    Legal Acceptance
                  </p>
                  <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-[#e8e6f0] md:text-4xl">
                    Agreement Acceptance
                  </h2>
                  <p className="mt-5 text-[1.0625rem] leading-relaxed text-[#8b8a9a]">
                    By activating GEO by HeyPearl through payment, the Client
                    acknowledges and agrees to the terms outlined within this Client
                    Service Agreement.
                  </p>

                  <div className="mt-8 rounded-xl border border-[#4E89C0]/25 bg-[#4E89C0]/[0.06] p-6">
                    <div className="mb-4 h-px bg-gradient-to-r from-[#4E89C0]/50 to-transparent" />
                    <p className="text-[1rem] leading-[1.8] text-[#c8c6d8]">
                      The Client's submission of payment toward GEO by HeyPearl services
                      constitutes full acceptance of this Agreement, including all sections,
                      terms, conditions, disclaimers, and legal provisions contained herein.
                      No separate written signature is required.
                    </p>
                    <div className="mt-4 h-px bg-gradient-to-r from-[#4E89C0]/50 to-transparent" />
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <span className="rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-2 font-display text-[0.75rem] font-medium uppercase tracking-[0.2em] text-[#8b8a9a]">
                      Version 2.1
                    </span>
                    <span className="rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-2 font-display text-[0.75rem] font-medium uppercase tracking-[0.2em] text-[#8b8a9a]">
                      Effective June 2025
                    </span>
                    <span className="rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-2 font-display text-[0.75rem] font-medium uppercase tracking-[0.2em] text-[#8b8a9a]">
                      Governing Law: Texas
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.section>
          </main>
        </div>
      </div>

      {/* ── BRAND CLOSING ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-t border-white/[0.06] py-24 md:py-32 lg:py-40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#4E89C0]/[0.06] blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-[300px] w-[400px] rounded-full bg-[#C9924B]/[0.04] blur-[80px]" />
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="relative mx-auto max-w-[80rem] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 text-center"
        >
          <motion.div variants={fadeUp} className="mb-6 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#4E89C0]/50" />
            <p className="font-display text-[0.6875rem] font-medium uppercase tracking-[0.32em] text-[#4E89C0]">
              Powered by
            </p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#4E89C0]/50" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl font-semibold tracking-tight text-[#e8e6f0] md:text-5xl"
            style={{ letterSpacing: "-0.03em" }}
          >
            PearlOS
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-3 font-display text-lg font-medium tracking-widest text-[#4E89C0] uppercase"
          >
            AI Authority + Discoverability Infrastructure
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-lg text-[1.0625rem] leading-relaxed text-[#8b8a9a]"
          >
            Built to help brands become discoverable, authoritative, and recommended
            across the next generation of AI-driven search experiences.
          </motion.p>

          <motion.div variants={stagger} className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {["PearlOS", "GEO", "AEO", "Authority Infrastructure"].map((b) => (
              <motion.span
                key={b}
                variants={cardReveal}
                className="rounded-full border border-[#4E89C0]/25 bg-[#4E89C0]/[0.07] px-4 py-2 font-display text-[0.75rem] font-medium uppercase tracking-[0.2em] text-[#4E89C0]"
              >
                {b}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <footer className="border-t border-white/[0.06] py-8">
        <div className="mx-auto flex max-w-[80rem] flex-col items-center justify-between gap-4 px-5 sm:flex-row sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="flex items-center gap-3">
            <span className="font-display text-[1rem] font-semibold tracking-tight text-[#e8e6f0]">
              HeyPearl
            </span>
            <span className="text-white/20">·</span>
            <a
              href="https://heypearl.io"
              className="font-display text-[0.8125rem] text-[#8b8a9a] transition-colors hover:text-[#4E89C0]"
            >
              heypearl.io
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-[0.75rem] text-[#8b8a9a]">
            <span>Client Service Agreement</span>
            <span className="text-white/20">·</span>
            <span>Last Updated: June 2025</span>
            <span className="text-white/20">·</span>
            <span>© HeyPearl Inc.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
