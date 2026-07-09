
document.addEventListener("DOMContentLoaded", async () => {

    const gallery = document.getElementById("gallery");

    try {

        const response = await fetch("database/artworks.json");

        if (!response.ok) {

            throw new Error("Não foi possível carregar o arquivo artworks.json.");

        }

        const artworks = await response.json();

        artworks.forEach(art => {

            const card = document.createElement("article");

            card.className = "art-card";

            card.tabIndex = 0;

            card.dataset.title = art.title;
            card.dataset.description = art.description;
            card.dataset.date = art.date;
            card.dataset.software = art.software;
            card.dataset.tags = art.tags.join(", ");
            card.dataset.image = art.image;

            card.innerHTML = `
                <img
                    src="${art.image}"
                    alt="${art.title}"
                    loading="lazy"
                    decoding="async">

                <div class="card-info">
                    <h3>${art.title}</h3>
                </div>
            `;

            gallery.appendChild(card);

        });

        if (typeof initializeGallery === "function") {

            initializeGallery();

        }

    } catch (error) {

        console.error(error);

        gallery.innerHTML = `
            <p style="text-align:center;padding:40px;">
                Erro ao carregar a galeria.
            </p>
        `;

    }

});