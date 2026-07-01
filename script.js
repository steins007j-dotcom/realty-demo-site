// Sticky nav background on scroll
const navbar = document.querySelector('.navbar');
const onScroll = () => {
  if (window.scrollY > 40) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
};
window.addEventListener('scroll', onScroll);
onScroll();

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
if (menuToggle) {
  menuToggle.addEventListener('click', () => mainNav.classList.toggle('open'));
  document.querySelectorAll('.main-nav a').forEach(a =>
    a.addEventListener('click', () => mainNav.classList.remove('open'))
  );
}

// Reveal-on-scroll
const revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => revealObserver.observe(el));

// Animated counters
const counters = document.querySelectorAll('[data-count]');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const duration = 1400;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = target * eased;
      el.textContent = (target % 1 === 0 ? Math.round(value) : value.toFixed(1)) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
    counterObserver.unobserve(el);
  });
}, { threshold: 0.5 });
counters.forEach(el => counterObserver.observe(el));

// Lightbox gallery
const lightbox = document.querySelector('.lightbox');
if (lightbox) {
  const lightboxImg = lightbox.querySelector('img');
  document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src.replace(/\/\d+\/\d+$/, '/1600/1000');
      lightbox.classList.add('open');
    });
  });
  lightbox.addEventListener('click', () => lightbox.classList.remove('open'));
}

// Active nav link highlighting
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.main-nav a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === currentPage) a.classList.add('active');
});
