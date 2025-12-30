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

// Live contact form submission
const contactForm = document.querySelector('.contact-form');
const formStatus = contactForm?.querySelector('.form-status');
contactForm?.addEventListener('submit', async evt => {
  evt.preventDefault();

  if (!formStatus) return;

  const submitButton = contactForm.querySelector('button[type="submit"]');
  const formData = new FormData(contactForm);
  formStatus.textContent = 'Sending your request...';
  submitButton?.setAttribute('disabled', 'true');

  try {
    const response = await fetch(contactForm.action, {
      method: 'POST',
      headers: {
        Accept: 'application/json'
      },
      body: formData
    });

    if (response.ok) {
      contactForm.reset();
      formStatus.textContent = 'Thank you! Your message has been sent to Sales@highmilessolutions.ca.';
    } else {
      formStatus.textContent = 'Something went wrong. Please try again or email Sales@highmilessolutions.ca directly.';
    }
  } catch (error) {
    formStatus.textContent = 'Network error. Please try again or email Sales@highmilessolutions.ca directly.';
  } finally {
    submitButton?.removeAttribute('disabled');
  }
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
