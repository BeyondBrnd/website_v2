'use client';

// components/v2/HeroV2.tsx
// New hero per V2 brief:
//   H1: "Busy business owners sign more deals when their LinkedIn is *Impressive*."
//   H2: "We make that happen."
//   Sub: "We handle your LinkedIn so you can handle your business."
//   Left CTA: "Make my LinkedIn Impressive" → booking section
//   Right: the LinkedIn score widget ("Check your score on LinkedIn")
// Background: soft cloud image (client liked tryemailiz.com's fresh feel) —
// /public/bg-cloud.jpeg, tinted to stay on-brand and keep text readable.

import React from 'react';
import ScoreWidget from './ScoreWidget';
import BackgroundMeteors from '@/components/ui/BackgroundMeteors';

export default function HeroV2() {
  return (
    <section className="relative overflow-hidden">
      <BackgroundMeteors>
        <div className="mx-auto grid min-h-[78vh] max-w-7xl items-center gap-6 px-5 py-16 md:grid-cols-2 md:py-24">
          {/* Left: headline + CTA */}
          <div>
            <h1 className="text-4xl font-extrabold leading-[1.07] tracking-tight text-black sm:text-5xl lg:text-[3.4rem]">
              Busy business owner&apos;s sign<br />
              more deals when they are<br />
              LinkedIn is{' '}
              <em className="font-extrabold italic text-[#00bf63]">Impressive</em>
              .
            </h1>

            <p className="mt-8 text-4xl font-extrabold leading-[1.07] tracking-tight text-black sm:text-5xl lg:text-[3.4rem]">
              We make that happen.
            </p>

            <p className="mt-5 max-w-md text-lg leading-7 text-black/65">
              We handle your LinkedIn so you can handle your business.
            </p>

            <div className="mt-8">
              <a
                href="#book-call"
                className="inline-flex h-[50px] items-center justify-center rounded-[12px] bg-[#00bf63] px-7 text-[15px] font-bold tracking-tight text-black shadow-[0_10px_25px_rgba(0,0,0,0.12)] ring-1 ring-black/10 transition-all duration-200 hover:-translate-y-[1px] hover:bg-[#00a857] hover:shadow-[0_14px_30px_rgba(0,0,0,0.16)]"
              >
                Make my LinkedIn Impressive
              </a>
            </div>
          </div>

          {/* Right: score widget */}
          <div className="flex justify-center md:justify-end">
            <ScoreWidget />
          </div>
        </div>
      </BackgroundMeteors>
    </section>
  );
}
