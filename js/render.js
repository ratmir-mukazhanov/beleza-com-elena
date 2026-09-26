/**
 * Renders the page from window.DATA (js/data.js) and wires the interactions.
 *
 *   [data-list="key"]     generated list markup (products, faqs)
 *   [data-wa="message"]   WhatsApp link; number comes from DATA.contact.phone
 *   [data-tel]            tel: link; same number as WhatsApp
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

  /* --- Contact links ------------------------------------------------------ */
  document.querySelectorAll("[data-wa]").forEach(function (el) {
    el.setAttribute("href", wa(el.getAttribute("data-wa")));
  });

  document.querySelectorAll("[data-tel]").forEach(function (el) {
    el.setAttribute("href", "tel:" + number);
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

  /* --- Skin assessment modal ---------------------------------------------- */
  var modal = document.getElementById("skin-quiz-modal");
  var form = document.getElementById("skin-assessment-form");
  if (!modal || !form) {
    return;
  }

  function open() {
    modal.hidden = false;
    document.body.classList.add("is-modal-open");
  }

  function close() {
    modal.hidden = true;
    document.body.classList.remove("is-modal-open");
  }

  document.querySelectorAll("[data-open-skin-quiz]").forEach(function (trigger) {
    trigger.addEventListener("click", function (event) {
      event.preventDefault();
      open();
    });
  });

  modal.querySelectorAll("[data-close-skin-quiz]").forEach(function (trigger) {
    trigger.addEventListener("click", close);
  });

  modal.addEventListener("click", function (event) {
    if (event.target === modal) close();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !modal.hidden) close();
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("quiz-name").value;
    var phone = document.getElementById("quiz-phone").value;
    var skinInput = document.querySelector('input[name="skinType"]:checked');
    var skinType = skinInput ? skinInput.value : "Não especificado";
    var goal = document.getElementById("quiz-goal").value;
    var pref = document.getElementById("quiz-pref").value;

    var message =
      "Olá Elena! Fiz a Avaliação de Cuidados da Pele Atomy no website:\n\n" +
      "*Nome:* " + name + "\n" +
      "*Contacto:* " + phone + "\n" +
      "*Tipo de Pele:* " + skinType + "\n" +
      "*Principal Objetivo:* " + goal + "\n" +
      "*Preferência de Recomendação:* " + pref;

    window.open(
      "https://wa.me/" + number + "?text=" + encodeURIComponent(message),
      "_blank"
    );

    close();
  });
})();
