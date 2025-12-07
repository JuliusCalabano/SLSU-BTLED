document.addEventListener('DOMContentLoaded', () => {

    // ===== TEXT ANIMATION (LOOPING) =====
    const btledTitleText = "Bachelor of Technology and Livelihood Education";
    const btledSubtitleText = "This is a project using HTML, CSS, Javascript";

    let i1 = 0, i2 = 0;
    const titleEl = document.getElementById("btledTitle");
    const subtitleEl = document.getElementById("btledSubtitle");

    function typeTitle() {
        if (i1 < btledTitleText.length) {
            titleEl.innerHTML += btledTitleText.charAt(i1);
            i1++;
            setTimeout(typeTitle, 80);
        } else {
            setTimeout(typeSubtitle, 300);
        }
    }

    function typeSubtitle() {
        if (i2 < btledSubtitleText.length) {
            subtitleEl.innerHTML += btledSubtitleText.charAt(i2);
            i2++;
            setTimeout(typeSubtitle, 50);
        } else {
            setTimeout(loopTyping, 2000);
        }
    }

    function loopTyping() {
        i1 = 0;
        i2 = 0;
        titleEl.innerHTML = "";
        subtitleEl.innerHTML = "";
        typeTitle();
    }

    typeTitle();

    // ===== PRELOADER =====
    const preloader = document.querySelector(".preloader");
    const content = document.getElementById("content");
    if (preloader) {
        preloader.classList.add("fade-out");
        setTimeout(() => {
            preloader.style.display = "none";
            if (content) content.style.display = "block";
        }, 800);
    }

    // ===== TESTIMONIAL CAROUSEL =====
    const track = document.querySelector('.testimonial-track');
    const nextBtn = document.querySelector('.nextBtn');
    const prevBtn = document.querySelector('.prevBtn');

    if (track && nextBtn && prevBtn) {
        let index = 0;

        function updateCarousel() {
            const card = track.querySelector('.testimonial');
            if (!card) return;
            const cardStyle = window.getComputedStyle(card);
            const marginRight = parseInt(cardStyle.marginRight) || 0;
            const cardWidth = card.offsetWidth + marginRight;
            track.style.transform = `translateX(${-index * cardWidth}px)`;
        }

        nextBtn.addEventListener('click', () => {
            index++;
            if (index > track.children.length - 1) index = 0;
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            index--;
            if (index < 0) index = track.children.length - 1;
            updateCarousel();
        });

        // Auto-slide every 5 seconds
        setInterval(() => {
            index++;
            if (index > track.children.length - 1) index = 0;
            updateCarousel();
        }, 5000);

        // Update on load and resize
        window.addEventListener('load', updateCarousel);
        window.addEventListener('resize', updateCarousel);
    }

});
