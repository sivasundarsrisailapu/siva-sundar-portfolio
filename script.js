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

  // --- Card Flip Logic ---
  const flipCards = document.querySelectorAll('.flip-card-container');
  flipCards.forEach(card => {
    const watchReelBtn = card.querySelector('.watch-reel-btn');
    const closeFlipBtn = card.querySelector('.close-flip-btn');

    if (watchReelBtn && closeFlipBtn) {
      watchReelBtn.addEventListener('click', () => {
        card.classList.add('flipped');
        // If it's the BGMI card, trigger Instagram embeds processing
        if (card.id === 'bgmi-card' && window.instgrm && window.instgrm.Embeds) {
          window.instgrm.Embeds.process();
        }
      });

      closeFlipBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        card.classList.remove('flipped');
        
        // If it's the BGMI card, stop video playback by reloading the generated iframe
        if (card.id === 'bgmi-card') {
          const iframe = card.querySelector('.video-wrapper iframe');
          if (iframe) {
            const currentSrc = iframe.src;
            iframe.src = '';
            setTimeout(() => {
              iframe.src = currentSrc;
            }, 50);
          }
        }
      });
    }
  });
});
