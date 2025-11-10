const elements = document.querySelectorAll('.scroll-animate');
  function checkScroll() {
    const triggerBottom = window.innerHeight * 0.85;
    elements.forEach(el => {
      const boxTop = el.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        el.classList.add('visible');
      }
    });
  }
  window.addEventListener('scroll', checkScroll);
  window.addEventListener('load', checkScroll);