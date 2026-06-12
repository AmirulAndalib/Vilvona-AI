// Vilvona AI — identity and version metadata
// This module is the single source of truth for Vilvona-specific constants.

export const VILVONA_NAME = "Vilvona AI";
export const VILVONA_GITHUB = "https://github.com/vignesh2027/Vilvona-AI";
export const VILVONA_DOCS = "https://vignesh2027.github.io/Vilvona-AI";
export const VILVONA_PRO_URL = "https://vignesh2027.mojo.page/vilvona-ai-pro";
export const VILVONA_DEFAULT_MODEL = "anthropic/claude-fable-5";
export const VILVONA_SUPPORTED_LOCALES = ["ta", "hi"] as const;

export type VilvonaLocale = (typeof VILVONA_SUPPORTED_LOCALES)[number];
