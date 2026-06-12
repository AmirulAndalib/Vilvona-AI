// Vilvona AI Pro feature registry
// These features are unlocked with a valid VILVONA_PRO_KEY

export const PRO_FEATURES = {
  ENTERPRISE_AUDIT_LOGS: "Enterprise audit logs",
  TEAM_SYNC: "Team config sync",
  ADVANCED_ANALYTICS: "Advanced analytics dashboard",
  PRIORITY_FABLE5: "Priority Claude Fable 5 routing",
  CUSTOM_PERSONAS: "Custom AI personas (unlimited)",
  WEBHOOK_INTEGRATIONS: "Webhook & Zapier integrations",
  WHITE_LABEL: "White-label branding",
} as const;

export type ProFeatureKey = keyof typeof PRO_FEATURES;
