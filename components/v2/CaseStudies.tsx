'use client';

// components/v2/CaseStudies.tsx
// "What makes Beyondbrnd Legit?" — three case study cards (thegrowthsquare.in
// style) linking to /case-study/[slug].
//
// 📸 Card images live at /public/case-studies/*.png — Drive links for each
// are in lib/caseStudies.ts. Until images are added, a branded fallback
// panel renders so the layout never breaks.

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { caseStudies } from '@/lib/caseStudies';

export default function CaseStudies() {
  return (
    <section className="glass-section py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
          What makes Beyondbrnd <span className="text-[#00bf63]">Legit</span>?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-xl font-semibold text-black/55">
          Real founders. Real profiles. Real pipeline. Here&apos;s the proof.
        </p>

        <div className="mt-12 grid gap-7 md:grid-cols-3">
          {caseStudies.map((cs) => (
            <Link
              key={cs.slug}
              href={`/case-study/${cs.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-black/8 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(0,0,0,0.12)]"
            >
              <CardImage src={cs.cardImage} alt={`${cs.company} case study`} />
              <div className="flex flex-1 flex-col p-5">
                <div className="text-sm font-extrabold tracking-tight text-black">
                  {cs.clientName}
                </div>
                <div className="mt-2 space-y-1.5">
                  {cs.cardCaptionLines.map((line, i) => (
                    <p
                      key={i}
                      className={
                        i === 0
                          ? 'text-sm font-bold text-[#00a857]'
                          : 'text-xs leading-5 text-black/60'
                      }
                    >
                      {line}
                    </p>
                  ))}
                </div>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-bold text-black transition group-hover:text-[#00a857]">
                  Read case study
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function CardImage({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    // Branded fallback while the Drive images are pending
    return (
      <div className="flex aspect-[16/10] items-center justify-center bg-gradient-to-br from-[#eaf7ef] to-[#d3f1e0]">
        <span className="text-xs font-bold uppercase tracking-widest text-[#00a857]/70">
          Image coming soon
        </span>
      </div>
    );
  }

  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-[#eaf7ef]">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        sizes="(max-width: 768px) 90vw, 380px"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
