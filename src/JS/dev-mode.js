document.addEventListener('DOMContentLoaded', () => {
  const devToggle = document.getElementById('developerToggleoff');
  const devOverlay = document.getElementById('devTransition');
  const stableOverlay = document.getElementById('stableTransition');
  const warningDismiss = document.querySelector('.warning-dismiss');
  const warningBanner = document.getElementById('developer-warning');

  if (devToggle) {
    devToggle.addEventListener('click', (e) => {
      e.preventDefault();
      const targetUrl = devToggle.getAttribute('href');

      devToggle.classList.add('is-clicking');

      if (devOverlay) {
        devOverlay.classList.add('is-active');
      }
      if (stableOverlay) {
        stableOverlay.classList.add('is-active');
      }

      setTimeout(() => {
        window.location.href = targetUrl;
      }, 800);
    });
  }


  if (warningDismiss && warningBanner) {
    warningDismiss.addEventListener('click', () => {
      warningBanner.style.transition = 'opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
      warningBanner.style.opacity = '0';
      warningBanner.style.transform = 'translateY(-100%)';
      
      setTimeout(() => {
        warningBanner.style.display = 'none';
      }, 400);
    });
  }
});