(function () {
  document.querySelectorAll("[data-robot-back]").forEach((button) => {
    button.addEventListener("click", () => {
      if (window.history.length > 1) {
        window.history.back();
        return;
      }
      window.location.href = "../";
    });
  });
})();
