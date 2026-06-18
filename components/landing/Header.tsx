'use client';
import React from 'react';
import Link from 'next/link';
import CTAButton from '@/components/CTAButton';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/beyondbrnd-logo.png"
            alt="Beyondbrnd"
            className="h-10 w-auto"
            loading="eager"
          />
          <span className="hidden sm:inline text-lg font-extrabold tracking-tight">
            beyond<span className="text-[#00bf63]">brnd</span>
          </span>
        </Link>
        <CTAButton className="h-[36px] px-4 text-[13px] sm:h-[44px] sm:px-6 sm:text-[14px]" />
      </div>
    </header>
  );
}
