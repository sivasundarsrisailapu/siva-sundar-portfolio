document.addEventListener('DOMContentLoaded', () => {
  // --- Theme Toggler Logic ---
  const themeToggleBtn = document.getElementById('theme-toggle');
  const body = document.body;

  // Retrieve saved theme or default to system preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    body.classList.add('dark-mode');
    body.classList.remove('light-mode');
  } else {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
  }

  // Toggle theme click event
  themeToggleBtn.addEventListener('click', () => {
    // Add springing animation class
    themeToggleBtn.classList.add('springing');
    
    // Toggle theme
    if (body.classList.contains('dark-mode')) {
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    } else {
      body.classList.add('dark-mode');
      body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    }
    
    // Remove springing class after the spring bounce completes (600ms)
    setTimeout(() => {
      themeToggleBtn.classList.remove('springing');
    }, 600);
  });

  // --- Live Footer Clock ---
  const liveClock = document.getElementById('footer-live-clock');
  if (liveClock) {
    const updateClock = () => {
      const now = new Date();
      const yyyy = now.getFullYear();
      const mm = String(now.getMonth() + 1).padStart(2, '0');
      const dd = String(now.getDate()).padStart(2, '0');
      const hh = String(now.getHours()).padStart(2, '0');
      const min = String(now.getMinutes()).padStart(2, '0');
      const sec = String(now.getSeconds()).padStart(2, '0');
      liveClock.textContent = `${yyyy}/${mm}/${dd}(${hh}:${min}:${sec})`;
    };
    updateClock();
    setInterval(updateClock, 1000);
  }

  // --- Project Modal Logic & Hashtag Routing ---
  const openModalBtns = document.querySelectorAll('.open-modal-btn');
  const closeModalBtns = document.querySelectorAll('.close-modal-btn');
  const modalOverlays = document.querySelectorAll('.project-modal-overlay');

  const openModal = (targetId) => {
    const targetModal = document.getElementById(targetId);
    if (targetModal) {
      targetModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      if (targetId === 'modal-bgmi' && window.instgrm && window.instgrm.Embeds) {
        window.instgrm.Embeds.process();
      }
    }
  };

  const closeModal = (modal) => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute('data-target');
      openModal(targetId);
    });
  });

  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.project-modal-overlay');
      if (modal) closeModal(modal);
    });
  });

  modalOverlays.forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal(overlay);
    });
  });

  // Open modal automatically if URL hash is present (e.g. projects.html#tadb)
  const hash = window.location.hash;
  if (hash === '#tadb') openModal('modal-tadb');
  if (hash === '#bgmi') openModal('modal-bgmi');
});
