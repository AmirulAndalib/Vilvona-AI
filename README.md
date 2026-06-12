<div align="center">

<img src="ui/public/logo1.png" alt="Vilvona AI" width="110" />

# Vilvona AI

**Your personal AI that connects everything.**

[![npm version](https://img.shields.io/npm/v/vilvona?label=npm&color=22c55e)](https://www.npmjs.com/package/vilvona)
[![License: MIT](https://img.shields.io/badge/license-MIT-22c55e.svg)](LICENSE)
[![Node 22+](https://img.shields.io/badge/node-22%2B-22c55e)](https://nodejs.org)
[![Claude Fable 5](https://img.shields.io/badge/AI-Claude%20Fable%205-15803d)](https://anthropic.com)
[![Mobile PWA](https://img.shields.io/badge/mobile-PWA-16a34a)](#mobile-pwa)
[![GitHub Stars](https://img.shields.io/github/stars/vignesh2027/Vilvona-AI?style=social)](https://github.com/vignesh2027/Vilvona-AI)

Powered by **Claude Fable 5** — Anthropic's most capable model.  
Supports **Tamil**, **Hindi**, and 21 languages. Works on **desktop, mobile, and tablet**.  
100% **BYOK** — bring your own API key. Your data never leaves your machine.

**[Docs](https://vignesh2027.github.io/Vilvona-AI)** &nbsp;·&nbsp;
**[npm](https://npmjs.com/package/vilvona)** &nbsp;·&nbsp;
**[Pro License](https://vignesh2027.mojo.page/vilvona-ai-pro)** &nbsp;·&nbsp;
**[Issues](https://github.com/vignesh2027/Vilvona-AI/issues)**

</div>

---

## Quick Start

```bash
# npm (no install needed)
npx vilvona

# yarn
yarn dlx vilvona

# pnpm
pnpm dlx vilvona

# global install
npm install -g vilvona
vilvona
```

Set your API key and start:

```bash
export ANTHROPIC_API_KEY=sk-ant-...
npx vilvona
```

Open **http://localhost:4000** in your browser.

> **Mobile:** Open `http://your-machine-ip:4000` on your phone and tap "Add to Home Screen" to install as a PWA.

---

## What is Vilvona AI?

Vilvona AI is a self-hosted personal AI assistant that connects to all your apps — WhatsApp, Telegram, Slack, Gmail, Discord, Notion, GitHub, and 100+ more — from one clean interface.

Built on [OpenClaw](https://github.com/openclaw/openclaw) (MIT), with three key additions:

| Addition             | Description                                                                              |
| -------------------- | ---------------------------------------------------------------------------------------- |
| **Claude Fable 5**   | Anthropic's most capable model as the default — 1M context, computer use, best reasoning |
| **Tamil & Hindi UI** | First AI assistant with native support for India's two major languages                   |
| **Mobile PWA**       | Install on your phone from the browser — no app store needed                             |

---

## Features

### AI Models

Vilvona AI uses Claude Fable 5 by default — the most capable model from Anthropic.

```bash
# Set via environment variable
export VILVONA_DEFAULT_MODEL=fable    # Claude Fable 5 (default, most capable)
export VILVONA_DEFAULT_MODEL=opus     # Claude Opus 4.8 (balanced)
export VILVONA_DEFAULT_MODEL=sonnet   # Claude Sonnet 4.6 (fast, affordable)
```

Or in your config file (`~/.openclaw/config.json`):

```json
{
  "defaults": {
    "model": "anthropic/claude-fable-5"
  }
}
```

### Connected Apps

| Category         | Apps                                                |
| ---------------- | --------------------------------------------------- |
| **Messaging**    | WhatsApp, Telegram, iMessage (Mac), Signal, Discord |
| **Work**         | Slack, Gmail, Notion, GitHub, Linear, Jira          |
| **Social**       | Instagram DM, Twitter/X                             |
| **Productivity** | Google Calendar, Google Drive, Dropbox              |
| **Developer**    | GitHub, GitLab, webhooks, custom MCP servers        |

### Languages

Vilvona AI is the first AI assistant with native Tamil and Hindi UI:

| Language  | Script   | Code    | Status    |
| --------- | -------- | ------- | --------- |
| **Tamil** | தமிழ்    | `ta`    | Full UI   |
| **Hindi** | हिन्दी   | `hi`    | Full UI   |
| English   | English  | `en`    | Default   |
| Chinese   | 中文     | `zh-CN` | Supported |
| Japanese  | 日本語   | `ja-JP` | Supported |
| Korean    | 한국어   | `ko`    | Supported |
| Arabic    | العربية  | `ar`    | Supported |
| French    | Français | `fr`    | Supported |
| German    | Deutsch  | `de`    | Supported |
| Spanish   | Español  | `es`    | Supported |
| + 11 more | —        | —       | Supported |

---

## Installation

### npx — recommended, no install

```bash
npx vilvona
```

### yarn

```bash
# Run without installing
yarn dlx vilvona

# Install globally
yarn global add vilvona
vilvona
```

> Requires Corepack: `corepack enable`

### pnpm

```bash
# Run without installing
pnpm dlx vilvona

# Install globally
pnpm add -g vilvona
vilvona
```

> If `pnpm dlx` fails on a brand-new release, use `npx vilvona` or run:
> `pnpm config set minimumReleaseAge 0`

### npm global

```bash
npm install -g vilvona
vilvona
```

### Docker

```bash
# Quick start
docker run \
  -e ANTHROPIC_API_KEY=sk-ant-... \
  -p 4000:4000 \
  ghcr.io/vignesh2027/vilvona-ai

# With Pro key
docker run \
  -e ANTHROPIC_API_KEY=sk-ant-... \
  -e VILVONA_PRO_KEY=VLVN-XXXX-XXXX-XXXX-XXXX \
  -p 4000:4000 \
  ghcr.io/vignesh2027/vilvona-ai

# With persistent data
docker run \
  -e ANTHROPIC_API_KEY=sk-ant-... \
  -v ~/.vilvona:/root/.openclaw \
  -p 4000:4000 \
  ghcr.io/vignesh2027/vilvona-ai
```

### Windows (PowerShell)

```powershell
$env:ANTHROPIC_API_KEY = "sk-ant-..."
npx vilvona
```

### Build from source

```bash
git clone https://github.com/vignesh2027/Vilvona-AI.git
cd Vilvona-AI
node --version  # Must be 22+
node openclaw.mjs
```

> Requires Node.js 22.19+. Use nvm: `nvm install 22 && nvm use 22`

---

## Mobile PWA

Vilvona AI works as a full mobile app — no App Store, no Play Store.

**iPhone (Safari):**

1. Open `http://your-machine-ip:4000` in Safari
2. Tap the share icon → **Add to Home Screen**
3. Vilvona AI is now on your home screen

**Android (Chrome):**

1. Open `http://your-machine-ip:4000` in Chrome
2. Tap the three-dot menu → **Install app**
3. Done

---

## Configuration

Config file location: `~/.openclaw/config.json`

```json
{
  "defaults": {
    "model": "anthropic/claude-fable-5"
  },
  "ui": {
    "locale": "ta"
  }
}
```

### Environment variables

| Variable                | Description                                  | Default |
| ----------------------- | -------------------------------------------- | ------- |
| `ANTHROPIC_API_KEY`     | Your Anthropic API key (required)            | —       |
| `VILVONA_DEFAULT_MODEL` | Model alias: `fable`, `opus`, `sonnet`       | `fable` |
| `VILVONA_PRO_KEY`       | Pro license key (`VLVN-XXXX-XXXX-XXXX-XXXX`) | —       |
| `OPENCLAW_PORT`         | Port to listen on                            | `4000`  |

---

## Pro Tier

Vilvona AI Pro unlocks enterprise and team features.

| Feature                        | Free | Pro |
| ------------------------------ | ---- | --- |
| Claude Fable 5                 | Yes  | Yes |
| All 100+ integrations          | Yes  | Yes |
| Tamil & Hindi UI               | Yes  | Yes |
| Mobile PWA                     | Yes  | Yes |
| Enterprise audit logs          | —    | Yes |
| Team config sync               | —    | Yes |
| Priority Fable 5 routing       | —    | Yes |
| Custom AI personas (unlimited) | —    | Yes |
| Webhook & Zapier integrations  | —    | Yes |
| White-label branding           | —    | Yes |

**One-time payment — ₹4,100 (~$49):** [vignesh2027.mojo.page/vilvona-ai-pro](https://vignesh2027.mojo.page/vilvona-ai-pro)

After purchase, activate your key:

```bash
export VILVONA_PRO_KEY=VLVN-XXXX-XXXX-XXXX-XXXX
vilvona
```

---

## How it works

```
npx vilvona
    └── openclaw.mjs (Vilvona launcher)
            ├── Checks Node.js 22+ (shows clear error if older)
            ├── Prints Vilvona banner
            ├── Downloads openclaw runtime → ~/.vilvona/runtime/ (first run only, ~97MB)
            ├── Sets OPENCLAW_DEFAULT_MODEL=anthropic/claude-fable-5
            └── Launches openclaw runtime (opens UI at localhost:4000)
```

The first run downloads the OpenClaw runtime (~97MB) to `~/.vilvona/runtime/`. Subsequent runs start instantly from cache.

---

## Why Vilvona AI vs OpenClaw?

|                   | Vilvona AI                                     | OpenClaw      |
| ----------------- | ---------------------------------------------- | ------------- |
| Default AI model  | Claude Fable 5 (latest)                        | Varies        |
| Tamil language UI | Built-in                                       | Not supported |
| Hindi language UI | Built-in                                       | Not supported |
| Mobile PWA        | Enhanced manifest                              | Basic         |
| Pro tier          | Enterprise features                            | None          |
| npm package       | `npx vilvona`                                  | Source only   |
| Maintained by     | [@vignesh2027](https://github.com/vignesh2027) | OpenClaw team |

---

## npm + GitHub Actions Auto-Release

When you push a version tag, GitHub Actions automatically publishes to npm:

```bash
# Update version, commit, push tag — npm publishes automatically
npm version patch         # bumps to next version
git push origin main --follow-tags
```

The `release.yml` workflow:

1. Runs on any `v*` tag push
2. Validates package.json and launcher
3. Publishes to npm with `--access public`
4. Creates a GitHub Release with install instructions

---

## Contributing

Vilvona AI is built and maintained by **Vignesh S**. Found a bug or have a feature request? [Open an issue](https://github.com/vignesh2027/Vilvona-AI/issues).

---

## Support & Sponsorship

If Vilvona AI saves you time, consider supporting:

[![Sponsor on GitHub](https://img.shields.io/badge/Sponsor%20on-GitHub-ea4aaa?logo=github)](https://github.com/sponsors/vignesh2027)
[![Get Pro License](https://img.shields.io/badge/Get-Pro%20License-15803d)](https://vignesh2027.mojo.page/vilvona-ai-pro)

---

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for version history.

---

## License

[MIT](LICENSE) — free to use, modify, and redistribute.

Built on [OpenClaw](https://github.com/openclaw/openclaw) (MIT). Attribution in [UPSTREAM.md](UPSTREAM.md).

---

<div align="center">

**If Vilvona AI helped you, please star this repo**

[Docs](https://vignesh2027.github.io/Vilvona-AI) &nbsp;·&nbsp;
[Report a Bug](https://github.com/vignesh2027/Vilvona-AI/issues) &nbsp;·&nbsp;
[Get Pro](https://vignesh2027.mojo.page/vilvona-ai-pro) &nbsp;·&nbsp;
[Sponsor](https://github.com/sponsors/vignesh2027)

Built by **Vignesh S** — CSE student at Takshashila University, Chennai.  
Building AI tools accessible to everyone, especially in Tamil and Hindi.

</div>
