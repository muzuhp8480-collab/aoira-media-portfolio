/**
 * Aiora Media - Main Application Logic
 * 
 * Order:
 * 1. Home / Hero (Frosted Glass Card + Kinetic Letter Fill Animation)
 * 2. High Quality (1st Work Tier)
 * 3. Medium Quality (2nd Work Tier)
 * 4. Base Quality (3rd Work Tier)
 * 5. 4th Page: Specialized Categories (Perfume, Product, Service, Food videos)
 *    - With interactive tab switching: clicking each category shows only its videos!
 * 6. Contact & WhatsApp CTA Form (+91 9747368480)
 */

import { STUDIO_CONFIG } from './config.js';
import { PORTFOLIO_VIDEOS, CATEGORY_VIDEOS } from './portfolio-data.js';
import { PortfolioLetterAnimation } from './intro-animation.js';

// =============================================================================
// DOM References & State
// =============================================================================
let activeCategoryKey = 'perfume';
let letterAnimationInstance = null;

document.addEventListener('DOMContentLoaded', () => {
  setupLetterAnimation();
  setupNavigation();
  renderAllGalleries();
  setupCategoryTabs();
  setupWhatsAppForm();
  setupVideoModal();
  setupFooterYear();
  setupScrollSpy();
});

// =============================================================================
// 1. Kinetic Letter Fill Animation (Reference 2)
// =============================================================================
function setupLetterAnimation() {
  letterAnimationInstance = new PortfolioLetterAnimation();
}

// =============================================================================
// 2. Navigation & Mobile Drawer
// =============================================================================
function setupNavigation() {
  const header = document.getElementById('site-header');
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  // Sticky header transition on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile menu toggle
  if (mobileToggle && mobileMenu) {
    const toggleMenu = (open) => {
      const isCurrentlyOpen = mobileMenu.classList.contains('is-open');
      const shouldOpen = open !== undefined ? open : !isCurrentlyOpen;
      
      mobileToggle.classList.toggle('is-active', shouldOpen);
      mobileToggle.setAttribute('aria-expanded', String(shouldOpen));
      mobileMenu.classList.toggle('is-open', shouldOpen);
      mobileMenu.setAttribute('aria-hidden', String(!shouldOpen));
    };

    mobileToggle.addEventListener('click', () => toggleMenu());

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => toggleMenu(false));
    });
  }
}

// =============================================================================
// 3. Render All Galleries in Requested Order:
//    1st: High Quality
//    2nd: Medium Quality
//    3rd: Base Quality
//    4th: Categories (Perfume, Product, Service, Food)
// =============================================================================
function renderAllGalleries() {
  renderHighQuality();
  renderMediumQuality();
  renderBaseQuality();
  renderCategoryVideos(activeCategoryKey);
}

/**
 * 1st Work Section: High Quality Video Gallery
 */
function renderHighQuality() {
  const hqGallery = document.getElementById('high-quality-gallery');
  if (!hqGallery) return;

  const hqVideos = PORTFOLIO_VIDEOS.filter(v => v.tier === 'high');
  hqGallery.innerHTML = hqVideos.map(video => createVideoCardMarkup(video)).join('');
  attachCardEvents(hqGallery);
}

/**
 * 2nd Work Section: Medium Quality Gallery
 */
function renderMediumQuality() {
  const container = document.getElementById('medium-quality-gallery');
  if (!container) return;

  const mediumVideos = PORTFOLIO_VIDEOS.filter(v => v.tier === 'medium');
  container.innerHTML = mediumVideos.map(video => createVideoCardMarkup(video)).join('');
  attachCardEvents(container);
}

/**
 * 3rd Work Section: Base Quality Gallery
 */
function renderBaseQuality() {
  const container = document.getElementById('base-quality-gallery');
  if (!container) return;

  const baseVideos = PORTFOLIO_VIDEOS.filter(v => v.tier === 'base');
  container.innerHTML = baseVideos.map(video => createVideoCardMarkup(video)).join('');
  attachCardEvents(container);
}

