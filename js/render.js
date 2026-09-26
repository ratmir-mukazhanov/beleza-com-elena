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
                  '<img class="product-card__img" alt="' + p.alt + '" src="' + p.image + '">' +
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
})();
