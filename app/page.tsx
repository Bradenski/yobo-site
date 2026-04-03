import Image from "next/image";
import { ContactForm } from "./contact-form";

export default function Home() {
  return (
    <div className="flex flex-col min-h-full" style={{ background: "#0b0f1a" }}>
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-white/5 backdrop-blur-md" style={{ background: "rgba(11,15,26,0.85)" }}>
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Image
            src="/yobo_logo_text.png"
            alt="YOBO Health"
            width={120}
            height={40}
            priority
            style={{
              filter: "invert(1) hue-rotate(180deg)",
              mixBlendMode: "screen",
            }}
          />
          <div className="flex items-center gap-3">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/yobo-health/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YOBO Health on LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-white/50 transition hover:text-white"
              style={{ border: "1px solid rgba(255,255,255,0.12)" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            {/* Contact */}
            <a
              href="#contact"
              className="rounded-lg px-4 py-2 text-sm font-medium text-white/70 transition hover:text-white"
              style={{ border: "1px solid rgba(255,255,255,0.12)" }}
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden px-6 py-32 sm:py-44">
          {/* Background grid */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(87,168,254,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(87,168,254,0.04) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          {/* Glow orb */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2"
            style={{
              width: "700px",
              height: "400px",
              background:
                "radial-gradient(ellipse at center, rgba(87,168,254,0.18) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />

          <div className="relative mx-auto max-w-4xl text-center">
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium"
              style={{
                background: "rgba(87,168,254,0.12)",
                border: "1px solid rgba(87,168,254,0.25)",
                color: "#57a8fe",
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: "#57a8fe" }}
              />
              AI-Powered Precision Discharge Platform
            </div>
            <h1 className="mb-6 font-bold leading-[1.1] tracking-tight text-white">
              <span className="block whitespace-nowrap text-4xl sm:text-5xl">
                Smarter transitions of care.
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl" style={{ color: "#57a8fe" }}>
                Better outcomes.
              </span>
            </h1>
            <p className="mx-auto max-w-xl text-lg leading-relaxed" style={{ color: "rgba(240,244,255,0.6)" }}>
              Patients fall through the cracks every day as they move between
              care settings. YOBO brings AI-guided intelligence to close the
              gaps before they become readmissions.
            </p>
            <div className="mt-10 flex justify-center">
              <a
                href="#problem"
                className="text-sm font-medium transition"
                style={{ color: "rgba(240,244,255,0.5)" }}
              >
                Learn more ↓
              </a>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section
          id="problem"
          className="px-6 py-24"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: "#57a8fe" }}>
              The Problem
            </p>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              <a
                href="https://accpjournals.onlinelibrary.wiley.com/doi/10.1002/jac5.1980"
                target="_blank"
                rel="noopener noreferrer"
                className="yobo-stat-link"
              >
                70%
              </a>{" "}
              of medication errors happen at discharge.
            </h2>
            <p className="text-base leading-8" style={{ color: "rgba(240,244,255,0.55)" }}>
              By 2027,{" "}
              <a
                href="https://www.advisory.com/daily-briefing/2025/09/23/readmission-penalties"
                target="_blank"
                rel="noopener noreferrer"
                className="yobo-stat-link"
              >
                8 in 10 hospitals
              </a>{" "}
              are expected to face penalties for excess readmissions.
              Medications, risk signals, and follow-up needs rarely travel with the patient, leaving care teams on the receiving end
               to make decisions blind. The result is preventable harm, avoidable readmissions, and a system where no one is accountable for the gap.
            </p>
          </div>
        </section>

        {/* Solution */}
        <section
          className="px-6 py-24"
          style={{
            background: "rgba(87,168,254,0.04)",
            borderTop: "1px solid rgba(87,168,254,0.1)",
            borderBottom: "1px solid rgba(87,168,254,0.1)",
          }}
        >
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: "#57a8fe" }}>
              The Solution
            </p>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              AI-guided care intelligence,
              <br className="hidden sm:block" /> built for transitions.
            </h2>
            <p className="text-base leading-8" style={{ color: "rgba(240,244,255,0.55)" }}>
              YOBO surfaces the right patient signals at the right moment —
              giving care teams a unified, intelligent view across the transition
              continuum. Our platform connects fragmented data, anticipates risk,
              and orchestrates proactive outreach so no patient falls through the
              cracks. We&apos;re not just alerting clinicians to problems; we&apos;re
              equipping them with the context to act before a crisis unfolds.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="px-6 py-24">
          <div className="mx-auto max-w-xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: "#57a8fe" }}>
              Contact
            </p>
            <h2 className="mb-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let&apos;s talk.
            </h2>
            <p className="mb-10 text-base" style={{ color: "rgba(240,244,255,0.5)" }}>
              Whether you&apos;re a health system, payer, or clinician — we want to
              hear from you.
            </p>
            <ContactForm />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className="px-6 py-8"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-center">
          <p className="text-xs" style={{ color: "rgba(240,244,255,0.3)" }}>
            © 2026 YOBO Health. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
