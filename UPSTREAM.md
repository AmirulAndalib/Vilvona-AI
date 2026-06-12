# Upstream Attribution

Vilvona AI is a fork of **OpenClaw** (https://openclaw.ai), distributed under the MIT License.

All credit for the core platform, plugin system, integrations, and architecture belongs to the OpenClaw contributors. The original source is available at https://github.com/openclaw/openclaw.

## Vilvona AI additions

The following were added by Vignesh S as part of Vilvona AI:

- Claude Fable 5 as default model (`src/config/defaults.ts`, `src/agents/live-model-filter.ts`)
- Tamil locale (`ui/src/i18n/locales/ta.ts`)
- Hindi locale (`ui/src/i18n/locales/hi.ts`)
- Tamil/Hindi locale registry entries (`ui/src/i18n/lib/registry.ts`, `ui/src/i18n/lib/types.ts`)
- PWA manifest enhancements (`ui/public/manifest.webmanifest`)
- Pro license key system (`src/pro/license.ts`, `src/pro/pro-features.ts`)
- GitHub Sponsors + Gumroad funding (`.github/FUNDING.yml`)
- Clean CI/CD workflows (`.github/workflows/`)
- This README and documentation

## License

MIT — see [LICENSE](LICENSE)
