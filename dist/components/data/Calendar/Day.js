"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _moment = _interopRequireDefault(require("moment"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  "calendar-h": "calendar-8b209562",
  "calendar-v": "calendar-751b1dae",
  "calendar-flex": "calendar-367d42ee",
  "month": "calendar-ee59e3b3",
  "month-name": "calendar-93f10578",
  "weekday": "calendar-f5acdc14",
  "day": "calendar-86d9731c",
  "hovered": "calendar-963c1819",
  "trailing": "calendar-e826a1c2",
  "ranged": "calendar-ed178044",
  "selected": "calendar-17e8b52c",
  "highlighted": "calendar-d46c8358",
  "outside": "calendar-f535281c",
  "empty": "calendar-5c235fc2",
  "disabled": "calendar-ffadb5e7",
  "interactive": "calendar-f4641b0f",
  "nav-holder": "calendar-21bfafcc",
  "flex": "calendar-5b9b206c",
  "vertical": "calendar-2eff76c5",
  "calendar-in-nav-v": "calendar-fbd0bf3b",
  "nav-h": "calendar-3683c14d",
  "nav-prev": "calendar-71e2b60f",
  "nav-next": "calendar-3c81bbdf",
  "nav-v": "calendar-6938f1a7",
  "placeHolderShimmer": "calendar-b86a33a5"
};

function Day(_ref) {
  var day = _ref.day,
      isOutside = _ref.isOutside,
      showOutsideDays = _ref.showOutsideDays,
      status = _ref.status,
      onSelect = _ref.onSelect,
      onHover = _ref.onHover,
      onBlur = _ref.onBlur;
  var date = day.format('D');
  var empty = isOutside && !showOutsideDays;

  if (empty) {
    return _react.default.createElement("div", {
      styleName: "day empty"
    }, date);
  }

  var disabled = status.has('disabled');
  var styleName = (0, _classnames.default)('day', {
    selected: status.has('isSelected'),
    hovered: !disabled && status.has('isHovered'),
    ranged: status.has('isInRange'),
    trailing: status.has('isTrailing'),
    highlighted: status.has('isHighlighted'),
    outside: isOutside,
    disabled: disabled
  });
  return _react.default.createElement("div", {
    styleName: styleName,
    onClick: function onClick() {
      return onSelect && onSelect(day, status);
    },
    onMouseEnter: function onMouseEnter() {
      return onHover && onHover(day, status);
    },
    onMouseLeave: function onMouseLeave() {
      return onBlur && onBlur(day, status);
    }
  }, date);
}

Day.propTypes = {
  day: _propTypes.default.instanceOf(_moment.default).isRequired,
  isOutside: _propTypes.default.bool,
  showOutsideDays: _propTypes.default.bool,
  status: _propTypes.default.instanceOf(Set),
  onSelect: _propTypes.default.func,
  onHover: _propTypes.default.func,
  onBlur: _propTypes.default.func
};
Day.defaultProps = {
  status: new Set(),
  isOutside: false,
  showOutsideDays: false,
  onSelect: null,
  onHover: null,
  onBlur: null
};

var _default = (0, _reactCssModules.default)(Day, styles, {
  allowMultiple: true
});

exports.default = _default;