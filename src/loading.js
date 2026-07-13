/**
 * ZZZ Loading Screen Controller — Improved
 * 
 * Maneja la pantalla de carga estilo Zenless Zone Zero con:
 * - Tiempo mínimo de visualización garantizado (para que se aprecie la animación)
 * - Fase de "anticipación" antes del fade-out (simula carga real)
 * - Fade-out en dos etapas: pausa → desvanecimiento lento
 * - Sincronización con el contenido real de la página
 */

(function () {
  const loadingScreen = document.getElementById('zzzLoadingScreen');
  const loadingAnim = document.getElementById('zzzLoadingAnim');
  const body = document.body;

  // Configuración de timing
  const CONFIG = {
    // Tiempo mínimo que el loading screen debe permanecer visible (ms)
    // Esto asegura que la animación sprite se aprecie aunque la página cargue instantáneamente
    MIN_DISPLAY_TIME: 1000,       // 2.5 segundos mínimo

    // Fase de anticipación: después de la carga, pausar brevemente antes de fade-out
    ANTICIPATION_DELAY: 0,      // 0s de pausa "estática" antes del fade

    // Duración del fade-out completo (ms) — coincide con la transición CSS
    EXIT_DURATION: 2000,          // 2 segundos para un fade más suave

    // Timeout máximo absoluto (ms)
    MAX_TIMEOUT: 30000,            // 30 segundos como último recurso

    // Duración del primer fade (pre-fade, más sutil)
    PRE_FADE_DURATION: 700        // 0.7s de fade parcial antes del fade final
  };

  let hasExited = false;

  /**
   * Fase 1: Fade sutil — reduce opacidad a 0.7 para dar sensación de "preparación"
   */
  function preFade() {
    if (hasExited) return;
    loadingScreen.style.transition = `opacity ${CONFIG.PRE_FADE_DURATION}ms cubic-bezier(0.23, 1, 0.32, 1)`;
    loadingScreen.style.opacity = '0.7';
  }

  /**
   * Fase 2: Fade-out completo con transición principal
   */
  function finalFade() {
    if (hasExited) return;
    hasExited = true;

    // Restaurar la transición principal (más larga para el fade final)
    loadingScreen.style.transition = `
      opacity ${CONFIG.EXIT_DURATION}ms cubic-bezier(0.23, 1, 0.32, 1),
      transform ${CONFIG.EXIT_DURATION}ms cubic-bezier(0.23, 1, 0.32, 1)
    `;

    // Trigger del fade-out: opacidad 0 + ligero scale
    loadingScreen.style.opacity = '0';
    loadingScreen.style.transform = 'scale(0.95)';
    loadingScreen.style.pointerEvents = 'none';

    // Liberar scroll inmediatamente para UX
    body.classList.remove('loading-active');
  }

  /**
   * Fase 3: Remover del DOM
   */
  function cleanup() {
    loadingScreen.classList.add('zzz-hidden');
  }

  /**
   * Pausar la animación sprite — se llama durante la fase de anticipación
   * para dar la sensación de que "cargó" antes del fade-out
   */
  function pauseAnimation() {
    if (loadingAnim) {
      loadingAnim.style.animationPlayState = 'paused';
    }
  }

  /**
   * Secuencia completa de salida sincronizada:
   * carga completa → mínimo display → anticipación → pre-fade → fade final → cleanup
   */
  function beginExitSequence() {
    if (hasExited) return;

    // Asegurar que hemos mostrado el loading al menos el tiempo mínimo
    const timeSoFar = Date.now() - (window.__zzzLoadStart || Date.now());
    const remaining = Math.max(0, CONFIG.MIN_DISPLAY_TIME - timeSoFar);

    setTimeout(function () {
      // Fase: Pausar animación sprite (anticipación visual)
      //pauseAnimation();

      // Fase: Pre-fade sutil
      setTimeout(function () {
        preFade();

        // Fase: Fade-out final
        setTimeout(function () {
          finalFade();

          // Fase: Cleanup
          setTimeout(function () {
            cleanup();
          }, CONFIG.EXIT_DURATION);
        }, CONFIG.ANTICIPATION_DELAY);
      }, 300); // Pequeña pausa antes del pre-fade
    }, remaining);
  }

  // Registrar timestamp de inicio
  window.__zzzLoadStart = Date.now();

  // Detectar estado de carga
  if (document.readyState === 'complete') {
    // Página ya cargó, iniciar secuencia de salida
    beginExitSequence();
  } else {
    // Escuchar el evento de carga completa
    window.addEventListener('load', function () {
      beginExitSequence();
    });

    // Fallback: timeout máximo
    setTimeout(function () {
      if (!hasExited) {
        beginExitSequence();
      }
    }, CONFIG.MAX_TIMEOUT);
  }
})();
