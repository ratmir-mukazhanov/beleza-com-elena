/**
 * Fills the page from window.DATA (see data.js).
 *
 *   [data-list="key"]        generated list markup (products, faqs, ...)
 *   [data-wa="message"]      WhatsApp link; number comes from DATA.contact.phone
 *   [data-tel]               tel: link; same number as WhatsApp
 *   [data-phone]             text set to DATA.contact.phone
 *   [data-instagram]         link set from DATA.contact.instagram
 *   [data-email]             mailto link set from DATA.contact.email
 *
 * So the phone number and social URLs are defined once, in data.js.
 *
 * To add a data-driven list: add the array to data.js, add a template below,
 * and put <div data-list="yourKey"></div> in the page.
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
                  '<span class="material-symbols-outlined icon icon--sm">chat</span>' +
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

  /* --- Contact & social links -------------------------------------------- */
  document.querySelectorAll("[data-wa]").forEach(function (el) {
    el.setAttribute("href", wa(el.getAttribute("data-wa")));
  });

  document.querySelectorAll("[data-tel]").forEach(function (el) {
    el.setAttribute("href", "tel:" + number);
  });

  document.querySelectorAll("[data-phone]").forEach(function (el) {
    el.textContent = contact.phone || "";
  });

  document.querySelectorAll("[data-instagram]").forEach(function (el) {
    if (contact.instagram) {
      el.setAttribute("href", contact.instagram);
    } else {
      el.hidden = true;
    }
  });

  document.querySelectorAll("[data-email]").forEach(function (el) {
    if (contact.email) {
      el.setAttribute("href", "mailto:" + contact.email);
    } else {
      el.hidden = true;
    }
  });
})();
