/*Carousel Auto next*/
const slide = document.querySelector('.carousel-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let counter = 0;
const images = slide.querySelectorAll('img');
const total = images.length;

function updateCarousel() {
    slide.style.transform = `translateX(${-counter * 800}px)`;
}

// Buttons (still work)
nextBtn.addEventListener('click', () => {
    counter = (counter + 1) % total;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    counter = (counter - 1 + total) % total;
    updateCarousel();
});

// ✅ AUTO-SLIDE (Every 3 seconds)
setInterval(() => {
    counter = (counter + 1) % total;
    updateCarousel();
}, 3000);

//Preloader
    window.onload = function () {
        const preloader = document.querySelector(".preloader");
        const content = document.getElementById("content");

        preloader.classList.add("fade-out");

        setTimeout(() => {
            preloader.style.display = "none";
            content.style.display = "block";
        }, 800);
    };
