"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  "wrapper": "datepicker__wrapper___1Lbo1",
  "calendar-container": "datepicker__calendar-container___1HlJ0",
  "input-button": "datepicker__input-button___275s3",
  "focused": "datepicker__focused___3AS7z",
  "editable": "datepicker__editable___2U2Sz",
  "input-button-mask": "datepicker__input-button-mask___1P57l"
};

function InputButtonWrapper(_ref) {
  var className = _ref.className,
      children = _ref.children,
      showMenu = _ref.showMenu,
      mobileMode = _ref.mobileMode,
      editable = _ref.editable,
      onOpenMenu = _ref.onOpenMenu;
  return _react.default.createElement("div", {
    className: className,
    styleName: (0, _classnames.default)('input-button', {
      focused: showMenu,
      editable: editable
    })
  }, children, mobileMode && _react.default.createElement("div", {
    styleName: "input-button-mask",
    onClick: onOpenMenu
  }));
}

InputButtonWrapper.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.node.isRequired,
  showMenu: _propTypes.default.bool.isRequired,
  mobileMode: _propTypes.default.bool,
  editable: _propTypes.default.bool,
  onOpenMenu: _propTypes.default.func.isRequired
};
InputButtonWrapper.defaultProps = {
  className: '',
  mobileMode: false,
  editable: false
};

var _default = (0, _reactCssModules.default)(InputButtonWrapper, styles, {
  allowMultiple: true
});

exports.default = _default;