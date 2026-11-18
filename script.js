// ==========================================
// CLIENT WORK FOLDERS
// Folders are built from window.PROJECTS (projects-data.js). Clicking a
// folder opens a window with everything inside that project.
// ==========================================
(() => {
  const projects = window.PROJECTS || [];
  const grid = document.getElementById('clientFolders');
  const overlay = document.getElementById('folderWindow');
  if (!grid || !overlay || !projects.length) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const win = overlay.querySelector('.fw-window');
  const body = document.getElementById('fwBody');
  const path = document.getElementById('fwPath');
  const closeBtn = overlay.querySelector('.fw-close');

  const esc = (value) => String(value == null ? '' : value).replace(/[&<>"']/g, c => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));
  const pad = (n) => String(n).padStart(2, '0');
  // Files inside sub-folders count toward the total
  const countFiles = (list) => list.reduce((n, f) => n + (f.type === 'folder' ? countFiles(f.files || []) : 1), 0);
  const isExternal = (href) => /^https?:\/\//.test(href);

  // 'May 2026' -> sortable number; files with dates are listed newest first
  const MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
  const dateValue = (d) => {
    const m = /^(\w{3})\w*\s+(\d{4})$/.exec(d || '');
    return m ? Number(m[2]) * 12 + MONTHS.indexOf(m[1].toLowerCase()) : -1;
  };
  const sortNewest = (list) => list.every(f => f.date)
    ? list.slice().sort((a, b) => dateValue(b.date) - dateValue(a.date))
    : list;
  // First few image previews inside a folder (looks into its sub-folders too)
  const previews = (list, max) => {
    const found = [];
    (function walk(files) {
      for (const f of sortNewest(files)) {
        if (found.length >= max) return;
        if (f.type === 'folder') walk(f.files || []);
        else if (f.type === 'image' && f.src) found.push(f.thumb || f.src);
      }
    })(list);
    return found;
  };

  const ICON = {
    arrow: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>',
    image: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="3"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>',
    video: '<svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><polygon points="7 4 20 12 7 20"></polygon></svg>',
    doc: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="8" y1="13" x2="16" y2="13"></line><line x1="8" y1="17" x2="13" y2="17"></line></svg>',
    link: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>'
  };

  const THEME_KEYS = { front: '--front', back: '--back', ink: '--ink', inkSoft: '--ink-soft', chip: '--chip', chipInk: '--chip-ink' };

  const themeVars = (p) => {
    let vars = `--g1:${esc((p.accent || [])[0] || '#FF6B6B')};--g2:${esc((p.accent || [])[1] || '#8E2DE2')}`;
    Object.entries(p.theme || {}).forEach(([key, value]) => {
      if (THEME_KEYS[key]) vars += `;${THEME_KEYS[key]}:${esc(value)}`;
    });
    return vars;
  };

  // Image peeking out of the folder: a cover photo, or the logo shown whole
  const folderThumb = (p) => {
    if (p.cover) return `<img src="${esc(p.cover)}" alt="" loading="lazy">`;
    if (p.logo) return `<img class="is-logo" src="${esc(p.logo)}" alt="" loading="lazy">`;
    return '';
  };

  // Top line of the window: small logo (if any), category and status
  const head = (p) => `
    <div class="fw-head">
      ${p.logo ? `<img class="fw-logo" src="${esc(p.logo)}" alt="${esc(p.client)} logo">` : ''}
      <div class="fw-head-text">
        <span class="fw-cat">${esc(p.category)}</span>
        ${p.status ? `<span class="fw-state"><span class="cf-live"></span>${esc(p.status)}</span>` : ''}
      </div>
    </div>`;
  const themeClass = (p) => `cf-${['lime', 'dark', 'cream'].includes(p.color) ? p.color : 'cream'}`;

  grid.innerHTML = projects.map((p, i) => {
    const fileCount = countFiles(p.files || []);
    return `
      <button type="button" class="cf-folder ${themeClass(p)}" data-index="${i}" style="${themeVars(p)}" aria-label="Open ${esc(p.client)} project folder">
        <span class="cf-tab">${pad(i + 1)} / ${esc(p.tab || p.client)}${p.status ? '<span class="cf-live" title="' + esc(p.status) + '"></span>' : ''}</span>
        <span class="cf-back"></span>
        <span class="cf-papers">
          <span class="cf-paper p1"></span>
          <span class="cf-paper p2"></span>
          <span class="cf-paper p3">
            <span class="cf-thumb">${folderThumb(p)}</span>
            <span class="cf-line"></span>
            <span class="cf-line short"></span>
          </span>
        </span>
        <span class="cf-front">
          <span class="cf-front-top">
            <span class="cf-cat">${esc(p.category)}</span>
            <span class="cf-year">${esc(p.year)}</span>
          </span>
          <span class="cf-client">${esc(p.client)}</span>
          <span class="cf-bottom">
            <span class="cf-files">${fileCount} ${fileCount === 1 ? 'file' : 'files'}</span>
            <span class="cf-open">Open <span class="cf-open-icon">${ICON.arrow}</span></span>
          </span>
        </span>
      </button>`;
  }).join('');

  const count = document.querySelector('.projects-count');
  if (count) count.innerHTML = `${pad(projects.length)} <em>/ Client Works</em>`;

  const folders = Array.from(grid.querySelectorAll('.cf-folder'));
  let current = 0;

  // Images and videos open in the in-window viewer; links open normally
  let viewable = [];

  function fileTile(f, n) {
    // Long lists: stop the stagger after a dozen tiles so they don't trickle in
    const order = Math.min(n, 12);
    if (f.type === 'folder') {
      const total = countFiles(f.files || []);
      const papers = previews(f.files || [], 2)
        .map((src, k) => `<span class="sf-paper sp${k + 1}"><img src="${esc(src)}" alt="" loading="lazy"></span>`).join('');
      return `
        <button type="button" class="fw-file fw-subfolder" data-folder="${n}" style="--n:${order}" aria-label="Open ${esc(f.name)} folder">
          <span class="fw-thumb fw-thumb-folder"><span class="sf-icon${papers ? ' has-papers' : ''}">${papers}<span class="sf-front"></span></span></span>
          <span class="fw-file-name">${esc(f.name)}</span>
          <span class="fw-file-type">${total ? `${total} ${total === 1 ? 'item' : 'items'}` : 'Empty'}</span>
        </button>`;
    }
    const type = ICON[f.type] ? f.type : 'image';
    const thumb = type === 'image' && f.src
      ? `<img src="${esc(f.thumb || f.src)}" alt="" loading="lazy" decoding="async">`
      : ICON[type];
    const inner = `
      <span class="fw-thumb fw-thumb-${type}${f.thumb ? ' is-design' : ''}">${thumb}</span>
      <span class="fw-file-name" title="${esc(f.name)}">${esc(f.name)}</span>
      <span class="fw-file-type">${f.src ? esc(f.date || type) : 'Coming soon'}</span>`;
    if (!f.src) return `<div class="fw-file is-empty" style="--n:${order}">${inner}</div>`;
    if (type === 'image' || type === 'video') {
      viewable.push(f);
      return `<button type="button" class="fw-file" data-view="${viewable.length - 1}" style="--n:${order}" aria-label="View ${esc(f.name)}">${inner}</button>`;
    }
    return `<a class="fw-file" href="${esc(f.src)}" style="--n:${order}"${isExternal(f.src) ? ' target="_blank" rel="noopener"' : ''}>${inner}</a>`;
  }

  // Sub-folders: filesPath is the stack of folders opened inside the Files area
  let filesPath = [];
  let currentList = [];

  function renderFiles() {
    const section = body.querySelector('.fw-files-section');
    if (!section) return;
    const open = filesPath[filesPath.length - 1];
    currentList = sortNewest(open ? (open.files || []) : (projects[current].files || []));
    viewable = [];

    const total = countFiles(currentList);
    // "Aug 2025 – Aug 2026" span of the dated files in this folder
    const dates = currentList.filter(f => f.date).map(f => f.date)
      .sort((a, b) => dateValue(a) - dateValue(b));
    const span = dates.length
      ? [dates[0], dates[dates.length - 1]].filter((d, k, a) => k === 0 || d !== a[0]).join(' – ')
      : '';
    const about = open && (open.desc || span)
      ? `<p class="fw-folder-desc">${esc(open.desc || '')}${span ? `<span>${esc(span)}</span>` : ''}</p>`
      : '';
    const title = filesPath.length
      ? ['<button type="button" class="fw-crumb" data-crumb="0">Files</button>']
        .concat(filesPath.map((f, n) => n === filesPath.length - 1
          ? `<strong>${esc(f.name)}</strong>`
          : `<button type="button" class="fw-crumb" data-crumb="${n + 1}">${esc(f.name)}</button>`))
        .join('<i>/</i>')
      : 'Files';

    section.innerHTML = `
      <div class="fw-files-head">
        ${filesPath.length ? `<button type="button" class="fw-back" aria-label="Back"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg></button>` : ''}
        <h4>${title} <span>${total} ${total === 1 ? 'item' : 'items'}</span></h4>
      </div>
      ${about}
      ${currentList.length
        ? `<div class="fw-files">${currentList.map(fileTile).join('')}</div>`
        : '<div class="fw-empty">Nothing here yet. Coming soon.</div>'}`;
  }

  function openPath(depth) {
    filesPath.length = depth;
    renderFiles();
  }

  const viewer = document.createElement('div');
  viewer.className = 'fw-viewer';
  viewer.setAttribute('aria-hidden', 'true');
  viewer.innerHTML = `
    <button type="button" class="fw-btn fw-viewer-close" aria-label="Close preview">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    </button>
    <button type="button" class="fw-btn fw-viewer-nav prev" aria-label="Previous file">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
    </button>
    <figure class="fw-viewer-stage"></figure>
    <button type="button" class="fw-btn fw-viewer-nav next" aria-label="Next file">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
    </button>`;
  win.appendChild(viewer);
  const stage = viewer.querySelector('.fw-viewer-stage');
  let viewIndex = 0;

  function showFile(i) {
    viewIndex = (i + viewable.length) % viewable.length;
    const f = viewable[viewIndex];
    const media = f.type === 'video'
      ? `<video src="${esc(f.src)}" controls autoplay playsinline></video>`
      : `<img src="${esc(f.src)}" alt="${esc(f.name)}">`;
    stage.innerHTML = `${media}<figcaption>${esc(f.name)}<span>${f.date ? `${esc(f.date)} · ` : ''}${viewIndex + 1} / ${viewable.length}</span></figcaption>`;
    viewer.classList.toggle('single', viewable.length < 2);
    viewer.classList.add('open');
    viewer.setAttribute('aria-hidden', 'false');
  }

  function hideFile() {
    viewer.classList.remove('open');
    viewer.setAttribute('aria-hidden', 'true');
    setTimeout(() => { if (!viewer.classList.contains('open')) stage.innerHTML = ''; }, 300);
  }

  const viewerOpen = () => viewer.classList.contains('open');

  body.addEventListener('click', e => {
    const tile = e.target.closest('[data-view]');
    if (tile) return showFile(Number(tile.dataset.view));

    const sub = e.target.closest('[data-folder]');
    if (sub) {
      filesPath.push(currentList[Number(sub.dataset.folder)]);
      return renderFiles();
    }

    const crumb = e.target.closest('[data-crumb]');
    if (crumb) return openPath(Number(crumb.dataset.crumb));

    if (e.target.closest('.fw-back')) openPath(filesPath.length - 1);
  });
  viewer.querySelector('.fw-viewer-close').addEventListener('click', hideFile);
  viewer.querySelector('.prev').addEventListener('click', () => showFile(viewIndex - 1));
  viewer.querySelector('.next').addEventListener('click', () => showFile(viewIndex + 1));
  viewer.addEventListener('click', e => { if (e.target === viewer) hideFile(); });

  function render(i) {
    const p = projects[i];
    const highlights = p.highlights || [];
    current = i;
    filesPath = [];
    if (viewerOpen()) hideFile();

    win.className = `fw-window ${themeClass(p)}`;
    win.setAttribute('style', themeVars(p));
    path.textContent = p.client;

    const sideParts = [
      head(p).trim(),
      `<h3 class="fw-title" id="fwTitle">${esc(p.title || p.client)}</h3>`,
      `<dl class="fw-facts">
        <div><dt>Client</dt><dd>${esc(p.client)}</dd></div>
        <div><dt>My Role</dt><dd>${esc(p.role)}</dd></div>
        <div><dt>Year</dt><dd>${esc(p.year)}</dd></div>      </dl>`,
      (p.tools || []).length ? `<div class="fw-tools">${p.tools.map(t => `<span>${esc(t)}</span>`).join('')}</div>` : '',
      p.link ? `<a class="fw-cta" href="${esc(p.link.href)}"${isExternal(p.link.href) ? ' target="_blank" rel="noopener"' : ''}>${esc(p.link.label)} <span>${ICON.arrow}</span></a>` : ''
    ].filter(Boolean);

    const mainParts = [
      `<section><h4>About the project</h4><p>${esc(p.summary)}</p></section>`,
      highlights.length ? `<section><h4>Highlights</h4><ul class="fw-highlights">${highlights.map(h => `<li>${esc(h)}</li>`).join('')}</ul></section>` : '',
      '<section class="fw-files-section"></section>'
    ].filter(Boolean);

    body.innerHTML = `
      <aside class="fw-side">${sideParts.map((s, n) => s.replace(/^(\s*<\w+)/, `$1 style="--s:${n}"`)).join('')}</aside>
      <div class="fw-main">${mainParts.map((s, n) => s.replace('<section', `<section style="--s:${n + 2}"`)).join('')}</div>`;
    renderFiles();
    body.scrollTop = 0;
  }

  // Point the window's scale origin at a folder so it grows out of / shrinks into it
  function aimAt(folder) {
    const r = folder.getBoundingClientRect();
    win.style.transformOrigin = `${r.left + r.width / 2 - win.offsetLeft}px ${r.top + r.height / 2 - win.offsetTop}px`;
  }

  function lockScroll(lock) {
    const root = document.documentElement;
    if (lock) {
      // Pad by the scrollbar width so the page doesn't jump sideways
      const scrollbar = window.innerWidth - root.clientWidth;
      root.style.overflow = 'hidden';
      if (scrollbar > 0) root.style.paddingRight = scrollbar + 'px';
    } else {
      root.style.overflow = '';
      root.style.paddingRight = '';
    }
  }

  function open(i, folder) {
    render(i);
    overlay.classList.remove('closing');
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    lockScroll(true);
    aimAt(folder);
    closeBtn.focus({ preventScroll: true });
  }

  function close() {
    if (!overlay.classList.contains('open') || overlay.classList.contains('closing')) return;
    const folder = folders[current];
    aimAt(folder);
    overlay.classList.add('closing');
    // Lid closes as the window shrinks back into it
    folders.forEach(f => f.classList.remove('opening'));
    setTimeout(() => {
      overlay.classList.remove('open', 'closing');
      overlay.setAttribute('aria-hidden', 'true');
      lockScroll(false);
      folder.focus({ preventScroll: true });
    }, reduceMotion ? 0 : 340);
  }

  let switching = false;

  function step(dir) {
    const next = (current + dir + projects.length) % projects.length;
    if (reduceMotion) return render(next);
    if (switching) return;
    switching = true;
    body.style.setProperty('--dir', dir);
    body.classList.add('switching');
    setTimeout(() => {
      render(next);
      // Next frame: let the new content start from the faded state, then fade in
      requestAnimationFrame(() => {
        body.classList.remove('switching');
        switching = false;
      });
    }, 180);
  }

  folders.forEach((folder, i) => {
    folder.addEventListener('click', () => {
      if (overlay.classList.contains('open')) return;
      if (reduceMotion) return open(i, folder);
      folder.classList.add('opening');
      // Window starts growing while the lid is still swinging open
      setTimeout(() => open(i, folder), 200);
    });
  });

  closeBtn.addEventListener('click', close);
  document.getElementById('fwPrev').addEventListener('click', () => step(-1));
  document.getElementById('fwNext').addEventListener('click', () => step(1));
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });

  document.addEventListener('keydown', e => {
    if (!overlay.classList.contains('open')) return;
    if (viewerOpen()) {
      if (e.key === 'Escape') hideFile();
      if (e.key === 'ArrowLeft') showFile(viewIndex - 1);
      if (e.key === 'ArrowRight') showFile(viewIndex + 1);
      return;
    }
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') step(-1);
    if (e.key === 'ArrowRight') step(1);
  });
})();

