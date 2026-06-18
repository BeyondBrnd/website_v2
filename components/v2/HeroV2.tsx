'use client';

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
            <h1 className="text-[31px] font-extrabold leading-[1.07] tracking-tight text-black sm:text-[43px] lg:text-[49.4px]">
              <span className="whitespace-nowrap">Busy business owner&apos;s sign</span><br />
              more deals when their<br />
              LinkedIn is{' '}
              <em className="font-extrabold italic text-[#00bf63]">Impressive</em>.
            </h1>

            {/* Line 4 with a clean top margin spacer */}
            <p className="mt-6 text-[31px] font-extrabold leading-[1.07] tracking-tight text-black sm:text-[43px] lg:text-[49.4px]">
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