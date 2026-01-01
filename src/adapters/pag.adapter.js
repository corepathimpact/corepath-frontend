export function adaptPag(api) {
  if (!api) return null;

  return {
    id: api.id ?? null,
    coach: api.coach_name ?? "",
    members: api.members ?? 0,
    scoreToday: api.score_today ?? 0,
    scoreWeek: api.score_week ?? 0,
    scoreMonth: api.score_month ?? 0,
    wallet: api.wallet_balance ?? 0,
  };
}


