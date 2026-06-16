// app/case-study/[slug]/page.tsx  ← REPLACE the existing file
// Individual case study pages — growthsquare-style section cards via
// <CaseStudySection /> (icon badges, ✓ bullets, highlight quotes).

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, BadgeCheck } from 'lucide-react';
import { caseStudies, getCaseStudy } from '@/lib/caseStudies';
import CaseStudySection from '@/components/v2/CaseStudySection';
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

      <main className="glass-section mx-auto max-w-6xl px-5 pb-16 pt-10 sm:pt-16">
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

        {/* Section cards */}
        <div className="mx-auto mt-14 max-w-4xl space-y-8">
          {cs.sections.map((s, i) => (
            <React.Fragment key={s.label}>
              <CaseStudySection section={s} />
              {s.kind === "results" && cs.socialProofImages.length > 0 && (
                <section className="glass-card rounded-3xl p-7 sm:p-9">
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#00bf63]/12 text-[#00a857]">
                      <BadgeCheck className="h-5 w-5" />
                    </span>
                    <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                      Social Proof
                    </h2>
                  </div>
                  <div className="mt-7 grid gap-5 sm:grid-cols-2">
                    {cs.socialProofImages.map((src, j) => (
                      <div key={j} className="relative">
                        <div className="absolute -inset-2 rounded-[18px] bg-[#00bf63]/8" />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={src}
                          alt={`Social proof ${j + 1}`}
                          className="relative w-full rounded-xl bg-[#eaf7ef] object-cover shadow-[0_8px_24px_rgba(0,0,0,0.1)]"
                        />
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </React.Fragment>
          ))}
        </div>
      </main>

      {/* Conversion: book a call */}
      <BookCall />
      <Footer />
    </div>
  );
}
