'use strict';

// ======= DOM ======= //

const menuButton = document.querySelector('#menu-button');
const mainMenu = document.querySelector('#main-menu');


// ======= MENU BURGER ======= //

let menuOpen = false;

function openMenu() {
    mainMenu.classList.add('is-open');
    menuButton.setAttribute('aria-expanded', 'true');
    menuButton.setAttribute('aria-label','Close navigation menu' );
    menuOpen = true;
}

function closeMenu() {
    mainMenu.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label','Open navigation menu' );
    menuOpen = false;
}

menuButton.addEventListener('click', () => {
    if (menuOpen) {
        closeMenu();
    } else {
        openMenu();
    }
});

// Close when clicking outside the menu
document.addEventListener('click', (event) => {
    if (
        menuOpen &&
        !mainMenu.contains(event.target) &&
        !menuButton.contains(event.target)
    ) {
        closeMenu();
    }
});

// Close when the user scrolls
window.addEventListener ('scroll', () => {
    if(menuOpen) {
        closeMenu();
    }
});