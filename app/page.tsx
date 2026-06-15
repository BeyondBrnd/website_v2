'use client'

// app/page.tsx — Beyondbrnd V2
// New page order per the V2 brief:
//   0. Quiz modal (on load)        — QuizModal
//   1. Hero + score widget         — HeroV2
//   2. Trusted by Leaders & Teams  — TrustedBy (10 brands)
//   3. Why is Beyondbrnd the ONE   — WhyBeyondbrnd
//   4. Our Services                — Services
//   5. What makes Beyondbrnd Legit — CaseStudies → /case-study/[slug]
//   6. Testimonials (new heading)  — Testimonials
//   7. Book a call (Cal.com)       — BookCall
//   + retained from V1: FAQ, Footer, Header
// VSL and WorkWithUs are commented out — confirm with Bharti whether to keep.

import React from "react";
import Header from "@/components/landing/Header";
import QuizModal from "@/components/v2/QuizModal";
import HeroV2 from "@/components/v2/HeroV2";
import TrustedBy from "@/components/v2/TrustedBy";
import WhyBeyondbrnd from "@/components/v2/WhyBeyondbrnd";
import Services from "@/components/v2/Services";
import CaseStudies from "@/components/v2/CaseStudies";
import Testimonials from "@/components/landing/Testimonials";
import BookCall from "@/components/v2/BookCall";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";
// import VSL from "@/components/landing/VSL";
// import WorkWithUs from "@/components/landing/WorkWithUs";

export default function BeyondbrndLanding() {
  return (
    <div className="landing-scene min-h-screen text-black">
      <QuizModal />

      <Header />

      <HeroV2 />

      <TrustedBy />

      <WhyBeyondbrnd />

      <Services />

      <div id="case-studies">
        <CaseStudies />
      </div>

      <Testimonials />

      <BookCall />

      <FAQ />

      <Footer />
    </div>
  );
}
