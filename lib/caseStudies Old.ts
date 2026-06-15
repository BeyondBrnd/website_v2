// lib/caseStudies.ts
// Single source of truth for the "What makes Beyondbrnd Legit?" section
// and the individual /case-study/[slug] pages.
//
// IMAGE PLACEHOLDERS — download from Drive, drop into /public/case-studies/
// and the paths below will resolve. Filenames are suggestions.

export type CaseStudySection = {
  label: string;
  body: string; // ⚠️ Pending copy from Bharti — placeholders below
};

export type CaseStudy = {
  slug: string;
  clientName: string;
  company: string;
  // Card (home page)
  cardImage: string; // e.g. /case-studies/vijayashree-card.png
  cardImageDriveLink: string;
  cardCaptionLines: string[];
  // Detail page
  pageHeadline: string;
  role: string;
  tags: string[];
  heroImage: string;
  heroImageDriveLink: string;
  sections: CaseStudySection[];
};

const PENDING =
  "Copy pending from Bharti — replace this placeholder before launch.";

export const caseStudies: CaseStudy[] = [
  {
    slug: "vijayashree-venkat-humanalpha",
    clientName: "Vijayashree Venkat",
    company: "HumanAlpha",
    cardImage: "/case-studies/vijayashree-card.jpeg",
    // https://drive.google.com/file/d/1dvKjDpdfQw3zDTDFiER1JS5ubOYDsWn7/view
    cardImageDriveLink:
      "https://drive.google.com/file/d/1dvKjDpdfQw3zDTDFiER1JS5ubOYDsWn7/view?usp=drive_link",
    cardCaptionLines: [
      "27k followers | 75L+ impressions per year",
      "Transformed a strategic HR voice into a known figure with a followership that signs deals online",
    ],
    pageHeadline:
      "How we transformed her profile from a generic HR leader to a strategic leader with fast follower growth & consistently signing deals.",
    role: "Founder & CEO at HumanAlpha",
    tags: [
      "CEO Strategic Voice",
      "Organic LinkedIn Growth",
      "PR Media Feature",
      "Hired Top Talent",
    ],
    heroImage: "/case-studies/vijayashree-hero.jpeg",
    // https://drive.google.com/file/d/1pDxUlqwOsBpdqFVt6P4i9r7tP3b1KWNv/view
    heroImageDriveLink:
      "https://drive.google.com/file/d/1pDxUlqwOsBpdqFVt6P4i9r7tP3b1KWNv/view?usp=drive_link",
    sections: [
      { label: "The Problem", body: PENDING },
      { label: "Our Strategy", body: PENDING },
      { label: "Results in 90 Days", body: PENDING },
      { label: "Key Insight", body: PENDING },
    ],
  },
  {
    slug: "yess-seed-raise",
    clientName: "Co-founder & VP, Yess",
    company: "Yess",
    cardImage: "/case-studies/yess-card.jpeg",
    // https://drive.google.com/file/d/10Q-jxWhLh8jWVAMu93yni6rmFRNDmSf_/view
    cardImageDriveLink:
      "https://drive.google.com/file/d/10Q-jxWhLh8jWVAMu93yni6rmFRNDmSf_/view?usp=drive_link",
    cardCaptionLines: [
      "Pre-launch of yess.ai to raise a Seed Investment",
      "400k views in 30 days",
      "Seamless investment raising",
    ],
    pageHeadline:
      "Turned a dead profile into an investor magnet ahead of yess.ai's launch — with a hero-product story that raised the round.",
    role: "Co-founder & VP at Yess",
    tags: ["Hero-Product Story", "Solution-Driven Posts", "Investment Raised"],
    heroImage: "/case-studies/yess-hero.jpeg",
    // https://drive.google.com/file/d/11Sq_5WclRmSuT5lYFXxBuXwStTVjzhUY/view
    heroImageDriveLink:
      "https://drive.google.com/file/d/11Sq_5WclRmSuT5lYFXxBuXwStTVjzhUY/view?usp=drive_link",
    sections: [
      { label: "The Problem", body: PENDING },
      { label: "Our Strategy", body: PENDING },
      { label: "Results in 90 Days", body: PENDING },
      { label: "Key Insight", body: PENDING },
    ],
  },
  {
    slug: "insightology-demo-engine",
    clientName: "Co-founder & CEO, Insightology",
    company: "Insightology",
    cardImage: "/case-studies/insightology-card.png",
    // https://drive.google.com/file/d/1nyuv4ZIFVzdB6pfLKNXY5aFyOk2OtOmB/view
    cardImageDriveLink:
      "https://drive.google.com/file/d/1nyuv4ZIFVzdB6pfLKNXY5aFyOk2OtOmB/view?usp=drive_link",
    cardCaptionLines: [
      "8k followers | 60,000 impressions in a month",
      "Generated 100+ demo calls for Insightology with LinkedIn organic growth + LinkedIn Ads combined",
    ],
    pageHeadline:
      "Turned a 5,000-follower profile with only 50 right connections into 8,000 followers with 3,700+ elite market research agencies — bringing 100s of demos each month.",
    role: "Co-founder & CEO at Insightology",
    tags: [
      "Organic LinkedIn Growth",
      "Product-Benefit Driven Posts",
      "Raised Investment",
      "Hired Top Talent",
    ],
    heroImage: "/case-studies/insightology-hero.png",
    // https://drive.google.com/file/d/1HZpvE01Yy9a79qE6lwFhsKPUn-5hYEtu/view
    heroImageDriveLink:
      "https://drive.google.com/file/d/1HZpvE01Yy9a79qE6lwFhsKPUn-5hYEtu/view?usp=drive_link",
    sections: [
      { label: "The Problem", body: PENDING },
      { label: "Our Strategy", body: PENDING },
      { label: "Results in 90 Days", body: PENDING },
      { label: "Key Insight", body: PENDING },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
