// script.js for interactivity in the assignment portfolio

// Hamburger Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Smooth Scrolling
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

smoothScrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.querySelector('input[name="name"]').value;
    const email = this.querySelector('input[name="email"]').value;
    // Simple validation
    if (!name || !email) {
        alert('Please fill in all fields.');
        return;
    }
    // If valid, submit form or perform actions
    alert('Form submitted successfully!');
});

// Dynamic Content
const contentContainer = document.querySelector('.dynamic-content');

function loadDynamicContent() {
    const content = '<h2>Dynamic Content Loaded!</h2>'; // Sample dynamic content
    contentContainer.innerHTML = content;
}

window.addEventListener('load', loadDynamicContent);