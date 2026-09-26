/**
 * Product filtering.
 * Progressive enhancement: wires the filter chips to the product cards.
 * Expects the products partial to be present in the DOM.
 */
(function () {
  "use strict";

  function initProductFilter() {
    var buttons = document.querySelectorAll(".chip[data-filter]");
    var cards = document.querySelectorAll(".product-card");

    if (!buttons.length || !cards.length) {
      return;
    }

    function apply(filter) {
      cards.forEach(function (card) {
        var matches =
          filter === "all" || card.getAttribute("data-category") === filter;
        card.style.display = matches ? "flex" : "none";
      });
    }

    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        buttons.forEach(function (other) {
          other.classList.remove("is-active");
        });
        button.classList.add("is-active");
        apply(button.getAttribute("data-filter"));
      });
    });
  }

  window.initProductFilter = initProductFilter;
})();
