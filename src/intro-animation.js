/**
 * Aiora Media - Reference 2 Kinetic Letter-Fill Wave Controller
 * 
 * Recreates the exact animation from Reference Video:
 * - All letters of "PORTFOLIO" begin with outline stroke
 * - Letters animate from left to right (P -> O -> R -> T -> F -> O -> L -> I -> O)
 * - Each letter fills up from bottom to top with a luminous energy pulse
 * - Interactive replay triggers & hover wave effects
 */

export class PortfolioLetterAnimation {
  constructor() {
    this.container = document.getElementById('portfolio-word');
    this.letters = Array.from(document.querySelectorAll('.anim-letter'));
    this.replayBtn = document.getElementById('btn-replay-animation');
    this.glassCard = document.getElementById('hero-glass-card');
    this.isAnimating = false;

    this.init();
  }

  init() {
    if (!this.letters.length) return;

    // Attach replay button
    if (this.replayBtn) {
      this.replayBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.play(true);
      });
    }

    // Attach card click to replay
    if (this.glassCard) {
      this.glassCard.addEventListener('click', () => {
        if (!this.isAnimating) {
          this.play(true);
        }
      });
    }

    // Interactive mouse hover ripple on letters
    this.letters.forEach((letter, index) => {
      letter.addEventListener('mouseenter', () => {
        this.triggerHoverRipple(index);
      });
    });

    // Auto-trigger is controlled by setupBrandSplash callback
  }

  play(forceReset = false) {
    if (this.isAnimating && !forceReset) return;
    this.isAnimating = true;

    // Reset all letters to outline stroke state
    this.letters.forEach((letter) => {
      letter.classList.remove('is-filled', 'is-filling');
    });

    // Replay button rotation indicator
    if (this.replayBtn) {
      const icon = this.replayBtn.querySelector('svg');
      if (icon) {
        icon.style.transition = 'transform 0.8s ease';
        icon.style.transform = 'rotate(360deg)';
        setTimeout(() => {
          icon.style.transform = '';
        }, 800);
      }
    }

    // Staggered sequential letter fill wave (Exact Reference 2 timing)
    const letterDelay = 130; // ms between each letter
    const fillDuration = 350; // ms per letter fill

    this.letters.forEach((letter, idx) => {
      setTimeout(() => {
        letter.classList.add('is-filling');
        letter.classList.add('is-filled');

        // Remove fill spark after animation settles
        setTimeout(() => {
          letter.classList.remove('is-filling');
        }, fillDuration);

        // When the final letter finishes
        if (idx === this.letters.length - 1) {
          setTimeout(() => {
            this.isAnimating = false;
            this.triggerCardShimmer();
          }, fillDuration);
        }
      }, idx * letterDelay + 100);
    });
  }

  triggerHoverRipple(centerIndex) {
    if (this.isAnimating) return;

    // Pulse target letter and neighbors with subtle wave
    const target = this.letters[centerIndex];
    if (target) {
      target.style.transition = 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)';
      target.style.transform = 'translateY(-8px) scale(1.08)';
      setTimeout(() => {
        target.style.transform = '';
      }, 250);
    }

    const prev = this.letters[centerIndex - 1];
    if (prev) {
      prev.style.transition = 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)';
      prev.style.transform = 'translateY(-4px) scale(1.03)';
      setTimeout(() => {
        prev.style.transform = '';
      }, 250);
    }

    const next = this.letters[centerIndex + 1];
    if (next) {
      next.style.transition = 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)';
      next.style.transform = 'translateY(-4px) scale(1.03)';
      setTimeout(() => {
        next.style.transform = '';
      }, 250);
    }
  }

  triggerCardShimmer() {
    if (!this.glassCard) return;
    this.glassCard.style.transition = 'box-shadow 0.6s ease';
    this.glassCard.style.boxShadow = '0 30px 80px rgba(28, 117, 188, 0.22), inset 0 1.5px 3px rgba(255, 255, 255, 1)';
    setTimeout(() => {
      this.glassCard.style.boxShadow = '';
    }, 700);
  }
}

/**
 * First-Load Brand Intro Splash Animation
 * Shows "Aiora Media" animated with luminous glow, then dissolves out smoothly.
 */
export function setupBrandSplash(onComplete) {
  const overlay = document.getElementById('brand-intro-overlay');
  const loaderBar = document.getElementById('intro-loader-bar');
  if (!overlay) {
    if (onComplete) onComplete();
    return;
  }

  let dissolved = false;

  const dissolveSplash = () => {
    if (dissolved) return;
    dissolved = true;
    overlay.classList.add('is-dissolving');

    // Trigger hero letter animation as splash dissolves
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 280);

    // Remove from DOM layout after fade out completes
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 750);
  };

  // Start loader bar progress
  if (loaderBar) {
    loaderBar.style.width = '0%';
    loaderBar.style.transition = 'width 1.7s cubic-bezier(0.2, 0.8, 0.25, 1)';
    requestAnimationFrame(() => {
      loaderBar.style.width = '100%';
    });
  }

  // Auto-dissolve after 1.9s
  const autoTimer = setTimeout(dissolveSplash, 1900);

  // Allow clicking or tapping anywhere to skip immediately
  overlay.addEventListener('click', () => {
    clearTimeout(autoTimer);
    dissolveSplash();
  });
}
