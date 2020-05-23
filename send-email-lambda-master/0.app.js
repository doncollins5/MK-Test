webpackJsonp([0],{

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(243);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(242);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _defineProperty2 = __webpack_require__(557);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = __webpack_require__(4);

var _extends4 = _interopRequireDefault(_extends3);

var _getPrototypeOf = __webpack_require__(69);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(70);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

__webpack_require__(568);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(239);

var _sendEmail2 = __webpack_require__(570);

var _sendEmail3 = _interopRequireDefault(_sendEmail2);

var _loader = __webpack_require__(556);

var _loader2 = _interopRequireDefault(_loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContactPage = function (_Component) {
  (0, _inherits3.default)(ContactPage, _Component);

  function ContactPage(props) {
    (0, _classCallCheck3.default)(this, ContactPage);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ContactPage.__proto__ || (0, _getPrototypeOf2.default)(ContactPage)).call(this, props));

    _this.state = {
      loading: false,
      emailSent: false,
      error: null,
      data: {
        email: '',
        name: '',
        company: '',
        url: '',
        subject: '',
        body: ''
      }
    };
    return _this;
  }

  (0, _createClass3.default)(ContactPage, [{
    key: 'renderLoader',
    value: function renderLoader() {
      if (this.state.loading) {
        return _react2.default.createElement(
          'div',
          { className: 'overlay' },
          _react2.default.createElement(_loader2.default, null)
        );
      }
    }
  }, {
    key: 'renderForm',
    value: function renderForm() {
      return _react2.default.createElement(
        'form',
        { onSubmit: this.handleSubmit.bind(this) },
        this.renderError(),
        _react2.default.createElement(
          _reactBootstrap.FormGroup,
          null,
          _react2.default.createElement(
            _reactBootstrap.ControlLabel,
            null,
            'Your E-mail Address *'
          ),
          _react2.default.createElement(_reactBootstrap.FormControl, {
            type: 'email',
            name: 'email',
            maxLength: 100,
            onChange: this.handleChange.bind(this),
            value: this.state.data.email,
            required: true
          })
        ),
        _react2.default.createElement(
          _reactBootstrap.FormGroup,
          null,
          _react2.default.createElement(
            _reactBootstrap.ControlLabel,
            null,
            'Your full name *'
          ),
          _react2.default.createElement(_reactBootstrap.FormControl, {
            type: 'text',
            name: 'name',
            maxLength: 100,
            onChange: this.handleChange.bind(this),
            value: this.state.data.name,
            required: true
          })
        ),
        _react2.default.createElement(
          _reactBootstrap.FormGroup,
          null,
          _react2.default.createElement(
            _reactBootstrap.ControlLabel,
            null,
            'Your company name'
          ),
          _react2.default.createElement(_reactBootstrap.FormControl, {
            type: 'text',
            name: 'company',
            maxLength: 100,
            onChange: this.handleChange.bind(this),
            value: this.state.data.company
          })
        ),
        _react2.default.createElement(
          _reactBootstrap.FormGroup,
          null,
          _react2.default.createElement(
            _reactBootstrap.ControlLabel,
            null,
            'URL (ex. homepage)'
          ),
          _react2.default.createElement(_reactBootstrap.FormControl, {
            type: 'text',
            name: 'url',
            maxLength: 100,
            placeholder: 'https://',
            onChange: this.handleChange.bind(this),
            value: this.state.data.url
          })
        ),
        _react2.default.createElement(
          _reactBootstrap.FormGroup,
          null,
          _react2.default.createElement(
            _reactBootstrap.ControlLabel,
            null,
            'Subject *'
          ),
          _react2.default.createElement(_reactBootstrap.FormControl, {
            type: 'text',
            name: 'subject',
            maxLength: 100,
            required: true,
            onChange: this.handleChange.bind(this),
            value: this.state.data.subject
          })
        ),
        _react2.default.createElement(
          _reactBootstrap.FormGroup,
          null,
          _react2.default.createElement(
            _reactBootstrap.ControlLabel,
            null,
            'Message *'
          ),
          _react2.default.createElement(_reactBootstrap.FormControl, {
            componentClass: 'textarea',
            rows: 8,
            maxLength: 800,
            name: 'body',
            placeholder: 'Hello Takuya..',
            required: true,
            onChange: this.handleChange.bind(this),
            value: this.state.data.body
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'right aligned' },
          _react2.default.createElement(
            _reactBootstrap.Button,
            { type: 'submit', bsStyle: 'primary' },
            'Submit'
          )
        ),
        this.renderLoader()
      );
    }
  }, {
    key: 'renderEmailSent',
    value: function renderEmailSent() {
      return _react2.default.createElement(
        'div',
        { className: 'email-sent-section' },
        _react2.default.createElement(
          _reactBootstrap.Alert,
          { bsStyle: 'info' },
          _react2.default.createElement(
            'strong',
            null,
            'Your message has been sent!'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Thank you for your contact. I will respond to your email as soon as possible.'
          )
        )
      );
    }
  }, {
    key: 'renderError',
    value: function renderError() {
      var e = this.state.error;

      if (e) {
        return _react2.default.createElement(
          _reactBootstrap.Alert,
          { bsStyle: 'danger' },
          _react2.default.createElement(
            'strong',
            null,
            'Sorry, failed to send an email'
          ),
          _react2.default.createElement(
            'p',
            null,
            e.message
          )
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'contact-page' },
        _react2.default.createElement(
          'div',
          { className: 'content-container' },
          _react2.default.createElement(
            'h2',
            null,
            'Contact me'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Hi! That\'s great you are trying to reach out to me. I\'m available for freelance work, I want to hear about your projects. Please fill below forms and submit.'
          ),
          this.state.emailSent ? this.renderEmailSent() : this.renderForm()
        )
      );
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      var data = this.state.data;

      this.setState({
        data: (0, _extends4.default)({}, data, (0, _defineProperty3.default)({}, e.target.name, e.target.value))
      });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      this.sendEmail();
    }
  }, {
    key: 'sendEmail',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var data, subject, body;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.setState({ loading: true });
                _context.prev = 1;
                data = this.state.data;
                subject = '[Craftzdog Contact Form] ' + data.subject;
                body = '\nName: ' + data.name + '\nFrom: ' + data.email + '\nCompany: ' + data.company + '\nURL: ' + data.url + '\n\n' + data.body + '\n      ';
                _context.next = 7;
                return (0, _sendEmail3.default)(subject, body);

              case 7:
                this.setState({ loading: false, emailSent: true });
                _context.next = 14;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context['catch'](1);

                console.error('Failed to send email:', _context.t0);
                this.setState({ loading: false, emailSent: false, error: _context.t0 });

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 10]]);
      }));

      function sendEmail() {
        return _ref.apply(this, arguments);
      }

      return sendEmail;
    }()
  }]);
  return ContactPage;
}(_react.Component); /**
                      * React Static Boilerplate
                      * https://github.com/koistya/react-static-boilerplate
                      * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
                      */

