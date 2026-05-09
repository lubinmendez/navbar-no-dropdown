const hamburguerButton = document.querySelector(".menu-hamburguer-button");
const mobileMenu = document.querySelector(".mobile-menu");

hamburguerButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});