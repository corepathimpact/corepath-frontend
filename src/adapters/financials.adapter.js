export function adaptFinancials(api) {
  if (!api) {
    return {
      walletBalance: 0,
      sources: [],
      locked: false,
    };
  }

  return {
    walletBalance: api.wallet_balance ?? 0,
    sources: Array.isArray(api.sources) ? api.sources : [],
    locked: Boolean(api.locked),
  };
}


