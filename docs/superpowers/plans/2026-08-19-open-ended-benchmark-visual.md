# Open-Ended Benchmark Visual Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a vivid homepage visual showing three valid research trajectories converging on one stable physical ground truth.

**Architecture:** Create one self-contained 16:9 SVG asset with no runtime dependencies, then add it to the existing third research entry. Reuse the current research-card image treatment and update only that entry's metadata.

**Tech Stack:** Static SVG, HTML, existing CSS, Node content tests

---

### Task 1: Create the research-trajectory visual

**Files:**
- Create: `assets/img/open-ended-benchmark.svg`

- [ ] **Step 1: Draw the SVG asset**

Create a `1600 × 900` white SVG. Use three straight polyline paths in cobalt
`#2855D9`, vermilion `#E34A3B`, and gold `#E7A823`; place two geometric
simulation/observation nodes on each path; converge them at a deep-ink junction;
and connect the junction to a teal lattice target. Use no small text, gradients,
curves, shadows, or embedded raster assets.

- [ ] **Step 2: Render and inspect the asset**

Open the SVG directly or render it to PNG and verify that all three paths remain
distinct at thumbnail size, arrowheads point toward the target, and the teal
lattice is the strongest endpoint.

### Task 2: Integrate the visual into the third project

**Files:**
- Modify: `index.html`
- Verify: `tests/site.test.mjs`

- [ ] **Step 1: Add the existing project-preview structure**

Replace the text-only article class with `research-entry` and insert:

```html
<div class="research-preview">
  <img
    src="assets/img/open-ended-benchmark.svg"
    alt="Multiple research trajectories converging on one shared physical ground truth"
  >
</div>
```

- [ ] **Step 2: Update the project metadata**

Use this exact copy:

```html
<p class="research-meta">
  Independent research · Academic discussion: Prof. Siheng Chen, School of
  Artificial Intelligence, Shanghai Jiao Tong University · Pilot completed
</p>
```

- [ ] **Step 3: Perform focused verification**

Run `git diff --check`, confirm the new asset is referenced exactly once, and
visually inspect the third project card. Do not run the broad test suite for this
content-only update.

- [ ] **Step 4: Commit and publish**

```bash
git add assets/img/open-ended-benchmark.svg index.html
git commit -m "Add open-ended benchmark project visual"
git push origin main
```
