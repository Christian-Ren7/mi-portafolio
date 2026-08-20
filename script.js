// ==============================
// MENÚ RESPONSIVE
// ==============================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


// ==============================
// CERRAR MENÚ AL SELECCIONAR
// ==============================

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });

});


// ==============================
// AÑO AUTOMÁTICO DEL FOOTER
// ==============================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();
