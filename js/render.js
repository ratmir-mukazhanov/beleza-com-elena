/**
 * Fills every element carrying a `data-list="<key>"` attribute with markup
 * generated from window.DATA (see data.js).
 *
 * To add a new data-driven list: add the array to data.js, add a template
 * function below, and drop `<div data-list="yourKey"></div>` in the page.
 */

(function () {
  "use strict";

  var data = window.DATA || {};

  function wa(message) {
    return "https://wa.me/" + data.whatsapp + "?text=" + encodeURIComponent(message);
  }

  var templates = {
    products: function (items) {
      return items
        .map(function (p) {
          return (
            '<article class="product-card" data-category="' + p.category + '">' +
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
                  '<span class="material-symbols-outlined icon icon--16">chat</span>' +
                  "<span>Tenho interesse</span>" +
                "</a>" +
              "</div>" +
            "</article>"
          );
        })
        .join("");
    },

    faqs: function (items) {
      return items
        .map(function (f) {
          return (
            '<details class="faq-item">' +
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
})();
