// This file contains the JavaScript code for the dress website. 
// It handles interactivity and dynamic content on the webpage.

document.addEventListener('DOMContentLoaded', () => {
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarMenu = document.getElementById('navbar-menu');

    if (navbarToggle) {
        navbarToggle.addEventListener('click', () => {
            navbarMenu.classList.toggle('is-active');
        });
    }

    // Add more interactivity as needed
});