// ==========================================
// MOTION & TEXT ANIMATIONS
// Runs immediately (script sits at the end of <body>) so elements are
// prepared before the first paint.
// ==========================================
(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const watched = [];

  // Split a heading into masked words; nested spans (highlights) are kept
  function splitWords(el, base) {
    let i = 0;
    const walk = (node) => {
      Array.from(node.childNodes).forEach(child => {
        if (child.nodeType === Node.TEXT_NODE) {
          const frag = document.createDocumentFragment();
          child.textContent.split(/(\s+)/).forEach(part => {
            if (!part) return;
            if (/^\s+$/.test(part)) {
              frag.appendChild(document.createTextNode(' '));
              return;
            }
            const w = document.createElement('span');
            const wi = document.createElement('span');
            w.className = 'w';
            wi.className = 'wi';
            wi.textContent = part;
            wi.style.setProperty('--wd', (base + i * 0.07).toFixed(2) + 's');
            i++;
            w.appendChild(wi);
            frag.appendChild(w);
          });
          child.replaceWith(frag);
        } else if (child.nodeType === Node.ELEMENT_NODE && !child.classList.contains('sparkle')) {
          walk(child);
        }
      });
    };
    walk(el);
    el.classList.add('split-words');
    el.style.setProperty('--ld', (base + i * 0.07 + 0.2).toFixed(2) + 's');
    watched.push(el);
  }

  // Add a reveal variant with a stagger based on position among siblings
  function reveal(selector, variant, base, step) {
    document.querySelectorAll(selector).forEach(el => {
      const siblings = Array.from(el.parentElement.children).filter(s => s.matches(selector));
      const index = siblings.indexOf(el);
      el.classList.add('reveal');
      if (variant) el.classList.add(variant);
      el.style.setProperty('--d', (base + index * step).toFixed(2) + 's');
      watched.push(el);
    });
  }

  splitWords(document.querySelector('.hero-heading'), 0.15);
  document.querySelectorAll('.services-heading, .about-heading, .projects-heading, .journey-heading, .awards-heading, .tools-heading, .footer-heading')
    .forEach(h => splitWords(h, 0));

  reveal('.hero-left > .award-badge', null, 0.05, 0);
  reveal('.hero-left > .hero-location, .hero-left > .mobile-bio-text, .hero-left > .social-wrapper, .hero-left > .ratings-card', null, 0.5, 0.1);
  reveal('.hero-right', 'reveal-scale', 0.2, 0);
  reveal('.hero-quote-box', 'reveal-left', 0.9, 0);
  reveal('.hero-action-pill', null, 1.0, 0);

  reveal('.services-subbadge, .social-section-badge', null, 0, 0);
  reveal('.services-actions, .projects-top-controls', null, 0.2, 0);
  reveal('.service-card', null, 0.1, 0.08);

  reveal('.orange-folder-card', 'reveal-scale', 0, 0);
  reveal('.about-tag', null, 0.3, 0.05);
  reveal('.about-text-p', null, 0.3, 0);
  reveal('.about-action-area', null, 0.5, 0);

  reveal('.projects-hint', null, 0.3, 0);
  reveal('.cf-folder', null, 0, 0.1);

  reveal('.split-header-badge', null, 0, 0);
  reveal('.split-item-card', null, 0.1, 0.1);

  reveal('.awards-desc-p, .awards-slider-dots', null, 0.3, 0.1);
  reveal('.award-card', null, 0.1, 0.15);
  reveal('.theme-tool-card', null, 0, 0.08);

  reveal('.footer-subheading', null, 0.2, 0);
  reveal('.social-hero-btn', null, 0.3, 0.07);
  reveal('.footer-bottom-container', null, 0, 0);

  const signature = document.querySelector('.handwritten-signature');
  if (signature) {
    signature.classList.add('sig-draw');
    watched.push(signature);
  }

  // Stagger index for service tags (used when a card opens)
  document.querySelectorAll('.tag-group').forEach(group => {
    Array.from(group.children).forEach((tag, i) => tag.style.setProperty('--t', i));
  });

  // Skill bars start empty and fill when their card scrolls in
  if (!reduceMotion) {
    document.querySelectorAll('.theme-bar-fill').forEach(bar => {
      bar.dataset.w = bar.style.width;
      bar.style.width = '0%';
    });
  }

  function countUp(el, target, suffix, duration) {
    if (reduceMotion) return;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased).toLocaleString('en-US') + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  function onVisible(el) {
    el.classList.add('in-view');

    el.querySelectorAll('[data-count]').forEach(c => countUp(c, Number(c.dataset.count), '', 1800));

    if (el.classList.contains('theme-tool-card')) {
      const bar = el.querySelector('.theme-bar-fill');
      const pill = el.querySelector('.theme-pct-pill');
      const delay = parseFloat(el.style.getPropertyValue('--d')) * 1000 + 250;
      setTimeout(() => {
        if (bar && bar.dataset.w) bar.style.width = bar.dataset.w;
        if (pill) countUp(pill, parseInt(pill.textContent, 10), '%', 1400);
      }, delay);
    }
  }

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          onVisible(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    watched.forEach(el => observer.observe(el));
  } else {
    watched.forEach(onVisible);
  }

  // Typewriter cycling through roles in the hero badge
  const roleEl = document.querySelector('.role-rotator');
  if (roleEl && !reduceMotion) {
    const roles = JSON.parse(roleEl.dataset.roles);
    let r = 0;
    let c = roles[0].length;
    let deleting = true;
    const tick = () => {
      c += deleting ? -1 : 1;
      roleEl.textContent = roles[r].slice(0, c);
      let delay = deleting ? 35 : 70;
      if (deleting && c === 0) {
        deleting = false;
        r = (r + 1) % roles.length;
        delay = 300;
      } else if (!deleting && c === roles[r].length) {
        deleting = true;
        delay = 2000;
      }
      setTimeout(tick, delay);
    };
    setTimeout(tick, 3000);
  }

  // Scroll progress bar + navbar state
  const progress = document.createElement('div');
  progress.className = 'scroll-progress';
  document.body.appendChild(progress);
  const navWrapper = document.querySelector('.navbar-wrapper');
  let ticking = false;

  function updateScroll() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    if (navWrapper) navWrapper.classList.toggle('scrolled', window.scrollY > 40);
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateScroll);
      ticking = true;
    }
  }, { passive: true });
  updateScroll();
})();

