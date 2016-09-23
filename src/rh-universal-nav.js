(function () {
  class RhUniversalNav extends HTMLElement {

    createdCallback() {
      const shadowRoot = this.createShadowRoot();
      shadowRoot.innerHTML = `
        <content select="[rhwc-aux-nav]"></content>
        <form class="rhwc-search">
          <div data-name="web-icon-search" class="icons__item">
            <i class="web-icon-search"></i> web-icon-search
            <span class="icons__tag">tags:magnifying, glass, look</span>
            <input type="text">
            <button>Submit</button>
          </div>
        </form>
        <content select="[rhwc-search-tray]"></content>
        <div data-name="web-icon-user" class="icons__item">
          <i class="web-icon-user"></i> web-icon-user
          <span class="icons__tag">tags:social, user, profile, person</span>
        </div>
        <content select="[rhwc-login-tray]"></content>
        <div data-name="web-icon-globe" class="icons__item">
          <i class="web-icon-globe"></i> web-icon-globe
          <span class="icons__tag">tags: world, language, country</span>
        </div>
        <content name="[rhwc-lang-tray]"></content>
      `;

      this.addEventListener('submit', this.submitHandler);
    }

    submitHandler(evt) {
      evt.preventDefault();
      console.log('event', this.getAttribute('form-url'));
    }
  };

  document.registerElement('rh-universal-nav', RhUniversalNav);
}());
