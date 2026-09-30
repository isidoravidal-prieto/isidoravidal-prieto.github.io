document.addEventListener("DOMContentLoaded", function () {

  if (!window.location.pathname.includes("/es/")) {
    return;
  }

  const navLinks = document.querySelectorAll("nav.navbar a");

  navLinks.forEach(function (link) {

    const href = link.getAttribute("href") || "";
    const text = link.textContent.trim();

    if (
      text === "Home" ||
      href === "index.html" ||
      href === "/index.html" ||
      href === "./index.html"
    ) {
      link.textContent = "Inicio";
      link.href = "/es/index.html";
    }

    else if (
      text === "Projects" ||
      href.includes("en/projects.html")
    ) {
      link.textContent = "Proyectos";
      link.href = "/es/projects.html";
    }

    else if (
      text === "Gallery" ||
      href.includes("en/projects/gallery.html")
    ) {
      link.textContent = "Galería";
      link.href = "/es/projects/gallery.html";
    }

    else if (
      text === "Contact" ||
      href.includes("en/contact.html")
    ) {
      link.textContent = "Contacto";
      link.href = "/es/contact.html";
    }

    else if (text.includes("Language")) {
      link.innerHTML = "🌐 Idioma";
    }

  });

  const navbarTitle = document.querySelector(".navbar-title");

  if (navbarTitle) {
    navbarTitle.textContent = "Portafolio";
  }

});