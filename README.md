<div align="center">

<img src="ui/public/logo1.png" alt="Vilvona AI" width="120" />

# Vilvona AI

**Your personal AI that connects everything.**

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![npm version](https://img.shields.io/npm/v/vilvona?color=orange)](https://www.npmjs.com/package/vilvona)
[![GitHub Stars](https://img.shields.io/github/stars/vignesh2027/Vilvona-AI?style=social)](https://github.com/vignesh2027/Vilvona-AI)
[![Claude Fable 5](https://img.shields.io/badge/AI-Claude%20Fable%205-blueviolet)](https://anthropic.com)
[![Mobile PWA](https://img.shields.io/badge/Mobile-PWA%20Ready-0ea5e9)](#mobile-pwa)
[![Node 22+](https://img.shields.io/badge/Node-22%2B-brightgreen)](https://nodejs.org)
[![Sponsor](https://img.shields.io/badge/Sponsor-%E2%9D%A4-red)](https://github.com/sponsors/vignesh2027)

Powered by **Claude Fable 5** — the most capable AI from Anthropic.  
Works on **desktop, mobile, and tablet**. Supports **Tamil**, **Hindi**, and 21 languages.  
100% **BYOK** — bring your own API key. Your data never leaves your machine.

[Quick Start](#quick-start) · [Features](#features) · [Docker](#docker) · [Pro Tier](#pro-tier) · [Sponsors](#sponsors)

</div>

---

## What is Vilvona AI?

Vilvona AI is a self-hosted personal AI assistant that connects to all your apps — WhatsApp, Telegram, Slack, Gmail, Discord, Notion, GitHub, and more — from one clean interface. Run it locally or on your server. Zero data sent to third parties. You own everything.

It is built on the foundation of [OpenClaw](https://openclaw.ai) (MIT license) with three key upgrades:

1. **Claude Fable 5** as the default model — the most intelligent AI available today
2. **Tamil & Hindi UI** — first AI assistant with native support for India's languages
3. **Mobile PWA** — install on your phone from the browser, no app store needed

---

## Quick Start

```bash
# Run instantly — no install needed
npx vilvona

# Or install globally
npm install -g vilvona
vilvona
```

Set your Anthropic API key (get one free at [console.anthropic.com](https://console.anthropic.com)):

```bash
export ANTHROPIC_API_KEY=sk-ant-...
npx vilvona
```

Open **http://localhost:4000** in your browser. That's it.

> **Mobile:** Open http://your-ip:4000 on your phone and tap "Add to Home Screen" to install as a PWA app.

---

## Features

### Core

| Feature              | Details                                                                                                         |
| -------------------- | --------------------------------------------------------------------------------------------------------------- |
| **Claude Fable 5**   | Default model — 1M context, computer use, best reasoning                                                        |
| **21 Languages**     | Tamil (தமிழ்), Hindi (हिन्दी), English, Chinese, Japanese, Korean, Arabic, French, German, Spanish, and 12 more |
| **Mobile PWA**       | Install as an app on iOS and Android directly from your browser                                                 |
| **BYOK**             | Bring your own Anthropic API key — Vilvona pays nothing, you pay per token directly                             |
| **Self-hosted**      | Runs entirely on your machine; no cloud, no accounts, no tracking                                               |
| **All integrations** | 100+ app connections inherited from OpenClaw                                                                    |

### AI Models

```bash
# Claude Fable 5 (default — most capable)
export VILVONA_DEFAULT_MODEL=fable

# Claude Opus 4.8 (balanced)
export VILVONA_DEFAULT_MODEL=opus

# Claude Sonnet 4.6 (fast & affordable)
export VILVONA_DEFAULT_MODEL=sonnet
```

Or set in your config file:

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

---

## Installation

### npx (recommended — no install)

```bash
npx vilvona
```

### npm global

```bash
npm install -g vilvona
vilvona
```

### Docker

```bash
docker run \
  -e ANTHROPIC_API_KEY=sk-ant-... \
  -p 4000:4000 \
  ghcr.io/vignesh2027/vilvona-ai:latest
```

### Build from source

```bash
git clone https://github.com/vignesh2027/Vilvona-AI.git
cd Vilvona-AI
node --version  # Must be 22+
pnpm install
pnpm dev
```

> **Requires Node.js 22+.** If you have nvm: `nvm install 22 && nvm use 22`

---

## Mobile PWA

Vilvona AI works as a full mobile app — no App Store, no Play Store needed.

**On iPhone (Safari):**

1. Open `http://your-machine-ip:4000`
2. Tap the share icon → **Add to Home Screen**
3. Vilvona AI is now on your home screen

**On Android (Chrome):**

1. Open `http://your-machine-ip:4000`
2. Tap the menu → **Install app**
3. Done

---

## Languages

Vilvona AI is the first AI assistant with built-in Tamil and Hindi UI:

| Language           | Code    | Status  |
| ------------------ | ------- | ------- |
| Tamil (தமிழ்)      | `ta`    | Full UI |
| Hindi (हिन्दी)     | `hi`    | Full UI |
| English            | `en`    | Full UI |
| Chinese Simplified | `zh-CN` | Full UI |
| Japanese           | `ja-JP` | Full UI |
| Korean             | `ko`    | Full UI |
| Arabic             | `ar`    | Full UI |
| French             | `fr`    | Full UI |
| German             | `de`    | Full UI |
| Spanish            | `es`    | Full UI |
| + 11 more          | —       | Full UI |

---

## Pro Tier

Vilvona AI Pro unlocks enterprise and team features.

| Feature                        | Free | Pro |
| ------------------------------ | ---- | --- |
| Claude Fable 5                 | ✅   | ✅  |
| All integrations               | ✅   | ✅  |
| Tamil & Hindi UI               | ✅   | ✅  |
| Mobile PWA                     | ✅   | ✅  |
| Enterprise audit logs          | —    | ✅  |
| Team config sync               | —    | ✅  |
| Advanced analytics             | —    | ✅  |
| Priority Fable 5 routing       | —    | ✅  |
| Custom AI personas (unlimited) | —    | ✅  |
| Webhook & Zapier integrations  | —    | ✅  |
| White-label branding           | —    | ✅  |

**Get Pro — $49 one-time:** [vilvona.gumroad.com/l/pro](https://vilvona.gumroad.com/l/jhurz)

```bash
export VILVONA_PRO_KEY=VLVN-XXXX-XXXX-XXXX-XXXX
vilvona
```

---

## Docker

```bash
# Quick start
docker run -e ANTHROPIC_API_KEY=sk-ant-... -p 4000:4000 ghcr.io/vignesh2027/vilvona-ai

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

---

## Configuration

Vilvona AI stores its config at `~/.openclaw/config.json`:

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

**Environment variables:**

| Variable                | Description                                          |
| ----------------------- | ---------------------------------------------------- |
| `ANTHROPIC_API_KEY`     | Your Anthropic API key (required)                    |
| `VILVONA_DEFAULT_MODEL` | Default model: `fable`, `opus`, `sonnet`             |
| `VILVONA_PRO_KEY`       | Pro license key (format: `VLVN-XXXX-XXXX-XXXX-XXXX`) |
| `OPENCLAW_PORT`         | Port to run on (default: `4000`)                     |

---

## Why Vilvona vs OpenClaw?

|                | Vilvona AI                                     | OpenClaw      |
| -------------- | ---------------------------------------------- | ------------- |
| Default model  | Claude Fable 5                                 | Varies        |
| Tamil language | Built-in                                       | Not supported |
| Hindi language | Built-in                                       | Not supported |
| Mobile PWA     | Enhanced                                       | Basic         |
| Pro tier       | Included                                       | None          |
| Maintained by  | [@vignesh2027](https://github.com/vignesh2027) | OpenClaw team |

---

## Sponsors

Vilvona AI is free and open source. If it saves you time, consider sponsoring:

[![GitHub Sponsors](https://img.shields.io/badge/Sponsor%20on-GitHub-ea4aaa?logo=github)](https://github.com/sponsors/vignesh2027)
[![Gumroad Pro](https://img.shields.io/badge/Get-Pro%20License-orange)](https://vilvona.gumroad.com/l/jhurz)

---

## Reporting Issues

Found a bug? [Open an issue](https://github.com/vignesh2027/Vilvona-AI/issues)

---

## License

[MIT](LICENSE) — free to use, modify, and distribute.

Built on [OpenClaw](https://openclaw.ai) (MIT). All OpenClaw contributors are credited in [UPSTREAM.md](UPSTREAM.md).

---

## Built by

**Vignesh S** — [github.com/vignesh2027](https://github.com/vignesh2027)

CSE student at Takshashila University, Chennai.  
Building tools that make AI accessible for everyone — especially in Tamil and Hindi.

---

<div align="center">

**If Vilvona AI helped you, please ⭐ star this repo**

[Report Bug](https://github.com/vignesh2027/Vilvona-AI/issues) · [Request Feature](https://github.com/vignesh2027/Vilvona-AI/issues) · [Get Pro](https://vilvona.gumroad.com/l/jhurz) · [Sponsor](https://github.com/sponsors/vignesh2027)

</div>
