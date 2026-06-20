// Mobile nav toggle
const mobileToggle = document.getElementById('mobileToggle');
const navList = document.getElementById('navList');

if (mobileToggle && navList) {
  mobileToggle.addEventListener('click', () => {
    navList.classList.toggle('mobile-open');
  });

  // Close mobile menu after clicking a link
  navList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('mobile-open');
    });
  });
}

// Highlight the current section's nav link while scrolling
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

function setActiveLink() {
  let currentId = '';
  const scrollPos = window.scrollY + 120;

  sections.forEach(section => {
    if (scrollPos >= section.offsetTop) {
      currentId = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
  });
}

window.addEventListener('scroll', setActiveLink);
window.addEventListener('load', setActiveLink);
