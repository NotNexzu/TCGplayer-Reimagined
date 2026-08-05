// Los injectores de header/footer van primero: registran sus custom elements
// (<tcg-header>, <tcg-footer>) antes de que cart.js busque #cartToggle en el DOM.
import './JS/Principal-Funtions/principal-header-inyector.js';
import './JS/Principal-Funtions/principal-footer-inyector.js';
import './JS/Principal-Funtions/cart.js';
import './JS/Principal-Funtions/loading.js';
import './JS/dev-mode.js';