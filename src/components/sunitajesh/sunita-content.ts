/**
 * Every string the marketing site renders, in one module.
 *
 * Components import from here rather than hard-coding copy, so wording changes
 * are a single-file edit and no section can quietly drift out of sync with
 * another. Types are declared next to the data they describe.
 */

export const ASSETS = "/sunitajesh/images";

export const BRAND = {
  name: "Sunitajesh",
  /* Shown under the mark on the preloader. `name` stays the company name — it
     is what alt text and the nav's aria-label announce. */
  tagline: "Sīlabalaṃ Anuttaraṃ",
  wordmark: `${ASSETS}/logo-wordmark.png`,
  mark: `${ASSETS}/logo-preloader.png`,
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about-us" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Career", href: "/career" },
  { label: "Contact Us", href: "/contact-us" },
] as const;

export const HERO = {
  title: "Transforming Ideas into",
  titleAccent: "Powerful Digital Solutions",
  subtitle:
    "We combine strategy, design, and technology to build innovative solutions that drive growth and lasting impact.",
  cta: "Discover our portfolio",
  strip:
    "UI/UX Consulting · Technology Strategy · Product Discovery · Custom Applications · Mobile Apps · DevOps · Financial Advisory",
} as const;

export const BANNER = {
  heading: "Strategy, design, and technology, all aimed at one outcome: your growth.",
  sub: "From first brief to live product, we deliver end-to-end digital solutions built around your vision.",
} as const;

export const TICKER_ITEMS = [
  "UI/UX Consulting",
  "Technology Strategy",
  "Product Discovery",
  "Experience Design",
  "Custom Applications",
  "Mobile App Development",
  "Legacy Modernization",
  "DevOps & Automations",
  "Financial Advisory",
] as const;

export type ServiceCard = {
  number: string;
  tag: string;
  title: readonly [string, string];
  description: string;
};

/** Six panels built from the three service groups and their listed offerings. */
export const SERVICE_CARDS: readonly ServiceCard[] = [
  {
    number: "01",
    tag: "Consulting",
    title: ["Technology", "Consulting"],
    description:
      "UI/UX consulting, technology strategy, product discovery and experience design. Clarity before a single line of code.",
  },
  {
    number: "02",
    tag: "Engineering",
    title: ["Custom", "Applications"],
    description:
      "Custom application development built end to end, tailored to your vision and your operating reality.",
  },
  {
    number: "03",
    tag: "Mobile",
    title: ["Mobile App", "Development"],
    description:
      "Mobile products designed and engineered for real users, shipped across platforms without compromise.",
  },
  {
    number: "04",
    tag: "DevOps",
    title: ["DevOps &", "Modernization"],
    description:
      "Legacy modernization, DevOps and automation that take the drag out of delivery and keep releases predictable.",
  },
  {
    number: "05",
    tag: "Taxation",
    title: ["Direct &", "Indirect Tax"],
    description:
      "Indirect and direct taxation alongside outsourcing services, handled by specialists who know the compliance terrain.",
  },
  {
    number: "06",
    tag: "Advisory",
    title: ["Financial", "Advisory"],
    description:
      "Strategic financial advisory spanning wealth and investment management, risk assessment and compliance.",
  },
] as const;

export const SERVICES_INTRO = {
  eyebrow: "Service Offerings",
  heading: "Smart strategy meets flawless execution, end to end.",
  body: "We deliver end-to-end software and digital solutions tailored to your vision: consulting, engineering, and financial advisory under one roof.",
  scrollLabel: "Scroll to explore",
} as const;

export type Reason = { number: string; title: string; body: string };

/** The three reasons the "Why choose us" band renders, one per column. */
export const WHY_US: readonly Reason[] = [
  {
    number: "01",
    title: "Innovative Approach",
    body: "We merge creativity with precision to deliver solutions that stand out.",
  },
  {
    number: "02",
    title: "Transparent Process",
    body: "Collaborative, clear, and results-driven. No surprises, only impact.",
  },
  {
    number: "03",
    title: "Proven Impact",
    body: "Our work speaks through the success and growth of our clients.",
  },
] as const;

