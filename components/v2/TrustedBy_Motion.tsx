'use client';

// components/v2/TrustedBy.tsx
// "Trusted by Leaders & Teams at" — two counter-scrolling marquee rows.
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
const LOGO_H = 50; // px — height of every logo slot
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
  const row = [...BRANDS, ...BRANDS]; // duplicated for seamless loop

  return (
    <section className="glass-section relative py-14">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-sm font-bold uppercase tracking-[0.18em] text-black/45">
          Trusted by Leaders &amp; Teams at
        </h2>

        <div className="bb-fade-x relative mt-8 space-y-6 overflow-hidden">
          <ul className="bb-row">
            {row.map((b, i) => (
              <li key={`a-${i}`} aria-hidden={i >= BRANDS.length}>
                <LogoSlot brand={b} />
              </li>
            ))}
          </ul>
          {/* <ul className="bb-row bb-row-rev">
            {row.map((b, i) => (
              <li key={`b-${i}`} aria-hidden={i >= BRANDS.length}>
                <LogoSlot brand={b} />
              </li>
            ))}
          </ul> */}
        </div>
      </div>

      <style jsx>{`
        .bb-fade-x {
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 18%,
            black 82%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 18%,
            black 82%,
            transparent 100%
          );
        }
        .bb-row {
          display: flex;
          align-items: center;
          gap: 48px;
          width: max-content;
          list-style: none;
          margin: 0;
          padding: 0;
          animation: bb-marquee 32s linear infinite;
        }
        .bb-row-rev {
          animation-direction: reverse;
        }
        .bb-row:hover {
          animation-play-state: paused;
        }
        @keyframes bb-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .bb-row {
            animation: none;
            flex-wrap: wrap;
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
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
          className="h-full w-full object-contain opacity-60 grayscale transition duration-200 hover:opacity-100 hover:grayscale-0"
          loading="lazy"
          draggable={false}
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="whitespace-nowrap text-xl font-extrabold tracking-tight text-black/35 transition-colors hover:text-black/70 sm:text-2xl">
          {brand.name}
        </span>
      )}
    </div>
  );
}
