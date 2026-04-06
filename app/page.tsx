import Image from "next/image";
import { ContactForm } from "./contact-form";
import { HeroSection } from "./hero-section";

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
        <HeroSection />

        {/* Problem */}
        <section
          id="problem"
          className="px-6 py-24"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <div className="mx-auto max-w-5xl">
            <p className="mb-10 text-xs font-semibold uppercase tracking-widest" style={{ color: "#57a8fe" }}>
              The Problem
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {/* Card 1 */}
              <div
                className="rounded-2xl p-8"
                style={{ background: "#131929" }}
              >
                <p className="mb-3 text-5xl font-bold">
                  <a
                    href="https://accpjournals.onlinelibrary.wiley.com/doi/10.1002/jac5.1980"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="yobo-stat-link"
                  >
                    70%
                  </a>
                </p>
                <p className="text-sm leading-relaxed text-white">
                  of medication errors occur at discharge
                </p>
              </div>
              {/* Card 2 */}
              <div
                className="rounded-2xl p-8"
                style={{ background: "#131929" }}
              >
                <p className="mb-3 text-5xl font-bold">
                  <a
                    href="https://www.advisory.com/daily-briefing/2025/09/23/readmission-penalties"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="yobo-stat-link"
                  >
                    8/10
                  </a>
                </p>
                <p className="text-sm leading-relaxed text-white">
                  hospitals are expected to face penalties for excess readmissions
                </p>
              </div>
              {/* Card 3 */}
              <div
                className="rounded-2xl p-8"
                style={{ background: "#131929" }}
              >
                <p className="mb-3 text-5xl font-bold">
                  <a
                    href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2738592/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="yobo-stat-link"
                  >
                    &gt;30%
                  </a>
                </p>
                <p className="text-sm leading-relaxed text-white">
                  reduction in readmission when discharge programs are optimized
                </p>
              </div>
            </div>
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
              AI-guided care,
              <br className="hidden sm:block" /> closing the gaps.
            </h2>
            <blockquote className="border-l-4 border-[#1D6FF2] pl-6 italic text-xl" style={{ color: "rgba(240,244,255,0.85)" }}>
  "We&apos;re setting patients up to stumble on their first step out the door."
</blockquote>
            <p className="text-base leading-8" style={{ color: "rgba(240,244,255,0.55)" }}>
              That's how one clinician described the state of care transitions today. 
              YOBO exists to change that by closing care gaps before they become crises.
              We triage patient risk, aggregate fragmented clinical information, and help teams act before a patient stumbles.
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
