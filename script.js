// Simple enhancements
const navLinks = document.querySelectorAll('.nav a, .footer-links a');
navLinks.forEach(link => {
  link.addEventListener('click', evt => {
    const targetId = link.getAttribute('href');
    if (targetId.startsWith('#')) {
      evt.preventDefault();
      document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Mock form submission to keep the page static
const contactForm = document.querySelector('.contact-form');
contactForm?.addEventListener('submit', evt => {
  evt.preventDefault();
  contactForm.reset();
  alert('Thank you! Our team will respond with a tailored quote.');
});