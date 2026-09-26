/**
 * UI behaviour for the landing page.
 *
 *   - mobile navigation (hamburger + animated panel)
 *   - smooth, header-aware scrolling for in-page anchors
 *   - scroll spy: highlights the section currently in view
 *   - product category filters
 *   - reveal-on-scroll animations
 *
 * Runs after js/render.js, so generated lists already exist in the DOM.
 */

(function () {
  "use strict";

  var header = document.querySelector(".site-header");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function headerOffset() {
    return (header ? header.offsetHeight : 0) + 8;
  }

  /* --- Mobile navigation -------------------------------------------------- */
  var navToggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");

  function closeNav() {
    if (!nav) return;
    nav.classList.remove("is-open");
    document.body.classList.remove("nav-open");
    if (navToggle) {
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Abrir menu");
      var icon = navToggle.querySelector(".material-symbols-outlined");
      if (icon) icon.textContent = "menu";
    }
  }

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      document.body.classList.toggle("nav-open", open);
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      navToggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
      var icon = navToggle.querySelector(".material-symbols-outlined");
      if (icon) icon.textContent = open ? "close" : "menu";
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeNav();
    });

    document.addEventListener("click", function (e) {
      if (!nav.classList.contains("is-open")) return;
      if (nav.contains(e.target) || navToggle.contains(e.target)) return;
      closeNav();
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth >= 768) closeNav();
    });
  }

  /* --- Smooth scrolling for in-page anchors ------------------------------- */
  function scrollToTarget(target) {
    var top = target.getBoundingClientRect().top + window.pageYOffset - headerOffset();
    window.scrollTo({ top: top < 0 ? 0 : top, behavior: reduceMotion ? "auto" : "smooth" });
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    var hash = link.getAttribute("href");
    if (!hash || hash === "#") return;

    link.addEventListener("click", function (e) {
      var target = document.querySelector(hash);
      if (!target) return;

      e.preventDefault();
      closeNav();
      scrollToTarget(target);

      if (history.pushState) history.pushState(null, "", hash);
    });
  });

  /* --- Scroll spy: highlight the section in view -------------------------- */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".site-nav__link"));
  var spySections = navLinks
    .map(function (link) {
      var hash = link.getAttribute("href") || "";
      var section = hash.charAt(0) === "#" ? document.querySelector(hash) : null;
      return section ? { link: link, section: section } : null;
    })
    .filter(Boolean);

  if (spySections.length) {
    var updateActive = function () {
      var offset = headerOffset();
      var current = null;

      spySections.forEach(function (item) {
        if (item.section.getBoundingClientRect().top <= offset) current = item;
      });

      var atBottom =
        window.innerHeight + window.pageYOffset >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) current = spySections[spySections.length - 1];

      spySections.forEach(function (item) {
        item.link.classList.toggle("is-active", item === current);
      });
    };

    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    updateActive();
  }

  /* --- Product filters ---------------------------------------------------- */
  var chips = document.querySelectorAll(".chip[data-filter]");
  var cards = document.querySelectorAll(".product-card");

  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      chips.forEach(function (other) {
        other.classList.remove("is-active");
      });
      chip.classList.add("is-active");

      var filter = chip.getAttribute("data-filter");
      cards.forEach(function (card) {
        var matches = filter === "all" || card.getAttribute("data-category") === filter;
        card.style.display = matches ? "flex" : "none";
      });
    });
  });

  /* --- Reveal on scroll --------------------------------------------------- */
  var revealTargets = document.querySelectorAll(
    ".section-header, .product-card, .category-card, .philosophy-card, .step, " +
      ".path-card, .faq-item, .about-card, .cta-card, .disclaimer"
  );

  if (!reduceMotion && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );

    revealTargets.forEach(function (el) {
      var siblings = el.parentElement ? el.parentElement.children : [];
      var index = Array.prototype.indexOf.call(siblings, el);
      el.style.animationDelay = Math.min(index, 5) * 0.07 + "s";
      el.classList.add("reveal");
      observer.observe(el);
    });
  }
})();
