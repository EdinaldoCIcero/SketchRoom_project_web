function initializeGallery() {

    const modal = document.getElementById("artModal");

    const modalImage = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const modalDate = document.getElementById("modalDate");
    const modalSoftware = document.getElementById("modalSoftware");
    const modalTags = document.getElementById("modalTags");

    const closeButton = document.querySelector(".close-modal");

    const cards = document.querySelectorAll(".art-card");

    function openCard(card) {

        modalImage.src = card.dataset.image;
        modalImage.alt = card.dataset.title;

        modalTitle.textContent = card.dataset.title;
        modalDescription.textContent = card.dataset.description;
        modalDate.textContent = `📅 ${card.dataset.date}`;
        modalSoftware.textContent = `🎨 ${card.dataset.software}`;

        modalTags.innerHTML = "";

        if (card.dataset.tags) {

            card.dataset.tags
                .split(",")
                .map(tag => tag.trim())
                .forEach(tag => {

                    const span = document.createElement("span");

                    span.textContent = tag;

                    modalTags.appendChild(span);

                });

        }

        modal.classList.add("active");

        document.body.style.overflow = "hidden";

    }

    cards.forEach(card => {

        card.addEventListener("click", () => {

            openCard(card);

        });

        card.addEventListener("keydown", event => {

            if (event.key === "Enter" || event.key === " ") {

                event.preventDefault();

                openCard(card);

            }

        });

    });

    closeButton.onclick = () => {

        modal.classList.remove("active");

        document.body.style.overflow = "";

    };

    modal.onclick = event => {

        if (event.target === modal) {

            modal.classList.remove("active");

            document.body.style.overflow = "";

        }

    };

    document.onkeydown = event => {

        if (event.key === "Escape" && modal.classList.contains("active")) {

            modal.classList.remove("active");

            document.body.style.overflow = "";

        }

    };

}