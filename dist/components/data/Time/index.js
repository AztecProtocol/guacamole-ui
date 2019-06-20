"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Time = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _Block = _interopRequireDefault(require("../../layout/Block"));

var _FlexBox = _interopRequireDefault(require("../../layout/FlexBox"));

var _Text = _interopRequireDefault(require("../../general/Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styles = {
  "box": "time-380484c5",
  "size-m": "time-2e171f78",
  "size-s": "time-0a832e06",
  "smallText": "time-2424babb"
};

var Time =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Time, _React$Component);

  function Time(props) {
    var _this;

    _classCallCheck(this, Time);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Time).call(this, props));
    _this.state = {
      days: '-',
      hours: '-',
      minutes: '-'
    };
    return _this;
  }

  _createClass(Time, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.interval = setInterval(function () {
        _this2.updateInterval();
      }, 60000);
      this.updateInterval();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: "updateInterval",
    value: function updateInterval() {
      var time = this.props.time;
      var now = new _moment.default();
      var end = new _moment.default(time);

      var timeAsDuration = _moment.default.duration(end.diff(now));

      var days = Math.floor(timeAsDuration.as('days'));

      if (days < 10) {
        days = "0".concat(days < 0 ? 0 : days);
      }

      var hours = Math.floor(timeAsDuration.hours());

      if (hours < 10) {
        hours = "0".concat(hours < 0 ? 0 : hours);
      }

      var minutes = Math.floor(timeAsDuration.minutes());

      if (minutes < 10) {
        minutes = "0".concat(minutes < 0 ? 0 : minutes);
      }

      this.setState({
        days: days,
        hours: hours,
        minutes: minutes
      });
    }
  }, {
    key: "render",
    value: function render() {
      var size = this.props.size;
      var _this$state = this.state,
          days = _this$state.days,
          hours = _this$state.hours,
          minutes = _this$state.minutes;
      var textSizeMap = {
        s: 'm',
        m: 'l',
        l: 'xl'
      };
      return _react.default.createElement(_Block.default, {
        styleName: (0, _classnames.default)("size-".concat(size))
      }, _react.default.createElement(_FlexBox.default, null, _react.default.createElement("div", {
        styleName: "box"
      }, _react.default.createElement(_Text.default, {
        weight: "semibold",
        size: textSizeMap[size],
        text: days
      }), _react.default.createElement(_Text.default, {
        className: styles.smallText,
        text: "days",
        size: "xxs"
      })), _react.default.createElement("div", {
        styleName: "box"
      }, _react.default.createElement(_Text.default, {
        weight: "semibold",
        size: textSizeMap[size],
        text: hours
      }), _react.default.createElement(_Text.default, {
        className: styles.smallText,
        text: "hours",
        size: "xxs"
      })), _react.default.createElement("div", {
        styleName: "box"
      }, _react.default.createElement(_Text.default, {
        weight: "semibold",
        size: textSizeMap[size],
        text: minutes
      }), _react.default.createElement(_Text.default, {
        className: styles.smallText,
        text: "minutes",
        size: "xxs"
      }))));
    }
  }]);

  return Time;
}(_react.default.Component);

exports.Time = Time;
Time.propTypes = {
  time: _propTypes.default.string.isRequired,
  size: _propTypes.default.string
};
Time.defaultProps = {
  size: 'm'
};

var _default = (0, _reactCssModules.default)(Time, styles, {
  allowMultiple: true
});

exports.default = _default;