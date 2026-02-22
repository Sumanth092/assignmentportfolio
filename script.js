// script.js

// Hamburger menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Smooth scrolling
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Form validation
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    const name = this.querySelector('input[name="name"]').value;
    if (!name) {
        e.preventDefault();
        alert('Please enter your name.');
    }
});

// Scroll animations
const animateElements = document.querySelectorAll('.animate');

const options = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, options);

animateElements.forEach(element => {
    observer.observe(element);
});

// Skill progress animations
const skillBars = document.querySelectorAll('.skill-bar');

skillBars.forEach(bar => {
    const progress = bar.querySelector('.progress');
    const value = bar.getAttribute('data-progress');
    progress.style.width = value + '%';
});