const menuButton = document.querySelector("#menuButton");
const mobileMenu = document.querySelector("#mobileMenu");
const menuIcon = document.querySelector("#menu-icon");

// add toggle for menu button
menuButton.addEventListener("click", toggle)

const navLinks = document.querySelectorAll(".nav-link");

// add toggle function for all link in the nav bar
navLinks.forEach(link => {
    link.addEventListener("click", toggle);
})

function toggle() {
    // change the icon's value based on its current value
    menuIcon.textContent = (menuIcon.textContent.trim() == "menu")
        ? "close"
        : "menu";
    
    // open or close menu
    mobileMenu.classList.toggle("open");
}