"use client";

import { useActionState } from "react";
import { submitContact, type FormState } from "./actions";

const initialState: FormState = { status: "idle", message: "" };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialState
  );

  if (state.status === "success") {
    return (
      <div className="rounded-xl border border-[#57a8fe]/30 bg-[#57a8fe]/10 px-8 py-10 text-center">
        <svg
          className="mx-auto mb-4 h-10 w-10 text-[#57a8fe]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p className="text-lg font-medium text-white">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm text-white/60">
            Name <span className="text-[#57a8fe]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-[#1e2a3a] bg-[#0f1825] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-[#57a8fe]/60 focus:ring-1 focus:ring-[#57a8fe]/40"
            placeholder=""
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm text-white/60">
            Email <span className="text-[#57a8fe]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-[#1e2a3a] bg-[#0f1825] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-[#57a8fe]/60 focus:ring-1 focus:ring-[#57a8fe]/40"
            placeholder=""
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="organization"
          className="mb-1.5 block text-sm text-white/60"
        >
          Organization
        </label>
        <input
          id="organization"
          name="organization"
          type="text"
          className="w-full rounded-lg border border-[#1e2a3a] bg-[#0f1825] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-[#57a8fe]/60 focus:ring-1 focus:ring-[#57a8fe]/40"
          placeholder="Health System / Payer / Clinic"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm text-white/60"
        >
          Message <span className="text-[#57a8fe]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full resize-none rounded-lg border border-[#1e2a3a] bg-[#0f1825] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-[#57a8fe]/60 focus:ring-1 focus:ring-[#57a8fe]/40"
          placeholder="Tell us about your transitions of care challenges..."
        />
      </div>

      {state.status === "error" && (
        <p className="text-sm text-red-400">{state.message}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-lg bg-[#57a8fe] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#3d8edc] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {pending ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
