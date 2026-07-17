(function() {
  'use strict';

  // Evita inyectar si ya existe un header
  if (document.querySelector('header')) return;

  const headerHTML = `
  <header>
    <div class="container">
      <button type="button" aria-label="Open menu" class="menu-toggle">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>
      <a href="./index.html" class="logo">
        <div class="logo-icon"><img src="./assets/brand/logo-original.svg" alt="TCGPlayer"></div>
        <span class="logo-text">Reimagined Marketplace</span>
      </a>
      <form role="search" action="/search" class="search-form">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="search-icon"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
        <input type="text" name="q" placeholder="Search for cards, sets, sellers..." aria-label="Search">
      </form>
      <nav class="main-nav">
        <a href="./Html/Browse.html">Browse</a>
        <a href="sell.html">Sell</a>
        <a href="#" id="cartToggle" aria-label="Cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4ZM3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
        </a>
        <a href="login.html" class="btn-login">Login</a>
      </nav>
    </div>
  </header>`;

  // Función para insertar el header
  function injectHeader() {
    const body = document.body;
    if (!body) return;

    // Crea un contenedor temporal para parsear el HTML
    const temp = document.createElement('div');
    temp.innerHTML = headerHTML.trim();
    
    // Obtiene el elemento header del HTML parseado
    const header = temp.firstChild;
    
    // Inserta al inicio del body
    body.insertBefore(header, body.firstChild);
  }

  // Si el DOM ya cargó, inyecta inmediatamente
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectHeader);
  } else {
    injectHeader();
  }
})();

// use with <script src="principal-header-inyector.js"></script>