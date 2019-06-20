"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _ClickOutsideHandler = _interopRequireDefault(require("../../utils/ClickOutsideHandler"));

var _FlexPopupMenu = _interopRequireDefault(require("./FlexPopupMenu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  "popup-menu": "popup-4c089e3b",
  "tether": "popup-023cba98",
  "hide": "popup-b4c8fb11",
  "tether-content": "popup-97cebb8b",
  "placeHolderShimmer": "popup-ea7f262e"
};

var PopupMenu = function PopupMenu(_ref) {
  var className = _ref.className,
      children = _ref.children,
      hide = _ref.hide,
      onClickOutside = _ref.onClickOutside,
      disabledClickOutside = _ref.disabledClickOutside,
      stopPropagation = _ref.stopPropagation,
      flexWidth = _ref.flexWidth;
  return _react.default.createElement(_ClickOutsideHandler.default, {
    className: className,
    onClickOutside: onClickOutside,
    disabled: hide || disabledClickOutside,
    stopPropagation: stopPropagation
  }, flexWidth && _react.default.createElement(_FlexPopupMenu.default, {
    hide: hide
  }, children), !flexWidth && _react.default.createElement("div", {
    styleName: (0, _classnames.default)('popup-menu', {
      hide: hide
    })
  }, children));
};

PopupMenu.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.node.isRequired,
  onClickOutside: _propTypes.default.func,
  hide: _propTypes.default.bool,
  disabledClickOutside: _propTypes.default.bool,
  stopPropagation: _propTypes.default.bool,
  flexWidth: _propTypes.default.bool
};
PopupMenu.defaultProps = {
  className: '',
  onClickOutside: function onClickOutside() {},
  hide: false,
  disabledClickOutside: false,
  stopPropagation: false,
  flexWidth: false
};

var _default = (0, _reactCssModules.default)(PopupMenu, styles, {
  allowMultiple: true
});

exports.default = _default;