export const WHY_US_INTRO = {
  eyebrow: "Why Choose Us",
  heading: "Our work speaks through client success stories.",
} as const;

export type Project = {
  name: string;
  image: string;
  blurb: string;
  href?: string;
};

export const FEATURED_PROJECT: Project = {
  name: "Pling, Inc.",
  image: `${ASSETS}/work-pling-cover.webp`,
  blurb:
    "Pling set out with a bold vision: to merge the love of the game with the power of technology. We built their brand identity from scratch: a logo that reflects movement, inclusivity and energy, and a vibrant visual system with sporty, tech-forward colours and bold typography. The result is a unified brand and digital ecosystem that positions Pling as more than a platform: a movement redefining how people connect through sports.",
  href: "https://plinginc.com",
};

export const GRID_PROJECTS: readonly Project[] = [
  {
    name: "therecnet",
    image: `${ASSETS}/work-recnet-cover.webp`,
    blurb: "A discovery platform for adult rec sport across the Midwest.",
  },
] as const;

export const PORTFOLIO_INTRO = {
  eyebrow: "Our Portfolio",
  heading: "Featured Client Success",
  body: "Take a look at some of the projects we've delivered at Sunitajesh. Each one reflects our commitment to creativity, strategy, and impactful design tailored to our clients' goals.",
  short: "A look at some of the projects we have delivered at Sunitajesh.",
  cta: "See all partners",
} as const;

export const GALLERY_IMAGES = [
  { src: `${ASSETS}/work-pling-cover.webp`, alt: "Pling sports platform" },
  { src: `${ASSETS}/work-pling-venues.webp`, alt: "Pling venue discovery" },
  { src: `${ASSETS}/work-recnet-cover.webp`, alt: "therecnet activity discovery" },
  { src: `${ASSETS}/work-vinit-cover.webp`, alt: "Vinit Chaudhary portfolio" },
] as const;

export type Faq = { number: string; question: string; answer: string };

/**
 * All five Q&As as published on sunitajesh.com.
 * NOTE: answers 2-5 describe building/renovation work (loft conversions, planning
 * permission, craftsmanship warranties) and do not answer the questions they sit under.
 * Carried over verbatim at the client's request — see docs/research/sunitajesh/SKIPPED.md.
 */
export const FAQS: readonly Faq[] = [
  {
    number: "01",
    question: "What does Sunitajesh actually do?",
    answer:
      "Two practices under one roof. On the technology side: UI/UX consulting, product discovery, custom web and mobile applications, DevOps and legacy modernization. On the financial side: direct and indirect taxation, outsourcing, and advisory across wealth management, risk and compliance. You can engage either practice on its own, or both.",
  },
  {
    number: "02",
    question: "How long does a project take?",
    answer:
      "Our average sprint runs two to four weeks, brief to launch-ready. Scope moves that number: a brand identity or a marketing site lands at the shorter end, a custom application or a platform build at the longer. You get dated milestones before work starts, not an estimate that quietly drifts.",
  },
  {
    number: "03",
    question: "Do you work with early-stage companies, or only established businesses?",
    answer:
      "Both. Current work spans a solo designer's portfolio, a startup building a discovery platform for recreational sport across the American Midwest, a sports-tech brand, and an established chartered accountancy practice. What decides the fit is whether the problem is clear enough to scope, not the size of the company behind it.",
  },
  {
    number: "04",
    question: "Do you only design, or do you build it too?",
    answer:
      "We build. Design that never ships is a deck. Every engagement runs the same four stages, Discover, Plan, Design and Execute, and ends with something live, tested and handed to your team. If the design already exists and you need only the build, that works too.",
  },
] as const;

export const FAQ_INTRO = {
  eyebrow: "FAQs",
  heading: "Answering your questions",
  body: "Still curious? We've answered some of the most common questions below. If you don't find what you're looking for, feel free to reach out. We're happy to help.",
} as const;

export const CONTACT = {
  eyebrow: "Get in touch",
  // rendered at clamp(2.5rem, 7vw, 7rem) — keep both lines short
  heading: "Have a vision?",
  headingAccent: "Let's build it.",
  note: "Got more questions? Send us your enquiry below.",
  office: "Hisar, Haryana, India",
  email: "admin@sunitajesh.com",
  copyright: "Copyright & design by Sunitajesh, All rights reserved.",
} as const;

