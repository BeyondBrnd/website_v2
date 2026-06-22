'use client';

// components/v2/QuizModal.tsx — V2.1 (Bharti feedback)
// Changes:
//  • Removed the "Step X of 4" labels + the LinkedIn/Mail icons (the 4 progress
//    bars at the top are enough).
//  • Reordered to: 1) industry  2) goal  3) email  4) LinkedIn profile.
//  • Email step heading is now "Share your best email".
//  • Every field is mandatory — you can't advance/submit without valid input,
//    and the "Skip for now" escape hatch is gone (the ✕ still closes the modal).
//  • LinkedIn URL is STRICTLY validated as a linkedin.com/in profile link, so
//    website links / random text no longer slip through as wasted leads.

import React, { useEffect, useState } from 'react';
import { X, ArrowRight } from 'lucide-react';

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

// Strictly validate a LinkedIn *profile* URL — rejects websites and junk text.
function isValidLinkedInUrl(value: string) {
  return /^(https?:\/\/)?(www\.)?linkedin\.com\/(in|pub)\/[A-Za-z0-9\-_%]+\/?.*$/i.test(
    value.trim()
  );
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export default function QuizModal() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [industry, setIndustry] = useState('');
  const [goal, setGoal] = useState('');
  const [email, setEmail] = useState('');
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [linkedinError, setLinkedinError] = useState('');
  const [submitting, setSubmitting] = useState(false);

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

  const finish = async () => {
    if (!isValidLinkedInUrl(linkedinUrl)) {
      setLinkedinError(
        'Please enter a valid LinkedIn profile link (e.g. linkedin.com/in/your-profile).'
      );
      return;
    }
    setLinkedinError('');
    setSubmitting(true);
    try {
      await fetch('/api/submit-quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ linkedinUrl, industry, goal, email }),
      });
    } catch {
      // silently fail — the user's experience shouldn't break if email fails
    }
    setSubmitting(false);

    sessionStorage.setItem(
      'bb-quiz-answers',
      JSON.stringify({ linkedinUrl, industry, goal, email })
    );
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
      <div className="relative w-full max-w-md max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-5 sm:p-7 shadow-2xl">
        <button
          onClick={close}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-full p-1.5 text-black/40 transition hover:bg-black/5 hover:text-black"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Progress — the 4 horizontal bars (kept; step labels removed) */}
        <div className="mb-6 flex gap-1.5">
          {[0, 1, 2, 3].map((i) => (
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

        {/* Step 3 — Email */}
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
              onClick={() => setStep(3)}
              disabled={!isValidEmail(email)}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#00bf63] px-5 py-3 text-sm font-bold text-black transition hover:bg-[#00a857] disabled:opacity-40"
            >
              Next <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}

        {/* Step 4 — LinkedIn profile (strictly validated) */}
        {step === 3 && (
          <div>
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
              onChange={(e) => {
                setLinkedinUrl(e.target.value);
                if (linkedinError) setLinkedinError('');
              }}
              placeholder="linkedin.com/in/your-profile"
              className={`mt-4 w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:ring-2 ${linkedinError
                  ? 'border-red-400 focus:border-red-400 focus:ring-red-200'
                  : 'border-black/15 focus:border-[#00bf63] focus:ring-[#00bf63]/20'
                }`}
            />
            {linkedinError && (
              <p className="mt-2 text-xs font-medium text-red-500">
                {linkedinError}
              </p>
            )}
            <button
              onClick={finish}
              disabled={!isValidLinkedInUrl(linkedinUrl) || submitting}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#00bf63] px-5 py-3 text-sm font-bold text-black transition hover:bg-[#00a857] disabled:opacity-40"
            >
              {submitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
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