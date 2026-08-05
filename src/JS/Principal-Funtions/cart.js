const cartOverlay = document.getElementById('cartOverlay');
const cartPanel = document.getElementById('cartPanel');
const cartToggle = document.getElementById('cartToggle');
const cartClose = document.getElementById('cartClose');
const continueShopping = document.getElementById('continueShopping');
const addToCartFunction = document.querySelectorAll('.add-to-cart');


function openCart() {
  cartOverlay.classList.add('is-open');
  cartPanel.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  cartOverlay.classList.remove('is-open');
  cartPanel.classList.remove('is-open');
  document.body.style.overflow = '';
}

// Event listeners
cartToggle?.addEventListener('click', (e) => {
  e.preventDefault();
  openCart();
});

cartClose?.addEventListener('click', closeCart);
continueShopping?.addEventListener('click', closeCart);
cartOverlay?.addEventListener('click', closeCart);

// Tecla ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && cartPanel.classList.contains('is-open')) {
    closeCart();
  }
});