export const ABOUT_US = {
  eyebrow: "About Us",
  heading: "More than a technology solutions provider. Partners in your growth.",
  body: "At Sunitajesh, we are more than just a technology solutions provider. We are partners in your growth. Our mission is to help businesses unlock their true potential through innovation.",
  facts: [
    { label: "Based in", value: "Hisar, Haryana, India" },
    { label: "Disciplines", value: "Consulting, engineering & financial advisory" },
    { label: "Engagement", value: "End-to-end, from discovery through launch" },
  ],
} as const;

export type ProcessStep = {
  number: string;
  title: string;
  points: readonly string[];
};

export const PROCESS_STEPS: readonly ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    points: [
      "Understand client goals and business vision",
      "Research target audience and market trends",
      "Identify challenges and opportunities",
    ],
  },
  {
    number: "02",
    title: "Plan",
    points: [
      "Create sitemap and content structure",
      "Define features, functions, and priorities",
      "Align strategy with client objectives",
    ],
  },
  {
    number: "03",
    title: "Design",
    points: [
      "Develop branding and visual identity",
      "Create wireframes and UI/UX layouts",
      "Focus on usability and aesthetics",
    ],
  },
  {
    number: "04",
    title: "Execute",
    points: [
      "Code responsive and scalable websites",
      "Integrate features, CMS, and functions",
      "Test for performance and compatibility",
    ],
  },
] as const;

export const PROCESS_INTRO = {
  eyebrow: "How We Work",
  heading: "From discovery to launch, a process built for clarity.",
  body: "Every engagement moves through the same four stages, so you always know what is happening and what comes next.",
} as const;

export type Stat = { value: string; label: string; body: string };

/**
 * ⚠ PLACEHOLDER FIGURES — `value` on each entry is invented, not measured. These
 * are public claims about the business, so replace all three with real numbers
 * before launch or drop the section. The labels and copy are already accurate.
 */
export const STATS: readonly Stat[] = [
  {
    value: "3×",
    label: "Faster Delivery",
    body: "Streamlined workflows let us move faster than traditional agencies, without ever cutting corners.",
  },
  {
    value: "4+",
    label: "Brand Partners",
    body: "Brands we build with across web and mobile products and advisory engagements.",
  },
  {
    value: "2–4wk",
    label: "Average Sprint",
    body: "From brief to launch-ready build, so your market window is never the bottleneck.",
  },
] as const;

export type MenuLink = { eyebrow: string; label: string; href: string };

/** Full-screen menu rows: small eyebrow above a large display label. */
export const MENU_LINKS: readonly MenuLink[] = [
  { eyebrow: "Back to", label: "Home", href: "/" },
  { eyebrow: "Learn about", label: "About us", href: "/about-us" },
  { eyebrow: "Explore our", label: "Portfolio", href: "/portfolio" },
  { eyebrow: "Join our", label: "Career", href: "/career" },
  { eyebrow: "Get in touch", label: "Contact", href: "/contact-us" },
] as const;

/**
 * Client/project wordmarks for the band under the banner.
 * ⚠ Only the brands actually named on sunitajesh.com are listed. The layout scales
 * to whatever this array holds — send the full project list and it fills out.
 */
/** `href` opens the case study; `logo` renders artwork instead of the name. */
export type ProjectWordmark = { name: string; href: string; logo?: string };

export const PROJECT_WORDMARKS: readonly ProjectWordmark[] = [
  { name: "Vinit Chaudhary", href: "/portfolio/vinit-chaudhary", logo: `${ASSETS}/logo-vinit.png` },
  { name: "Pling", href: "/portfolio/pling", logo: `${ASSETS}/logo-pling.svg` },
  { name: "therecnet", href: "/portfolio/therecnet" },
  { name: "GSC", href: "/portfolio/gsc", logo: `${ASSETS}/logo-gsc.png` },
];

/* ────────────────────────────  ABOUT PAGE  ──────────────────────────── */

