import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const htmlPath = new URL("../index.html", import.meta.url);
const cssPath = new URL("../assets/css/main.css", import.meta.url);

function readHomepage() {
  return readFileSync(htmlPath, "utf8");
}

test("homepage exposes the approved navigation", () => {
  const html = readHomepage();

  for (const label of ["about", "research", "experience", "cv"]) {
    assert.match(html, new RegExp(`>${label}<`, "i"));
  }
});

test("homepage keeps the name primary and removes portrait treatment", () => {
  const html = readHomepage();

  assert.match(
    html,
    /<h1[^>]*>[\s\S]*Bangzhe[\s\S]*Huang[\s\S]*<\/h1>/i,
  );
  assert.doesNotMatch(html, /class=["'][^"']*profile[^"']*["']/i);
  assert.doesNotMatch(html, /alt=["'][^"']*portrait[^"']*["']/i);
});

test("homepage contains the four research entries in the approved order", () => {
  const html = readHomepage();
  const titles = [
    "AI4AI: Learning to Design a Meta-model",
    "Physics-Informed Many-Body Foundation Models",
    "Open-Ended Scientific Research Benchmark for Physics Research Agents",
    "Phase Transport and Defect Dynamics in Nonreciprocal Spin Systems",
  ];
  let previous = -1;

  for (const title of titles) {
    const position = html.indexOf(title);
    assert.ok(position > previous, `${title} must appear in order`);
    previous = position;
  }
});

test("homepage excludes rejected sections and claims", () => {
  const html = readHomepage();

  for (const rejected of [
    "Updates",
    "Selected Publications",
    "Honors",
    "Olympiad",
  ]) {
    assert.ok(!html.includes(rejected), `${rejected} must not be rendered`);
  }
});

test("every referenced local image exists", () => {
  const html = readHomepage();
  const sources = [...html.matchAll(/<img[^>]+src=["']([^"']+)["']/g)].map(
    (match) => match[1],
  );

  for (const source of sources.filter((value) => !/^https?:/.test(value))) {
    const asset = new URL(`../${source.replace(/^\//, "")}`, import.meta.url);
    assert.ok(existsSync(asset), `${source} must exist`);
  }
});

test("public links use the real AI4AI destinations", () => {
  const html = readHomepage();

  assert.match(html, /https:\/\/bangzhehuang\.github\.io\/AI4AI-demo\//);
  assert.match(html, /https:\/\/github\.com\/bangzhehuang\/AI4AI-demo/);
});

test("the CV link targets a real PDF", () => {
  const html = readHomepage();
  const cv = new URL("../cv/bangzhe-huang-cv.pdf", import.meta.url);

  assert.match(html, /href=["']cv\/bangzhe-huang-cv\.pdf["']/);
  assert.ok(existsSync(cv), "the linked CV PDF must exist");
  assert.equal(readFileSync(cv).subarray(0, 4).toString(), "%PDF");
});

test("reference fonts are self-hosted and available offline", () => {
  const html = readHomepage();
  const css = readFileSync(cssPath, "utf8");
  const fonts = [
    "assets/fonts/roboto-latin-variable.woff2",
    "assets/fonts/roboto-slab-latin-400.woff2",
  ];

  assert.doesNotMatch(html, /fonts\.(googleapis|gstatic)\.com/);
  for (const font of fonts) {
    assert.match(css, new RegExp(font.split("/").at(-1).replace(".", "\\.")));
    assert.ok(existsSync(new URL(`../${font}`, import.meta.url)), `${font} must exist`);
  }
});
