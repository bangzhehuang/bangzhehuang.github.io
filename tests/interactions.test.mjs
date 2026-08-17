import assert from "node:assert/strict";
import test from "node:test";

import {
  calculateScrollProgress,
  setMenuOpen,
} from "../assets/js/main.js";

test("calculateScrollProgress maps the scrollable range to zero through one", () => {
  assert.equal(calculateScrollProgress(0, 2000, 1000), 0);
  assert.equal(calculateScrollProgress(500, 2000, 1000), 0.5);
  assert.equal(calculateScrollProgress(1000, 2000, 1000), 1);
});

test("calculateScrollProgress clamps overscroll and non-scrollable pages", () => {
  assert.equal(calculateScrollProgress(-20, 2000, 1000), 0);
  assert.equal(calculateScrollProgress(1200, 2000, 1000), 1);
  assert.equal(calculateScrollProgress(0, 800, 1000), 0);
});

test("setMenuOpen keeps button accessibility state and menu visibility aligned", () => {
  const attributes = new Map();
  const toggle = {
    setAttribute(name, value) {
      attributes.set(name, value);
    },
  };
  const menu = {
    toggleAttribute(name, force) {
      if (force) attributes.set(name, "");
      else attributes.delete(name);
    },
  };

  setMenuOpen(toggle, menu, true);
  assert.equal(attributes.get("aria-expanded"), "true");
  assert.ok(attributes.has("data-open"));

  setMenuOpen(toggle, menu, false);
  assert.equal(attributes.get("aria-expanded"), "false");
  assert.ok(!attributes.has("data-open"));
});