// =============================================================================
// 4. 4th Page: Specialized Categories (Perfume, Product, Service, Food)
//    Interactive Tab Filter Switching
// =============================================================================
function setupCategoryTabs() {
  const tabBtns = document.querySelectorAll('.category-tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const categoryKey = btn.getAttribute('data-category');
      if (categoryKey && categoryKey !== activeCategoryKey) {
        activeCategoryKey = categoryKey;

        // Update active tab styles & aria attributes
        tabBtns.forEach(b => {
          const isActive = b.getAttribute('data-category') === categoryKey;
          b.classList.toggle('active', isActive);
          b.setAttribute('aria-selected', String(isActive));
        });

        // Re-render gallery with chosen category videos
        renderCategoryVideos(categoryKey);
      }
    });
  });
}

function renderCategoryVideos(categoryKey) {
  const container = document.getElementById('category-gallery-grid');
  if (!container) return;

  const videos = CATEGORY_VIDEOS[categoryKey] || [];
  
  // Smooth fade transition
  container.style.opacity = '0';
  container.style.transform = 'translateY(10px)';
  container.style.transition = 'opacity 0.25s ease, transform 0.25s ease';

  setTimeout(() => {
    container.innerHTML = videos.map(video => createVideoCardMarkup(video)).join('');
    attachCardEvents(container);

    container.style.opacity = '1';
    container.style.transform = 'translateY(0)';
  }, 120);
}

function createVideoCardMarkup(video) {
  const hasVideo = Boolean(video.videoSource);
  return `
    <article class="video-card" data-video-id="${video.id}">
      <div class="video-card-thumb-wrap" data-play-id="${video.id}">
        ${hasVideo ? `
          <video class="video-card-preview-media" src="${video.videoSource}" muted loop playsinline preload="metadata" onmouseenter="this.play()" onmouseleave="this.pause()"></video>
          <div class="card-play-hover-overlay">
            <div class="placeholder-play-circle" title="Play ${video.title}">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        ` : `
          <div class="studio-poster-placeholder">
            <span class="placeholder-brand-mark">AIORA</span>
            <div class="placeholder-play-circle" title="Play Video Preview">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        `}
        <div class="card-top-badges">
          <span class="badge-ratio">${video.aspectRatio}</span>
          <span class="badge-duration">${video.duration || 'HD'}</span>
        </div>
      </div>
      <div class="video-card-content">
        <h3 class="video-card-title">${video.title}</h3>
        <p class="video-card-caption">${video.caption}</p>
        <div class="video-card-tags">
          ${(video.tags || []).map(t => `<span class="card-tag">${t}</span>`).join('')}
        </div>
        <button type="button" class="video-card-action" data-play-id="${video.id}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z"/>
          </svg>
          <span>Watch Video</span>
        </button>
      </div>
    </article>
  `;
}

function attachCardEvents(container) {
  container.querySelectorAll('[data-play-id]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = el.getAttribute('data-play-id');
      
      // Look up in PORTFOLIO_VIDEOS or CATEGORY_VIDEOS
      let found = PORTFOLIO_VIDEOS.find(v => v.id === id);
      if (!found) {
        Object.values(CATEGORY_VIDEOS).forEach(list => {
          const match = list.find(v => v.id === id);
          if (match) found = match;
        });
      }

      if (found) {
        openVideoModal(found);
      }
    });
  });
}

