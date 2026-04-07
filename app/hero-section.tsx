"use client";

import { useRef } from "react";

export function HeroSection() {
  const orbRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    if (orbRef.current) {
      orbRef.current.style.transition = "none";
      orbRef.current.style.left = `${x}px`;
      orbRef.current.style.top = `${y}px`;
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    if (orbRef.current) {
      orbRef.current.style.transition = "left 1s ease, top 1s ease";
      orbRef.current.style.left = `${rect.width / 2}px`;
      orbRef.current.style.top = "200px";
    }
  };

  return (
    <section
      className="relative overflow-hidden px-6 py-32 sm:py-44"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
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
        ref={orbRef}
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          left: "50%",
          top: "200px",
          width: "700px",
          height: "400px",
          transform: "translate(-50%, -50%)",
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
          <span className="block whitespace-nowrap text-3xl md:text-6xl">
            Smarter transitions of care.
          </span>
          <span className="block text-3xl md:text-6xl" style={{ color: "#57a8fe" }}>
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
  );
}
