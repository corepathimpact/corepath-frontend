export function adaptImpact(api) {
  if (!api) {
    return {
      its0: 0,
      its1: 0,
      its2: 0,
      its3: 0,
      its4: 0,
      activeMembers: 0,
      inactiveMembers: 0,
    };
  }

  return {
    its0: api.its0 ?? 0,
    its1: api.its1 ?? 0,
    its2: api.its2 ?? 0,
    its3: api.its3 ?? 0,
    its4: api.its4 ?? 0,
    activeMembers: api.active_members ?? 0,
    inactiveMembers: api.inactive_members ?? 0,
  };
}


