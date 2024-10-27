/**
 * DOM Manipulation Exercise
 * Programmatically builds navigation, scrolls to anchors from navigation, 
 * and highlights section in viewport upon scrolling.
 * Dependencies: None
 * JS Version: ES2015/ES6
 * JS Standard: ESlint
*/

/**
 * Define Global Variables
 */
const navbarList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
const scrollToTopButton = document.getElementById('scrollToTop');
let isScrolling;

/**
 * Build Navigation Menu
 */
const buildNavMenu = () => {
    const fragment = document.createDocumentFragment();

    sections.forEach(section => {
        const id = section.getAttribute('id');
        const listItem = document.createElement('li');
        const link = document.createElement('a');

        link.href = `#${id}`;
        link.classList.add('nav-link');
        link.setAttribute('data-link', id);
        link.textContent = id;

        link.addEventListener('click', (event) => {
            event.preventDefault();
            scrollToSection(id);
        });

        listItem.appendChild(link);
        fragment.appendChild(listItem);
    });

    navbarList.appendChild(fragment);
};

/**
 * Scroll to Section
 */
const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const sectionPosition = section.getBoundingClientRect().top + window.scrollY - 60;

    window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth'
    });
};

/**
 * Highlight Active Section on Scroll
 */
const highlightActiveSection = () => {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const navItem = document.querySelector(`a[data-link="${section.id}"]`);
        const h2 = document.querySelector(`h2[name="${section.id}"]`);

        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            navItem.classList.add('active-link');
            h2.style.color = 'RGB(71, 84, 118)';
        } else {
            navItem.classList.remove('active-link');
            h2.style.color = '';
        }
    });
};

/**
 * Toggle Scroll to Top Button Visibility
 */
const toggleScrollToTopButton = () => {
    if (window.scrollY > window.innerHeight) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
};

/**
 * Scroll to Top
 */
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

/**
 * Auto Hide Navbar on Scroll
 */
const autoHideNavbar = () => {
    navbarList.style.top = '0';
    clearTimeout(isScrolling);

    isScrolling = setTimeout(() => {
        navbarList.style.top = '-50px';
    }, 1500);
};

/**
 * Toggle Navbar Styling on Scroll
 */
const toggleNavbarStyle = () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
        navbar.classList.remove('static');
    } else {
        navbar.classList.remove('navbar-scrolled');
        navbar.classList.add('static');
    }
};

/**
 * Initialize Page Functions and Events
 */
const initializePage = () => {
    buildNavMenu();

    window.addEventListener('scroll', () => {
        highlightActiveSection();
        toggleScrollToTopButton();
        autoHideNavbar();
        toggleNavbarStyle();
    });

    scrollToTopButton.addEventListener('click', scrollToTop);
};

initializePage();

/**
 * Slider and Animation (requires jQuery and AOS)
 */
$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
    AOS.init({ once: true });

    setTimeout(() => {
        $(".collection-btn").addClass("aos-animate");
    }, 400);

  
});
$('#slider1').owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    animateOut: 'fadeOut'
});

$('#brands').owlCarousel({
    items: 5,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true
});