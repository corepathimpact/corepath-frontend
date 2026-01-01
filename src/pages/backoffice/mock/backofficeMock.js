export const mockUserProfile = {
  fullName: "CorePath Member",
  title: "Parent (VDP/VDL)",
  userId: "USER-PLACEHOLDER",
  enrollmentDate: "2026-01-01",
  phoneNumber: "+000 000 0000",
  location: "—",
  sponsor: "—",
  pagCoach: "—",
  referralLink: "—",
  email: "user@corepathimpact.com",
};

export const mockCarouselSlides = [
  {
    title: "Today’s Value Focus",
    subtitle: "Placeholder slide — API-backed later.",
    imageSrc: "/images/hero-bg-1.jpg",
    imageAlt: "Family learning moment",
  },
  {
    title: "Your Weekly Momentum",
    subtitle: "Placeholder slide — APAT-aware later.",
    imageSrc: "/images/hero-bg-2.jpg",
    imageAlt: "Weekly momentum background",
  },
  {
    title: "Next Training Recommended",
    subtitle: "Placeholder slide — orchestration later.",
    imageSrc: "/images/hero-bg-3.jpg",
    imageAlt: "Training recommendation background",
  },
  {
    title: "My Office Snapshot",
    subtitle: "Placeholder slide — personalized summaries later.",
    imageSrc: "/images/hero-bg-4.jpg",
    imageAlt: "Backoffice snapshot background",
  },
  {
    title: "PAG & Community",
    subtitle: "Placeholder slide — PAG insights later.",
    imageSrc: "/images/group-african-kids-paying-attention-class.jpg",
    imageAlt: "Community learning group",
  },
  {
    title: "Impact Transfer",
    subtitle: "Placeholder slide — impact + rewards views later.",
    imageSrc: "/images/family-values-practice.jpg",
    imageAlt: "Family values practice",
  },
];

export const mockQuickTiles = [
  { title: "My Office", to: "/my-office" },
  { title: "Continue Training", to: "/my-office" },
  { title: "My Performance", to: "/my-office" },
  { title: "My Financials", to: "/my-office" },
  { title: "My PAG", to: "/my-office" },
  { title: "My Impact", to: "/my-office" },
];

export const mockMonthTabs = ["JAN", "FEB", "MAR"];

// Mock trend data for charts (Phase 5). This is placeholder-only until backend analytics arrive.
export const mockApatMonthlyTrend = [
  { label: "Jan", apat: 72 },
  { label: "Feb", apat: 75 },
  { label: "Mar", apat: 78 },
];

export const mockChildren = [
  {
    id: "child-1",
    name: "Child A",
    predisposition: "BLUE",
    valuesTrained: 6,
    currentValue: "RESPECT",
    progressPct: 62,
    averageScore: 78,
    commonCard: "STAR",
    areaStruggledIn: "Consistency",
    valuesNotCovered: 2,
  },
  {
    id: "child-2",
    name: "Child B",
    predisposition: "GOLD",
    valuesTrained: 4,
    currentValue: "DILIGENCE",
    progressPct: 44,
    averageScore: 71,
    commonCard: "CORRECTIVE",
    areaStruggledIn: "Follow-through",
    valuesNotCovered: 4,
  },
  {
    id: "child-3",
    name: "Child C",
    predisposition: "GREEN",
    valuesTrained: 7,
    currentValue: "HONESTY",
    progressPct: 75,
    averageScore: 83,
    commonCard: "STAR",
    areaStruggledIn: "Focus",
    valuesNotCovered: 1,
  },
];

export const mockSolutions = [
  { title: "VDP", desc: "Values-Driven Parenting (placeholder).", cta: "Open" },
  { title: "VDL", desc: "Values-Driven Life (placeholder).", cta: "Open" },
  {
    title: "VDO",
    desc: "Values-Driven Organization (placeholder).",
    cta: "Explore",
  },
  {
    title: "VIE",
    desc: "Values-Driven Education (placeholder).",
    cta: "Explore",
  },
  {
    title: "Pathfinder",
    desc: "Discovery + direction (placeholder).",
    cta: "Explore",
  },
  {
    title: "Character Booth",
    desc: "Character insights (placeholder).",
    cta: "Explore",
  },
  {
    title: "VDC Coin",
    desc: "Utility token (placeholder).",
    cta: "Learn more",
  },
  {
    title: "VDC Trading Bot",
    desc: "Trading tool (placeholder).",
    cta: "Learn more",
  },
  { title: "Courses", desc: "Training catalog (placeholder).", cta: "Browse" },
];

export const mockCoursesByTab = {
  VDP: [
    {
      name: "VDP Foundations",
      progressPct: 35,
      status: "IN PROGRESS",
      cta: "Continue",
    },
    {
      name: "VDP Daily Rhythm",
      progressPct: 0,
      status: "NOT STARTED",
      cta: "Start",
    },
  ],
  "VDP-CC": [
    {
      name: "VDP Certification Track",
      progressPct: 10,
      status: "IN PROGRESS",
      cta: "Continue",
    },
  ],
  VDL: [
    {
      name: "VDL Discipline Basics",
      progressPct: 60,
      status: "IN PROGRESS",
      cta: "Continue",
    },
    {
      name: "VDL Review Pack",
      progressPct: 100,
      status: "COMPLETED",
      cta: "Review",
    },
  ],
};

export const mockProducts = [
  { id: "p1", title: "Toolkit (Placeholder)", price: "—", tag: "Featured" },
  { id: "p2", title: "Workbook (Placeholder)", price: "—", tag: "Popular" },
  { id: "p3", title: "Family Pack (Placeholder)", price: "—", tag: "New" },
  {
    id: "p4",
    title: "Coaching Add-on (Placeholder)",
    price: "—",
    tag: "Add-on",
  },
];

export const mockPromotions = [
  {
    id: "promo-1",
    title: "Referral Bonus",
    desc: "Placeholder campaign card.",
    status: "ACTIVE",
  },
  {
    id: "promo-2",
    title: "Seasonal Promotion",
    desc: "Placeholder campaign card.",
    status: "ACTIVE",
  },
  {
    id: "promo-3",
    title: "Recognition Event",
    desc: "Placeholder campaign card.",
    status: "UPCOMING",
  },
];
