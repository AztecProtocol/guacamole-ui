"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  size: _propTypes.default.oneOf(['xxs', 'xs', 's', 'm', 'l']),
  iconName: _propTypes.default.string,
  iconColor: _propTypes.default.string,
  iconRotate: _propTypes.default.oneOf([0, 90, 180, 270]),
  avatar: _propTypes.default.shape({
    src: _propTypes.default.string
  }),
  title: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]).isRequired,
  description: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element])
};
exports.default = _default;