class TCGHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<header>
    <div class="container">
      <button type="button" aria-label="Open menu" class="menu-toggle">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>
      <a href="./index.html" class="logo">
        <div class="logo-icon"><img src="/assets/brand/logo-original.svg" alt="TCGPlayer"></div>
        <span class="logo-text">Reimagined Marketplace</span>
      </a>
      <form role="search" action="/search" class="search-form">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="search-icon"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
        <input type="text" name="q" placeholder="Search for cards, sets, sellers..." aria-label="Search">
      </form>
      <nav class="main-nav">
        <!-- idk howto do the regional price update-->
        <a href="./Html//stable/Browse.html">Browse</a>
        <a href="sell.html">Sell</a>
        <a href="#" id="cartToggle" aria-label="Cart">
          <svg width="23" height="23" viewBox="-0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.6 21.57a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4M2 3.56s4.64-.06 4 4l-.69 4.06a3.27 3.27 0 0 0 3.33 3.94h8a4.9 4.9 0 0 0 4.66-3.94l.69-4.11a3.292 3.292 0 0 0-3.35-4h-8.7" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
            </a>

            <a href="/login.html" class="btn-login">Login</a>
        </nav>
    </div>
</header>
`;
    }
}

customElements.define("tcg-header", TCGHeader);

/* <tcg-header></tcg-header>

    <script src="/src/JS/Principal-Funtions/principal-header-inyector.js"></script>
*/
