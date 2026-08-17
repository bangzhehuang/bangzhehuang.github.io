export function calculateScrollProgress(scrollY, scrollHeight, viewportHeight) {
  const available = Math.max(0, scrollHeight - viewportHeight);

  if (available === 0) return 0;
  return Math.min(1, Math.max(0, scrollY / available));
}

export function setMenuOpen(toggle, menu, open) {
  toggle?.setAttribute("aria-expanded", String(open));
  menu?.toggleAttribute("data-open", open);
}

export function initHomepage(doc, browserWindow) {
  const toggle = doc.querySelector("[data-nav-toggle]");
  const menu = doc.querySelector("[data-nav-menu]");
  const progress = doc.querySelector("#progress");

  toggle?.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    setMenuOpen(toggle, menu, !open);
  });

  menu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(toggle, menu, false));
  });

  const updateProgress = () => {
    if (!progress) return;
    progress.value = calculateScrollProgress(
      browserWindow.scrollY,
      doc.documentElement.scrollHeight,
      browserWindow.innerHeight,
    );
  };

  browserWindow.addEventListener("scroll", updateProgress, { passive: true });
  browserWindow.addEventListener("resize", updateProgress, { passive: true });
  updateProgress();
}

if (typeof document !== "undefined" && typeof window !== "undefined") {
  initHomepage(document, window);
}
