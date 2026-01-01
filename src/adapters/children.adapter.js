export function adaptChild(api) {
  if (!api) return null;

  return {
    id: api.id ?? null,
    name: api.name ?? "",
    predisposition: api.predisposition ?? "",
    valuesTrained: api.values_trained ?? 0,
    currentValue: api.current_value ?? "",
    progress: api.progress_pct ?? 0,
    averageScore: api.average_score ?? 0,
    commonCard: api.common_card ?? "",
    struggledArea: api.struggled_area ?? "",
    valuesRemaining: api.values_remaining ?? 0,
  };
}


