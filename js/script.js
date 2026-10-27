const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    const icon = menuToggle.querySelector(".menu-icon");
    if (icon) icon.textContent = isOpen ? "✕" : "☰";
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      const icon = menuToggle.querySelector(".menu-icon");
      if (icon) icon.textContent = "☰";
    });
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
