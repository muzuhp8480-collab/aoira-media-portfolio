/**
 * Aiora Media - Black -> Zoom-In -> Color Bloom Intro & Flowing Silk Waves Canvas
 * 
 * Implements:
 * 1. Black -> Zoom-In -> Color Bloom Intro Overlay
 * 2. Monochrome-to-Color Flowing Horizon Silk Waves Canvas (Canvas 2D)
 * 3. Soft Ambient Cursor Spotlight
 * 4. Stacked MEDIA / PORTFOLIO Replay & Zoom Controls
 */

let introTimer = null;
let bloomTimer = null;
let overlayBloomTimer = null;
let colorMix = 0; // 0 = monochrome, 1 = full cerulean & ice blue

export function playIntro() {
  const overlay = document.getElementById('intro-overlay');
  if (!overlay) return;

  clearTimeout(introTimer);
  clearTimeout(bloomTimer);
  clearTimeout(overlayBloomTimer);
  colorMix = 0;

  document.body.classList.remove('hero-ready', 'color-bloomed');
  overlay.classList.remove('is-hidden', 'bloom-bg');

  const animIds = ['intro-aura-el', 'intro-logo-el'];
  animIds.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.style.animation = 'none';
    void el.offsetWidth;
    el.style.animation = '';
  });

  overlayBloomTimer = setTimeout(() => {
    overlay.classList.add('bloom-bg');
  }, 750);

  introTimer = setTimeout(() => {
    overlay.classList.add('is-hidden');
    document.body.classList.add('hero-ready');
    bloomTimer = setTimeout(() => {
      document.body.classList.add('color-bloomed');
    }, 380);
  }, 2300);
}

export function replayHeroZoomBloom() {
  clearTimeout(bloomTimer);
  colorMix = 0.15;
  document.body.classList.remove('hero-ready', 'color-bloomed');
  void document.body.offsetWidth;
  document.body.classList.add('hero-ready');
  bloomTimer = setTimeout(() => {
    document.body.classList.add('color-bloomed');
  }, 420);
}

export function initIntroAndCanvas() {
  const overlay = document.getElementById('intro-overlay');
  const bgCanvas = document.getElementById('bg-canvas');
  const cursorGlow = document.getElementById('cursor-glow');

  // Click on MEDIA / PORTFOLIO stage replays Zoom & Color Bloom
  document.getElementById('mp-stage')?.addEventListener('click', replayHeroZoomBloom);

  // Skip intro on overlay click
  overlay?.addEventListener('click', () => {
    clearTimeout(introTimer);
    clearTimeout(bloomTimer);
    clearTimeout(overlayBloomTimer);
    overlay.classList.add('is-hidden');
    document.body.classList.add('hero-ready', 'color-bloomed');
  });

  // Setup Canvas
  if (bgCanvas) {
    const bgCtx = bgCanvas.getContext('2d');
    let bgMouse = { x: window.innerWidth / 2, y: window.innerHeight / 2, active: false };
    let bw = 0, bh = 0, tick = 0;

    function initBgCanvas() {
      bw = bgCanvas.width = window.innerWidth;
      bh = bgCanvas.height = window.innerHeight;
    }

    function animateBgCanvas() {
      tick += 0.015;
      const targetMix = document.body.classList.contains('color-bloomed') ? 1 : 0;
      colorMix += (targetMix - colorMix) * 0.04;

      bgCtx.clearRect(0, 0, bw, bh);

      for (let layer = 0; layer < 5; layer++) {
        bgCtx.beginPath();
        const baseY = bh * (0.52 + layer * 0.06);
        const amp = 24 + layer * 9;
        for (let x = 0; x <= bw; x += 18) {
          const mousePull = bgMouse.active ? Math.exp(-Math.pow((x - bgMouse.x) / 240, 2)) * (bgMouse.y - bh / 2) * 0.14 : 0;
          const y = baseY + Math.sin(x * 0.0038 + tick + layer * 0.7) * amp + mousePull;
          if (x === 0) bgCtx.moveTo(x, y);
          else bgCtx.lineTo(x, y);
        }

        // Interpolate from muted grey (monochrome) to #1C75BC / #60A5FA
        const r = Math.round(90 * (1 - colorMix) + (layer === 0 ? 28 : 96) * colorMix);
        const g = Math.round(90 * (1 - colorMix) + (layer === 0 ? 117 : 165) * colorMix);
        const b = Math.round(95 * (1 - colorMix) + (layer === 0 ? 188 : 250) * colorMix);
        const a = layer === 0 ? 0.28 : 0.18 - layer * 0.03;

        bgCtx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
        bgCtx.lineWidth = layer === 0 ? 1.6 : 1;
        bgCtx.stroke();
      }

      requestAnimationFrame(animateBgCanvas);
    }

    window.addEventListener('mousemove', (e) => {
      bgMouse.x = e.clientX;
      bgMouse.y = e.clientY;
      bgMouse.active = true;
      if (cursorGlow) {
        cursorGlow.style.left = `${e.clientX}px`;
        cursorGlow.style.top = `${e.clientY}px`;
      }
    });

    window.addEventListener('resize', initBgCanvas);

    initBgCanvas();
    animateBgCanvas();
  }

  // Auto-start intro
  playIntro();
}
