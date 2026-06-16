// components/v2/CaseStudySection.tsx  ← NEW FILE, add it here
// Growthsquare-style section card: colored icon badge + heading, intro
// paragraph, mono uppercase sub-label, ✓ check bullets, and an italic
// highlight quote with a colored left border.
//
// Colors per section (adapted to the white Beyondbrnd theme):
//   problem  → orange  (AlertTriangle)
//   strategy → green   (Zap)
//   results  → blue    (TrendingUp)
//   insight  → amber   (Lightbulb)

import React from 'react';
import {
  AlertTriangle,
  Zap,
  TrendingUp,
  Lightbulb,
  CheckCircle2,
} from 'lucide-react';
import type { CaseStudySection as SectionData } from '@/lib/caseStudies';

const STYLES = {
  problem: {
    Icon: AlertTriangle,
    badge: 'bg-orange-100 text-orange-600',
    check: 'text-orange-500',
    border: 'border-orange-400',
    quoteBg: 'bg-orange-50/60',
  },
  strategy: {
    Icon: Zap,
    badge: 'bg-[#00bf63]/12 text-[#00a857]',
    check: 'text-[#00bf63]',
    border: 'border-[#00bf63]',
    quoteBg: 'bg-[#00bf63]/5',
  },
  results: {
    Icon: TrendingUp,
    badge: 'bg-blue-100 text-blue-600',
    check: 'text-blue-500',
    border: 'border-blue-400',
    quoteBg: 'bg-blue-50/60',
  },
  insight: {
    Icon: Lightbulb,
    badge: 'bg-amber-100 text-amber-600',
    check: 'text-amber-500',
    border: 'border-amber-400',
    quoteBg: 'bg-amber-50/60',
  },
} as const;

export default function CaseStudySection({
  section,
}: {
  section: SectionData;
}) {
  const s = STYLES[section.kind];
  const { Icon } = s;

  return (
    <section className="glass-card rounded-3xl p-7 sm:p-9">
      {/* Icon badge + heading */}
      <div className="flex items-center gap-4">
        <span
          className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${s.badge}`}
        >
          <Icon className="h-5 w-5" />
        </span>
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
          {section.label}
        </h2>
      </div>

      {/* Intro paragraph */}
      {section.intro && (
        <p className="mt-5 text-[15px] leading-7 text-black/70">
          {section.intro}
        </p>
      )}

      {/* Mono uppercase sub-label */}
      {section.subLabel && (
        <div className="mt-6 font-mono text-xs font-bold uppercase tracking-[0.22em] text-black/55">
          {section.subLabel}
        </div>
      )}

      {/* ✓ Check bullets */}
      {section.bullets && section.bullets.length > 0 && (
        <ul className="mt-4 space-y-3.5">
          {section.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle2
                className={`mt-0.5 h-5 w-5 shrink-0 ${s.check}`}
                strokeWidth={2}
              />
              <span className="text-[15px] leading-6 text-black/75">{b}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Highlight quote */}
      {section.highlight && (
        <blockquote
          className={`mt-7 rounded-r-xl border-l-[3px] ${s.border} ${s.quoteBg} py-4 pl-5 pr-4 text-[15px] italic leading-7 text-black/70`}
        >
          {section.highlight}
        </blockquote>
      )}

      {/* Sample images */}
      {section.images && section.images.length > 0 && (
        <div className="mt-7 grid gap-5 sm:grid-cols-2">
          {section.images.map((src, i) => (
            <div key={i} className="relative">
              <div className="absolute -inset-2 rounded-[18px] bg-[#00bf63]/8" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`${section.label} — screenshot ${i + 1}`}
                className="relative w-full rounded-xl bg-[#eaf7ef] object-cover shadow-[0_8px_24px_rgba(0,0,0,0.1)]"
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
