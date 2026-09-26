(() => {
  const body = document.body;
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  const mobile = window.matchMedia('(max-width: 1024px)');

  if (menuToggle && nav) {
    const setMenu = (open, restoreFocus = false) => {
      const expanded = mobile.matches && open;
      body.classList.toggle('menu-open', expanded);
      menuToggle.setAttribute('aria-expanded', String(expanded));
      menuToggle.setAttribute('aria-label', expanded ? 'Закрыть меню' : 'Открыть меню');
      nav.inert = mobile.matches && !expanded;
      if (restoreFocus) menuToggle.focus();
    };

    setMenu(false);
    menuToggle.addEventListener('click', () => {
      const shouldOpen = !body.classList.contains('menu-open');
      setMenu(shouldOpen);
      if (shouldOpen) nav.querySelector('a')?.focus();
    });
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => setMenu(false));
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && body.classList.contains('menu-open')) {
        setMenu(false, true);
      }
    });
    mobile.addEventListener('change', () => setMenu(false));
  }

  const collectionFilter = document.querySelector('[data-collection-filter]');
  const collectionCards = [...document.querySelectorAll('[data-collection-theme]')];
  const collectionPreview = document.querySelector('[data-collection-preview]');
  const collectionGrid = document.querySelector('.collection-grid');
  if (collectionFilter && collectionPreview && collectionGrid) {
    collectionFilter.querySelectorAll('[data-theme]').forEach(chip => {
      chip.addEventListener('click', () => {
        const selected = chip.getAttribute('aria-pressed') === 'true' ? null : chip.dataset.theme;
        collectionFilter.querySelectorAll('[data-theme]').forEach(item => {
          const active = item.dataset.theme === selected;
          item.classList.toggle('active', active);
          item.setAttribute('aria-pressed', String(active));
        });
        collectionCards.forEach(card => { card.hidden = selected !== null && card.dataset.collectionTheme !== selected; });
        const hasCard = collectionCards.some(card => card.dataset.collectionTheme === selected);
        collectionPreview.hidden = selected === null || hasCard;
        collectionGrid.classList.toggle('is-filtered', selected !== null);
        if (selected && !hasCard) {
          collectionPreview.querySelector('[data-collection-preview-label]').textContent = chip.textContent.trim();
          collectionPreview.querySelector('[data-asset-slot]').dataset.assetSlot = `collection-${selected}`;
        }
      });
    });
  }

  const templateFilter = document.querySelector('[data-template-filter]');
  const templatePreview = document.querySelector('[data-template-preview]');
  const templateSelection = document.querySelector('[data-template-selection]');
  if (templateFilter && templatePreview && templateSelection) {
    templateFilter.querySelectorAll('[data-template]').forEach(chip => {
      chip.addEventListener('click', () => {
        templateFilter.querySelectorAll('[data-template]').forEach(item => {
          const active = item === chip;
          item.classList.toggle('active', active);
          item.setAttribute('aria-pressed', String(active));
        });
        templatePreview.dataset.assetSlot = `template-${chip.dataset.template}`;
        templateSelection.textContent = chip.textContent.trim();
      });
    });
  }

  const faqItems = [...document.querySelectorAll('.faq-item')];
  const setFaq = (item, open) => {
    item.classList.toggle('open', open);
    item.querySelector('button').setAttribute('aria-expanded', String(open));
    item.querySelector('.faq-answer').hidden = !open;
  };
  faqItems.forEach(item => {
    item.querySelector('button').addEventListener('click', () => {
      const shouldOpen = !item.classList.contains('open');
      faqItems.forEach(other => setFaq(other, other === item && shouldOpen));
    });
  });
})();