ContactPage.title = 'Contact to Takuya';
ContactPage.image = '/me.jpg';
ContactPage.description = 'Contact form';
exports.default = ContactPage;
module.exports = exports['default'];

/***/ }),

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(69);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(70);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(564);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

var Loader = function (_Component) {
  (0, _inherits3.default)(Loader, _Component);

  function Loader() {
    (0, _classCallCheck3.default)(this, Loader);
    return (0, _possibleConstructorReturn3.default)(this, (Loader.__proto__ || (0, _getPrototypeOf2.default)(Loader)).apply(this, arguments));
  }

  (0, _createClass3.default)(Loader, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'loader' });
    }
  }]);
  return Loader;
}(_react.Component);

exports.default = Loader;
module.exports = exports['default'];

/***/ }),

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(241);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(41)(false);
// imports


// module
exports.push([module.i, ".loader {\n    border: 8px solid #f3f3f3; /* Light grey */\n    border-top: 8px solid #3498db; /* Blue */\n    border-radius: 50%;\n    width: 48px;\n    height: 48px;\n    -webkit-animation: spin 1s linear infinite;\n         -o-animation: spin 1s linear infinite;\n            animation: spin 1s linear infinite;\n}\n\n@-webkit-keyframes spin {\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}\n\n@-o-keyframes spin {\n    0% { -o-transform: rotate(0deg); transform: rotate(0deg); }\n    100% { -o-transform: rotate(360deg); transform: rotate(360deg); }\n}\n\n@keyframes spin {\n    0% { -webkit-transform: rotate(0deg); -o-transform: rotate(0deg); transform: rotate(0deg); }\n    100% { -webkit-transform: rotate(360deg); -o-transform: rotate(360deg); transform: rotate(360deg); }\n}\n", ""]);

// exports


/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(41)(false);
// imports


// module
exports.push([module.i, ".contact-page .content-container {\n    background: white;\n    -webkit-box-shadow: 0 1px 2px 0 rgba(34,36,38,.15);\n            box-shadow: 0 1px 2px 0 rgba(34,36,38,.15);\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    border-radius: 4px;\n    padding: 1em;\n    margin: 1em 0;\n}\n.contact-page form {\n    position: relative;\n}\n.contact-page .overlay {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    background-color: rgba(255, 255, 255, 0.6);\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.contact-page .email-sent-section {\n    margin-top: 1rem;\n}\n", ""]);

// exports


/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(558);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(42)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js??ref--7-2!./loader.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js??ref--7-2!./loader.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(562);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(42)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js??ref--7-2!./contact.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js??ref--7-2!./contact.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = sendEmail;
function sendEmail(subject, body) {
  return fetch(
    'https://qen9yylar9.execute-api.us-west-1.amazonaws.com/production/submit',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ subject, body })
    }
  )
}


/***/ })

});