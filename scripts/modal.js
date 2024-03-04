const modalButton = document.querySelector("#modal-button");
const modalViewer = document.querySelector("#modal-viewer");

function openModal() {
    // show the image inside the modal viewer
    modalViewer.style.display = "block";
}

// open modal view when user clicks "open cv"
modalButton.addEventListener("click", () => {
    openModal();
})

// button for exiting the modal screen
const closeButton = document.querySelector("#close-modal-button");

// when clicking close escape to the main view
closeButton.addEventListener("click", function () {
    modalViewer.style.display = "none";
});