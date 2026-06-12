<div align="center">

# Vilvona AI

**Your personal AI that connects everything.**

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![npm](https://img.shields.io/npm/v/vilvona)](https://www.npmjs.com/package/vilvona)
[![Stars](https://img.shields.io/github/stars/vignesh2027/VilvonaAI?style=social)](https://github.com/vignesh2027/VilvonaAI)
[![Mobile PWA](https://img.shields.io/badge/Mobile-PWA%20Ready-blue)](https://github.com/vignesh2027/VilvonaAI)
[![Claude Fable 5](https://img.shields.io/badge/AI-Claude%20Fable%205-purple)](https://anthropic.com)

Powered by **Claude Fable 5** — the most intelligent AI available.
Works on **desktop, mobile, and tablet**. Supports **Tamil**, **Hindi**, and 20+ languages.

</div>

---

## What is Vilvona AI?

Vilvona AI is a self-hosted personal AI assistant that connects to all your apps — WhatsApp, Telegram, Slack, Gmail, Discord, and more — all from one place. Run it on your own machine. Your data never leaves your control.

**Why Vilvona over others?**

| Feature | Vilvona AI | Other forks |
|---|---|---|
| Claude Fable 5 (best model) | Built-in default | Not supported |
| Tamil language UI | Built-in | None |
| Hindi language UI | Built-in | None |
| Mobile PWA (works on phone) | Install as app | Desktop only |
| One-command install | `npx vilvona` | Manual setup |
| Pro tier (team features) | Available | None |

---

## Quick Start

```bash
# Install and run in one command
npx vilvona

# Or install globally
npm install -g vilvona
vilvona
```

Set your Anthropic API key (for Claude Fable 5):

```bash
export ANTHROPIC_API_KEY=your-key-here
vilvona
```

Open your browser at `http://localhost:4000` — works on **mobile** too (install as PWA from your browser).

---

## Supported Connections

| App | Status |
|---|---|
| WhatsApp | Ready |
| Telegram | Ready |
| Slack | Ready |
| Discord | Ready |
| Gmail / Email | Ready |
| iMessage (Mac) | Ready |
| Signal | Ready |
| Instagram DM | Ready |

---

## Languages

Vilvona AI supports 21 languages including:
- **Tamil** (தமிழ்) — full UI support
- **Hindi** (हिन्दी) — full UI support
- English, Chinese, Japanese, Korean, Arabic, French, German, Spanish, and 12 more

---

## Claude Fable 5

Vilvona AI uses **Claude Fable 5** (`claude-fable-5`) as the default AI model — the most capable model from Anthropic, with a 1M token context window and native computer use.

To configure your model:

```json
{
  "defaults": {
    "model": "anthropic/claude-fable-5"
  }
}
```

Available model shortcuts: `fable`, `opus`, `sonnet`

---

## Pro Tier

Vilvona AI Pro unlocks team and enterprise features:

- Enterprise audit logs
- Team config sync
- Advanced analytics
- Priority Fable 5 routing
- Unlimited custom AI personas
- Webhook & Zapier integrations
- White-label branding

**Get Pro:** [vilvona.gumroad.com/l/pro](https://vilvona.gumroad.com/l/pro) — **$49 one-time**

```bash
export VILVONA_PRO_KEY=VLVN-XXXX-XXXX-XXXX-XXXX
vilvona
```

---

## Self-Host with Docker

```bash
docker run -e ANTHROPIC_API_KEY=your-key -p 4000:4000 ghcr.io/vignesh2027/vilvona
```

---

## Built by

**Vignesh S** — [github.com/vignesh2027](https://github.com/vignesh2027)

CSE student at Takshashila University, Chennai. Building tools that make AI accessible for everyone.

---

## License

MIT — free to use, modify, and distribute. See [LICENSE](LICENSE).

---

<div align="center">

**Star this repo if Vilvona AI helped you**

[Report a bug](https://github.com/vignesh2027/VilvonaAI/issues) · [Request a feature](https://github.com/vignesh2027/VilvonaAI/issues) · [Get Pro](https://vilvona.gumroad.com/l/pro)

</div>