document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('themeToggle');
  const body = document.body;
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');

  // ==========================================
  // SAVE MODE / THEME PERSISTENCE (localStorage)
  // ==========================================
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.classList.remove('light-mode', 'dark-mode');
    body.classList.add(savedTheme);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add('dark-mode');
    body.classList.remove('light-mode');
  }

  // Toggle Theme & Save Choice
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode');
      } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
      }
    });
  }

  // ==========================================
  // MOBILE HAMBURGER MENU TOGGLE
  // ==========================================
  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      hamburgerBtn.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }

  // Close Mobile Menu when clicking a nav item
  const navLinks = document.querySelectorAll('.nav-links a, .mobile-only-cta');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (hamburgerBtn && navMenu) {
        hamburgerBtn.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  });

  // ==========================================
  // ACTIVE LINK HIGHLIGHT ON SCROLL
  // ==========================================
  const sections = document.querySelectorAll('section[id], footer[id]');
  const navItems = document.querySelectorAll('.nav-item');

  function highlightNavOnScroll() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 180;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navItems.forEach(item => {
          item.classList.remove('active');
          if (item.getAttribute('href') === `#${sectionId}`) {
            item.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNavOnScroll);

  // ==========================================
  // SERVICES ACCORDION INTERACTIVITY
  // ==========================================
  const serviceCards = document.querySelectorAll('.service-card');
  const prevBtn = document.querySelector('.prev-service');
  const nextBtn = document.querySelector('.next-service');
  let activeIndex = 1;

  function setActiveCard(index) {
    serviceCards.forEach((card, i) => {
      if (i === index) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });
    activeIndex = index;
  }

  serviceCards.forEach((card, index) => {
    card.addEventListener('click', () => {
      setActiveCard(index);
    });
  });

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      let newIndex = activeIndex - 1;
      if (newIndex < 0) newIndex = serviceCards.length - 1;
      setActiveCard(newIndex);
    });

    nextBtn.addEventListener('click', () => {
      let newIndex = activeIndex + 1;
      if (newIndex >= serviceCards.length) newIndex = 0;
      setActiveCard(newIndex);
    });
  }

});
