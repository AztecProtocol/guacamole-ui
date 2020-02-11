"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _styleConstants = require("../../../config/styleConstants");

var _iconShape = _interopRequireDefault(require("../../../shapes/iconShape"));

var _Overlay = _interopRequireDefault(require("../../layout/Overlay"));

var _PageContentWrapper = _interopRequireDefault(require("../../layout/PageContentWrapper"));

var _FlexBox = _interopRequireDefault(require("../../layout/FlexBox"));

var _Block = _interopRequireDefault(require("../../layout/Block"));

var _ModalHeader = _interopRequireDefault(require("./ModalHeader"));

var _ModalFooter = _interopRequireDefault(require("./ModalFooter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styles = {
  "modal": "modal-b9d0f0e0",
  "hide": "modal-69b09d41",
  "wrapper": "modal-dc213bbe",
  "container": "modal-2637ce0b",
  "auto-width": "modal-adaf9598",
  "header": "modal-3a60906c",
  "content": "modal-974e1036",
  "close-button": "modal-6847e7a9",
  "placeHolderShimmer": "modal-89d80b5e"
};
var valignMap = {
  top: 'flex-start',
  center: 'center',
  bottom: 'flex-end'
};

var Modal =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Modal, _PureComponent);

  function Modal(props) {
    var _this;

    _classCallCheck(this, Modal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Modal).call(this, props));
    _this.handleClickOverlay = _this.handleClickOverlay.bind(_assertThisInitialized(_this));
    _this.handleKeypress = _this.handleKeypress.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          pressEscToClose = _this$props.pressEscToClose,
          hide = _this$props.hide;

      if (pressEscToClose && !hide) {
        this.bindKeypressEvent();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props2 = this.props,
          pressEscToClose = _this$props2.pressEscToClose,
          hide = _this$props2.hide;
      var prevPressEscToClose = prevProps.pressEscToClose,
          prevHide = prevProps.hide;

      if (!pressEscToClose) {
        if (prevPressEscToClose) {
          this.unbindKeypressEvent();
        }

        return;
      }

      if (hide !== prevHide || !prevPressEscToClose) {
        if (hide) {
          this.unbindKeypressEvent();
        } else {
          this.bindKeypressEvent();
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unbindKeypressEvent();
    }
  }, {
    key: "handleClickOverlay",
    value: function handleClickOverlay() {
      var _this$props3 = this.props,
          clickOverlayToClose = _this$props3.clickOverlayToClose,
          onClose = _this$props3.onClose;

      if (clickOverlayToClose) {
        onClose();
      }
    }
  }, {
    key: "handleKeypress",
    value: function handleKeypress(e) {
      var keyCode = e.keyCode;
      if (keyCode !== 27) return;
      var onClose = this.props.onClose;
      onClose();
    }
  }, {
    key: "bindKeypressEvent",
    value: function bindKeypressEvent() {
      window.addEventListener('keydown', this.handleKeypress, false);
    }
  }, {
    key: "unbindKeypressEvent",
    value: function unbindKeypressEvent() {
      window.removeEventListener('keydown', this.handleKeypress, false);
    }
  }, {
    key: "renderHeader",
    value: function renderHeader() {
      var _this$props4 = this.props,
          headerIcon = _this$props4.headerIcon,
          header = _this$props4.header,
          hasCloseIcon = _this$props4.hasCloseIcon,
          onClose = _this$props4.onClose;
      var hasHeader = !!(headerIcon || header || hasCloseIcon);

      if (!hasHeader) {
        return null;
      }

      return _react["default"].createElement(_ModalHeader["default"], {
        className: styles.header,
        icon: headerIcon,
        hasCloseIcon: hasCloseIcon,
        onClose: onClose
      }, header);
    }
  }, {
    key: "renderFooter",
    value: function renderFooter() {
      var footer = this.props.footer;

      if (!footer) {
        return null;
      }

      return _react["default"].createElement(_ModalFooter["default"], null, footer);
    }
  }, {
    key: "render",
    value: function render() {
      var _classnames;

      var _this$props5 = this.props,
          testId = _this$props5.testId,
          className = _this$props5.className,
          theme = _this$props5.theme,
          children = _this$props5.children,
          valign = _this$props5.valign,
          hide = _this$props5.hide,
          hasBackground = _this$props5.hasBackground,
          autoWidth = _this$props5.autoWidth,
          stretch = _this$props5.stretch;
      return _react["default"].createElement(_Overlay["default"], {
        testId: testId,
        className: className,
        theme: hasBackground ? theme : '',
        hide: hide,
        onClick: this.handleClickOverlay
      }, _react["default"].createElement(_PageContentWrapper["default"], {
        className: (0, _classnames2["default"])(styles.modal, (_classnames = {}, _defineProperty(_classnames, styles.hide, hide), _defineProperty(_classnames, styles['auto-width'], autoWidth), _classnames)),
        alignCenter: true,
        stretch: true
      }, _react["default"].createElement(_FlexBox["default"], {
        className: styles.wrapper,
        align: "center",
        valign: valignMap[valign]
      }, _react["default"].createElement(_Block["default"], {
        className: styles.container,
        background: "white",
        layer: 2,
        borderRadius: "default",
        onClick: function onClick(e) {
          return e.stopPropagation();
        },
        stretch: stretch
      }, this.renderHeader(), _react["default"].createElement("div", {
        className: styles.content
      }, !hide && children), this.renderFooter()))));
    }
  }]);

  return Modal;
}(_react.PureComponent);

Modal.propTypes = {
  testId: _propTypes["default"].string,
  className: _propTypes["default"].string,
  theme: _propTypes["default"].oneOf(_styleConstants.overlayThemeNames),
  headerIcon: _iconShape["default"],
  header: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  children: _propTypes["default"].node,
  footer: _propTypes["default"].node,
  hide: _propTypes["default"].bool,
  valign: _propTypes["default"].oneOf(['top', 'center', 'bottom']),
  autoWidth: _propTypes["default"].bool,
  stretch: _propTypes["default"].bool,
  hasCloseIcon: _propTypes["default"].bool,
  hasBackground: _propTypes["default"].bool,
  clickOverlayToClose: _propTypes["default"].bool,
  pressEscToClose: _propTypes["default"].bool,
  onClose: _propTypes["default"].func
};
Modal.defaultProps = {
  testId: undefined,
  className: '',
  theme: 'primary',
  headerIcon: null,
  header: '',
  children: null,
  footer: null,
  hide: false,
  valign: 'top',
  autoWidth: false,
  stretch: false,
  hasCloseIcon: true,
  hasBackground: true,
  clickOverlayToClose: true,
  pressEscToClose: false,
  onClose: function onClose() {}
};
var _default = Modal;
exports["default"] = _default;