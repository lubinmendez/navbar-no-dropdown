const hamburgerButton = document.querySelector(".menu-hamburger-button");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu a");
const logoName =document.querySelector(".logo-name-link");

// Toggles mobile menu visibility when hamburger button is clicked
hamburgerButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});

// Closes mobile menu when a navigation link is clicked
mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
  });
});

// Close the mobile menu when the logo-name is clicked so the home section becomes visible
logoName.addEventListener("click", () => {
  mobileMenu.classList.remove("show");
});