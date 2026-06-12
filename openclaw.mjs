#!/usr/bin/env node

/**
 * Vilvona AI — launcher
 * Downloads OpenClaw runtime on first run, then starts with Vilvona defaults.
 */

import { spawn, execSync } from "node:child_process";
import { existsSync, mkdirSync } from "node:fs";
import os from "node:os";
import path from "node:path";

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
  process.stdout.write("Vilvona AI 1.0.0 (powered by OpenClaw)\n");
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
