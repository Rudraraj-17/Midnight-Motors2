// Fade in/out .scroll-element using IntersectionObserver
  document.addEventListener('DOMContentLoaded', function () {
    const scrollElements = document.querySelectorAll('.scroll-element');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );
    scrollElements.forEach(el => observer.observe(el));
  });