'use client';

// components/v2/ScoreWidget.tsx — V2.1 (Bharti feedback)
// Changes:
//  • Added (i) info tooltips on each question with Bharti's exact criteria.
//  • LinkedIn URL is now MANDATORY and strictly validated — no score without a
//    real linkedin.com/in profile link.
//  • Score no longer appears instantly: a 5-second "analyzing" state runs first.
//  • "Check your score on LinkedIn" heading is a notch bigger.
//
// 🔌 API UPGRADE PATH (post sign-off): swap `computeScore` inputs for a
// server route that calls a LinkedIn data provider (e.g. Proxycurl /
// ScrapIn) using the URL captured here. The UI below stays as-is.

import React, { useEffect, useRef, useState } from 'react';
import { Linkedin, RefreshCw, Info } from 'lucide-react';

type Recency = 'never' | '1y' | '6m' | '1w' | '3d';

// Strictly validate a LinkedIn *profile* URL — rejects websites / junk text.
function isValidLinkedInUrl(value: string) {
  return /^(https?:\/\/)?(www\.)?linkedin\.com\/(in|pub)\/[A-Za-z0-9\-_%]+\/?.*$/i.test(
    value.trim()
  );
}

export default function ScoreWidget() {
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [urlError, setUrlError] = useState('');
  const [hasPhoto, setHasPhoto] = useState<boolean | null>(null);
  const [hasKeywords, setHasKeywords] = useState<boolean | null>(null);
  const [hasExperienceText, setHasExperienceText] = useState<boolean | null>(
    null
  );
  const [recency, setRecency] = useState<Recency | null>(null);
  const [score, setScore] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
      } catch { }
    }
    return () => window.removeEventListener('bb-quiz-complete', handler);
  }, []);

  // Clean up the 5s timer if the component unmounts mid-load.
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // The four assessment questions must be answered (URL handled separately).
  const questionsAnswered =
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
    const finalScore = Math.max(1, Math.min(10, Math.round(s)));
    setScore(finalScore);
    notifyBharti(finalScore);
  };

  const notifyBharti = async (finalScore: number) => {
    try {
      const saved = sessionStorage.getItem('bb-quiz-answers');
      const quiz = saved ? JSON.parse(saved) : {};
      await fetch('/api/submit-score', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          linkedinUrl,
          email: quiz.email || '',
          industry: quiz.industry || '',
          goal: quiz.goal || '',
          score: finalScore,
          verdict: getVerdict(finalScore),
          answers: { hasPhoto, hasKeywords, hasExperienceText, recency },
        }),
      });
    } catch {
      // silently ignore
    }
  };

  const handleSubmit = () => {
    // LinkedIn URL is mandatory + strictly validated before we score anything.
    if (!isValidLinkedInUrl(linkedinUrl)) {
      setUrlError(
        'Enter a valid LinkedIn profile link (e.g. linkedin.com/in/your-profile).'
      );
      return;
    }
    setUrlError('');
    setLoading(true);
    timeoutRef.current = setTimeout(() => {
      computeScore();
      setLoading(false);
    }, 5000); // 5s "analyzing" delay so the score doesn't pop instantly
  };

  const reset = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setLoading(false);
    setScore(null);
    setUrlError('');
    setHasPhoto(null);
    setHasKeywords(null);
    setHasExperienceText(null);
    setRecency(null);
  };

  const getVerdict = (s: number) =>
    s <= 3
      ? "Your profile is costing you deals. Leads who check it are bouncing."
      : s <= 6
        ? "You look okay — but \"okay\" doesn't sign deals. There's a clear gap to close."
        : s <= 8
          ? "Solid foundation. The right strategy turns this into a deal-signing machine."
          : "Impressive! Now let's make sure it converts attention into pipeline.";

  return (
    <div
      id="linkedin-score"
      className="w-full max-w-md rounded-3xl border border-black/8 bg-white/90 p-5 sm:p-6 shadow-[0_24px_60px_rgba(0,0,0,0.10)] backdrop-blur"
    >
      <div className="flex items-center gap-2">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#0a66c2]/10">
          <Linkedin className="h-5 w-5 text-[#0a66c2]" />
        </span>
        <div>
          <div className="text-lg font-bold tracking-tight">
            Check your score on LinkedIn
          </div>
          <div className="text-xs text-black/50">
            60-second profile audit, out of 10
          </div>
        </div>
      </div>

      {loading ? (
        <div className="mt-6 flex flex-col items-center justify-center py-12 text-center">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#00bf63]/20 border-t-[#00bf63]" />
          <p className="mt-4 text-sm font-semibold text-black/70">
            Analyzing your profile…
          </p>
          <p className="mt-1 text-xs text-black/45">
            Scoring against 5 key signals
          </p>
        </div>
      ) : score === null ? (
        <div className="mt-5 space-y-4">
          <div>
            <input
              type="url"
              value={linkedinUrl}
              onChange={(e) => {
                setLinkedinUrl(e.target.value);
                if (urlError) setUrlError('');
              }}
              placeholder="linkedin.com/in/your-profile"
              className={`w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition focus:ring-2 ${urlError
                  ? 'border-red-400 focus:border-red-400 focus:ring-red-200'
                  : 'border-black/12 focus:border-[#00bf63] focus:ring-[#00bf63]/20'
                }`}
            />
            {urlError && (
              <p className="mt-1.5 text-xs font-medium text-red-500">
                {urlError}
              </p>
            )}
          </div>

          <YesNo
            label="Professional profile picture?"
            info="60% face visible, professional attire and facing the camera."
            value={hasPhoto}
            onChange={setHasPhoto}
          />
          <YesNo
            label="Industry keywords in your headline?"
            info="2 to 3 industry keywords exist on your headline."
            value={hasKeywords}
            onChange={setHasKeywords}
          />
          <YesNo
            label="Written descriptions in your experience section?"
            info="Well explained content under each experience section on your profile exists?"
            value={hasExperienceText}
            onChange={setHasExperienceText}
          />

          <div>
            <div className="mb-1.5 flex items-center gap-1.5">
              <span className="text-xs font-semibold text-black/70">
                Last original post (not a repost)?
              </span>
              <InfoTip text="When was the last post made on your profile?" />
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
                  className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${recency === v
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
            onClick={handleSubmit}
            disabled={!questionsAnswered}
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
          <p className="mt-3 text-sm font-medium text-black/70">{getVerdict(score)}</p>
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

function InfoTip({ text }: { text: string }) {
  const [show, setShow] = useState(false);
  return (
    <span className="relative inline-flex">
      <button
        type="button"
        onClick={() => setShow((s) => !s)}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onBlur={() => setShow(false)}
        aria-label="More info"
        className="text-black/35 transition hover:text-[#00bf63]"
      >
        <Info className="h-3.5 w-3.5" />
      </button>
      {show && (
        <span className="absolute bottom-full left-1/2 z-30 mb-2 w-52 -translate-x-1/2 rounded-lg bg-black px-3 py-2 text-[11px] font-medium leading-snug text-white shadow-lg">
          {text}
        </span>
      )}
    </span>
  );
}

function YesNo({
  label,
  info,
  value,
  onChange,
}: {
  label: string;
  info?: string;
  value: boolean | null;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="flex items-center gap-1.5 text-xs font-semibold text-black/70">
        {label}
        {info && <InfoTip text={info} />}
      </span>
      <div className="flex shrink-0 gap-1.5">
        {[true, false].map((v) => (
          <button
            key={String(v)}
            onClick={() => onChange(v)}
            className={`rounded-full border px-3 py-1 text-xs font-medium transition ${value === v
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