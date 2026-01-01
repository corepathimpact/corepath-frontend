// Mock API service (Phase 3)
// NOTE: This is intentionally a Promise-based boundary to mirror real async requests.

export function fetchBackofficeData() {
  return Promise.resolve({
    user: {
      id: "USR-10291",
      full_name: "Gibson Namasake",
      title: "Parent",
      country: "Kenya",
      language: "EN",
    },
    training: {
      values_covered: 7,
      total_values: 12,
      current_value: "Responsibility",
      practices_today: 5,
      total_practices_today: 6,
      logic_areas_covered: 6,
      total_logic_areas: 10,
    },
    performance: {
      apat_today: 78,
      apat_average: 72,
      consistency_band: "Good",
    },
    financials: {
      wallet_balance: 125.5,
      sources: ["Learning", "Impact Transfer", "PAG"],
      locked: false,
    },
    eligibility: {
      can_withdraw: true,
      can_purchase_bot: true,
      max_bot_tier: "300",
      reasons: [],
    },
    impact: {
      its0: 1,
      its1: 4,
      its2: 9,
      its3: 17,
      its4: 26,
      active_members: 41,
      inactive_members: 7,
    },
    pag: {
      id: "PAG-8843",
      coach_name: "Jane Mwangi",
      members: 12,
      score_today: 74,
      score_week: 76,
      score_month: 73,
      wallet_balance: 42.3,
    },
    children: [
      {
        id: "CH-01",
        name: "Daniel",
        predisposition: "Blue",
        values_trained: 6,
        current_value: "Respect",
        progress_pct: 68,
        average_score: 72,
        common_card: "Star",
        struggled_area: "Time Management",
        values_remaining: 3,
      },
    ],
  });
}


