#!/usr/bin/env node
// Quick sanity check — runs all Vilvona-specific validations locally.
// Usage: node scripts/vilvona-check.mjs

import { readFileSync, existsSync } from "node:fs";

const pass = (msg) => console.log(`  PASS  ${msg}`);
const fail = (msg) => {
  console.error(`  FAIL  ${msg}`);
  process.exitCode = 1;
};

const pkg = JSON.parse(readFileSync("package.json", "utf8"));

// package.json
pkg.name === "vilvona" ? pass("name: vilvona") : fail("name must be vilvona");
pkg.bin?.vilvona ? pass("bin.vilvona set") : fail("bin.vilvona missing");
pkg.license === "MIT" ? pass("license: MIT") : fail("license must be MIT");
pkg.engines?.node ? pass("engines.node set") : fail("engines.node missing");
pkg.author ? pass("author set") : fail("author missing");
pkg.repository?.url?.includes("Vilvona-AI") ? pass("repo URL") : fail("repo URL wrong");

// critical files
[
  "openclaw.mjs",
  "src/pro/license.ts",
  "src/pro/pro-features.ts",
  "src/vilvona/index.ts",
  "src/config/defaults.ts",
  "ui/src/i18n/locales/ta.ts",
  "ui/src/i18n/locales/hi.ts",
  "docs/index.html",
  "docs/.nojekyll",
  ".github/FUNDING.yml",
  ".github/workflows/ci.yml",
  ".github/workflows/release.yml",
].forEach((f) => (existsSync(f) ? pass(`exists: ${f}`) : fail(`missing: ${f}`)));

// content checks
const launcher = readFileSync("openclaw.mjs", "utf8");
launcher.includes("VILVONA") ? pass("launcher: VILVONA env") : fail("launcher missing VILVONA env");
launcher.includes("claude-fable")
  ? pass("launcher: Fable 5 default")
  : fail("launcher missing Fable 5");
launcher.includes("win32")
  ? pass("launcher: Windows signals")
  : fail("launcher missing Windows signals");

const defaults = readFileSync("src/config/defaults.ts", "utf8");
defaults.includes("claude-fable-5") ? pass("defaults: Fable 5") : fail("defaults missing Fable 5");

const license = readFileSync("src/pro/license.ts", "utf8");
license.includes("mojo.page")
  ? pass("license: correct Pro URL")
  : fail("license has wrong Pro URL");

const docs = readFileSync("docs/index.html", "utf8");
docs.includes("mojo.page") ? pass("docs: Pro payment link") : fail("docs missing Pro link");

console.log(process.exitCode ? "\nSome checks failed." : "\nAll checks passed.");
