'use client';

// components/v2/QuizModal.tsx — V3
// Steps: 1) industry  2) goal  3) email.
// On submit sends industry, goal & email to bharti.

import React, { useEffect, useState } from 'react';
import { X, Mail } from 'lucide-react';

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

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export default function QuizModal() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [industry, setIndustry] = useState('');
  const [goal, setGoal] = useState('');
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

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
    setSubmitting(true);
    fetch('/api/submit-quiz', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ industry, goal, email }),
    }).catch(() => {});
    setSubmitting(false);

    sessionStorage.setItem(
      'bb-quiz-answers',
      JSON.stringify({ industry, goal, email })
    );
    window.dispatchEvent(
      new CustomEvent('bb-quiz-complete')
    );
    setDone(true);
    setTimeout(() => {
      close();
      document
        .getElementById('linkedin-score')
        ?.scrollIntoView({ behavior: 'smooth' });
    }, 3000);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Quick questions before we start"
    >
      <div className="relative w-full max-w-md max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-5 sm:p-7 shadow-2xl">
        {done ? (
          <div className="flex flex-col items-center py-8 text-center">
            <span className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-[#00bf63]/12">
              <Mail className="h-10 w-10 text-[#00bf63] animate-bounce" />
            </span>
            <h3 className="mt-5 text-2xl font-extrabold tracking-tight text-black">
              We&apos;ll contact you shortly
            </h3>
            <p className="mt-2 text-sm text-black/55">
              Your LinkedIn audit is on its way to <strong>{email}</strong>
            </p>
          </div>
        ) : (
          <>
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 rounded-full p-1.5 text-black/40 transition hover:bg-black/5 hover:text-black"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Progress — 3 bars */}
            <div className="mb-6 flex gap-1.5">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className={`h-1 flex-1 rounded-full transition-colors ${i <= step ? 'bg-[#00bf63]' : 'bg-black/10'
                    }`}
                />
              ))}
            </div>

            {/* Step 1 — Industry */}
            {step === 0 && (
              <StepChoice
                title="What industry are you in?"
                options={INDUSTRIES}
                selected={industry}
                onSelect={(v) => {
                  setIndustry(v);
                  setStep(1);
                }}
              />
            )}

            {/* Step 2 — Goal */}
            {step === 1 && (
              <StepChoice
                title="What's your goal on LinkedIn?"
                options={GOALS}
                selected={goal}
                onSelect={(v) => {
                  setGoal(v);
                  setStep(2);
                }}
              />
            )}

            {/* Step 3 — Email (final step) */}
            {step === 2 && (
              <div>
                <h3 className="text-xl font-bold tracking-tight">
                  Share your best email
                </h3>
                <p className="mt-1 text-sm text-black/55">
                  We&apos;ll share your full LinkedIn audit and score here.
                </p>
                <input
                  type="email"
                  inputMode="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="mt-4 w-full rounded-xl border border-black/15 px-4 py-3 text-sm outline-none transition focus:border-[#00bf63] focus:ring-2 focus:ring-[#00bf63]/20"
                />
                <button
                  onClick={finish}
                  disabled={!isValidEmail(email) || submitting}
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#00bf63] px-5 py-3 text-sm font-bold text-black transition hover:bg-[#00a857] disabled:opacity-40"
                >
                  {submitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function StepChoice({
  title,
  options,
  selected,
  onSelect,
}: {
  title: string;
  options: string[];
  selected: string;
  onSelect: (v: string) => void;
}) {
  return (
    <div>
      <h3 className="text-xl font-bold tracking-tight">{title}</h3>
      <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
        {options.map((o) => (
          <button
            key={o}
            onClick={() => onSelect(o)}
            className={`rounded-xl border px-3 py-3 text-left text-sm font-medium transition ${selected === o
                ? 'border-[#00bf63] bg-[#00bf63]/10 text-black'
                : 'border-black/12 text-black/70 hover:border-[#00bf63]/50'
              }`}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}