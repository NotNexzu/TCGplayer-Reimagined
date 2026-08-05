class TCGFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<footer>
    <div class="container">
      <div class="footer-brand">
        <a href="/index.html" class="logo">
          <div class="logo-icon"><img src="/assets/brand/logo-without-text.svg" alt="TCGPlayer"></div>
          <span class="logo-text">Marketplace</span>
        </a>
        <p>The definitive trading card game platform for modern collectors, high-fidelity data, secure transactions.</p>
        <div class="social-links">
          <a href="https://github.com/NotNexzu/TCGplayer-Reimagined" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg></a>
          <a href="https://www.facebook.com/TCGplayerofficial/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1095 1095" width="23" height="23"><path d="M534 .17h28c5.27 2.76 13.5-.07 19.47.86 4.79.75 9.48.29 14 1 15.54 2.44 31.36 3.18 46.84 6.16 32.32 6.22 64.9 14.14 96 26 11.45 4.36 22.56 9.63 34 14 5.37 2.05 10.35 5.22 15.69 7.31 4.1 1.6 7.98 4.04 11.66 6.34 4.78 3 10.22 5.01 15 8 5.6 3.51 11.74 6.12 17.31 9.69 12.95 8.3 25.66 16.89 38.06 25.94 45.31 33.06 86.32 73.17 119.44 118.56 11.65 15.97 21.86 32.86 32.37 49.63 3.14 5 5.18 10.68 8.32 15.68 8.88 14.16 16.1 30.43 22.03 45.97 1.99 5.22 4.63 10.16 6.62 15.38 2.34 6.12 4.04 12.5 6.38 18.62.82 2.15 2.07 4.13 2.62 6.38 2.5 10.13 6.51 19.89 9 30 5.3 21.46 9.75 43.09 13.16 64.84.25 1.62-.19 3.32.06 4.94 1.66 10.61 2.28 21.45 3.94 32.06.76 4.89-1.4 11.15.86 15.47v49c-2.26 4.32-.1 10.58-.86 15.47-2.28 14.56-2.72 29.42-5 44-6.46 41.21-18.16 81.52-33.16 120.84-9.73 25.54-24.56 54.76-39.28 77.72-7.03 10.96-13.38 22.41-21.06 32.94-6.88 9.43-14.13 18.58-21 28-1.11 1.52-2.83 2.54-3.94 4.06-6.82 9.35-15.33 17.41-22.53 26.47-3.3 4.15-7.75 7.75-11.5 11.5-9.06 9.06-18.06 18.1-28 26-6.09 4.84-11.24 10.88-17.53 15.47-9.42 6.87-18.57 14.12-28 21-7.97 5.82-16.63 10.74-24.94 16.06-30.84 19.77-64.14 35.62-98.34 48.66-29.16 11.11-58.69 18.94-89 25-11.87 2.37-24.06 5-36.19 5.81V715c49.17-.17 98.33-.33 147.5-.5 10.17-55.5 20.33-111 30.5-166.5-59.5-.17-119-.33-178.5-.5v-33c0-40.54-2.98-98.07 33.97-125.03 5.3-3.87 10.81-8.54 17.03-10.97 12.22-4.78 24.7-8.46 37.53-10.47 1.62-.25 3.32.19 4.94-.06 13.8-2.16 27.84-1.97 42.03-1.97 7.23 0 14.8-.65 22 0 1.48.13 2.6.74 4.03.97 5.52.86 11.42-.8 16.94.06 3.46.54 5.95 1.19 9.53.47-.17-50.17-.33-100.33-.5-150.5-8.9-4.24-20.3-4.52-29.97-6.03-14.62-2.29-29.44-3.65-44.06-5.94-8.18-1.28-16.75.22-24.94-1.06-12.95-2.03-32.11-2.03-45.06 0-4.55.71-9.39-.65-13.94.06-4.32.68-8.74 1.26-13.06 1.94-4.29.67-8.65.39-12.94 1.06-21.78 3.41-43.95 8.19-64.84 16.16-48.24 18.39-83.83 50.12-106.85 96.15-5.18 10.37-10.45 21.24-13.65 32.35-5.71 19.77-10 39.65-13.16 59.84-.3 1.95.24 3.99-.06 5.94-1.4 8.93-1.54 18.13-2.94 27.06-1.34 8.57-.03 23.71-.03 32.97v49c0 6.23 1.64 15.45-1 21-37.33.33-74.67.67-112 1 .17 55.5.33 111 .5 166.5 37.5.17 75 .33 112.5.5v363c-3.56.48-7.14-1.47-10.69-2.31-8.12-1.94-16.04-4.35-24-7-13.65-4.55-27.19-9.26-40.62-14.38-7.76-2.96-14.96-7.28-22.69-10.31-9.09-3.56-18.39-8.16-26.66-13.34-3.35-2.11-7.33-3.21-10.68-5.32-7.42-4.65-15.25-8.64-22.63-13.37-11.48-7.36-22.99-14.97-34-23-7.49-5.47-14.52-11.54-22-17-7.21-5.26-13.54-11.92-20.53-17.47-4.03-3.2-6.97-7.8-11-11a115.6 115.6 0 0 1-18.5-18.5c-3.2-4.03-7.8-6.97-11-11-9.56-12.03-20.41-23.12-29.47-35.53-35.1-48.11-64.39-100.8-83.34-157.66-11.68-35.03-18.5-70.73-24.16-106.84-.3-1.95.24-3.99-.06-5.94-.68-4.32-1.26-8.74-1.94-13.06-.56-3.57.5-7.37-.06-10.94-.23-1.43-.84-2.55-.97-4.03-.51-5.58 1.71-13.64-.83-18.5v-28c2.66-5.09.3-13.66.83-19.5.13-1.48.74-2.6.97-4.03.51-3.25-.45-6.69.06-9.94.73-4.64 1.21-9.42 1.94-14.06.3-1.95-.24-3.99.06-5.94 2.98-19.04 6.37-37.9 10.16-56.84 2.49-12.49 6.94-24.61 10-37 2.28-9.25 6.23-18.49 9.62-27.38 7.27-19.05 14.85-37.6 24.03-55.97 38.87-77.72 95.97-145.67 166.13-196.87 24.53-17.9 50-33.94 77.37-47.63 6.14-3.06 12.27-6.84 18.66-9.34 10.66-4.17 20.99-9.23 31.69-13.31 34.76-13.26 71.46-23.46 107.84-29.16 9.98-1.56 20.05-2.44 30-4 2.6-.41 5.34.35 7.94-.06 5.29-.83 10.77-1.11 16.06-1.94 6.24-.98 14.96 2.02 20.47-.86Z" fill-rule="evenodd" fill="currentColor" stroke-width=".25" stroke-linejoin="round"/></svg></a>
          <a href="https://www.instagram.com/tcgplayer_com/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="23" height="23" fill="currentColor"><path d="M292.92 3.5c-53.2 2.51-89.53 11-121.29 23.48-32.87 12.81-60.73 30-88.45 57.82s-44.79 55.7-57.51 88.62c-12.31 31.83-20.65 68.19-23 121.42S-.2 365.18.06 500.96.92 653.76 3.5 707.1c2.54 53.19 11 89.51 23.48 121.28 12.83 32.87 30 60.72 57.83 88.45s55.69 44.76 88.69 57.5c31.8 12.29 68.17 20.67 121.39 23s70.35 2.87 206.09 2.61 152.83-.86 206.16-3.39 89.46-11.05 121.24-23.47c32.87-12.86 60.74-30 88.45-57.84s44.77-55.74 57.48-88.68c12.32-31.8 20.69-68.17 23-121.35 2.33-53.37 2.88-70.41 2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45s-55.74-44.8-88.67-57.48c-31.82-12.31-68.17-20.7-121.39-23S634.83-.2 499.04.06 346.25.9 292.92 3.5m5.84 903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29 2.53-202c2.08-48.71 10.23-75.21 17-92.84 9-23.39 19.84-40 37.29-57.57s34.1-28.39 57.43-37.51c17.62-6.88 44.06-15.06 92.79-17.38 52.73-2.5 68.53-3 202-3.29s149.31.21 202.06 2.53c48.71 2.12 75.22 10.19 92.83 17 23.37 9 40 19.81 57.57 37.29s28.4 34.07 37.52 57.45c6.89 17.57 15.07 44 17.37 92.76 2.51 52.73 3.08 68.54 3.32 202s-.23 149.31-2.54 202c-2.13 48.75-10.21 75.23-17 92.89-9 23.35-19.85 40-37.31 57.56s-34.09 28.38-57.43 37.5c-17.6 6.87-44.07 15.07-92.76 17.39-52.73 2.48-68.53 3-202.05 3.29s-149.27-.25-202-2.53m407.6-674.61a60 60 0 1 0 59.88-60.1 60 60 0 0 0-59.88 60.1M243.27 500.5c.28 141.8 115.44 256.49 257.21 256.22S757.02 641.3 756.75 499.5 641.29 242.98 499.5 243.26 243 358.72 243.27 500.5m90.06-.18a166.67 166.67 0 1 1 167 166.34 166.65 166.65 0 0 1-167-166.34"/></svg></a>
          <a href="https://x.com/TCGplayer?lang=en" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16" height="20" width="20"><desc>Twitter X Streamline Icon: https://streamlinehq.com</desc><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/></svg></a>
        </div>
      </div>
      <nav class="footer-nav" aria-label="Marketplace">
        <h3>Marketplace</h3>
        <ul>
          <li><a href="/Html/stable/Browse.html">Browse All</a></li>
          <li><a href="/shop/new-arrivals.html">New Arrivals</a></li>
          <li><a href="/shop/price-guides.html">Price Guides</a></li>
          <li><a href="/company/authentication.html">Authentication</a></li>
        </ul>
      </nav>
      <nav class="footer-nav" aria-label="Company">
        <h3>Company</h3>
        <ul>
          <li><a href="/company/about-us.html">About Us</a></li>
          <li><a href="/company/terms-of-service.html">Terms of Service</a></li>
          <li><a href="/company/privacy-policy.html">Privacy Policy</a></li>
          <li><a href="/company/help-center.html">Help Center</a></li>
        </ul>
      </nav>
      <div class="footer-newsletter">
        <h3>Newsletter</h3>
        <p>Get market insights and rare listing alerts.</p>
        <form>
          <input type="email" placeholder="Email address" required aria-label="Email address">
          <button type="submit">Join</button>
        </form>
      </div>
      <div class="footer-legal">
        <p>© 2026 NotNexzu. All rights reserved</p>
        <p>© 2024 TCG Marketplace. All rights reserved.</p>
        <p>
          <a href="https://magic.wizards.com/en" target="_blank" rel="noopener noreferrer">Magic: The Gathering</a> and its respective properties are © <a href="http://company.wizards.com/" target="_blank" rel="noopener noreferrer">Wizards of the Coast</a>.
          <a href="http://www.yugioh-card.com/en/" target="_blank" rel="noopener noreferrer">Yu-Gi-Oh!</a> and its respective properties are © 2026 Studio Dice/SHUEISHA, TV TOKYO, KONAMI.
          <a href="https://en.cf-vanguard.com/" target="_blank" rel="noopener noreferrer">Cardfight!! Vanguard</a> and <a href="https://en.ws-tcg.com/" target="_blank" rel="noopener noreferrer">Weiß Schwarz</a> are © bushiroad All Rights Reserved.
          <a href="https://en.shadowverse-evolve.com/" target="_blank" rel="noopener noreferrer">Shadowverse: Evolve</a> is © Cygames, Inc.
          <a href="https://en.godzilla-cardgame.com/" target="_blank" rel="noopener noreferrer">Godzilla Card Game</a> is TM & © TOHO CO., LTD.
          <a href="https://en.hololive-official-cardgame.com/" target="_blank" rel="noopener noreferrer">hololive OFFICIAL CARD GAME</a> is © COVER.
          ©2026 <a href="https://www.pokemon.com/en/" target="_blank" rel="noopener noreferrer">Pokémon</a>. <a href="https://www.nintendo.com/" target="_blank" rel="noopener noreferrer">Nintendo</a> ©1995 - 2026 Nintendo/Creatures Inc./GAME FREAK Inc. TM, ®Nintendo.
          <a href="https://www.disney.com/" target="_blank" rel="noopener noreferrer">Disney</a> Lorcana and its respective properties are © <a href="https://www.disney.com/" target="_blank" rel="noopener noreferrer">Disney</a>.
          <a href="https://www.riotgames.com/" target="_blank" rel="noopener noreferrer">Riot Games</a> and its respective properties are © 2026 Riot Games, Inc. All Rights Reserved.
          <a href="https://riftbound.leagueoflegends.com/en-us/" target="_blank" rel="noopener noreferrer">RIFTBOUND: LEAGUE OF LEGENDS</a> manufactured by UVS Games under license from Riot Games. ™ & © 2026 Riot Games, Inc.
        </p>
        <p class="disclaimer">These Project files are for educational purposes only and all rights are reserved to respective marks.</p>
      </div>
    </div>
  </footer>
`;
    }
}

customElements.define("tcg-footer", TCGFooter);

/* <tcg-footer></tcg-footer>

    <script src="/src/JS/Principal-Funtions/principal-footer-inyector.js"></script>
*/
