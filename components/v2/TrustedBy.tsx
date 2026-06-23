'use client';

import React, { useState } from 'react';

const LOGO_W = 150;
const LOGO_H = 55;

type Brand = {
  name: string;
  src?: string;
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
  const row = [...BRANDS, ...BRANDS];

  return (
    <section className="glass-section relative py-14">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-sm font-bold uppercase tracking-[0.18em] text-black/45">
          Trusted by Leaders &amp; Teams at
        </h2>

        <div className="bb-fade-x relative mt-8 overflow-hidden">
          <ul className="bb-row">
            {row.map((b, i) => (
              <li key={i}>
                <LogoSlot brand={b} />
              </li>
            ))}
          </ul>
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
