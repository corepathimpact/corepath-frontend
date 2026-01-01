export function adaptTraining(api) {
  if (!api) {
    return {
      valuesCovered: 0,
      totalValues: 0,
      currentValue: "",
      practicesToday: 0,
      totalPracticesToday: 0,
      logicAreasCovered: 0,
      totalLogicAreas: 0,
    };
  }

  return {
    valuesCovered: api.values_covered ?? 0,
    totalValues: api.total_values ?? 0,
    currentValue: api.current_value ?? "",
    practicesToday: api.practices_today ?? 0,
    totalPracticesToday: api.total_practices_today ?? 0,
    logicAreasCovered: api.logic_areas_covered ?? 0,
    totalLogicAreas: api.total_logic_areas ?? 0,
  };
}


