// Sidebar menu actions
const navSlide = () => {

    // Variable declarations
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // Toggle nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');

        // Animate links
        animateLinks(navLinks);
    });

    // Cancel menu when clicking on a link
    nav.addEventListener('click', () => {

        // If the burger menu is active i.e. mobile mode, reset it
        // Otherwise ignore it.
        // This is to allow the menu to not be removed via the
        // nav-active class used in the mobile sized viewports
        if (burger.classList.contains('toggle')) {
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');

            // Animate links
            animateLinks(navLinks);
        }
    })

    // Set body to listen to click events to cancel menu
    body = document.querySelector('.content-body');
    body.addEventListener('click', () => {
        if (nav.classList.contains('nav-active')) {
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
            animateLinks(navLinks);
        }
    })
}

navSlide();

// Animate individual navigation links
function animateLinks(navLinks) {
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = "";
        } else {
            link.style.animation = `navLinkFade 0.1s ease forwards ${index / 7 + .15}s`
        }
    });
}

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector('nav').style.top = "0";
    } else {
        document.querySelector('nav').style.top = "-50%";
    }
    prevScrollpos = currentScrollPos;
}