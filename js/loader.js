/**
 * Tiny no-build partial loader.
 * Finds every [data-include] element, fetches the referenced HTML partial and
 * injects it, then initializes the interactive modules. Works as-is on GitHub
 * Pages (static hosting) and behind any static server.
 *
 * Usage:
 *   <div data-include="partials/hero.html"></div>
 */
(function () {
  "use strict";

  function loadPartial(element) {
    var src = element.getAttribute("data-include");

    return fetch(src)
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Não foi possível carregar " + src + " (" + response.status + ")");
        }
        return response.text();
      })
      .then(function (html) {
        element.innerHTML = html;
      })
      .catch(function (error) {
        element.innerHTML =
          '<p style="padding:1rem;color:#ba1a1a">Erro ao carregar a secção.</p>';
        console.error(error);
      });
  }

  function init() {
    if (typeof window.initProductFilter === "function") {
      window.initProductFilter();
    }
    if (typeof window.initSkinQuizModal === "function") {
      window.initSkinQuizModal();
    }
    document.dispatchEvent(new CustomEvent("partials:loaded"));
  }

  var targets = Array.prototype.slice.call(
    document.querySelectorAll("[data-include]")
  );

  if (!targets.length) {
    init();
    return;
  }

  Promise.all(targets.map(loadPartial)).then(init);
})();
