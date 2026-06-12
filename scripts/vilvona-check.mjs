#!/usr/bin/env node
// Quick sanity check — runs all Vilvona-specific validations locally.
// Usage: node scripts/vilvona-check.mjs

import { execSync } from "node:child_process";
import { readFileSync, existsSync, statSync } from "node:fs";

let passed = 0;
let failed = 0;

const pass = (msg) => {
  console.log(`  PASS  ${msg}`);
  passed++;
};
const fail = (msg) => {
  console.error(`  FAIL  ${msg}`);
  failed++;
  process.exitCode = 1;
};
const section = (title) => console.log(`\n── ${title}`);

const pkg = JSON.parse(readFileSync("package.json", "utf8"));

// ── package.json ─────────────────────────────────────────────────────────────
section("package.json");
pkg.name === "vilvona" ? pass("name: vilvona") : fail("name must be vilvona");
pkg.bin?.vilvona ? pass("bin.vilvona set") : fail("bin.vilvona missing");
pkg.license === "MIT" ? pass("license: MIT") : fail("license must be MIT");
pkg.engines?.node ? pass("engines.node set") : fail("engines.node missing");
pkg.author ? pass("author set") : fail("author missing");
pkg.repository?.url?.includes("Vilvona-AI") ? pass("repo URL") : fail("repo URL wrong");
pkg.homepage?.includes("Vilvona-AI") ? pass("homepage links to docs") : fail("homepage wrong");
pkg.description ? pass("description set") : fail("description missing");
pkg.keywords?.length > 0 ? pass(`keywords: ${pkg.keywords.length}`) : fail("keywords missing");
!pkg.private ? pass("not private (publishable)") : fail("package is private — won't publish");

// version consistency: fallback in openclaw.mjs matches package.json
section("version consistency");
const launcher = readFileSync("openclaw.mjs", "utf8");
launcher.includes(`return "${pkg.version}"`)
  ? pass(`fallback version matches ${pkg.version}`)
  : fail(`openclaw.mjs fallback != package.json ${pkg.version}`);

// ── critical files ────────────────────────────────────────────────────────────
section("critical files");
const requiredFiles = [
  "openclaw.mjs",
  "LICENSE",
  "README.md",
  "UPSTREAM.md",
  ".snyk",
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
  ".github/workflows/snyk.yml",
  "SECURITY.md",
];
requiredFiles.forEach((f) => (existsSync(f) ? pass(`exists: ${f}`) : fail(`missing: ${f}`)));

// ── launcher checks ───────────────────────────────────────────────────────────
section("launcher (openclaw.mjs)");
launcher.includes("VILVONA") ? pass("VILVONA env vars") : fail("missing VILVONA env");
launcher.includes("claude-fable") ? pass("Fable 5 default") : fail("missing Fable 5");
launcher.includes("win32") ? pass("Windows signal handling") : fail("missing Windows signals");
launcher.includes("MIN_MAJOR") ? pass("Node version guard") : fail("missing Node version guard");
launcher.includes("VILVONA_VERSION")
  ? pass("dynamic version read")
  : fail("missing dynamic version");
launcher.includes("createRequire")
  ? pass("createRequire ESM pattern")
  : fail("missing createRequire");

// ── source checks ─────────────────────────────────────────────────────────────
section("source files");
const defaults = readFileSync("src/config/defaults.ts", "utf8");
defaults.includes("claude-fable-5") ? pass("defaults: Fable 5") : fail("defaults missing Fable 5");
defaults.includes("fable") ? pass("defaults: fable alias") : fail("defaults missing fable alias");

const license = readFileSync("src/pro/license.ts", "utf8");
license.includes("mojo.page")
  ? pass("license: correct Pro URL")
  : fail("license has wrong Pro URL");
license.includes("VLVN-") ? pass("license: VLVN key format") : fail("license missing VLVN format");
license.includes("VILVONA_PRO_KEY")
  ? pass("license: env var correct")
  : fail("license env var wrong");

const vilvonaId = readFileSync("src/vilvona/index.ts", "utf8");
vilvonaId.includes("VILVONA_NAME")
  ? pass("vilvona/index: VILVONA_NAME")
  : fail("vilvona/index missing VILVONA_NAME");
vilvonaId.includes("mojo.page")
  ? pass("vilvona/index: Pro URL")
  : fail("vilvona/index missing Pro URL");

// ── docs checks ───────────────────────────────────────────────────────────────
section("docs");
const docs = readFileSync("docs/index.html", "utf8");
docs.includes("mojo.page") ? pass("docs: Pro payment link") : fail("docs missing Pro link");
docs.includes("Vilvona AI") ? pass("docs: branded correctly") : fail("docs missing brand");
docs.includes("yarn dlx") ? pass("docs: yarn install method") : fail("docs missing yarn");
docs.includes("pnpm dlx") ? pass("docs: pnpm install method") : fail("docs missing pnpm");
docs.includes("npx") ? pass("docs: npx install method") : fail("docs missing npx");

// ── README checks ─────────────────────────────────────────────────────────────
section("README.md");
const readme = readFileSync("README.md", "utf8");
readme.includes("mojo.page") ? pass("README: Pro link") : fail("README missing Pro link");
readme.includes("snyk.io") ? pass("README: Snyk badge") : fail("README missing Snyk badge");
readme.includes("yarn dlx vilvona")
  ? pass("README: yarn method")
  : fail("README missing yarn method");
readme.includes("pnpm dlx vilvona")
  ? pass("README: pnpm method")
  : fail("README missing pnpm method");
readme.includes("npx vilvona") ? pass("README: npx method") : fail("README missing npx method");

// ── security checks ───────────────────────────────────────────────────────────
section("security");
const snykPolicy = readFileSync(".snyk", "utf8");
snykPolicy.includes("version")
  ? pass(".snyk: valid policy file")
  : fail(".snyk: invalid policy file");
const security = readFileSync("SECURITY.md", "utf8");
security.includes("lkvarnesh@gmail.com")
  ? pass("SECURITY.md: contact set")
  : fail("SECURITY.md: contact missing");

// ── file size sanity ──────────────────────────────────────────────────────────
section("file sizes");
const launcherSize = statSync("openclaw.mjs").size;
launcherSize < 10_000
  ? pass(`openclaw.mjs size ok (${launcherSize}B)`)
  : fail(`openclaw.mjs too large (${launcherSize}B)`);
const readmeSize = statSync("README.md").size;
readmeSize > 2_000
  ? pass(`README.md has content (${readmeSize}B)`)
  : fail(`README.md too short (${readmeSize}B)`);

// ── npm audit ─────────────────────────────────────────────────────────────────
section("npm audit");
try {
  execSync("npm audit --audit-level=high 2>&1", { encoding: "utf8" });
  pass("npm audit: 0 high/critical vulnerabilities");
} catch (e) {
  fail("npm audit: vulnerabilities found — run 'npm audit' for details");
}

// ── summary ───────────────────────────────────────────────────────────────────
console.log(`\n${"─".repeat(50)}`);
console.log(`  ${passed} passed  ·  ${failed} failed`);
if (failed === 0) {
  console.log("  All checks passed.\n");
} else {
  console.log(`  ${failed} check(s) failed. Fix above before releasing.\n`);
}
