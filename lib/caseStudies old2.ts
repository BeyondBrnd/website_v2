// lib/caseStudies.ts
// Single source of truth for the "What makes Beyondbrnd Legit?" section
// and the individual /case-study/[slug] pages.
//
// ⚠️ DRAFT COPY: Every section body below is realistic SAMPLE content written
// so the pages don't look blank during review. The headline metrics (followers,
// impressions, demos, raise) come from Bharti's brief; the narrative around
// them is drafted and MUST be reviewed/replaced by Bharti before launch.
//
// IMAGE PLACEHOLDERS — download from Drive, drop into /public/case-studies/
// and the paths below will resolve. Filenames are suggestions.

export type CaseStudySection = {
  label: string;
  body: string; // \n\n = paragraph break (page renders with whitespace-pre-line)
};

export type CaseStudy = {
  slug: string;
  clientName: string;
  company: string;
  // Card (home page)
  cardImage: string;
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

export const caseStudies: CaseStudy[] = [
  // ────────────────────────────────────────────────────────────────
  // CLIENT 1 — Vijayashree Venkat, HumanAlpha
  // ────────────────────────────────────────────────────────────────
  {
    slug: "vijayashree-venkat-humanalpha",
    clientName: "Vijayashree Venkat",
    company: "HumanAlpha",
    cardImage: "/case-studies/vijayashree-card.jpeg",
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
    heroImage: "/case-studies/vijayashree-hero.webp",
    heroImageDriveLink:
      "https://drive.google.com/file/d/1pDxUlqwOsBpdqFVt6P4i9r7tP3b1KWNv/view?usp=drive_link",
    sections: [
      {
        label: "The Problem",
        body:
          "Vijayashree had 20+ years of HR leadership experience and was running HumanAlpha — but on LinkedIn, she looked like every other HR consultant.\n\nHer posts spoke about generic HR topics: hiring tips, workplace culture quotes, motivational content. The engagement was polite but useless — likes from peers, not conversations with the CEOs and founders who actually buy leadership consulting.\n\nThe result? Prospects who checked her profile before a sales call saw \"an HR person,\" not \"the strategic advisor my company needs.\" Deals that should have closed on reputation were stalling on perception.",
      },
      {
        label: "Our Strategy",
        body:
          "We repositioned her from HR generalist to CEO-level strategic voice — someone who speaks about business outcomes, not HR processes.\n\nProfile rebuild: New headline, banner, and about section anchored on the problems CEOs lose sleep over — leadership pipelines, succession risk, executive performance — not HR jargon.\n\nContent engine: 4 posts a week in her voice. Story-led posts from 20 years of boardroom moments, contrarian takes on leadership hiring, and client transformation narratives (anonymized) that let buyers see themselves in the story.\n\nStrategic engagement: Daily, deliberate commenting on posts by founders and CXOs in her ICP — putting her thinking in front of decision-makers instead of waiting for the algorithm.",
      },
      {
        label: "Results in 90 Days",
        body:
          "→ Followers grew into a compounding engine — now at 27,000+\n\n→ 75L+ (7.5M+) impressions per year on her content\n\n→ Inbound DMs from founders and CXOs replaced cold outreach — deals now start with \"I've been reading your posts\"\n\n→ Featured in PR/media as a recognized voice on strategic HR\n\n→ Used the same audience to attract and hire top talent for HumanAlpha",
      },
      {
        label: "Key Insight",
        body:
          "Buyers don't follow job titles — they follow points of view.\n\nThe moment Vijayashree stopped posting like an HR professional and started posting like a strategic advisor, the same expertise she always had finally became visible to the people who pay for it. Authority isn't built by saying you're an expert; it's built by consistently thinking in public where your buyers can watch.",
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
    cardImage: "/case-studies/yess-card.jpeg",
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
    heroImageDriveLink:
      "https://drive.google.com/file/d/11Sq_5WclRmSuT5lYFXxBuXwStTVjzhUY/view?usp=drive_link",
    sections: [
      {
        label: "The Problem",
        body:
          "Yess.ai was weeks from launch, heading into a seed raise — and the co-founder's LinkedIn was effectively dead. Months between posts, a profile that still read like his previous role, zero narrative about what Yess was building.\n\nInvestors do diligence the same way buyers do: they Google you, and they read your LinkedIn. A founder with no public story raises two questions before the first meeting even starts — can this person sell, and is anyone paying attention to this product?\n\nThey needed momentum that was visible from the outside, fast, and before the launch date.",
      },
      {
        label: "Our Strategy",
        body:
          "We built the entire pre-launch around one hero-product story: the painful, expensive problem Yess kills, told from the founder's seat.\n\nNarrative arc, not random posts: A planned 30-day sequence — the problem we lived through, why existing tools fail, behind-the-scenes of building the fix, early user reactions — so each post pulled readers deeper into the launch.\n\nSolution-driven content: Every post anchored on the customer's pain and the outcome, never on features. Demos and product visuals were framed as \"here's the moment this problem dies.\"\n\nInvestor-aware distribution: Deliberate engagement with VCs, operators, and design partners in the comments — so by the time pitch meetings happened, the deck felt like a recap, not an introduction.",
      },
      {
        label: "Results in 90 Days",
        body:
          "→ 400,000+ views in the first 30 days of the campaign\n\n→ A dead profile became the loudest channel for the yess.ai launch\n\n→ Investor conversations opened inbound — several began with the content itself\n\n→ Seed round raised — with the founder's public momentum doing the warm-up the cold deck used to do",
      },
      {
        label: "Key Insight",
        body:
          "Investors don't just fund products — they fund founders who can create attention.\n\nA visible founder de-risks the bet: if you can build an audience for the problem before launch, you can build one for the product after it. The LinkedIn profile became proof of distribution, and proof of distribution is what made the raise feel seamless.",
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
    cardImage: "/case-studies/insightology-card.png",
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
    heroImageDriveLink:
      "https://drive.google.com/file/d/1HZpvE01Yy9a79qE6lwFhsKPUn-5hYEtu/view?usp=drive_link",
    sections: [
      {
        label: "The Problem",
        body:
          "On paper, 5,000 followers sounds healthy. In reality, only about 50 of them were the people Insightology actually sells to — market research agencies.\n\nThe audience was a leftover from previous roles: ex-colleagues, recruiters, random connections. Posts about Insightology's product reached thousands of people who would never buy it, while the actual buyers — elite research agencies — had no idea the company existed.\n\nDemo pipeline depended entirely on outbound and referrals. The CEO's LinkedIn was a vanity metric, not a growth channel.",
      },
      {
        label: "Our Strategy",
        body:
          "We rebuilt the audience before scaling the content — then layered paid on top of organic.\n\nSurgical network rebuild: Systematic, personalized connection campaigns targeting decision-makers at market research agencies — quality over volume, ICP or nothing.\n\nProduct-benefit content: Posts built around what agencies gain — faster insight turnaround, happier end-clients, margin saved — shown through real product use cases rather than feature announcements.\n\nOrganic + LinkedIn Ads combined: Top organic posts were turned into precisely-targeted ad campaigns aimed at the same agency ICP, so the budget amplified content already proven to convert attention into demo requests.",
      },
      {
        label: "Results in 90 Days",
        body:
          "→ 5,000 → 8,000 followers — with 3,700+ of them elite market research agencies (the actual ICP)\n\n→ 60,000 impressions in a single month\n\n→ 100+ demo calls generated through organic + LinkedIn Ads combined — now repeating monthly\n\n→ The founder's visibility supported raising investment and hiring top talent for the team",
      },
      {
        label: "Key Insight",
        body:
          "Follower count is vanity; follower composition is pipeline.\n\nAdding 3,000 of the right followers did more than 50,000 random ones ever could — because every post now lands in front of buyers. And when organic content proves what converts, ads stop being a gamble: you're just paying to show a winning message to more of the same audience.",
      },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}