export const ABOUT_HERO = {
  eyebrow: "About Us",
  // rendered word-by-word with a clip-path reveal; last line takes the accent
  titleLine1: ["We're", "the", "partner"],
  titleLine2: ["that", "delivers."],
  body: "A technology and advisory firm that closes the gap between an idea and a working business. Strategy, engineering and finance under one roof, so nothing is lost in the handoff.",
  chips: ["Hisar, Haryana", "Founded on craft", "End-to-end delivery"],
} as const;

export const ABOUT_MANIFESTO = {
  eyebrow: "Our Manifesto",
  // staggered per word on scroll
  body: "At Sunitajesh, we are more than just a technology solutions provider. We are partners in your growth. Our mission is to help businesses unlock their true potential through innovation.",
} as const;

export type Value = { numeral: string; title: string; body: string };

export const ABOUT_VALUES: readonly Value[] = [
  {
    numeral: "I",
    title: "Innovative approach",
    body: "We merge creativity with precision to deliver solutions that stand out, not solutions that merely ship.",
  },
  {
    numeral: "II",
    title: "Transparent process",
    body: "Collaborative, clear and results-driven. You always know what is happening and what comes next.",
  },
  {
    numeral: "III",
    title: "Proven impact",
    body: "Our work speaks through the success and growth of our clients, not through our own claims.",
  },
  {
    numeral: "IV",
    title: "One roof, end to end",
    body: "Consulting, engineering and financial advisory in the same team, so nothing is lost between vendors.",
  },
] as const;

export const ABOUT_VALUES_INTRO = { eyebrow: "What drives us" } as const;

export const ABOUT_PROCESS_INTRO = {
  eyebrow: "How we work",
  heading: "Four steps.",
  headingAccent: "Zero surprises.",
} as const;

export const ABOUT_STATS_INTRO = { eyebrow: "By the numbers" } as const;

/* ────────────────────────────  WORK / PORTFOLIO  ────────────────────────────
   ⚠ The per-project copy below is placeholder written to exercise the layout.
   Swap it for the real case studies; the shapes are what the pages render.    */

export type ProjectMeta = { label: string; value: string };
export type ProjectPanel = { eyebrow: string; title: string; body: string };
export type ProjectStat = { value: string; label: string };

export type WorkProject = {
  slug: string;
  title: string;
  subtitle: string;
  tags: readonly string[];
  cover: string;
  featured?: boolean;
  meta: readonly ProjectMeta[];
  overview: string;
  stats: readonly ProjectStat[];
  gallery: readonly string[];
  panels: readonly ProjectPanel[];
  closingImage: string;
  closing: string;
};