// =============================================================================
// 5. WhatsApp Form Integration (+91 9747368480)
//    Requirements:
//    - Input for Client's Name (പേര്)
//    - Input for Client's Business (എന്താണ് ബിസിനസ്സ്)
//    - Direct WhatsApp dispatch to +91 9747368480
// =============================================================================
function setupWhatsAppForm() {
  const form = document.getElementById('whatsapp-enquiry-form');
  const nameInput = document.getElementById('client-name');
  const businessInput = document.getElementById('client-business');
  const messageInput = document.getElementById('client-message');
  const nameError = document.getElementById('name-error');
  const businessError = document.getElementById('business-error');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;
    const nameVal = nameInput?.value.trim() || '';
    const businessVal = businessInput?.value.trim() || '';
    const messageVal = messageInput?.value.trim() || '';

    // Validate Name
    if (!nameVal) {
      if (nameError) {
        nameError.textContent = 'Please enter your name.';
        nameError.classList.add('is-visible');
      }
      nameInput?.focus();
      isValid = false;
    } else {
      if (nameError) {
        nameError.classList.remove('is-visible');
      }
    }

    // Validate Business
    if (!businessVal) {
      if (businessError) {
        businessError.textContent = 'Please type what your business or brand is.';
        businessError.classList.add('is-visible');
      }
      if (isValid) businessInput?.focus();
      isValid = false;
    } else {
      if (businessError) {
        businessError.classList.remove('is-visible');
      }
    }

    if (!isValid) return;

    // Compose polite, pre-filled WhatsApp message
    const lines = [
      `*Hello Aiora Media!* 👋`,
      ``,
      `*Client Name:* ${nameVal}`,
      `*Business / Brand:* ${businessVal}`,
      messageVal ? `*Project Details:* ${messageVal}` : null,
      ``,
      `I would like to discuss video production services with your studio.`
    ].filter(line => line !== null);

    const messageText = lines.join('\n');
    const waUrl = `https://wa.me/${STUDIO_CONFIG.whatsAppNumber}?text=${encodeURIComponent(messageText)}`;

    // Open WhatsApp link
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  });

  // Clear errors on typing
  nameInput?.addEventListener('input', () => {
    nameError?.classList.remove('is-visible');
  });
  businessInput?.addEventListener('input', () => {
    businessError?.classList.remove('is-visible');
  });
}

// =============================================================================
// 6. Video Modal Lightbox
// =============================================================================
function setupVideoModal() {
  const modal = document.getElementById('video-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!modal) return;

  const closeModal = () => {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    const viewport = document.getElementById('modal-viewport');
    if (viewport) {
      const vid = viewport.querySelector('video');
      if (vid) {
        vid.pause();
        vid.removeAttribute('src');
        vid.load();
      }
      viewport.innerHTML = '';
    }
  };

  closeBtn?.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });
}

function openVideoModal(video) {
  const modal = document.getElementById('video-modal');
  const viewport = document.getElementById('modal-viewport');
  const title = document.getElementById('modal-video-title');
  const caption = document.getElementById('modal-video-caption');

  if (!modal || !viewport) return;

  title.textContent = video.title;
  caption.textContent = video.caption || '';

  const is916 = video.aspectRatio === '9:16';
  viewport.classList.toggle('ratio-9-16', is916);

  if (video.videoSource) {
    viewport.innerHTML = `
      <video src="${video.videoSource}" controls autoplay playsinline style="width:100%; height:100%; max-height:80vh; object-fit:contain; border-radius:12px; background:#000;"></video>
    `;
    const videoEl = viewport.querySelector('video');
    videoEl?.addEventListener('loadedmetadata', () => {
      if (videoEl.videoWidth && videoEl.videoHeight) {
        viewport.classList.toggle('ratio-9-16', videoEl.videoWidth < videoEl.videoHeight);
      }
    });
    videoEl?.play().catch(() => {
      if (videoEl) {
        videoEl.muted = true;
        videoEl.play();
      }
    });
  } else {
    viewport.innerHTML = `
      <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding:30px; color:#ffffff;">
        <span style="font-family:'Bebas Neue', sans-serif; font-size:2.4rem; letter-spacing:0.1em; color:#a3c4ea; margin-bottom:12px;">${video.title}</span>
        <p style="font-size:0.95rem; color:#94a9c9; max-width:480px; margin-bottom:20px;">
          ${video.caption}
        </p>
        <div style="display:inline-flex; align-items:center; gap:8px; padding:6px 16px; border-radius:9999px; background:rgba(37,211,102,0.15); border:1px solid #25d366; color:#25d366; font-size:0.85rem; font-weight:700;">
          <span>${video.categoryName || video.tier || 'Studio Production'}</span>
          <span>&bull;</span>
          <span>${video.aspectRatio}</span>
        </div>
      </div>
    `;
  }

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
}

// =============================================================================
// 7. ScrollSpy & Year
// =============================================================================
function setupScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    if (currentId) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
      });
    }
  }, { passive: true });
}

function setupFooterYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
