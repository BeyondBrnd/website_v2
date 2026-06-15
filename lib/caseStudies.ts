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
          "Despite 20+ years of HR leadership and running HumanAlpha, on LinkedIn Vijayashree looked like every other HR consultant. Prospects who checked her profile before a call saw \"an HR person\" — not the strategic advisor their company needed.",
        subLabel: "Key Issues:",
        bullets: [
          "Generic HR content — hiring tips and culture quotes that attracted peers, not buyers",
          "No CEO-level positioning despite two decades of boardroom experience",
          "Engagement was polite likes, never conversations with decision-makers",
          "Profile and headline read like a service provider, not an authority",
          "Deals that should have closed on reputation were stalling on perception",
        ],
      },
      {
        kind: "strategy",
        label: "Our Strategy",
        intro:
          "We repositioned her from HR generalist to CEO-level strategic voice — someone who speaks about business outcomes, not HR processes.",
        subLabel: "What We Implemented:",
        bullets: [
          "Profile rebuild — headline, banner and about anchored on problems CEOs lose sleep over: leadership pipelines, succession risk, executive performance",
          "Content engine — 4 posts a week in her voice, drawn from 20 years of real boardroom moments",
          "Contrarian takes on leadership hiring that forced her ICP to stop scrolling",
          "Anonymized client transformation stories so buyers could see themselves in the narrative",
          "Daily strategic commenting on founder & CXO posts — putting her thinking in front of decision-makers instead of waiting for the algorithm",
        ],
        highlight:
          "The shift was simple but total: stop posting like an HR professional, start posting like the advisor CEOs call before their biggest people decisions.",
      },
      {
        kind: "results",
        label: "Results in 90 Days",
        intro:
          "The same expertise she always had finally became visible to the people who pay for it.",
        subLabel: "The Numbers:",
        bullets: [
          "27,000+ followers — a compounding audience of the right people",
          "75L+ (7.5M+) impressions per year on her content",
          "Inbound DMs from founders and CXOs — deals now start with \"I've been reading your posts\"",
          "Featured in PR & media as a recognized voice on strategic HR",
          "Used the same audience to attract and hire top talent for HumanAlpha",
        ],
      },
      {
        kind: "insight",
        label: "Key Insight",
        intro: "Buyers don't follow job titles — they follow points of view.",
        highlight:
          "Authority isn't built by saying you're an expert. It's built by consistently thinking in public where your buyers can watch.",
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
          "Yess.ai was weeks from launch and heading into a seed raise — and the co-founder's LinkedIn was effectively dead. Investors do diligence the same way buyers do: they read your LinkedIn before the first meeting.",
        subLabel: "Key Issues:",
        bullets: [
          "Months between posts — zero visible momentum going into a raise",
          "Profile still read like his previous role, not the company he was building",
          "No public narrative about what Yess was or why it mattered",
          "A silent founder raises two investor doubts: can this person sell, and is anyone paying attention?",
          "Launch date was fixed — momentum had to be visible from the outside, fast",
        ],
      },
      {
        kind: "strategy",
        label: "Our Strategy",
        intro:
          "We built the entire pre-launch around one hero-product story: the painful, expensive problem Yess kills, told from the founder's seat.",
        subLabel: "What We Implemented:",
        bullets: [
          "A planned 30-day narrative arc — the problem we lived, why existing tools fail, behind-the-scenes of the fix, early user reactions",
          "Solution-driven posts anchored on customer pain and outcomes — never feature lists",
          "Product demos framed as \"the moment this problem dies\"",
          "Deliberate engagement with VCs, operators and design partners in the comments",
          "Every post sequenced to pull readers one step deeper toward launch day",
        ],
        highlight:
          "By the time pitch meetings happened, the deck felt like a recap, not an introduction — investors had already watched the story unfold in their feed.",
      },
      {
        kind: "results",
        label: "Results in 90 Days",
        intro:
          "A dead profile became the loudest channel for the yess.ai launch.",
        subLabel: "The Numbers:",
        bullets: [
          "400,000+ views in the first 30 days of the campaign",
          "Investor conversations opened inbound — several began with the content itself",
          "Seed round raised, with public momentum doing the warm-up a cold deck used to do",
          "A repeatable founder-led channel that kept compounding after launch",
        ],
      },
      {
        kind: "insight",
        label: "Key Insight",
        intro:
          "Investors don't just fund products — they fund founders who can create attention.",
        highlight:
          "If you can build an audience for the problem before launch, you can build one for the product after it. Proof of distribution is what makes a raise feel seamless.",
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
      "Turned a 5,000-follower profile with only 50 right connections into 8,000 followers with 3,700+ elite market research agencies — bringing 100s of demos each month.",
    role: "Co-founder & CEO at Insightology",
    tags: [
      "Organic LinkedIn Growth",
      "Product-Benefit Driven Posts",
      "Raised Investment",
      "Hired Top Talent",
    ],
    heroImage: "/case-studies/insightology2.png",
    heroImageDriveLink:
      "https://drive.google.com/file/d/1HZpvE01Yy9a79qE6lwFhsKPUn-5hYEtu/view?usp=drive_link",
    sections: [
      {
        kind: "problem",
        label: "The Problem",
        intro:
          "On paper, 5,000 followers sounds healthy. In reality, only about 50 of them were the people Insightology actually sells to — market research agencies.",
        subLabel: "Key Issues:",
        bullets: [
          "Audience was a leftover from previous roles — ex-colleagues, recruiters, random connections",
          "Product posts reached thousands of people who would never buy",
          "The actual buyers — elite research agencies — had no idea the company existed",
          "Demo pipeline depended entirely on outbound and referrals",
          "The CEO's LinkedIn was a vanity metric, not a growth channel",
        ],
      },
      {
        kind: "strategy",
        label: "Our Strategy",
        intro:
          "We rebuilt the audience before scaling the content — then layered paid on top of proven organic.",
        subLabel: "What We Implemented:",
        bullets: [
          "Surgical network rebuild — personalized connection campaigns targeting decision-makers at market research agencies, ICP or nothing",
          "Product-benefit content — what agencies gain: faster insight turnaround, happier end-clients, margin saved",
          "Real product use cases instead of feature announcements",
          "Top organic posts converted into precisely-targeted LinkedIn Ads aimed at the same agency ICP",
          "Ad budget amplified only content already proven to convert attention into demo requests",
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
          "5,000 → 8,000 followers — with 3,700+ of them elite market research agencies (the actual ICP)",
          "60,000 impressions in a single month",
          "100+ demo calls generated through organic + LinkedIn Ads combined — now repeating monthly",
          "Founder visibility supported raising investment and hiring top talent",
        ],
      },
      {
        kind: "insight",
        label: "Key Insight",
        intro: "Follower count is vanity; follower composition is pipeline.",
        highlight:
          "Adding 3,000 of the right followers did more than 50,000 random ones ever could — because the feed is only a sales channel when your buyers are in it.",
      },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
