
const images = document.querySelectorAll('.carousel-image');
let currentImageIndex = 0;


function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}


function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}


function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
}


showImage(currentImageIndex);