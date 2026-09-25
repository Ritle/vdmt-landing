(() => {
  const body = document.body;
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const opened = body.classList.toggle('menu-open');
      menuToggle.setAttribute('aria-expanded', String(opened));
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        body.classList.remove('menu-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  document.querySelectorAll('[data-tabs] .chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      chip.parentElement.querySelectorAll('.chip').forEach((item) => item.classList.remove('active'));
      chip.classList.add('active');
    });
  });

  document.querySelectorAll('.faq-item').forEach((item) => {
    const button = item.querySelector('button');
    if (!button) return;

    button.addEventListener('click', () => {
      const shouldOpen = !item.classList.contains('open');

      document.querySelectorAll('.faq-item.open').forEach((openedItem) => {
        if (openedItem !== item) {
          openedItem.classList.remove('open');
          const openedButton = openedItem.querySelector('button');
          if (openedButton) openedButton.setAttribute('aria-expanded', 'false');
        }
      });

      item.classList.toggle('open', shouldOpen);
      button.setAttribute('aria-expanded', String(shouldOpen));
    });
  });

  const header = document.querySelector('.site-header');
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const id = link.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;

      event.preventDefault();
      const headerHeight = header ? header.offsetHeight : 0;
      const y = target.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  });
})();