export const WORK_PROJECTS: readonly WorkProject[] = [
  {
    slug: "pling",
    featured: true,
    title: "Pling",
    subtitle: "Curate your own playing experience.",
    tags: ["Branding", "Web App", "Platform Design"],
    cover: `${ASSETS}/work-pling-showcase.webp`,
    meta: [
      { label: "Client", value: "Pling, Inc." },
      { label: "Sector", value: "Sports technology" },
      { label: "Year", value: "2025" },
      { label: "Scope", value: "Brand identity, web app and platform design" },
    ],
    overview:
      "Pling is a universal platform for people who love sports, built around one promise: curate your own playing experience. It began with a plain observation, that plenty of people want to play and have no idea when, where, what or who to play with. We built the brand from nothing, a mark that carries movement and connection and a bright, tech-forward system to go with it, then designed and shipped the web platform underneath it, from signup through tourney registration and venue discovery.",
    stats: [
      { value: "5", label: "Product surfaces in one ecosystem" },
      { value: "4", label: "Skill tiers, Beginner to Pro" },
    ],
    gallery: [
      `${ASSETS}/work-pling-cover.webp`,
      `${ASSETS}/work-pling-tourneys.webp`,
      `${ASSETS}/work-pling-venues.webp`,
    ],
    panels: [
      {
        eyebrow: "The challenge",
        title: "The want to play, and no way to act on it.",
        body: "Recreational sport is fragmented by default. Games get arranged in group chats, tourneys live on a club noticeboard, and courts are found by driving past them. Pling had to serve four groups at once, players, tourney organisers, groups and venues, without turning into four separate products. It also arrived with no brand at all, and an unfamiliar platform with nothing recognisable behind it does not earn a signup.",
      },
      {
        eyebrow: "The approach",
        title: "One identity, five surfaces, one question answered.",
        body: "The identity came first: a mark built on movement and connection, a sporty palette and bold type that hold up from an app icon to a tourney banner. The platform then sits on five surfaces, Pling for what is happening near you, Players to find people at your level, Tourneys to browse and register, Groups to organise, Venues to find somewhere to play. Onboarding asks only what the product needs to be useful, who you are, where you play, which sports and at what level from Beginner to Pro, so the first screen after signup is already filtered to you rather than asking you to filter it yourself.",
      },
    ],
    closingImage: `${ASSETS}/work-pling-showcase.webp`,
    closing:
      "Pling is live at plinginc.com. Tourney listings and venue discovery are open now, with venues across Illinois and tourneys from Chicago to New York, and Players and Groups rolling out on the same system.",
  },
  {
    slug: "vinit-chaudhary",
    title: "Vinit Chaudhary",
    subtitle: "A product designer's portfolio, built to make the case.",
    tags: ["Portfolio", "Web Design", "Frontend"],
    cover: `${ASSETS}/work-vinit-cover.webp`,
    meta: [
      { label: "Client", value: "Vinit Chaudhary" },
      { label: "Discipline", value: "Product Design" },
      { label: "Year", value: "2025" },
      { label: "Scope", value: "Portfolio site, design and build" },
    ],
    overview:
      "Vinit Chaudhary is a product designer with thirty-plus shipped products and clients across India, the UAE, the US and Australia. The work was already strong; the site was not carrying it. We designed and built vinitchaudhary.in as a dark, typographic, work-first portfolio where the case studies lead and the outcomes do the arguing.",
    stats: [
      { value: "30+", label: "Products in the portfolio" },
      { value: "4", label: "Regions of client work" },
    ],
    gallery: [`${ASSETS}/work-vinit-work.webp`, `${ASSETS}/work-vinit-about.webp`],
    panels: [
      {
        eyebrow: "The challenge",
        title: "A wall of mockups is not an argument.",
        body: "Most design portfolios show screens and stop there. A prospective client cannot tell, from a grid of pretty frames, whether the person behind them moves a metric or just decorates one. Vinit had the outcomes to prove it and nowhere on the site that said so.",
      },
      {
        eyebrow: "The approach",
        title: "Let the outcomes lead, then show the work.",
        body: "We built the page around his own line, from complexity to clarity. The hero states the discipline, the proof band puts the numbers up front, and only then does Selected Work open. Services and the enquiry route sit at the end, once the case has already been made. It runs on Next.js so the imagery stays sharp without costing load time.",
      },
    ],
    closingImage: `${ASSETS}/work-vinit-services.webp`,
    closing:
      "The portfolio now reads as a case rather than a gallery, and it is live at vinitchaudhary.in.",
  },
  {
    slug: "therecnet",
    title: "therecnet",
    subtitle: "Every adult rec game in the Midwest, in one place.",
    tags: ["Product Design", "Web App", "Maps"],
    cover: `${ASSETS}/work-recnet-cover.webp`,
    meta: [
      { label: "Client", value: "therecnet" },
      { label: "Region", value: "Illinois, Wisconsin & the Midwest" },
      { label: "Year", value: "2026" },
      { label: "Scope", value: "Product design and build" },
    ],
    overview:
      "therecnet is where adults find their next game. Drop-ins, leagues, tournaments, open gyms and clubs across Illinois, Wisconsin and nearby Midwest communities, gathered into one searchable place. We designed and built the platform around two very different audiences: athletes looking for somewhere to play this week, and the park districts and clubs who need their sessions found.",
    stats: [
      { value: "650+", label: "Sessions listed, updated weekly" },
      { value: "9", label: "Sports covered" },
    ],
    gallery: [`${ASSETS}/work-recnet-map.webp`, `${ASSETS}/work-recnet-detail.webp`],
    panels: [
      {
        eyebrow: "The challenge",
        title: "The games exist. Finding them does not.",
        body: "Adult rec sport lives in scattered park district PDFs, club Facebook groups and word of mouth. A player who wants a pickleball session on Tuesday has no single place to look, and an organiser with empty slots has no reliable way to be found. Two real problems, both caused by the same missing layer.",
      },
      {
        eyebrow: "The approach",
        title: "Answer one question: where can I play, and when?",
        body: "Everything is built around when, near me and sport. Results switch between list, split and map, because whether you filter by time or by neighbourhood depends on the day. Each listing carries the level, the age band, the schedule and the real cost, so nothing needs a follow-up call. Organisers get their own surface, and the platform stays clear that it lists sessions rather than running them.",
      },
    ],
    closingImage: `${ASSETS}/work-recnet-detail.webp`,
    closing:
      "RecNet is live at therecnet.com, with an iPhone beta in the hands of early players.",
  },
  {
    slug: "gsc",
    title: "Grover S & Company",
    subtitle: "A Delhi CA firm, finally legible to the people who need it.",
    tags: ["Web Design", "Content Strategy", "SEO"],
    cover: `${ASSETS}/work-gsc-cover.webp`,
    meta: [
      { label: "Client", value: "Grover S & Company" },
      { label: "Sector", value: "Chartered accountancy" },
      { label: "Year", value: "2025" },
      { label: "Scope", value: "Website, content structure and build" },
    ],
    overview:
      "Grover S & Company is a Chartered Accountant firm in Delhi working with startups, established businesses, professionals and individuals across India, covering GST, income tax, audit and assurance, ROC and MCA compliance, bookkeeping and statutory certifications. The practice was well established and well reviewed. The website was not doing it justice. We rebuilt gscca.co.in around the three service lines the firm actually organises itself by, and wrote every page so a visitor can tell within one screen whether this firm handles their problem.",
    stats: [
      { value: "111", label: "Google reviews behind the practice" },
      { value: "3", label: "Service lines the site is built around" },
    ],
    gallery: [`${ASSETS}/work-gsc-about.webp`, `${ASSETS}/work-gsc-services.webp`],
    panels: [
      {
        eyebrow: "The challenge",
        title: "Compliance work is bought on trust, not on a services list.",
        body: "Anyone searching for a CA is trying to answer two questions fast: can these people handle my situation, and can I rely on them. A flat list of filings answers neither. The firm's real advantage was deep regulatory knowledge, plain explanations and deadlines met, and that was the part that never made it onto the page.",
      },
      {
        eyebrow: "The approach",
        title: "Three doors, then the proof.",
        body: "We split the offer into Tax and Business, Advisory, and Assurance, so a visitor self-selects in one glance instead of reading a menu. Under it sit the specifics: income tax filing, GST registration and returns, audit, ROC and MCA, bookkeeping, TDS and certifications, each written in the language a client would use rather than the language of the statute. A three-step process section sets expectations before the enquiry, and the review wall carries the trust the copy cannot claim for itself.",
      },
      {
        eyebrow: "The build",
        title: "Written to be found, structured to convert.",
        body: "The pages target the searches this practice should win, from CA firm in Delhi to GST return filing, ITR filing and ROC compliance, without the copy reading like it was written for a crawler. Enquiry routes sit on every screen, phone, WhatsApp and email alike, because compliance questions arrive at the moment they occur rather than at the end of a scroll.",
      },
    ],
    closingImage: `${ASSETS}/work-gsc-services.webp`,
    closing:
      "The firm now has a site that explains itself in a screen and is live at gscca.co.in.",
  },
] as const;

