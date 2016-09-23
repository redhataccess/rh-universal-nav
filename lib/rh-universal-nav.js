'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function () {
  var RhUniversalNav = function (_HTMLElement) {
    _inherits(RhUniversalNav, _HTMLElement);

    function RhUniversalNav() {
      _classCallCheck(this, RhUniversalNav);

      return _possibleConstructorReturn(this, (RhUniversalNav.__proto__ || Object.getPrototypeOf(RhUniversalNav)).apply(this, arguments));
    }

    _createClass(RhUniversalNav, [{
      key: 'createdCallback',
      value: function createdCallback() {
        var shadowRoot = this.createShadowRoot();
        shadowRoot.innerHTML = '\n        <content select="[rhwc-aux-nav]"></content>\n        <form class="rhwc-search">\n          <div data-name="web-icon-search" class="icons__item">\n            <i class="web-icon-search"></i> web-icon-search\n            <span class="icons__tag">tags:magnifying, glass, look</span>\n            <input type="text">\n            <button>Submit</button>\n          </div>\n        </form>\n        <content select="[rhwc-search-tray]"></content>\n        <div data-name="web-icon-user" class="icons__item">\n          <i class="web-icon-user"></i> web-icon-user\n          <span class="icons__tag">tags:social, user, profile, person</span>\n        </div>\n        <content select="[rhwc-login-tray]"></content>\n        <div data-name="web-icon-globe" class="icons__item">\n          <i class="web-icon-globe"></i> web-icon-globe\n          <span class="icons__tag">tags: world, language, country</span>\n        </div>\n        <content name="[rhwc-lang-tray]"></content>\n      ';

        this.addEventListener('submit', this.submitHandler);
      }
    }, {
      key: 'submitHandler',
      value: function submitHandler(evt) {
        evt.preventDefault();
        console.log('event', this.getAttribute('form-url'));
      }
    }]);

    return RhUniversalNav;
  }(HTMLElement);

  ;

  document.registerElement('rh-universal-nav', RhUniversalNav);
})();