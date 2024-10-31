document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const nav = document.querySelector("header nav");

    hamburgerMenu.addEventListener("click", function() {
        nav.classList.toggle("open");
    });

    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = "Last Modification: " + lastModified;
})