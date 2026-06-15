'use client';

// components/v2/QuizModal.tsx
// Opens automatically on first visit (per session). Three steps:
// 1. Drop your LinkedIn profile  2. Industry  3. Goal on LinkedIn
// On completion it scrolls to the booking section and (optionally)
// hands the LinkedIn URL to the score widget via a custom event.

import React, { useEffect, useState } from 'react';
import { X, ArrowRight, Linkedin } from 'lucide-react';

const INDUSTRIES = [
  'SaaS / Tech',
  'Agency / Services',
  'Finance / Real Estate',
  'Consulting',
  'Healthcare',
  'Other',
];

const GOALS = [
  'Sign more deals / clients',
  'Raise investment',
  'Build personal brand',
  'Hire top talent',
];

export default function QuizModal() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [industry, setIndustry] = useState('');
  const [goal, setGoal] = useState('');

  useEffect(() => {
    // Show once per session, after a short beat so the hero paints first.
    if (typeof window === 'undefined') return;
    if (sessionStorage.getItem('bb-quiz-done')) return;
    const t = setTimeout(() => setOpen(true), 900);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    setOpen(false);
    sessionStorage.setItem('bb-quiz-done', '1');
  };

  const finish = () => {
    sessionStorage.setItem(
      'bb-quiz-answers',
      JSON.stringify({ linkedinUrl, industry, goal })
    );
    // Let the score widget pre-fill the profile URL
    window.dispatchEvent(
      new CustomEvent('bb-quiz-complete', { detail: { linkedinUrl } })
    );
    close();
    document
      .getElementById('linkedin-score')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Quick questions before we start"
    >
      <div className="relative w-full max-w-md rounded-3xl bg-white p-7 shadow-2xl">
        <button
          onClick={close}
          aria-label="Skip and close"
          className="absolute right-4 top-4 rounded-full p-1.5 text-black/40 transition hover:bg-black/5 hover:text-black"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Progress */}
        <div className="mb-6 flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`h-1 flex-1 rounded-full transition-colors ${
                i <= step ? 'bg-[#00bf63]' : 'bg-black/10'
              }`}
            />
          ))}
        </div>

        {step === 0 && (
          <div>
            <div className="mb-1 flex items-center gap-2 text-[#00bf63]">
              <Linkedin className="h-5 w-5" />
              <span className="text-xs font-bold uppercase tracking-wider">
                Step 1 of 3
              </span>
            </div>
            <h3 className="text-xl font-bold tracking-tight">
              Drop your LinkedIn profile
            </h3>
            <p className="mt-1 text-sm text-black/55">
              We&apos;ll use it to check how impressive your profile looks
              right now.
            </p>
            <input
              type="url"
              inputMode="url"
              value={linkedinUrl}
              onChange={(e) => setLinkedinUrl(e.target.value)}
              placeholder="linkedin.com/in/your-profile"
              className="mt-4 w-full rounded-xl border border-black/15 px-4 py-3 text-sm outline-none transition focus:border-[#00bf63] focus:ring-2 focus:ring-[#00bf63]/20"
            />
            <button
              onClick={() => setStep(1)}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#00bf63] px-5 py-3 text-sm font-bold text-black transition hover:bg-[#00a857]"
            >
              Next <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={close}
              className="mt-2 w-full text-center text-xs text-black/40 hover:text-black/60"
            >
              Skip for now
            </button>
          </div>
        )}

        {step === 1 && (
          <StepChoice
            stepLabel="Step 2 of 3"
            title="What industry are you in?"
            options={INDUSTRIES}
            selected={industry}
            onSelect={(v) => {
              setIndustry(v);
              setStep(2);
            }}
          />
        )}

        {step === 2 && (
          <StepChoice
            stepLabel="Step 3 of 3"
            title="What's your goal on LinkedIn?"
            options={GOALS}
            selected={goal}
            onSelect={(v) => {
              setGoal(v);
            }}
            footer={
              <button
                onClick={finish}
                disabled={!goal}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#00bf63] px-5 py-3 text-sm font-bold text-black transition hover:bg-[#00a857] disabled:opacity-40"
              >
                Check my LinkedIn score <ArrowRight className="h-4 w-4" />
              </button>
            }
          />
        )}
      </div>
    </div>
  );
}

function StepChoice({
  stepLabel,
  title,
  options,
  selected,
  onSelect,
  footer,
}: {
  stepLabel: string;
  title: string;
  options: string[];
  selected: string;
  onSelect: (v: string) => void;
  footer?: React.ReactNode;
}) {
  return (
    <div>
      <span className="text-xs font-bold uppercase tracking-wider text-[#00bf63]">
        {stepLabel}
      </span>
      <h3 className="mt-1 text-xl font-bold tracking-tight">{title}</h3>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {options.map((o) => (
          <button
            key={o}
            onClick={() => onSelect(o)}
            className={`rounded-xl border px-3 py-3 text-left text-sm font-medium transition ${
              selected === o
                ? 'border-[#00bf63] bg-[#00bf63]/10 text-black'
                : 'border-black/12 text-black/70 hover:border-[#00bf63]/50'
            }`}
          >
            {o}
          </button>
        ))}
      </div>
      {footer}
    </div>
  );
}
