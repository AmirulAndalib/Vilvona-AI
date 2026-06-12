#!/usr/bin/env node

/**
 * Vilvona AI — launcher
 * Downloads OpenClaw runtime on first run, then starts with Vilvona defaults.
 */

import { spawn, execSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import os from "node:os";
import path from "node:path";

const _require = createRequire(import.meta.url);
const VILVONA_VERSION = (() => {
  try {
    return _require("./package.json").version;
  } catch {
    return "1.0.10";
  }
})();

// ── Node version guard ────────────────────────────────────────────────────────
const MIN_MAJOR = 22;
const MIN_MINOR = 19;
const [curMajor, curMinor] = process.versions.node.split(".").map(Number);

if (curMajor < MIN_MAJOR || (curMajor === MIN_MAJOR && curMinor < MIN_MINOR)) {
  process.stderr.write(
    `\nVilvona AI requires Node.js ${MIN_MAJOR}.${MIN_MINOR}+\n` +
      `Current version: v${process.versions.node}\n\n` +
      `Fix it with nvm:\n` +
      `  nvm install ${MIN_MAJOR}\n` +
      `  nvm use ${MIN_MAJOR}\n` +
      `  nvm alias default ${MIN_MAJOR}\n\n` +
      `Then run: npx vilvona\n\n`,
  );
  process.exit(1);
}

// ── Version flag ─────────────────────────────────────────────────────────────
if (process.argv.includes("--version") || process.argv.includes("-v")) {
  process.stdout.write(`Vilvona AI v${VILVONA_VERSION} (powered by OpenClaw)\n`);
  process.exit(0);
}

// ── Runtime cache dir ─────────────────────────────────────────────────────────
const CACHE_DIR = path.join(os.homedir(), ".vilvona", "runtime");
const OPENCLAW_VERSION = "2026.6.6";
const ENTRY = path.join(CACHE_DIR, "node_modules", "openclaw", "dist", "entry.js");

// ── Install openclaw runtime if not cached ────────────────────────────────────
if (!existsSync(ENTRY)) {
  process.stderr.write(
    `\nVilvona AI — first run setup\n` + `Installing OpenClaw runtime v${OPENCLAW_VERSION}...\n\n`,
  );

  mkdirSync(CACHE_DIR, { recursive: true });

  try {
    execSync(
      `npm install --prefix "${CACHE_DIR}" openclaw@${OPENCLAW_VERSION} --save=false --loglevel=error`,
      { stdio: "inherit" },
    );
  } catch {
    process.stderr.write(
      `\nFailed to install runtime. Check your internet connection and try again.\n` +
        `Or run: npm install -g openclaw && openclaw\n\n`,
    );
    process.exit(1);
  }

  if (!existsSync(ENTRY)) {
    process.stderr.write(`\nInstall succeeded but entry point not found at:\n${ENTRY}\n\n`);
    process.exit(1);
  }

  process.stderr.write(`\nSetup complete. Starting Vilvona AI...\n\n`);
}

// ── Rebrand runtime UI ────────────────────────────────────────────────────────
const UI_HTML = path.join(
  CACHE_DIR,
  "node_modules",
  "openclaw",
  "dist",
  "control-ui",
  "index.html",
);
const BRAND_MARKER = "<!-- vilvona-brand -->";
if (existsSync(UI_HTML)) {
  try {
    let html = readFileSync(UI_HTML, "utf8");
    if (!html.includes(BRAND_MARKER)) {
      html = html.replace(/<title>OpenClaw[^<]*<\/title>/, "<title>Vilvona AI</title>").replace(
        /(<\/body>\s*<\/html>)/,
        `  <script>
    ${BRAND_MARKER}
    (function(){function p(){document.title="Vilvona AI";var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);var n;while((n=w.nextNode())){if(n.nodeValue&&n.nodeValue.includes("OpenClaw"))n.nodeValue=n.nodeValue.replace(/OpenClaw/g,"Vilvona AI");}document.querySelectorAll("[alt],[title],[aria-label],[placeholder]").forEach(function(el){["alt","title","aria-label","placeholder"].forEach(function(a){var v=el.getAttribute(a);if(v&&v.includes("OpenClaw"))el.setAttribute(a,v.replace(/OpenClaw/g,"Vilvona AI"));});});}p();new MutationObserver(p).observe(document.body,{childList:true,subtree:true,characterData:true});})();
  </script>\n  $1`,
      );
      writeFileSync(UI_HTML, html, "utf8");
    }
  } catch {}
}

// ── Vilvona AI banner ─────────────────────────────────────────────────────────
process.stdout.write(
  "\n\x1b[35m" +
    "██╗   ██╗██╗██╗     ██╗   ██╗ ██████╗ ███╗   ██╗ █████╗     █████╗ ██╗\n" +
    "██║   ██║██║██║     ██║   ██║██╔═══██╗████╗  ██║██╔══██╗   ██╔══██╗██║\n" +
    "██║   ██║██║██║     ██║   ██║██║   ██║██╔██╗ ██║███████║   ███████║██║\n" +
    "╚██╗ ██╔╝██║██║     ╚██╗ ██╔╝██║   ██║██║╚██╗██║██╔══██║   ██╔══██║██║\n" +
    " ╚████╔╝ ██║███████╗ ╚████╔╝ ╚██████╔╝██║ ╚████║██║  ██║   ██║  ██║██║\n" +
    "  ╚═══╝  ╚═╝╚══════╝  ╚═══╝   ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═╝   ╚═╝  ╚═╝╚═╝\n" +
    "\x1b[0m" +
    "\x1b[36m  Powered by Claude Fable 5  •  Tamil & Hindi  •  Mobile PWA\x1b[0m\n" +
    "\x1b[90m  github.com/vignesh2027/Vilvona-AI  •  by Vignesh S\x1b[0m\n\n",
);

// ── API key check ─────────────────────────────────────────────────────────────
const hasKey =
  process.env.ANTHROPIC_API_KEY ||
  process.env.OPENAI_API_KEY ||
  process.env.GROQ_API_KEY ||
  process.env.VILVONA_PRO_KEY;

if (!hasKey) {
  process.stderr.write(
    "\x1b[33m  No API key detected.\x1b[0m\n" +
      "  Set one before running:\n\n" +
      "    export ANTHROPIC_API_KEY=sk-ant-...   \x1b[90m← Claude Fable 5 (recommended)\x1b[0m\n" +
      "    export OPENAI_API_KEY=sk-...           \x1b[90m← GPT models\x1b[0m\n" +
      "    export GROQ_API_KEY=gsk_...            \x1b[90m← Groq (free tier)\x1b[0m\n\n" +
      "  Get an Anthropic key: \x1b[36mhttps://console.anthropic.com\x1b[0m\n\n",
  );
}

// ── Set Vilvona defaults ──────────────────────────────────────────────────────
process.env.OPENCLAW_DEFAULT_MODEL =
  process.env.VILVONA_DEFAULT_MODEL ??
  process.env.OPENCLAW_DEFAULT_MODEL ??
  "anthropic/claude-fable-5";

if (process.env.VILVONA_PRO_KEY) {
  process.env.OPENCLAW_PRO_KEY = process.env.VILVONA_PRO_KEY;
}

// ── Launch ────────────────────────────────────────────────────────────────────
const child = spawn(process.execPath, [ENTRY, ...process.argv.slice(2)], {
  stdio: "inherit",
  env: process.env,
});

// Forward signals to child — Windows needs SIGTERM/SIGINT/SIGBREAK
const signals =
  process.platform === "win32"
    ? ["SIGTERM", "SIGINT", "SIGBREAK"]
    : ["SIGTERM", "SIGINT", "SIGHUP", "SIGQUIT"];

for (const sig of signals) {
  try {
    process.on(sig, () => {
      try {
        child.kill(sig);
      } catch {}
    });
  } catch {}
}

child.on("exit", (code, signal) => {
  if (signal) {
    try {
      process.kill(process.pid, signal);
    } catch {
      process.exit(1);
    }
  } else {
    process.exit(code ?? 0);
  }
});
