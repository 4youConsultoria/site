const header = document.querySelector("header");
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("header nav");

if (header && navToggle && nav) {
  const setOpen = (isOpen) => {
    header.classList.toggle("nav-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  };

  navToggle.addEventListener("click", () => {
    setOpen(!header.classList.contains("nav-open"));
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
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
