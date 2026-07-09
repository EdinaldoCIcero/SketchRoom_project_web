const modalContent  = document.querySelector(".modal-content");
const closeButton   = document.querySelector(".close-modal");
const modal = document.getElementById("artModal");


function openModal() {

    modal.classList.add("active");

    requestAnimationFrame(() => {

        modalContent.focus();

    });

}

function closeModal() {

    modal.classList.remove("active");

    document.body.style.overflow = "";

}

closeButton.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {

    if (event.target === modal) {

        closeModal();

    }

});

modalContent.addEventListener("click", (event) => {

    event.stopPropagation();

});

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape" && modal.classList.contains("active")) {

        closeModal();

    }

});

window.openArtModal = openModal;
window.closeArtModal = closeModal;