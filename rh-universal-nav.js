class RhUniversalNav extends HTMLElement {
  createdCallback() {
    console.log('working');
  }
};

document.registerElement('rh-universal-nav', RhUniversalNav);
