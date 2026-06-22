'use client';

// components/v2/WhyBeyondbrnd.tsx — V2.1 (Bharti feedback, item 6)
// New story copy on the left, Bharti's photo on the right.
//
// 📸 IMAGE PLACEHOLDER: drop Bharti's photo into /public/bharti.jpeg

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

          <div className="mt-6 space-y-4 text-base leading-7 text-black/70">
            <p>
              Hi, I&apos;m Bharti, and I built Beyondbrnd on one uncomfortable
              truth:
            </p>
            <p className="text-lg font-bold text-black">
              The best founders in the room were losing deals to people half as
              good, simply because their LinkedIn didn&apos;t reflect who they
              actually were.
            </p>
            <p>
              Over 4 years and 50+ founders later, I&apos;ve seen what a weak
              LinkedIn profile actually costs. Not just in impressions, but in
              deals not closed, investors not convinced, and partnerships that
              never happened.
            </p>
            <p>
              Every word on your profile, every post we write in your voice,
              every connection we build is engineered to make the right people
              take you seriously and reach out.
            </p>
            <p className="font-semibold text-black">
              If your LinkedIn doesn&apos;t reflect the business you&apos;ve
              built, we do it for you.
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