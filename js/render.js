/**
 * Renders the page from window.DATA (js/data.js) and wires the interactions.
 *
 *   [data-list="key"]     generated list markup (see templates below)
 *   [data-wa="message"]   WhatsApp link; number comes from DATA.contact.phone
 *   [data-phone]          element text set to DATA.contact.phone
 *
 * The phone number is defined once, in data.js. To add a data-driven list:
 * add the array to data.js, add a template below, and put
 * <div data-list="yourKey"></div> in the page.
 */

(function () {
  "use strict";

  var data = window.DATA || {};
  var contact = data.contact || {};
  var number = String(contact.phone || "").replace(/\D/g, "");

  function wa(message) {
    var url = "https://wa.me/" + number;
    return message ? url + "?text=" + encodeURIComponent(message) : url;
  }

  /* --- List templates ----------------------------------------------------- */
  var templates = {
    products: function (items) {
      return items
        .map(function (p) {
          return (
            '<article class="product-card card" data-category="' + p.category + '">' +
              '<div class="product-card__head">' +
                '<div class="product-card__tag-row">' +
                  '<span class="product-card__tag">' + p.tag + "</span>" +
                "</div>" +
                '<div class="product-card__media">' +
                  '<img class="product-card__img" alt="' + p.alt + '" src="' + p.image + '" loading="lazy" decoding="async">' +
                "</div>" +
                '<h3 class="product-card__title">' + p.title + "</h3>" +
                '<p class="product-card__desc">' + p.desc + "</p>" +
              "</div>" +
              '<div class="product-card__cta">' +
                '<a class="btn btn--primary btn--sm btn--block" href="' + wa(p.message) + '" rel="noopener noreferrer" target="_blank">' +
                  '<span class="material-symbols-outlined icon icon--sm">chat</span>' +
                  "<span>Tenho interesse</span>" +
                "</a>" +
              "</div>" +
            "</article>"
          );
        })
        .join("");
    },

    categories: function (items) {
      return items
        .map(function (c) {
          return (
            '<a class="category-card card" data-wa="' + c.message + '" rel="noopener noreferrer" target="_blank">' +
              '<div class="category-card__icon"><span class="material-symbols-outlined icon icon--xl">' + c.icon + "</span></div>" +
              "<div>" +
                '<h3 class="category-card__title">' + c.title + "</h3>" +
                '<p class="category-card__desc">' + c.desc + "</p>" +
              "</div>" +
            "</a>"
          );
        })
        .join("");
    },

    philosophy: function (items) {
      return items
        .map(function (p) {
          return (
            '<div class="philosophy-card card">' +
              '<div class="philosophy-card__top">' +
                '<span class="philosophy-card__num">' + p.num + "</span>" +
                '<span class="material-symbols-outlined icon icon--xl philosophy-card__icon">' + p.icon + "</span>" +
              "</div>" +
              "<div>" +
                '<h3 class="philosophy-card__title">' + p.title + "</h3>" +
                '<p class="philosophy-card__desc">' + p.desc + "</p>" +
              "</div>" +
            "</div>"
          );
        })
        .join("");
    },

    steps: function (items) {
      return items
        .map(function (s) {
          return (
            '<div class="step card">' +
              '<div class="step__num">' + s.num + "</div>" +
              '<h3 class="step__title">' + s.title + "</h3>" +
              '<p class="step__desc">' + s.desc + "</p>" +
            "</div>"
          );
        })
        .join("");
    },

    faqs: function (items) {
      return items
        .map(function (f) {
          return (
            '<details class="faq-item card">' +
              '<summary class="faq-item__question">' +
                "<span>" + f.q + "</span>" +
                '<span class="material-symbols-outlined icon faq-item__icon">expand_more</span>' +
              "</summary>" +
              '<p class="faq-item__answer">' + f.a + "</p>" +
            "</details>"
          );
        })
        .join("");
    },
  };

  document.querySelectorAll("[data-list]").forEach(function (el) {
    var key = el.getAttribute("data-list");
    if (typeof templates[key] === "function") {
      el.innerHTML = templates[key](data[key] || []);
    }
  });

  /* --- Contact links ------------------------------------------------------ */
  document.querySelectorAll("[data-wa]").forEach(function (el) {
    el.setAttribute("href", wa(el.getAttribute("data-wa")));
  });

  document.querySelectorAll("[data-phone]").forEach(function (el) {
    el.textContent = contact.phone || "";
  });

  /* --- Product filter ----------------------------------------------------- */
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

  /* --- Mobile nav --------------------------------------------------------- */
  var navToggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");

  function closeNav() {
    if (!nav) return;
    nav.classList.remove("is-open");
    document.body.classList.remove("nav-open");
    if (navToggle) {
      navToggle.setAttribute("aria-expanded", "false");
      var icon = navToggle.querySelector(".material-symbols-outlined");
      if (icon) icon.textContent = "menu";
    }
  }

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      document.body.classList.toggle("nav-open", open);
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      var icon = navToggle.querySelector(".material-symbols-outlined");
      if (icon) icon.textContent = open ? "close" : "menu";
    });

    nav.querySelectorAll(".site-nav__link").forEach(function (link) {
      link.addEventListener("click", closeNav);
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

  /* --- Scroll spy (current section) --------------------------------------- */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".site-nav__link"));
  var spySections = navLinks
    .map(function (link) {
      var hash = link.getAttribute("href") || "";
      var section = hash.charAt(0) === "#" ? document.querySelector(hash) : null;
      return section ? { link: link, section: section } : null;
    })
    .filter(Boolean);

  if (spySections.length) {
    var headerOffset = function () {
      var header = document.querySelector(".site-header");
      return (header ? header.offsetHeight : 0) + 8;
    };

    var updateActive = function () {
      var offset = headerOffset();
      var current = null;

      spySections.forEach(function (item) {
        if (item.section.getBoundingClientRect().top <= offset) current = item;
      });

      var atBottom =
        window.innerHeight + window.scrollY >=
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
})();
