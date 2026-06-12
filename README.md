<div align="center">

<img src="ui/public/logo1.png" alt="Vilvona AI" width="100" />

# Vilvona AI

[![npm](https://img.shields.io/npm/v/vilvona?color=22c55e&label=npm)](https://www.npmjs.com/package/vilvona)
[![MIT](https://img.shields.io/badge/license-MIT-22c55e)](LICENSE)
[![Node 22+](https://img.shields.io/badge/node-22%2B-22c55e)](https://nodejs.org)
[![Claude Fable 5](https://img.shields.io/badge/AI-Claude%20Fable%205-15803d)](https://anthropic.com)
[![Known Vulnerabilities](https://snyk.io/test/github/vignesh2027/Vilvona-AI/badge.svg)](https://snyk.io/test/github/vignesh2027/Vilvona-AI)
[![Stars](https://img.shields.io/github/stars/vignesh2027/Vilvona-AI?style=social)](https://github.com/vignesh2027/Vilvona-AI)

**Self-hosted AI assistant that connects all your apps.**  
Powered by Claude Fable 5. Tamil & Hindi UI. Works on mobile. Run anywhere.

[**Get Pro License — ₹4,100**](https://vignesh2027.mojo.page/vilvona-ai-pro) &nbsp;·&nbsp; [Docs](https://vignesh2027.github.io/Vilvona-AI) &nbsp;·&nbsp; [npm](https://npmjs.com/package/vilvona)

</div>

---

## What is this?

I built Vilvona AI because I wanted a personal AI assistant that could connect to WhatsApp, Telegram, Gmail, Slack, and everything else I use — without sending my data to some cloud service.

It runs entirely on your own machine. You bring your Anthropic API key, and Vilvona handles the rest. Your conversations stay local. You pay Anthropic directly per token — no markup, no middleman.

The two things that make it different from everything else I found:

- **Tamil and Hindi** — I'm from Chennai. I wanted an AI assistant that actually works in Tamil, not just pretends to. Vilvona has a full Tamil and Hindi interface built in.
- **Claude Fable 5 by default** — Anthropic's most capable model, set as the default. 1 million token context. Computer use. The best reasoning available right now.

---

## Start in 30 seconds

```bash
export ANTHROPIC_API_KEY=sk-ant-...
npx vilvona
```

Open **http://localhost:4000**. Done.

Get an API key at [console.anthropic.com](https://console.anthropic.com) — it's free to sign up, you only pay for what you use.

---

## Install

```bash
# npx — no install, always latest
npx vilvona

# yarn
yarn dlx vilvona

# pnpm
pnpm dlx vilvona

# global
npm install -g vilvona
```

**Windows (PowerShell):**

```powershell
$env:ANTHROPIC_API_KEY = "sk-ant-..."
npx vilvona
```

**Docker:**

```bash
docker run -e ANTHROPIC_API_KEY=sk-ant-... -p 4000:4000 ghcr.io/vignesh2027/vilvona-ai
```

> Requires Node.js 22+. If you have nvm: `nvm install 22 && nvm use 22`

---

## What it connects to

| Category  | Apps                                                |
| --------- | --------------------------------------------------- |
| Messaging | WhatsApp, Telegram, iMessage (Mac), Signal, Discord |
| Work      | Slack, Gmail, Notion, GitHub, Linear, Jira          |
| Social    | Instagram DM, Twitter/X                             |
| Files     | Google Drive, Dropbox, OneDrive                     |
| Dev       | GitLab, webhooks, custom MCP servers                |

100+ integrations inherited from [OpenClaw](https://github.com/openclaw/openclaw). You connect them from the Settings panel in the UI.

---

## Languages

The interface supports 21 languages. Tamil and Hindi are built in by Vilvona — no other AI assistant I found actually has these as first-class options.

| Language  | Script  | Code    |
| --------- | ------- | ------- |
| **Tamil** | தமிழ்   | `ta`    |
| **Hindi** | हिन्दी  | `hi`    |
| English   | English | `en`    |
| Chinese   | 中文    | `zh-CN` |
| Japanese  | 日本語  | `ja-JP` |
| Korean    | 한국어  | `ko`    |
| Arabic    | العربية | `ar`    |
| + 14 more | —       | —       |

Set the language in your config:

```json
{ "ui": { "locale": "ta" } }
```

---

## AI Models

```bash
export VILVONA_DEFAULT_MODEL=fable    # Claude Fable 5 — default, best reasoning
export VILVONA_DEFAULT_MODEL=opus     # Claude Opus 4.8 — balanced
export VILVONA_DEFAULT_MODEL=sonnet   # Claude Sonnet 4.6 — fast
```

Or set it in `~/.openclaw/config.json`:

```json
{ "defaults": { "model": "anthropic/claude-fable-5" } }
```

---

## Mobile

Vilvona works as a mobile app without any app store. On your phone, open `http://your-ip:4000` and tap "Add to Home Screen." It installs like a native app on both iOS and Android.

---

## Configuration

| Variable                | What it does                             | Default |
| ----------------------- | ---------------------------------------- | ------- |
| `ANTHROPIC_API_KEY`     | Your Anthropic key — required            | —       |
| `VILVONA_DEFAULT_MODEL` | `fable`, `opus`, or `sonnet`             | `fable` |
| `VILVONA_PRO_KEY`       | Pro license (`VLVN-XXXX-XXXX-XXXX-XXXX`) | —       |
| `OPENCLAW_PORT`         | Port for the web UI                      | `4000`  |

Config file: `~/.openclaw/config.json`

---

## Pro

The free version has everything for personal use. Pro adds features for teams and businesses.

| Feature                  | Free | Pro |
| ------------------------ | ---- | --- |
| Claude Fable 5           | Yes  | Yes |
| All integrations         | Yes  | Yes |
| Tamil & Hindi UI         | Yes  | Yes |
| Mobile PWA               | Yes  | Yes |
| Enterprise audit logs    | —    | Yes |
| Team config sync         | —    | Yes |
| Priority Fable 5 routing | —    | Yes |
| Custom AI personas       | —    | Yes |
| Webhooks & Zapier        | —    | Yes |
| White-label branding     | —    | Yes |

**[Get Pro — ₹4,100 one-time (~$49)](https://vignesh2027.mojo.page/vilvona-ai-pro)**

After purchase, activate with:

```bash
export VILVONA_PRO_KEY=VLVN-XXXX-XXXX-XXXX-XXXX
vilvona
```

---

## How it works under the hood

```
npx vilvona
  └── openclaw.mjs checks Node.js 22+
      └── downloads openclaw runtime → ~/.vilvona/runtime/ (first run, ~97MB)
          └── sets OPENCLAW_DEFAULT_MODEL=anthropic/claude-fable-5
              └── starts web UI at localhost:4000
```

The first run downloads OpenClaw's runtime bundle once. After that, everything starts in under a second from cache.

---

## Releases

Releases are automatic. Pushing a `v*` tag runs the CI checks and publishes to npm + creates a GitHub release.

```bash
# bump version and release
npm version patch
git push origin main --follow-tags
```

---

## License

MIT. Built on [OpenClaw](https://github.com/openclaw/openclaw) (also MIT). Attribution in [UPSTREAM.md](UPSTREAM.md).

---

<div align="center">

Built by **[Vigneshwar L](https://github.com/vignesh2027)**  
CSE,  Chennai

[Docs](https://vignesh2027.github.io/Vilvona-AI) &nbsp;·&nbsp;
[Issues](https://github.com/vignesh2027/Vilvona-AI/issues) &nbsp;·&nbsp;
[Get Pro](https://vignesh2027.mojo.page/vilvona-ai-pro) &nbsp;·&nbsp;
[Sponsor](https://github.com/sponsors/vignesh2027)

If this saved you time, a star helps others find it.

</div>
