'use client';

// components/v2/TrustedBy.tsx
// "Trusted by Leaders & Teams at" — static two-row logo grid (no motion,
// no grayscale, no opacity), like the reference screenshot.
//
// UNIFORM LOGO SIZING: every logo renders inside a fixed LOGO_W × LOGO_H box
// with object-contain, so any uploaded image — portrait, landscape, square,
// 4000px or 200px — is normalized to the exact same visual footprint.
//
// HOW TO ADD LOGOS: drop image files into /public/client_logos/ and set the
// `src` for each brand below (png/svg/jpg/webp all fine — size irrelevant).
// Brands without a src (or whose file is missing) fall back to a text
// wordmark, so the section never breaks.

import React, { useState } from 'react';

// ── Tune the uniform logo box here ──────────────────────────────
const LOGO_W = 150; // px — width of every logo slot
const LOGO_H = 55; // px — height of every logo slot
// ────────────────────────────────────────────────────────────────

type Brand = {
  name: string;
  src?: string; // e.g. '/client_logos/decathlon.png'
};

const BRANDS: Brand[] = [
  { name: 'Decathlon', src: '/client_logos/decathlon.png' },
  { name: 'Licious', src: '/client_logos/licious.png' },
  { name: 'Storydoc', src: '/client_logos/storydoc.png' },
  { name: 'Insightology', src: '/client_logos/insightology.png' },
  { name: 'Topmate', src: '/client_logos/topmate.png' },
  { name: 'Yess', src: '/client_logos/yess.png' },
  { name: 'HumanAlpha', src: '/client_logos/humanalpha.png' },
  { name: 'First Rain', src: '/client_logos/first_rain.png' },
  { name: 'Impulse Consultancy', src: '/client_logos/impulse.png' },
  { name: 'Onavid', src: '/client_logos/onavid.png' },
];

export default function TrustedBy() {
  // Split into 2 rows (5 + 5)
  const mid = Math.ceil(BRANDS.length / 2);
  const rows = [BRANDS.slice(0, mid), BRANDS.slice(mid)];

  return (
    <section className="glass-section relative py-14">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-sm font-bold uppercase tracking-[0.18em] text-black/45">
          Trusted by Leaders &amp; Teams at
        </h2>

        <div className="mt-10 space-y-10">
          {rows.map((rowBrands, r) => (
            <div
              key={r}
              className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16"
            >
              {rowBrands.map((b) => (
                <LogoSlot key={b.name} brand={b} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * LogoSlot — the uniform box. Fixed dimensions for every brand;
 * object-contain scales any image to fit inside without cropping
 * or distortion. Missing/broken images fall back to a wordmark.
 */
function LogoSlot({ brand }: { brand: Brand }) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(brand.src) && !failed;

  return (
    <div
      className="flex select-none items-center justify-center"
      style={{ width: LOGO_W, height: LOGO_H }}
      title={brand.name}
    >
      {showImage ? (
        // Plain <img> (not next/image) so arbitrary source dimensions
        // never require width/height props — the box does the sizing.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={brand.src}
          alt={brand.name}
          className="h-full w-full object-contain"
          loading="lazy"
          draggable={false}
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="whitespace-nowrap text-xl font-extrabold tracking-tight text-black/35 sm:text-2xl">
          {brand.name}
        </span>
      )}
    </div>
  );
}
