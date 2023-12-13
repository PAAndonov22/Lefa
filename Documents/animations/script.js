document.addEventListener("DOMContentLoaded", function() {
    animateNavbarTexts();
    fadeInHeader();
    handleScroll();

    // Scroll to the top on page load
    window.scrollTo(0, 0);

    window.addEventListener("scroll", handleScroll);
});

function animateNavbarTexts() {
    const navTexts = document.querySelectorAll('nav ul li');

    navTexts.forEach(function(text, index) {
        text.style.opacity = 0;
        text.style.animation = `fadeIn 1s ease-in-out ${index * 0.2}s forwards`;
    });
}

function fadeInHeader() {
    const header = document.querySelector('header');
    header.style.opacity = 0;
    header.style.animation = 'fadeIn 1s ease-in-out forwards';
}

function handleScroll() {
    const elements = document.querySelectorAll('.fade-in');

    elements.forEach(function(element) {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const scrollDirection = window.scrollY > 0 ? 'down' : 'up';

        if (elementPosition < windowHeight / 1.2 && scrollDirection === 'down') {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
}