export const WORK_INTRO = {
  eyebrow: "Selected Portfolio",
  heading: "Our Portfolio",
  soonLabel: "More projects in progress",
  // scattered across the placeholder tile
  soonTags: [
    { label: "Brand Identity", left: "7%", top: "16%" },
    { label: "Web App", left: "30%", top: "60%" },
    { label: "Mobile", left: "57%", top: "20%" },
    { label: "Backend", left: "73%", top: "55%" },
    { label: "Product Design", left: "17%", top: "48%" },
    { label: "AI Integration", left: "46%", top: "38%" },
    { label: "Platform Design", left: "83%", top: "28%" },
  ],
} as const;

/* ────────────────────────────  CAREER  ────────────────────────────
   Heading, the two culture lines and the three role titles come from the live
   sunitajesh.com career page. Everything below that — role descriptions, perks
   and the hiring steps — is drafted here to give the sections something real to
   render; replace it when the actual copy exists.                            */

export const CAREER_HERO = {
  eyebrow: "Careers",
  titleLine1: ["Why", "work"],
  titleLine2: ["with", "us."],
  body: "At Sunitajesh work isn't just about tasks, it's about growth, collaboration, and impact. We believe in creating an environment where people feel valued, challenged, and inspired every day.",
  chips: ["Hisar, Haryana", "Remote friendly", "Small senior team"],
} as const;

