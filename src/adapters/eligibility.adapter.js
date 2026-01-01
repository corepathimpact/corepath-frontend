export function adaptEligibility(api) {
  if (!api) return null;

  return {
    canWithdraw: Boolean(api.can_withdraw),
    canPurchaseBot: Boolean(api.can_purchase_bot),
    maxBotTier: api.max_bot_tier ?? null,
    reasons: Array.isArray(api.reasons) ? api.reasons : [],
  };
}


