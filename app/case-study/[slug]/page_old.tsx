// app/case-study/[slug]/page.tsx
// Individual case study pages, modeled on
// https://thegrowthsquare.in/case-study/2-meet-semlani
// Layout: headline + role/tags on the left, client image on the right,
// then THE PROBLEM → OUR STRATEGY → RESULTS IN 90 DAYS → KEY INSIGHT.
//
// ⚠️ Section body copy + social-proof screenshots are pending from Bharti
// (lib/caseStudies.ts holds the placeholders). Drop social-proof images
// into /public/case-studies/ and add them inside the Results section.

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { caseStudies, getCaseStudy } from '@/lib/caseStudies';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import BookCall from '@/components/v2/BookCall';

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  return {
    title: cs ? `${cs.company} Case Study | Beyondbrnd` : 'Case Study',
    description: cs?.pageHeadline,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  return (
    <div className="landing-scene min-h-screen text-black">
      <Header />

      <main className="glass-section mx-auto max-w-6xl px-5 pb-10 pt-10 sm:pt-16">
        <Link
          href="/#case-studies"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-black/55 transition hover:text-black"
        >
          <ArrowLeft className="h-4 w-4" /> All case studies
        </Link>

        {/* Intro: copy left, image right */}
        <div className="mt-8 grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              {cs.pageHeadline}
            </h1>
            <div className="mt-5 text-base font-bold text-[#00a857]">
              {cs.role}
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {cs.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-[#00bf63]/25 bg-[#00bf63]/8 px-3 py-1 text-xs font-semibold text-black/70"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-[26px] bg-[#00bf63]/10" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={cs.heroImage}
              alt={`${cs.clientName} — ${cs.company}`}
              className="relative aspect-[4/3] w-full rounded-[22px] bg-[#eaf7ef] object-cover shadow-[0_24px_60px_rgba(0,0,0,0.12)]"
            />
          </div>
        </div>

        {/* Sections */}
        <div className="mt-16 max-w-3xl space-y-12">
          {cs.sections.map((s) => (
            <section key={s.label}>
              <h2 className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#00a857]">
                {s.label}
              </h2>
              <div className="mt-3 border-l-2 border-[#00bf63]/30 pl-5 text-[15px] leading-7 text-black/70">
                {s.body}
              </div>
              {s.label.toLowerCase().startsWith('results') && (
                <p className="mt-3 pl-5 text-xs italic text-black/40">
                  {/* Social-proof screenshots from Bharti go here */}
                  Social proof images coming soon.
                </p>
              )}
            </section>
          ))}
        </div>
      </main>

      {/* Conversion: book a call */}
      <BookCall />
      <Footer />
    </div>
  );
}
