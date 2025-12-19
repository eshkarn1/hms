// Simple enhancements
const navLinks = document.querySelectorAll('.nav a, .footer-links a, .mobile-links a');
navLinks.forEach(link => {
  link.addEventListener('click', evt => {
    const targetId = link.getAttribute('href');
    if (targetId.startsWith('#')) {
      evt.preventDefault();
      document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  });
});

// Mock form submission to keep the page static
const contactForm = document.querySelector('.contact-form');
contactForm?.addEventListener('submit', evt => {
  evt.preventDefault();
  contactForm.reset();
  alert('Thank you! Our team will respond with a tailored quote.');
});

// Mobile navigation drawer
const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('[data-mobile-nav]');
const menuBackdrop = document.querySelector('[data-menu-backdrop]');
const closeMenuButton = document.querySelector('.close-menu');

function openMenu() {
  mobileNav?.classList.add('open');
  menuBackdrop?.classList.add('active');
  menuToggle?.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
  mobileNav?.classList.remove('open');
  menuBackdrop?.classList.remove('active');
  menuToggle?.setAttribute('aria-expanded', 'false');
}

menuToggle?.addEventListener('click', () => {
  const isOpen = mobileNav?.classList.contains('open');
  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});

menuBackdrop?.addEventListener('click', closeMenu);
closeMenuButton?.addEventListener('click', closeMenu);
