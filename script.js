const header = document.querySelector("header");
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("header nav");

if (header && navToggle && nav) {
  const setOpen = (isOpen) => {
    header.classList.toggle("nav-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  };

  navToggle.addEventListener("click", () => {
    setOpen(!header.classList.contains("nav-open"));
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      setOpen(false);
    }
  });

  document.addEventListener("click", (event) => {
    if (!header.contains(event.target)) {
      setOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setOpen(false);
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1360) {
      setOpen(false);
    }
  });
}

const brand = document.querySelector(".brand");
if (brand) {
  brand.addEventListener("click", (event) => {
    event.preventDefault();
    header?.classList.remove("nav-open");
    navToggle?.setAttribute("aria-expanded", "false");
    window.scrollTo({ top: 0, behavior: "smooth" });
    history.replaceState(null, "", location.pathname + location.search);
  });
}

const year = document.querySelector(".year");
if (year) {
  year.textContent = new Date().getFullYear();
}
