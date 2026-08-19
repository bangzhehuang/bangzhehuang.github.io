# Open-Ended Benchmark Visual Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the icon-like benchmark image with a full-canvas academic method figure based on the approved two-region design.

**Architecture:** Keep the existing homepage `<img>` reference and replace only its self-contained SVG asset. The SVG uses native text, dashed method boxes, split state blocks, and orthogonal arrows, so it remains sharp and legible without runtime code.

**Tech Stack:** Static SVG, existing HTML/CSS, Quick Look rendering, Playwright screenshot

---

### Task 1: Replace the visual asset

**Files:**
- Modify: `assets/img/open-ended-benchmark.svg`

- [ ] **Step 1: Draw the left task region**

Use a bordered left region titled `Open-Ended Physics Task`. Add a dashed system
boundary containing `Physics Simulator` and `Unknown Physical System`, connect it
to `Research Agent` with red `actions` and gray `observations` arrows, and include
`Task: identify the underlying physical structure`.

- [ ] **Step 2: Draw the right trajectory region**

Title it `+ Diverse Research Trajectories`. Branch `Initial Research State` into
three dashed state nodes labeled `SIMULATE`, `OBSERVE`, and `REFINE`, then converge
them on `SHARED GROUND TRUTH`, split into `Physical Structure` and
`Equivalent Observables`. End with `Different trajectories. One stable target.`.

- [ ] **Step 3: Apply the reference visual system**

Use Arial/Helvetica, black heavy titles, pale-yellow state headers, gray state
bodies, red primary arrows, gray secondary arrows, dashed boundaries, straight
segments, and enough scale to fill the `1600 × 900` viewBox.

### Task 2: Verify and publish

**Files:**
- Verify: `assets/img/open-ended-benchmark.svg`
- Verify: `index.html`

- [ ] **Step 1: Validate the SVG**

Run `xmllint --noout assets/img/open-ended-benchmark.svg`; expect no output and
exit status `0`.

- [ ] **Step 2: Inspect both render sizes**

Render the SVG directly, then capture the third homepage project card at desktop
width. Confirm the full figure has no empty regions and the thumbnail retains its
headings, trajectory structure, and shared-GT endpoint.

- [ ] **Step 3: Commit and publish**

```bash
git add assets/img/open-ended-benchmark.svg
git commit -m "Refine open-ended benchmark method figure"
git push origin main
```
