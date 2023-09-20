document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".enlarge-image");

    images.forEach(function (image) {
        image.addEventListener("click", function () {
            const imageUrl = this.getAttribute("data-image");
            if (imageUrl) {
                const enlargedImage = new Image();
                enlargedImage.src = imageUrl;
                enlargedImage.classList.add("enlarged-image");

                // Create a background overlay to detect clicks outside the enlarged image
                const overlay = document.createElement("div");
                overlay.classList.add("enlarged-overlay");
                overlay.appendChild(enlargedImage);

                // Close the enlarged image when clicking outside of it
                overlay.addEventListener("click", function () {
                    document.body.removeChild(overlay);
                });

                document.body.appendChild(overlay);
            }
        });
    });
});
