const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '..', 'src', 'style.css');
let css = fs.readFileSync(cssPath, 'utf8');

// 1. Replace header comment
css = css.replace(
  /\/\* ==========================================================================\s+AIORA MEDIA - PORTFOLIO DESIGN SYSTEM & STYLESHEET[\s\S]*?========================================================================== \*\//,
  `/* ==========================================================================
   AIORA MEDIA - 3D INTERACTIVE WEBGL & BRAND BLUE PORTFOLIO
   Inspired by: Antimatter AI / MoncyDev 3D WebGL Aesthetic
   Sampled from Reference Logos: Authentic Brand Blue (#125f93), Luminous Blue (#1c75bc),
   Electric Accent (#2f8fff), Cyber Cyan (#00e5ff), Deep Obsidian Navy (#020509, #040810)
   Typography: Bricolage Grotesque (Headings), Inter (Body)
   ========================================================================== */`
);

// 2. Replace root variables
const oldVarsRegex = /:root\s*\{[\s\S]*?--transition-slow:[^;]+;\s*\}/;
const newVars = `:root {
  --color-black: #020509;
  --color-matte-black: #040810;
  --color-surface-dark: #08101d;
  --color-surface-elevated: #0d1a2d;
  --color-surface-hover: #13243d;

  --color-brand-blue: #125f93;          /* Sampled authentic logo blue */
  --color-accent-blue: #1c75bc;         /* Luminous primary brand blue */
  --color-accent-blue-hover: #2f8fff;   /* Electric cyber blue */
  --color-accent-cyan: #00e5ff;         /* Cyber cyan highlight */
  --color-deep-navy: #051427;
  --color-glow-blue: rgba(28, 117, 188, 0.35);
  --color-glow-intense: rgba(28, 117, 188, 0.58);

  --color-text-white: #ffffff;
  --color-text-primary: #f8fafc;
  --color-text-secondary: #94a9c9;
  --color-text-muted: #566e94;
  --color-border: rgba(255, 255, 255, 0.08);
  --color-border-hover: rgba(28, 117, 188, 0.5);

  --font-heading: 'Bricolage Grotesque', sans-serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  --header-height: 72px;
  --border-radius-sm: 8px;
  --border-radius-md: 14px;
  --border-radius-lg: 20px;
  --border-radius-full: 9999px;

  --transition-fast: 0.18s cubic-bezier(0.16, 1, 0.3, 1);
  --transition-normal: 0.32s cubic-bezier(0.16, 1, 0.3, 1);
  --transition-slow: 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}`;

css = css.replace(oldVarsRegex, newVars);

// 3. Replace variable usages
css = css.split('var(--color-accent-green-hover)').join('var(--color-accent-blue-hover)');
css = css.split('var(--color-accent-green)').join('var(--color-accent-blue)');
css = css.split('var(--color-glow-green)').join('var(--color-glow-blue)');
css = css.split('var(--color-brand-green)').join('var(--color-brand-blue)');
css = css.split('var(--color-deep-forest)').join('var(--color-deep-navy)');

// 4. Replace specific rgba color values
css = css.split('rgba(0, 215, 131,').join('rgba(28, 117, 188,');
css = css.split('rgba(5, 136, 77,').join('rgba(18, 95, 147,');
css = css.split('rgba(3, 33, 18,').join('rgba(5, 20, 39,');

// 5. Replace hex leftovers if any
css = css.split('#00d783').join('#1c75bc');
css = css.split('#00f08f').join('#2f8fff');
css = css.split('#05884d').join('#125f93');
css = css.split('#032112').join('#051427');

// 6. Update Comments mentioning Green
css = css.split('Green logo').join('Blue logo');
css = css.split('Vibrant green primary').join('Luminous brand blue primary');
css = css.split('White-and-green').join('White-and-blue');
css = css.split('radial green gradient').join('radial blue gradient');

// 7. Enhance Hero Accent text gradient
css = css.replace(
  /\.hero-title-accent\s*\{[\s\S]*?\}/,
  `.hero-title-accent {
  background: linear-gradient(135deg, #2f8fff 0%, #00e5ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 30px rgba(0, 229, 255, 0.45));
}`
);

// 8. Add 3D Canvas & 3D Interactive Card Tilts if not already present
if (!css.includes('hero-3d-wrapper')) {
  css += `

/* --------------------------------------------------------------------------
   3D WebGL Scene & Interactive MoncyDev / Antimatter Elements
   -------------------------------------------------------------------------- */
.hero-3d-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 1100px;
  height: 720px;
  pointer-events: auto;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-3d-canvas {
  width: 100% !important;
  height: 100% !important;
  outline: none;
  cursor: grab;
}

.hero-3d-canvas:active {
  cursor: grabbing;
}

.hero-3d-hud-chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-body);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-accent-cyan);
  background: rgba(0, 229, 255, 0.08);
  border: 1px solid rgba(0, 229, 255, 0.28);
  padding: 6px 16px;
  border-radius: var(--border-radius-full);
  margin-bottom: 22px;
  box-shadow: 0 0 20px rgba(0, 229, 255, 0.18);
  backdrop-filter: blur(8px);
  animation: hudPulse 3s ease-in-out infinite alternate;
}

.hud-pulse-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-accent-cyan);
  box-shadow: 0 0 10px var(--color-accent-cyan);
}

@keyframes hudPulse {
  0% { box-shadow: 0 0 14px rgba(0, 229, 255, 0.15); border-color: rgba(0, 229, 255, 0.25); }
  100% { box-shadow: 0 0 26px rgba(0, 229, 255, 0.35); border-color: rgba(0, 229, 255, 0.55); }
}

/* --------------------------------------------------------------------------
   3D Card Tilt & Interactive Light Glare (Antimatter Bento Aesthetic)
   -------------------------------------------------------------------------- */
.card-3d {
  position: relative;
  transform-style: preserve-3d;
  will-change: transform;
  transition: transform 0.12s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
}

.card-3d::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: radial-gradient(
    380px circle at var(--glare-x, 50%) var(--glare-y, 50%),
    rgba(28, 117, 188, 0.22),
    transparent 70%
  );
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 3;
}

.card-3d:hover::after {
  opacity: 1;
}

.card-3d:hover {
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.7), 0 0 30px rgba(28, 117, 188, 0.25);
  border-color: rgba(28, 117, 188, 0.45);
}
`;
}

fs.writeFileSync(cssPath, css, 'utf8');
console.log('Successfully updated style.css with authentic Brand Blue & 3D styling!');
