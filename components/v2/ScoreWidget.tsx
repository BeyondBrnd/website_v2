'use client';

// components/v2/ScoreWidget.tsx
// "Check your score on LinkedIn" — the hero's right-hand card.
//
// V2 ships this as a guided self-assessment that implements Bharti's
// filter logic (brief, hero section). Scores map to /10 for display:
//   filter 1  → profile picture, headline keywords, experience text
//   filter 2  → last original post > 1 year ago
//   filter 3  → last post ~6 months ago
//   filter 4  → last post ~1 week ago
//   filter 5  → posted in the last 3 days
//
// 🔌 API UPGRADE PATH (post sign-off): swap `computeScore` inputs for a
// server route that calls a LinkedIn data provider (e.g. Proxycurl /
// ScrapIn) using the URL captured by QuizModal. The UI below stays as-is.

import React, { useEffect, useState } from 'react';
import { Linkedin, RefreshCw } from 'lucide-react';

type Recency = 'never' | '1y' | '6m' | '1w' | '3d';

export default function ScoreWidget() {
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [hasPhoto, setHasPhoto] = useState<boolean | null>(null);
  const [hasKeywords, setHasKeywords] = useState<boolean | null>(null);
  const [hasExperienceText, setHasExperienceText] = useState<boolean | null>(
    null
  );
  const [recency, setRecency] = useState<Recency | null>(null);
  const [score, setScore] = useState<number | null>(null);

  // Pre-fill from the on-load quiz
  useEffect(() => {
    const handler = (e: Event) => {
      const url = (e as CustomEvent).detail?.linkedinUrl;
      if (url) setLinkedinUrl(url);
    };
    window.addEventListener('bb-quiz-complete', handler);
    const saved = sessionStorage.getItem('bb-quiz-answers');
    if (saved) {
      try {
        const { linkedinUrl: u } = JSON.parse(saved);
        if (u) setLinkedinUrl(u);
      } catch {}
    }
    return () => window.removeEventListener('bb-quiz-complete', handler);
  }, []);

  const ready =
    hasPhoto !== null &&
    hasKeywords !== null &&
    hasExperienceText !== null &&
    recency !== null;

  const computeScore = () => {
    // Brief's ladder, mapped to /10:
    // basics missing → 1–2, then post recency climbs the score.
    let s = 0;
    const basics = [hasPhoto, hasKeywords, hasExperienceText].filter(
      Boolean
    ).length;
    s += basics * 1.5; // up to 4.5 for fundamentals
    const recencyPoints: Record<Recency, number> = {
      never: 0,
      '1y': 1,
      '6m': 2.5,
      '1w': 4,
      '3d': 5.5,
    };
    s += recencyPoints[recency as Recency];
    setScore(Math.max(1, Math.min(10, Math.round(s))));
  };

  const reset = () => {
    setScore(null);
    setHasPhoto(null);
    setHasKeywords(null);
    setHasExperienceText(null);
    setRecency(null);
  };

  const verdict =
    score === null
      ? ''
      : score <= 3
      ? 'Your profile is costing you deals. Leads who check it are bouncing.'
      : score <= 6
      ? 'You look okay — but "okay" doesn\'t sign deals. There\'s a clear gap to close.'
      : score <= 8
      ? 'Solid foundation. The right strategy turns this into a deal-signing machine.'
      : 'Impressive! Now let\'s make sure it converts attention into pipeline.';

  return (
    <div
      id="linkedin-score"
      className="w-full max-w-md rounded-3xl border border-black/8 bg-white/90 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.10)] backdrop-blur"
    >
      <div className="flex items-center gap-2">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#0a66c2]/10">
          <Linkedin className="h-5 w-5 text-[#0a66c2]" />
        </span>
        <div>
          <div className="text-sm font-bold tracking-tight">
            Check your score on LinkedIn
          </div>
          <div className="text-xs text-black/50">
            60-second profile audit, out of 10
          </div>
        </div>
      </div>

      {score === null ? (
        <div className="mt-5 space-y-4">
          <input
            type="url"
            value={linkedinUrl}
            onChange={(e) => setLinkedinUrl(e.target.value)}
            placeholder="linkedin.com/in/your-profile"
            className="w-full rounded-xl border border-black/12 px-4 py-2.5 text-sm outline-none transition focus:border-[#00bf63] focus:ring-2 focus:ring-[#00bf63]/20"
          />

          <YesNo
            label="Professional profile picture?"
            value={hasPhoto}
            onChange={setHasPhoto}
          />
          <YesNo
            label="Industry keywords in your headline?"
            value={hasKeywords}
            onChange={setHasKeywords}
          />
          <YesNo
            label="Written descriptions in your experience section?"
            value={hasExperienceText}
            onChange={setHasExperienceText}
          />

          <div>
            <div className="mb-1.5 text-xs font-semibold text-black/70">
              Last original post (not a repost)?
            </div>
            <div className="flex flex-wrap gap-1.5">
              {(
                [
                  ['3d', 'Last 3 days'],
                  ['1w', 'This week'],
                  ['6m', '~6 months'],
                  ['1y', '1+ year'],
                  ['never', 'Never'],
                ] as [Recency, string][]
              ).map(([v, label]) => (
                <button
                  key={v}
                  onClick={() => setRecency(v)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                    recency === v
                      ? 'border-[#00bf63] bg-[#00bf63]/10'
                      : 'border-black/12 text-black/60 hover:border-[#00bf63]/50'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={computeScore}
            disabled={!ready}
            className="w-full rounded-xl bg-black px-5 py-3 text-sm font-bold text-white transition hover:bg-black/85 disabled:opacity-30"
          >
            Submit
          </button>
        </div>
      ) : (
        <div className="mt-5 text-center">
          <div className="relative mx-auto flex h-28 w-28 items-center justify-center">
            <svg viewBox="0 0 100 100" className="absolute inset-0 -rotate-90">
              <circle
                cx="50"
                cy="50"
                r="44"
                fill="none"
                stroke="rgba(0,0,0,0.08)"
                strokeWidth="8"
              />
              <circle
                cx="50"
                cy="50"
                r="44"
                fill="none"
                stroke={score <= 3 ? '#ef4444' : score <= 6 ? '#f59e0b' : '#00bf63'}
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${(score / 10) * 276} 276`}
              />
            </svg>
            <div>
              <span className="text-4xl font-extrabold tracking-tight">
                {score}
              </span>
              <span className="text-base font-semibold text-black/40">/10</span>
            </div>
          </div>
          <p className="mt-3 text-sm font-medium text-black/70">{verdict}</p>
          <a
            href="#book-call"
            className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-[#00bf63] px-5 py-3 text-sm font-bold text-black transition hover:bg-[#00a857]"
          >
            Make my LinkedIn Impressive
          </a>
          <button
            onClick={reset}
            className="mt-2 inline-flex items-center gap-1.5 text-xs text-black/45 hover:text-black/70"
          >
            <RefreshCw className="h-3 w-3" /> Check again
          </button>
        </div>
      )}
    </div>
  );
}

function YesNo({
  label,
  value,
  onChange,
}: {
  label: string;
  value: boolean | null;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-xs font-semibold text-black/70">{label}</span>
      <div className="flex gap-1.5">
        {[true, false].map((v) => (
          <button
            key={String(v)}
            onClick={() => onChange(v)}
            className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
              value === v
                ? 'border-[#00bf63] bg-[#00bf63]/10'
                : 'border-black/12 text-black/60 hover:border-[#00bf63]/50'
            }`}
          >
            {v ? 'Yes' : 'No'}
          </button>
        ))}
      </div>
    </div>
  );
}
