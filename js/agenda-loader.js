document.addEventListener('DOMContentLoaded', () => {
  const revealItems = document.querySelectorAll('.reveal-on-scroll');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -30px 0px' }
    );

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }

  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach((link) => {
    const page = link.getAttribute('href');
    if (page === currentPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

window.addEventListener('load', () => {
  document.body.classList.add('ready');
});
