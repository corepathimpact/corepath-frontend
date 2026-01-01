export function adaptPerformance(api) {
  if (!api) {
    return {
      apatToday: 0,
      apatAverage: 0,
      consistency: "",
    };
  }

  return {
    apatToday: api.apat_today ?? 0,
    apatAverage: api.apat_average ?? 0,
    consistency: api.consistency_band ?? "",
  };
}


