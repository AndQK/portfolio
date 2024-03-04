// button for turning the light mode on
const lightModeButton = document.querySelector("#light-mode-button");

// If button was clicked --> activate light mode
lightModeButton.addEventListener("click", () => {
      // add or remove classes by toggling
      document.body.classList.toggle("light-mode");
      lightModeButton.classList.toggle("active");
});