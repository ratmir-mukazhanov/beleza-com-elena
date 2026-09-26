/**
 * Page interactions: product filtering and the skin assessment modal.
 * Runs after render.js, so the generated cards already exist.
 */

(function () {
  "use strict";

  var contact = (window.DATA && window.DATA.contact) || {};
  var number = String(contact.phone || "").replace(/\D/g, "");

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

  /* --- Skin assessment modal --------------------------------------------- */
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
