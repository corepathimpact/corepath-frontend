const STORAGE_KEY = "corepath.subscriptions";

export function getSubscriptions() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

export function isActivated(toolId) {
  const subs = getSubscriptions();
  return Boolean(subs?.[toolId]?.active);
}

export function activateTool(toolId) {
  const subs = getSubscriptions();
  const next = {
    ...subs,
    [toolId]: {
      active: true,
      activatedAt: new Date().toISOString(),
    },
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  return next;
}

export function deactivateTool(toolId) {
  const subs = getSubscriptions();
  if (!subs[toolId]) return subs;
  const next = { ...subs, [toolId]: { ...subs[toolId], active: false } };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  return next;
}
