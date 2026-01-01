export const RAE_ADMIN_ROLES = {
  CONTENT_CREATOR: "CONTENT_CREATOR",
  REVIEWER: "REVIEWER",
  GOVERNANCE_ADMIN: "GOVERNANCE_ADMIN",
};

export function deriveRaeRoleFromEmail(emailRaw) {
  const email = String(emailRaw || "").toLowerCase();

  // Demo-only convention:
  // - user+rae-governance@domain → GOVERNANCE_ADMIN
  // - user+rae-reviewer@domain   → REVIEWER
  // - user+rae-creator@domain    → CONTENT_CREATOR
  if (email.includes("+rae-governance")) return RAE_ADMIN_ROLES.GOVERNANCE_ADMIN;
  if (email.includes("+rae-reviewer")) return RAE_ADMIN_ROLES.REVIEWER;
  if (email.includes("+rae-creator")) return RAE_ADMIN_ROLES.CONTENT_CREATOR;

  return null;
}

export function canDraft(role) {
  return role === RAE_ADMIN_ROLES.CONTENT_CREATOR || role === RAE_ADMIN_ROLES.GOVERNANCE_ADMIN;
}

export function canApprove(role) {
  return role === RAE_ADMIN_ROLES.REVIEWER || role === RAE_ADMIN_ROLES.GOVERNANCE_ADMIN;
}

export function canPreview(role) {
  return Boolean(role);
}

export function canAudit(role) {
  return role === RAE_ADMIN_ROLES.GOVERNANCE_ADMIN;
}


