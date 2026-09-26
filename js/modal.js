/**
 * Skin assessment modal.
 * Handles open/close, scroll locking and composing the WhatsApp message with
 * the collected answers. Replaces the inline onclick/onsubmit handlers from
 * the original export.
 *
 * Open a modal from anywhere with:  <button data-open-skin-quiz>
 * Close it with:                    <button data-close-skin-quiz>
 */
(function () {
  "use strict";

  var WHATSAPP_NUMBER = "351900000000";

  function initSkinQuizModal() {
    var modal = document.getElementById("skin-quiz-modal");
    if (!modal) {
      return;
    }

    var form = document.getElementById("skin-assessment-form");

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
      if (event.target === modal) {
        close();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !modal.hidden) {
        close();
      }
    });

    if (!form) {
      return;
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var name = document.getElementById("quiz-name").value;
      var phone = document.getElementById("quiz-phone").value;
      var skinTypeInput = document.querySelector('input[name="skinType"]:checked');
      var skinType = skinTypeInput ? skinTypeInput.value : "Não especificado";
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
        "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message),
        "_blank"
      );

      close();
    });
  }

  window.initSkinQuizModal = initSkinQuizModal;
})();
