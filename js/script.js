(function () {
  const modal = document.querySelector(".login-modal");

  if (modal) {
    const openButton = document.querySelector(".demo__button");
    const closeButton = document.querySelector(".login-modal__close-button");

    let isOpen = false;

    function openModal() {
      if (!isOpen) {
        modal.classList.add("active");
        isOpen = true;
      }
    }

    function closeModal() {
      if (isOpen) {
        modal.classList.remove("active");
        isOpen = false;
      }
    }

    openButton.addEventListener("click", openModal);
    closeButton.addEventListener("click", closeModal);
  }
})();
