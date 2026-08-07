// Portfolio Flowill — Interactive Client-side JS
document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Category Filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-filter');

      // Update button states
      filterBtns.forEach(b => {
        b.classList.remove('bg-brand-500', 'text-white');
        b.classList.add('bg-slate-100', 'text-slate-600', 'hover:bg-slate-200');
      });
      btn.classList.remove('bg-slate-100', 'text-slate-600', 'hover:bg-slate-200');
      btn.classList.add('bg-brand-500', 'text-white');

      // Filter project cards
      projectCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (category === 'all' || cardCat === category) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // 2. Video Modal Popup & YouTube Fallback Fix
  const videoModal = document.getElementById('video-modal');
  const modalTitle = document.getElementById('modal-video-title');
  const modalIframeContainer = document.getElementById('modal-video-container');
  const modalDirectLink = document.getElementById('modal-direct-link');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const openModalBtns = document.querySelectorAll('.open-video-modal');

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const title = btn.getAttribute('data-title');
      const embedUrl = btn.getAttribute('data-embed');
      const directUrl = btn.getAttribute('data-direct');

      if (modalTitle) modalTitle.textContent = title;
      if (modalDirectLink && directUrl) modalDirectLink.setAttribute('href', directUrl);

      if (modalIframeContainer && embedUrl) {
        modalIframeContainer.innerHTML = `<iframe class="w-full h-64 sm:h-96 rounded-xl shadow-inner" src="${embedUrl}" title="${title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
      }
      if (videoModal) videoModal.classList.remove('hidden');
    });
  });

  if (closeModalBtn && videoModal) {
    closeModalBtn.addEventListener('click', () => {
      videoModal.classList.add('hidden');
      if (modalIframeContainer) modalIframeContainer.innerHTML = '';
    });

    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal) {
        videoModal.classList.add('hidden');
        if (modalIframeContainer) modalIframeContainer.innerHTML = '';
      }
    });
  }
});
