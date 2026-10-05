let images = [
    "image1.png",
    "image2.png",
    "image3.png"
];

let currentIndex = 0;

let slide = document.getElementById("slide");

function nextSlide() {
    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    slide.src = images[currentIndex];
}

function prevSlide() {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    slide.src = images[currentIndex];
}