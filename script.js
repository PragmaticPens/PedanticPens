/* script.js
   Robyn Brown
   script.js
   2025-12-03
*/

/* Mobile hamburger toggle and aria state */
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('nav.main-nav ul');
  if (hamburger) {
    hamburger.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      navLinks.classList.toggle('open'); 
    });
  }

  /* Smooth scroll for internal links */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  /* small interactive hover effect for portfolio items: scale up on hover */
  document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'translateY(-6px)';
      item.style.transition = 'transform .18s ease';
    });
    item.addEventListener('mouseleave', () => {
      item.style.transform = '';
    });
  });
});
