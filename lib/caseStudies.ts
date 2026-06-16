// lib/caseStudies.ts  ← REPLACE the existing file
// Structured content model so sections render growthsquare-style:
// icon badge + intro + mono sub-label + ✓ bullet list + highlight quote.
//
// ⚠️ DRAFT COPY: headline metrics come from Bharti's brief; the narrative
// around them is sample content. Bharti must review before launch.
//
// IMAGES — drop files into /public/case-studies/ (Drive links inline).

export type SectionKind = "problem" | "strategy" | "results" | "insight";

export type CaseStudySection = {
  kind: SectionKind; // drives icon + color in <CaseStudySection />
  label: string; // "The Problem"
  intro?: string; // opening paragraph
  subLabel?: string; // "KEY ISSUES:" — mono uppercase
  bullets?: string[]; // ✓ check list
  highlight?: string; // italic quote with colored left border
  images?: string[]; // sample images to display below the section
};

export type CaseStudy = {
  slug: string;
  clientName: string;
  company: string;
  cardImage: string;
  cardImageDriveLink: string;
  cardCaptionLines: string[];
  pageHeadline: string;
  role: string;
  tags: string[];
  heroImage: string;
  heroImageDriveLink: string;
  sections: CaseStudySection[];
};

export const caseStudies: CaseStudy[] = [
  // ────────────────────────────────────────────────────────────────
  // CLIENT 1 — Vijayashree Venkat, HumanAlpha
  // ────────────────────────────────────────────────────────────────
  {
    slug: "vijayashree-venkat-humanalpha",
    clientName: "Vijayashree Venkat",
    company: "HumanAlpha",
    cardImage: "/case-studies/vijayashree.png",
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
    heroImage: "/case-studies/vijayashree-hero1.png",
    heroImageDriveLink:
      "https://drive.google.com/file/d/1pDxUlqwOsBpdqFVt6P4i9r7tP3b1KWNv/view?usp=drive_link",
    sections: [
      {
        kind: "problem",
        label: "The Problem",
        intro:
          "Vijayashree had years of HR leadership experience, but her LinkedIn profile wasn't helping her stand out.\nHer content looked similar to what many HR professionals were already posting. As a result, she wasn't attracting the right audience or generating enough inbound opportunities.",
        subLabel: "Key Issues:",
        bullets: [
          "No clear positioning in the market",
          "Slow follower growth",
          "Limited visibility among founders and business leaders",
          "Few inbound leads through LinkedIn",
          "Strong expertise, but low online recognition"
        ],
      },
      {
        kind: "strategy",
        label: "Our Strategy",
        intro:
          "We helped Vijayashree build a clear and differentiated personal brand.Instead of talking only about HR, we focused on how HR impacts business growth, leadership, and company success.",
        subLabel: "Our approach included:",
        bullets: [
          "Creating a clear positioning strategy",
          "Building content around strategic HR insights",
          "Sharing practical experiences and leadership lessons",
          "Optimising her profile to attract the right audience",
          "Maintaining consistency with a strong content plan"
        ],
        highlight:
          "",
      },
      {
        kind: "results",
        label: "Results in 90 Days",
        intro:
          "The same expertise she always had finally became visible to the people who pay for it.",
        subLabel: "The Numbers:",
        bullets: [
          "Grew from 19,000 to 25,000 followers", "+3,000% content reach and engagement",
          "Consistent inbound leads through content",
          "Higher visibility among decision-makers",
          "Appreciation from clients and peers",
          "More business opportunities through LinkedIn"
        ],
        images: ["/case-studies/vijayashree-hero2.png"],
      },
      {
        kind: "insight",
        label: "Key Insight",
        intro: "Buyers don't follow job titles — they follow points of view.",
        highlight:
          "People don't follow experience. They follow a clear point of view. When expertise is positioned around business impact, opportunities follow naturally.",
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────
  // CLIENT 2 — Co-founder & VP, Yess (yess.ai)
  // ────────────────────────────────────────────────────────────────
  {
    slug: "yess-seed-raise",
    clientName: "Co-founder & VP, Yess",
    company: "Yess",
    cardImage: "/case-studies/yess-hero.png",
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
    heroImage: "/case-studies/yess-hero.png",
    heroImageDriveLink:
      "https://drive.google.com/file/d/11Sq_5WclRmSuT5lYFXxBuXwStTVjzhUY/view?usp=drive_link",
    sections: [
      {
        kind: "problem",
        label: "The Problem",
        intro:
          "Yess.ai was preparing for launch and looking to raise investment. However, the founder's LinkedIn profile had very little activity and visibility. Investors, founders, and potential users had no way of understanding the vision behind the product.",
        subLabel: "Key Issues:",
        bullets: [
          "Low profile visibility",
          "No consistent content strategy",
          "Limited audience trust before launch",
          "Product story was not reaching the right people",
          "Needed attention before approaching investors",
        ],
      },
      {
        kind: "strategy",
        label: "Our Strategy",
        intro:
          "We focused on making the founder the face of the product.Instead of only talking about features, we built content around the problem Yess.ai was solving and the journey of building the company.",
        subLabel: "Our Approach Included:",
        bullets: [
          "Creating a strong founder story",
          "Sharing the vision behind Yess.ai",
          "Publishing solution-driven content",
          "Building credibility through consistent posting",
          "Positioning the founder in front of investors and startup audiences"
        ],
        highlight:
          "",
      },
      {
        kind: "results",
        label: "Results in 90 Days",
        intro:
          "A dead profile became the loudest channel for the yess.ai launch.",
        subLabel: "The Numbers:",
        bullets: [
          "400,000+ views in 30 days",
          "1.30K impressions in 7 days",
          "Strong engagement from founders and startup professionals",
          "Greater awareness for Yess.ai before launch",
          "Inbound investor interest raised about $80,000",
          "Successful support towards raising seed investment",
        ],
        images: ["/case-studies/yess.png"],
      },
      {
        kind: "insight",
        label: "Key Insight",
        intro:
          "Investors don't discover startups. They discover founders who consistently show up. ",
        highlight:
          "A strong founder brand creates trust long before the product launch.",
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────
  // CLIENT 3 — Co-founder & CEO, Insightology
  // ────────────────────────────────────────────────────────────────
  {
    slug: "insightology-demo-engine",
    clientName: "Co-founder & CEO, Insightology",
    company: "Insightology",
    cardImage: "/case-studies/insightology.png",
    cardImageDriveLink:
      "https://drive.google.com/file/d/1nyuv4ZIFVzdB6pfLKNXY5aFyOk2OtOmB/view?usp=drive_link",
    cardCaptionLines: [
      "8k followers | 60,000 impressions in a month",
      "Generated 100+ demo calls for Insightology with LinkedIn organic growth + LinkedIn Ads combined",
    ],
    pageHeadline:
      "Turned his 5,000 follower profile with only 50 right connections to 8,000 followers with 3,700+ elite market research agencies.\nBrought 100s of demos each month.",
    role: "Co-founder & CEO at Insightology",
    tags: [
      "Organic LinkedIn Growth ",
      "Product Benefits Driven Posts ",
      "Raised Investment",
      "Hired Top Talent"
    ],
    heroImage: "/case-studies/insightology2.png",
    heroImageDriveLink:
      "https://drive.google.com/file/d/1HZpvE01Yy9a79qE6lwFhsKPUn-5hYEtu/view?usp=drive_link",
    sections: [
      {
        kind: "problem",
        label: "The Problem",
        intro:
          "Insightology had a strong product, but it wasn't getting enough visibility among the right people. The founder already had around 6,000 followers on LinkedIn, but most of them were not potential buyers. The company needed to reach market research agencies, generate more demos, and build credibility as it scaled.",
        subLabel: "Key Issues:",
        bullets: [
          "Limited reach among target customers",
          "Low inbound demo bookings",
          "The right audience wasn't seeing the product",
          "Needed stronger founder visibility and trust",
          "Looking to accelerate growth and fundraising",
        ],
      },
      {
        kind: "strategy",
        label: "Our Strategy",
        intro:
          "We focused on building the founder's personal brand while creating demand for Insightology. Instead of posting generic content, we created content around industry challenges, market research trends, and the real problems the product solves. Alongside organic LinkedIn growth, we ran LinkedIn Ads to reach decision-makers and drive qualified demo bookings.",
        subLabel: "Our approach included:",
        bullets: [
          "Building authority in the market research space",
          "Creating product benefit-driven content",
          "Growing a network of relevant industry professionals",
          "Running LinkedIn Ads to generate demo calls",
          "Increasing visibility among customers, partners, and investors",
        ],
        highlight:
          "When organic proves what converts, ads stop being a gamble — you're just paying to show a winning message to more of the same audience.",
      },
      {
        kind: "results",
        label: "Results in 90 Days",
        intro:
          "Every post now lands in front of buyers — and the pipeline shows it.",
        subLabel: "The Numbers:",
        bullets: [
          "Grew from 6,000 to 8,000 followers",
          "Built a network of 3,700+ market research professionals",
          "Generated 60,000+ impressions in a month",
          "Delivered 100+ demo calls through LinkedIn organic growth and LinkedIn Ads",
          "Increased visibility among key decision-makers",
          "Supported the company's successful seed investment journey",
        ],
        images: ["/case-studies/insightology.png"],
      },
      {
        kind: "insight",
        label: "Key Insight",
        intro: "Follower count is vanity; follower composition is pipeline.",
        highlight:
          "Growth comes from reaching the right people, not the most people. When founder visibility and demand generation work together, awareness turns into revenue.",
      },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
