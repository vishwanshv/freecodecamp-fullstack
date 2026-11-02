const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeBtn = document.getElementById("close-btn");

// Open lightbox when an image is clicked
galleryItems.forEach(image => {
  image.addEventListener("click", () => {
    const fullSizeSrc = image.src.replace("-thumbnail", "");

    lightboxImage.src = fullSizeSrc;
    lightbox.style.display = "flex";
  });
});

// Close lightbox using the close button
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Close lightbox by clicking the overlay
lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Prevent closing when clicking the full-size image
lightboxImage.addEventListener("click", event => {
  event.stopPropagation();
});