// scripts.js

// --- 1) Footer year with fade-in ---
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
    yearSpan.style.opacity = 0;
    yearSpan.style.transition = "opacity 1s ease";
    requestAnimationFrame(() => {
      yearSpan.style.opacity = 1;
    });
  }
});

// --- 2) Theme toggle ---
(function themeSetup() {
  const btn = document.getElementById("theme-toggle");
  const icon = document.getElementById("theme-icon");
  const root = document.documentElement;

  function setIcon() {
    icon.textContent = root.classList.contains("dark") ? "☀️" : "🌙";
  }
  setIcon();

  btn.addEventListener("click", () => {
    const nowDark = !root.classList.contains("dark");
    root.classList.toggle("dark", nowDark);
    localStorage.setItem("theme", nowDark ? "dark" : "light");
    setIcon();
  });
})();

// --- 3) Mark active nav link (per page) ---
(function activeNav() {
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  const map = {
    "index.html": "home",
    "about.html": "about",
    "research.html": "research",
    "cv.html": "cv",
    "writings.html": "writings",
    "resources.html": "resources",
    "contact.html": "contact",
  };
  const key = map[path] || "home";
  const el = document.querySelector(`[data-nav="${key}"]`);
  if (el) el.classList.add("text-blue-600", "dark:text-blue-400", "font-semibold");
})();

// --- 4) Home-only animations ---
(function homeAnimations() {
  if (document.body.id !== "home") return;

  // Split overlay animation with GSAP
  const overlay = document.getElementById("split-overlay");
  const leftPanel = overlay.children[0];
  const rightPanel = overlay.children[1];

  gsap.set([leftPanel, rightPanel], { xPercent: 0 });
  gsap.timeline()
    .to(leftPanel, { xPercent: -100, duration: 1.8, ease: "power3.inOut" }, 0.1)
    .to(rightPanel, { xPercent: 100, duration: 1.8, ease: "power3.inOut" }, 0.1)
    .to(overlay, { autoAlpha: 0, duration: 0.2 }, 0.9)
    .fromTo("#name-title",
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" },
      0.9
    );

  // Typewriter effect
  const typedTarget = document.getElementById("typed");
  if (typedTarget && window.Typed) {
    new Typed("#typed", {
      strings: ["Physics", "Philosophy", "Poetry"],
      typeSpeed: 70,
      backSpeed: 50,
      backDelay: 900,
      startDelay: 200,
      loop: true,
      smartBackspace: false,
      showCursor: true,
      cursorChar: "▌",
    });
  }
})();
