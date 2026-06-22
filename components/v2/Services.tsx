'use client';

// components/v2/Services.tsx
// "Our Services" — the brief references a Drive image for the final
// service list/visual:
// https://drive.google.com/file/d/1OCsASDoVxxlhhTd7d1OXYLpAUnQcesqr/view
// ⚠️ Verify titles + descriptions below against that image before launch.

import React from 'react';
import {
  UserRoundCheck,
  PenLine,
  TrendingUp,
  Megaphone,
} from 'lucide-react';

const SERVICES = [
  {
    icon: UserRoundCheck,
    title: 'Profile Makeover',
    desc: 'Photo, banner, headline, about and experience — rebuilt so leads who check you out are impressed, not lost.',
  },
  {
    icon: PenLine,
    title: 'Content & Ghostwriting',
    desc: 'Strategic posts in your voice that build authority with the exact people you sell to.',
  },
  {
    icon: TrendingUp,
    title: 'Organic Growth',
    desc: 'Followers, impressions and the right connections — grown consistently, not bought.',
  },
  {
    icon: Megaphone,
    title: 'LinkedIn Ads & Lead Gen',
    desc: 'Organic + paid combined to turn attention into booked demos and signed deals.',
  },
];

export default function Services() {
  return (
    <section className="glass-section py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
          Our Services
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <a
              key={title}
              href="#book-call"
              className="group block rounded-2xl border border-black/6 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(0,0,0,0.10)]"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#00bf63]/12 text-[#00a857] transition group-hover:bg-[#00bf63] group-hover:text-black">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-xl font-semibold tracking-tight">
                {title}
              </h3>
              <p className="mt-1.5 text-base leading-6 text-black/60">{desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
