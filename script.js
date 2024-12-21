// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Contact form handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const formDetails = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };

        // Show submission feedback
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

// Navigation scroll effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(26, 26, 26, 0.95)';
        nav.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    } else {
        nav.style.background = '#1a1a1a';
        nav.style.boxShadow = 'none';
    }
});

// Mobile menu functionality (if needed in the future)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Reveal animations on scroll
const revealElements = document.querySelectorAll('.service-card, .about-content');

function reveal() {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize reveal elements
window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

// Add loading state to form submission
contactForm.querySelectorAll('button[type="submit"]').forEach(button => {
    button.addEventListener('click', function() {
        if (contactForm.checkValidity()) {
            this.innerHTML = 'Sending...';
            this.disabled = true;
            setTimeout(() => {
                this.innerHTML = 'Send Message';
                this.disabled = false;
            }, 2000);
        }
    });
});