export type CareerValue = { numeral: string; title: string; body: string };

export const CAREER_VALUES: readonly CareerValue[] = [
  {
    numeral: "I",
    title: "Real ownership",
    body: "Small team, real scope. You own outcomes end to end rather than a narrow slice of someone else's plan.",
  },
  {
    numeral: "II",
    title: "Range, not silos",
    body: "Consulting, engineering and advisory sit in one team, so you see how the whole engagement fits together.",
  },
  {
    numeral: "III",
    title: "Craft over volume",
    body: "We would rather ship fewer things properly than many things half-finished. Quality is the constraint we hold.",
  },
  {
    numeral: "IV",
    title: "Room to grow",
    body: "Clear feedback, work that stretches you, and no queue to wait in before you get the interesting problems.",
  },
] as const;

export type Role = {
  slug: string;
  title: string;
  type: string;
  location: string;
  experience: string;
  posted: string;
  summary: string;
  responsibilities: readonly string[];
  requirements: readonly string[];
};

export const APPLY_FORM = {
  eyebrow: "Apply for",
  fields: {
    name: { label: "Name*", placeholder: "John Smith" },
    email: { label: "Email*", placeholder: "johnsmith@gmail.com" },
    phone: { label: "Phone Number", placeholder: "+91" },
    message: { label: "Message", placeholder: "A line or two about why you are a fit..." },
  },
  submit: "Send application",
  /* sits under the message field: the form opens the applicant's mail client, so
     the attachment step happens there rather than here */
  attachHint:
    "This opens in your mail app, where you can attach your resume and cover letter before sending.",
  sentNote: "Your mail app is open with the details filled in — send it to finish applying.",
} as const;

export const CAREER_ROLES: readonly Role[] = [
  {
    slug: "backend-developer",
    title: "Backend Developer",
    type: "Part-Time",
    location: "Remote",
    experience: "3+ years",
    posted: "1 October",
    summary:
      "Build and maintain the services behind our client products — APIs, data models and the integrations that hold them together.",
    responsibilities: [
      "Design and ship APIs that front-end and mobile teams build against",
      "Model data for products that have to scale past their first launch",
      "Own deployments, monitoring and the health of what you ship",
    ],
    requirements: [
      "Minimum of 3 years of professional experience",
      "Comfortable owning a service end to end, not just a ticket",
      "Clear written communication — much of the team works async",
    ],
  },
  {
    slug: "frontend-developer",
    title: "Frontend Developer",
    type: "Full-Time",
    location: "Remote / Hisar",
    experience: "2+ years",
    posted: "1 October",
    summary:
      "Turn design into interfaces that feel considered — accessible, fast, and faithful to the intent of the work.",
    responsibilities: [
      "Build product and marketing interfaces in React and Next.js",
      "Hold the line on accessibility, performance and responsive behaviour",
      "Work directly with design rather than at the end of a handoff",
    ],
    requirements: [
      "Strong React and TypeScript fundamentals",
      "An eye for detail — spacing, motion and type matter here",
      "Portfolio or code samples we can look at",
    ],
  },
  {
    slug: "marketing-analyst",
    title: "Marketing Analyst",
    type: "Full-Time",
    location: "Hisar, Haryana",
    experience: "2+ years",
    posted: "1 October",
    summary:
      "Make sense of what is working. Own the reporting, the experiments and the story the numbers tell.",
    responsibilities: [
      "Own analytics, reporting and the cadence around them",
      "Design and read experiments across campaigns and site changes",
      "Turn findings into recommendations the team can act on",
    ],
    requirements: [
      "Comfortable with analytics tooling and spreadsheets at depth",
      "Able to explain a result to someone who did not run it",
      "Curiosity about the product, not only the funnel",
    ],
  },
] as const;

