(function() {
  'use strict';

  /* ============================================
     SCROLL PROGRESS BAR
     ============================================ */
  function initReadingProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    progressBar.setAttribute('aria-hidden', 'true');
    document.body.appendChild(progressBar);

    function updateProgress() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = progress + '%';
    }

    let ticking = false;
    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(function() {
          updateProgress();
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    updateProgress();
  }

  /* ============================================
     BACK TO TOP BUTTON
     ============================================ */
  function initBackToTop() {
    const btn = document.querySelector('.back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', function() {
      if (window.scrollY > 500) {
        btn.classList.add('is-visible');
      } else {
        btn.classList.remove('is-visible');
      }
    }, { passive: true });

    btn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* ============================================
     TABLE OF CONTENTS — ACTIVE SECTION HIGHLIGHT
     ============================================ */
  function initTocHighlight() {
    const tocLinks = document.querySelectorAll('.article-toc a[href^="#"]');
    const sections = document.querySelectorAll('.article-section[id]');

    if (!tocLinks.length || !sections.length) return;

    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          tocLinks.forEach(function(link) {
            link.classList.toggle('is-active', link.getAttribute('href') === '#' + id);
          });
        }
      });
    }, observerOptions);

    sections.forEach(function(section) {
      observer.observe(section);
    });

    // Smooth scroll para los links del TOC
    tocLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        if (target) {
          const headerOffset = 100;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });

          history.pushState(null, null, '#' + targetId);
        }
      });
    });
  }

  /* ============================================
     FEEDBACK BUTTONS (click events, no form)
     ============================================ */
  function initFeedback() {
    const container = document.querySelector('.feedback-buttons');
    if (!container) return;

    const articleId = container.getAttribute('data-article') || 'article';
    const storageKey = 'feedback-' + articleId;
    const buttons = container.querySelectorAll('.feedback-btn');

    // Check si ya votó
    try {
      const previousVote = localStorage.getItem(storageKey);
      if (previousVote) {
        showThanks(container, 'You already sent feedback. Thanks!');
        return;
      }
    } catch(e) {}

    buttons.forEach(function(btn) {
      btn.addEventListener('click', function() {
        const value = this.getAttribute('data-value');

        // Simular envío (reemplazar con fetch real si querés)
        console.log('Feedback:', value, 'Article:', articleId);

        // Guardar en localStorage
        try {
          localStorage.setItem(storageKey, value);
        } catch(e) {}

        // Mostrar mensaje de gracias
        const message = value === 'yes' 
          ? 'Thanks! Glad it helped you out.' 
          : 'Thanks for your feedback. Well keep improving.';
        showThanks(container, message);
      });
    });
  }

  function showThanks(container, message) {
    // Ocultar botones
    const buttons = container.querySelectorAll('.feedback-btn');
    buttons.forEach(function(btn) {
      btn.style.display = 'none';
    });

    // Mostrar mensaje
    const thanks = document.createElement('p');
    thanks.className = 'feedback-thanks is-visible';
    thanks.textContent = message;
    container.appendChild(thanks);
  }

  /* ============================================
     HEADER SCROLL EFFECT
     ============================================ */
  function initHeaderScroll() {
    const header = document.querySelector('body > header');
    if (!header) return;

    let ticking = false;

    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(function() {
          const currentScroll = window.scrollY;

          if (currentScroll > 50) {
            header.classList.add('scrolled');
          } else {
            header.classList.remove('scrolled');
          }

          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /* ============================================
     ANIMATE ON SCROLL
     ============================================ */
  function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    if (!animatedElements.length) return;

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

      animatedElements.forEach(function(el) {
        observer.observe(el);
      });
    } else {
      animatedElements.forEach(function(el) {
        el.classList.add('is-visible');
      });
    }
  }

  /* ============================================
     SHARE BUTTONS
     ============================================ */
  function initShareButtons() {
    const shareData = {
      title: document.title,
      text: document.querySelector('meta[name="description"]')?.content || '',
      url: window.location.href
    };

    document.querySelectorAll('[data-share]').forEach(function(btn) {
      btn.addEventListener('click', function() {
        if (navigator.share) {
          navigator.share(shareData).catch(function() {});
        } else {
          navigator.clipboard.writeText(shareData.url).then(function() {
            const originalText = btn.textContent;
            btn.textContent = 'Copied!';
            setTimeout(function() {
              btn.textContent = originalText;
            }, 2000);
          });
        }
      });
    });
  }

  /* ============================================
     TABLE SORTING
     ============================================ */
  function initTableSorting() {
    const table = document.querySelector('.matchup-chart');
    if (!table) return;

    const headers = table.querySelectorAll('thead th[role="button"]');

    headers.forEach(function(header) {
      let sortDir = 1;

      function sortTable() {
        const tbody = table.querySelector('tbody');
        const rows = Array.from(tbody.querySelectorAll('tr'));
        const colIndex = Array.from(header.parentElement.children).indexOf(header);

        rows.sort(function(a, b) {
          const aVal = a.cells[colIndex].textContent.trim();
          const bVal = b.cells[colIndex].textContent.trim();

          const order = { 'Favorable': 3, 'Even': 2, 'Unfavorable': 1 };
          const aOrder = order[aVal] || aVal;
          const bOrder = order[bVal] || bVal;

          if (aOrder < bOrder) return -1 * sortDir;
          if (aOrder > bOrder) return 1 * sortDir;
          return 0;
        });

        rows.forEach(function(row) {
          tbody.appendChild(row);
        });

        sortDir *= -1;

        headers.forEach(function(h) {
          h.removeAttribute('aria-sort');
        });
        header.setAttribute('aria-sort', sortDir === 1 ? 'ascending' : 'descending');
      }

      header.addEventListener('click', sortTable);
      header.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          sortTable();
        }
      });
    });
  }

  /* ============================================
     INITIALIZE ALL
     ============================================ */
  function init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', runInit);
    } else {
      runInit();
    }
  }

  function runInit() {
    initReadingProgress();
    initBackToTop();
    initTocHighlight();
    initFeedback();
    initHeaderScroll();
    initScrollAnimations();
    initShareButtons();
    initTableSorting();
  }

  init();
})();
