// Loader para páginas "Coming Soon" / stub.
// Orden importa: los injectores de header/footer tienen que registrar sus
// custom elements ANTES de que cart.js busque el botón #cartToggle en el DOM.
import './Principal-Funtions/principal-header-inyector.js';
import './Principal-Funtions/principal-footer-inyector.js';
import './Principal-Funtions/cart.js';

// Estas páginas no tienen la pantalla de carga (zzzLoadingScreen), así que
// no cargamos loading.js completo — solo destrabamos las animaciones de
// entrada directamente.
document.body.classList.add('page-ready');
