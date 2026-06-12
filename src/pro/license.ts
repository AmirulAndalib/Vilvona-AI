// Vilvona AI Pro — license key validation
// Pro keys are sold at https://vilvona.gumroad.com/l/pro
// Format: VLVN-XXXX-XXXX-XXXX-XXXX

const PRO_KEY_PREFIX = "VLVN-";
const PRO_KEY_REGEX = /^VLVN-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/;

export type LicenseTier = "free" | "pro";

export type LicenseStatus = {
  tier: LicenseTier;
  key: string | null;
  validatedAt: Date | null;
};

export function parseLicenseKey(raw: string | undefined | null): string | null {
  if (!raw) return null;
  const trimmed = raw.trim().toUpperCase();
  return PRO_KEY_REGEX.test(trimmed) ? trimmed : null;
}

export function isProKey(key: string | null | undefined): key is string {
  if (!key) return false;
  return PRO_KEY_REGEX.test(key.trim().toUpperCase());
}

export function getLicenseStatus(envKey?: string): LicenseStatus {
  const key = parseLicenseKey(envKey ?? process.env["VILVONA_PRO_KEY"]);
  if (isProKey(key)) {
    return { tier: "pro", key, validatedAt: new Date() };
  }
  return { tier: "free", key: null, validatedAt: null };
}

export function assertProFeature(featureName: string, status: LicenseStatus): void {
  if (status.tier !== "pro") {
    throw new Error(
      `"${featureName}" requires Vilvona AI Pro.\n` +
        `Get your license key at https://vilvona.gumroad.com/l/pro\n` +
        `Then set: VILVONA_PRO_KEY=VLVN-XXXX-XXXX-XXXX-XXXX`,
    );
  }
}
