# Many-Body Preview Caption Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a 16:9 homepage preview that preserves the original many-body architecture diagram and uses the surrounding white space for concise explanatory copy.

**Architecture:** Composite the approved title, subtitle, original diagram, and three lower labels on a pure-white 2866 x 1612 PNG. Keep the source diagram at exactly 2866 x 1100 pixels and update the homepage to reference the new cache-busting asset filename.

**Tech Stack:** Python, Pillow, static HTML, GitHub Pages

---

### Task 1: Build the captioned image

**Files:**
- Read: `/var/folders/w6/v5xy11sj0v1_tdj1dd6dcs0c0000gn/T/codex-clipboard-ecb32825-3dff-48a2-8e9e-db83cc1634b9.png`
- Create: `assets/img/many-body-modular-architecture-captioned.png`

- [ ] **Step 1: Confirm the source dimensions and background**

Run `sips -g pixelWidth -g pixelHeight <source>` and sample the corners with Pillow.
Expected: `2866 x 1100`; the original component geometry is left unchanged.

- [ ] **Step 2: Composite the approved copy**

Create a `2866 x 1612` pure-white canvas. Draw the centered title and subtitle above the source diagram, paste the cleaned source diagram at native size, and draw the three approved labels in an evenly spaced lower row. Use Helvetica or Arial, black for the title, and neutral gray for secondary copy.

- [ ] **Step 3: Inspect the rendered image**

Open the final PNG at original resolution. Confirm that the title, subtitle, and labels are aligned; the source diagram is not stretched or clipped; and the canvas edges are pure white.

### Task 2: Publish the new preview

**Files:**
- Modify: `index.html`
- Delete: `assets/img/many-body-modular-architecture-v4.png`

- [ ] **Step 1: Update the image reference**

Replace `assets/img/many-body-modular-architecture-v4.png` with `assets/img/many-body-modular-architecture-captioned.png` while keeping the existing descriptive alt text.

- [ ] **Step 2: Run focused verification**

Run `git diff --check`, confirm the new file is `2866 x 1612`, and verify all four corner pixels are `(255, 255, 255)`. Do not run the full site test suite for this asset-only update.

- [ ] **Step 3: Commit and publish**

```bash
git add index.html assets/img/many-body-modular-architecture-captioned.png
git commit -m "Add context to many-body project preview"
git push origin main
```
