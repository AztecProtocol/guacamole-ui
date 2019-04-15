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
  "calendar-h": "calendar__calendar-h___W1HVN",
  "calendar-v": "calendar__calendar-v___37Zx0",
  "calendar-flex": "calendar__calendar-flex___3srVO",
  "month": "calendar__month___3ycBs",
  "month-name": "calendar__month-name___3PZSg",
  "weekday": "calendar__weekday___37pZ0",
  "day": "calendar__day___1EFYX",
  "hovered": "calendar__hovered___1l5z1",
  "trailing": "calendar__trailing___1qiY5",
  "ranged": "calendar__ranged___1Gviq",
  "selected": "calendar__selected___3rPoY",
  "highlighted": "calendar__highlighted___29vEY",
  "outside": "calendar__outside___tkWaf",
  "empty": "calendar__empty___1kQrr",
  "disabled": "calendar__disabled___I69qr",
  "interactive": "calendar__interactive___l4-F0",
  "nav-holder": "calendar__nav-holder___2Rskp",
  "flex": "calendar__flex___1e_An",
  "vertical": "calendar__vertical___15iM6",
  "calendar-in-nav-v": "calendar__calendar-in-nav-v___2Rdp6",
  "nav-h": "calendar__nav-h___oR7dt",
  "nav-prev": "calendar__nav-prev___1NV6k",
  "nav-next": "calendar__nav-next___2w74e",
  "nav-v": "calendar__nav-v___vTdfQ",
  "placeHolderShimmer": "calendar__placeHolderShimmer___1IurA"
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