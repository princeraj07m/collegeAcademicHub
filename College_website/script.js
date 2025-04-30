// Initialize AOS for scroll animations
document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 800,
    offset: 100,
    easing: 'ease-in-out',
    once: true
  });
});

// Smooth Scroll Animation (optional enhancement)
const scrollLinks = document.querySelectorAll('.nav-btn[href^="#"]');
scrollLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const id = link.getAttribute('href').substring(1);
    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// Mobile Navbar Toggle (if using a hamburger menu in the future)
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.querySelector('.navbar');
const hideMenuButton = document.getElementById('hideMenuButton');
const logo = document.querySelector('.logo');

hideMenuButton.addEventListener('click', () => {
  navbar.classList.toggle('hidden');
  logo.classList.toggle('full-width');
  hideMenuButton.textContent = '☰';
});

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });
}
AOS.init({
  duration: 1000,
  once: true,
});
