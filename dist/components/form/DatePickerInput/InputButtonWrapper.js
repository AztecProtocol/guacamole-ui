"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  "wrapper": "datepicker-34f16093",
  "input-button": "datepicker-686f2b1c",
  "focused": "datepicker-b9a9f6f2",
  "editable": "datepicker-e3462b3e",
  "input-button-mask": "datepicker-c22391c4"
};

function InputButtonWrapper(_ref) {
  var _classnames;

  var className = _ref.className,
      children = _ref.children,
      showMenu = _ref.showMenu,
      mobileMode = _ref.mobileMode,
      editable = _ref.editable,
      onOpenMenu = _ref.onOpenMenu;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames2["default"])(className, styles['input-button'], (_classnames = {}, _defineProperty(_classnames, styles.focused, showMenu), _defineProperty(_classnames, styles.editable, editable), _classnames))
  }, children, mobileMode && /*#__PURE__*/_react["default"].createElement("div", {
    className: styles['input-button-mask'],
    role: "button",
    tabIndex: "0",
    "aria-label": "Open Date Picker",
    onKeyDown: onOpenMenu,
    onClick: function onClick(e) {
      var keyCode = e.keyCode;

      if ([13, 32, 40].indexOf(keyCode) >= 0) {
        e.preventDefault();
        onOpenMenu();
      }
    }
  }));
}

InputButtonWrapper.propTypes = {
  className: _propTypes["default"].string,
  children: _propTypes["default"].node.isRequired,
  showMenu: _propTypes["default"].bool.isRequired,
  mobileMode: _propTypes["default"].bool,
  editable: _propTypes["default"].bool,
  onOpenMenu: _propTypes["default"].func.isRequired
};
InputButtonWrapper.defaultProps = {
  className: '',
  mobileMode: false,
  editable: false
};
var _default = InputButtonWrapper;
exports["default"] = _default;