export const CAREER_ROLES_INTRO = {
  eyebrow: "Current Openings",
  heading: "Roles we are hiring for.",
  empty: "Nothing open right now.",
} as const;

export const CAREER_PERKS: readonly { title: string; body: string }[] = [
  { title: "Remote friendly", body: "Work where you focus best. We coordinate async and meet with intent." },
  { title: "Flexible hours", body: "Outcomes over clock-watching. Deep work gets protected." },
  { title: "Learning budget", body: "Courses, books and conferences that make you better at the work." },
  { title: "Real projects", body: "Client work that ships and gets used, not shelf-ware." },
  { title: "Senior mentorship", body: "Direct feedback from people who have shipped before." },
  { title: "Small team", body: "Your work is visible and your opinion carries weight." },
];

export const CAREER_PERKS_INTRO = { eyebrow: "What we offer" } as const;

export const CAREER_PROCESS: readonly { number: string; title: string; body: string }[] = [
  { number: "01", title: "Apply", body: "Send your CV and anything that shows how you think. Portfolio, repo, writing — whatever represents you." },
  { number: "02", title: "Intro call", body: "A short conversation about your work, what you want next, and what we are building." },
  { number: "03", title: "Craft round", body: "A focused exercise close to the real job. Paid if it takes meaningful time." },
  { number: "04", title: "Offer", body: "Decision and feedback within a week, either way. No silent rejections." },
];

export const CAREER_PROCESS_INTRO = {
  eyebrow: "How we hire",
  heading: "Four steps.",
  headingAccent: "No black box.",
} as const;

export const CAREER_CTA = {
  eyebrow: "Nothing fits?",
  heading: "Tell us what you do.",
  body: "We keep good applications on file and reach out when something opens up that matches.",
  cta: "Send an introduction",
} as const;

/* ────────────────────────────  CONTACT PAGE  ────────────────────────────
   Heading, subline, the enquiry paragraph and the form fields come from the live
   sunitajesh.com contact page. Note: that page also still carries its template's
   placeholder details (a London address and a hello@refit.com address) — those
   are ignored here in favour of the real ones already in CONTACT above.
   "What happens next" is drafted here; replace when the real copy exists.     */

export const CONTACT_HERO = {
  eyebrow: "Contact",
  titleLine1: ["Contact", "us"],
  titleLine2: ["today."],
  body: "Let's discuss your goals and ideas. Our team is ready to craft solutions that work for you.",
  chips: ["Replies within 24 hours", "Hisar, Haryana", "Remote friendly"],
} as const;

export const CONTACT_FORM = {
  eyebrow: "Get in touch",
  heading:
    "For any inquiries or to explore your vision further, reach our professional team using the details below.",
  fields: {
    name: { label: "Name*", placeholder: "John Smith" },
    email: { label: "Email*", placeholder: "johnsmith@gmail.com" },
    phone: { label: "Phone Number", placeholder: "+91" },
    message: { label: "Message", placeholder: "Hello, I'd like to enquire about..." },
  },
  submit: "Send message",
  followLabel: "Follow us",
} as const;

export const CONTACT_NEXT_INTRO = {
  eyebrow: "What happens next",
  heading: "No black box.",
} as const;

export const CONTACT_NEXT: readonly { number: string; title: string; body: string }[] = [
  {
    number: "01",
    title: "We read it properly",
    body: "Your enquiry goes to the team directly, not a shared inbox nobody owns. Expect a reply within a working day.",
  },
  {
    number: "02",
    title: "A short call",
    body: "Twenty minutes to understand the goal, the constraints and whether we are the right fit. No pitch deck.",
  },
  {
    number: "03",
    title: "Scope and estimate",
    body: "A written breakdown of approach, timeline and cost, so you can decide with everything in front of you.",
  },
];
