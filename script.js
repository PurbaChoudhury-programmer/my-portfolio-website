const menuButton = document.getElementById("menu");
const navbar = document.querySelector(".navbar");

menuButton.addEventListener("click", () => {
    navbar.classList.toggle("active"); // Toggle the visibility of the navbar
});
