'use client';

// components/v2/WhyBeyondbrnd.tsx
// "Why is Beyondbrnd the ONE for you?" — story copy on the left,
// Bharti's photo on the right.
//
// 📸 IMAGE PLACEHOLDER: drop Bharti's photo into /public/bharti.jpg
// (Drive link for the photo to be shared by Bharti — see brief, section 3).

import React from 'react';
import Image from 'next/image';

export default function WhyBeyondbrnd() {
  return (
    <section className="glass-section py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16">
        {/* Left: story */}
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Why is Beyondbrnd the{' '}
            <span className="text-[#00bf63]">ONE</span> for you?
          </h2>

          <div className="mt-6 space-y-4 text-[15px] leading-7 text-black/70">
            <p>
              Hi, I&apos;m Bharti. I&apos;ve spent over 4 years watching
              brilliant founders get overlooked online.
            </p>
            <p>
              For example, a founder named Praveen Vasanthswamy — a financial
              advisor and real estate builder for HNIs, NRIs and corporate
              leaders — had 10 years of experience, but his LinkedIn was dead.
            </p>
            <p>
              He told me how embarrassed he felt showing his LinkedIn profile
              to a potential lead, and how he would fail to close deals because
              of no digital presence.
            </p>
            <p className="font-semibold text-black">
              We changed that narrative for him.
            </p>
            <p>
              You shouldn&apos;t lose deals simply because your LinkedIn
              profile isn&apos;t <em className="italic">impressive</em>.
            </p>
            <p>
              That gap between how good you actually are and how you look on
              LinkedIn? We built the exact service that fills it — we handle
              your LinkedIn profile end-to-end so you can focus on signing new
              deals.
            </p>
          </div>
        </div>

        {/* Right: Bharti's photo */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-3 rounded-[28px] bg-[#00bf63]/12" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-[#eaf7ef] shadow-[0_24px_60px_rgba(0,0,0,0.12)]">
            <Image
              src="/bharti.jpeg" /* ⚠️ placeholder — awaiting photo from Bharti */
              alt="Bharti Chilkoti, founder of Beyondbrnd"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 440px"
            />
          </div>
          <a
            href="https://www.linkedin.com/in/bhartichilkoti/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute -bottom-4 left-6 rounded-2xl bg-white px-4 py-2.5 shadow-lg ring-1 ring-black/5 transition hover:bg-[#f0fdf4]"
          >
            <div className="text-sm font-bold">Bharti Chilkoti</div>
            <div className="text-xs text-black/55">Founder, Beyondbrnd</div>
          </a>
        </div>
      </div>
    </section>
  );
}
