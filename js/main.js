'use strict';

// ======= DOM ======= //

const menuButton = document.querySelector('#menu-button');
const mainMenu = document.querySelector('#main-menu');

const contactForm = document.querySelector('.contact-form');
const toast = document.querySelector('#toast');


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


// ======= CONTACT FORM & TOAST ======= //

function showToast (message, type) {
    toast.textContent = message;
    toast.className = `toast ${type}`;

    setTimeout(() => {
        toast.className = 'toast';
    }, 3000);
}

if (contactForm && toast) {
    contactForm.addEventListener ('submit', (event) => {
        event.preventDefault();

        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();

            showToast('Please complete the required fields', 'error');

            return;
        }

        showToast( 'Message sent! We’ll get back to you soon', 'success');

        contactForm.reset();
    });
}