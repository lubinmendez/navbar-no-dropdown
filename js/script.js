const hamburguerButton = document.querySelector(".menu-hamburguer-button");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu a");

/* Toggles mobile menu visibility when hamburger button is clicked */
hamburguerButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});

/* Closes mobile menu when a navigation link is clicked */
mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
  });
});