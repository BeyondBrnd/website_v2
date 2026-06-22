'use client';

// components/v2/BookCall.tsx
// "Make your LinkedIn Impressive today." — inline Cal.com embed.
// Booking link: https://cal.com/bharti-from-beyondbrnd/30min?overlayCalendar=true
// Uses Cal's official embed snippet (no extra npm dependency).

import React, { useEffect, useRef } from 'react';

const CAL_LINK = 'bharti-from-beyondbrnd/30min';

export default function BookCall() {
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;

    // Official Cal.com embed loader
    (function (C: any, A: string, L: string) {
      const p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      const d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          const cal = C.Cal;
          const ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement('script')).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api: any = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === 'string') {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ['initNamespace', namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, 'https://app.cal.com/embed/embed.js', 'init');

    const Cal = (window as any).Cal;
    Cal('init', '30min', { origin: 'https://cal.com' });
    Cal.ns['30min']('inline', {
      elementOrSelector: '#bb-cal-inline',
      calLink: CAL_LINK,
      layout: 'month_view',
    });
    Cal.ns['30min']('ui', {
      cssVarsPerTheme: { light: { 'cal-brand': '#00bf63' } },
      hideEventTypeDetails: false,
      layout: 'month_view',
    });
  }, []);

  return (
    <section id="book-call" className="glass-section py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-5">
        <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
          Make your LinkedIn{' '}
          <em className="italic text-[#00bf63]">Impressive</em> today.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-center text-xl font-semibold text-black/55">
          Pick a slot below — 30 minutes with Bharti, free, no fluff.
        </p>

        <div className="mt-10 overflow-hidden rounded-3xl border border-black/8 bg-white shadow-[0_24px_60px_rgba(0,0,0,0.08)]">
          <div id="bb-cal-inline" className="min-h-[620px] w-full" />
        </div>

        {/* Fallback link if the embed is blocked */}
        <p className="mt-4 text-center text-xs text-black/45">
          Calendar not loading?{' '}
          <a
            href={`https://cal.com/${CAL_LINK}?overlayCalendar=true`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#00a857] underline"
          >
            Open it in a new tab
          </a>
          .
        </p>
      </div>
    </section>
  );
}
