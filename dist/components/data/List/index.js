"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.List = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _ListItem = _interopRequireDefault(require("../ListItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var styles = {
  "size-s": "list-19b6eec5",
  "size-m": "list-1ec3c5e5",
  "size-l": "list-f6a8291b",
  "with-description": "list-7775855f",
  "item": "list-5985ad7b"
};

var List = function List(_ref) {
  var size = _ref.size,
      items = _ref.items;
  return items.map(function (item, i) {
    return _react.default.createElement("div", {
      key: +i,
      styleName: (0, _classnames.default)('item', "size-".concat(size), {
        'with-description': item.description
      })
    }, _react.default.createElement(_ListItem.default, _extends({
      size: size
    }, item)));
  });
};

exports.List = List;
List.propTypes = {
  size: _propTypes.default.oneOf(['s', 'm', 'l']),
  items: _propTypes.default.arrayOf(_propTypes.default.shape({
    iconName: _propTypes.default.string,
    iconColor: _propTypes.default.string,
    title: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]).isRequired,
    description: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element])
  }))
};
List.defaultProps = {
  size: 's',
  items: []
};

var _default = (0, _reactCssModules.default)(List, styles, {
  allowMultiple: true
});

exports.default = _default;