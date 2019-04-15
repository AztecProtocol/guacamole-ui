"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Avatar = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _shapes = require("../../../config/shapes");

var _colors = require("../../../config/colors");

var _Icon = _interopRequireDefault(require("../../general/Icon"));

var _Image = _interopRequireDefault(require("../../general/Image"));

var _Text = _interopRequireDefault(require("../../general/Text"));

var _Clickable = _interopRequireDefault(require("../../utils/Clickable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  "avatar": "avatar__avatar___3P2jk",
  "img": "avatar__img___155mG",
  "inactive": "avatar__inactive___34_QW",
  "size-xxs": "avatar__size-xxs___2IoJi",
  "size-xs": "avatar__size-xs___1nfie",
  "size-s": "avatar__size-s___1v3Tu",
  "size-m": "avatar__size-m___1Z7jD",
  "size-l": "avatar__size-l___1veLd",
  "size-xl": "avatar__size-xl___3b4AH",
  "size-xxl": "avatar__size-xxl___1hbae",
  "bg-primary": "avatar__bg-primary___3XFtm",
  "bg-primary-light": "avatar__bg-primary-light___3JkGJ",
  "bg-primary-lighter": "avatar__bg-primary-lighter___mx7SH",
  "bg-primary-lightest": "avatar__bg-primary-lightest___177Lb",
  "bg-black": "avatar__bg-black___2upcy",
  "bg-grey-darker": "avatar__bg-grey-darker___K6EqI",
  "bg-grey-dark": "avatar__bg-grey-dark___24g8G",
  "bg-grey": "avatar__bg-grey___1h59R",
  "bg-grey-light": "avatar__bg-grey-light___2_PQP",
  "bg-grey-lighter": "avatar__bg-grey-lighter___2HYw5",
  "bg-grey-lightest": "avatar__bg-grey-lightest___2MaK8",
  "bg-white": "avatar__bg-white___MuOwd",
  "bg-white-light": "avatar__bg-white-light___ClvXW",
  "bg-white-lighter": "avatar__bg-white-lighter___1KaJh",
  "bg-white-lightest": "avatar__bg-white-lightest___3D6N2",
  "bg-secondary": "avatar__bg-secondary___1qJmL",
  "bg-secondary-light": "avatar__bg-secondary-light___3FyJW",
  "bg-secondary-lighter": "avatar__bg-secondary-lighter___8OLh9",
  "bg-secondary-lightest": "avatar__bg-secondary-lightest___3gykZ",
  "bg-red": "avatar__bg-red___32TEr",
  "bg-green": "avatar__bg-green___3AxMK",
  "bg-blue": "avatar__bg-blue___3BvtD",
  "bg-yellow": "avatar__bg-yellow___1EZI7",
  "shape-circular": "avatar__shape-circular___2RH4o",
  "shape-square": "avatar__shape-square___1jm5z",
  "status-online": "avatar__status-online___1ICyF",
  "status-offline": "avatar__status-offline___1NTPM",
  "placeHolderShimmer": "avatar__placeHolderShimmer___xNVIW"
};

var Avatar =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Avatar, _PureComponent);

  function Avatar(props) {
    var _this;

    _classCallCheck(this, Avatar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Avatar).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleImageLoaded", function () {
      _this.setState({
        isSrcLoaded: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleImageError", function () {
      _this.setState({
        isSrcBroken: true
      });
    });

    _this.state = {
      isSrcLoaded: false,
      isSrcBroken: false
    };
    _this.handleImageLoaded = _this.handleImageLoaded.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Avatar, [{
    key: "renderContent",
    value: function renderContent() {
      var _this$props = this.props,
          shape = _this$props.shape,
          src = _this$props.src,
          alt = _this$props.alt,
          iconName = _this$props.iconName,
          color = _this$props.color,
          size = _this$props.size,
          lazyLoad = _this$props.lazyLoad;
      var isSrcBroken = this.state.isSrcBroken;

      if (src && !isSrcBroken) {
        return _react.default.createElement(_Image.default, {
          styleName: "img",
          backgroundUrl: src,
          width: "100%",
          height: "100%",
          borderRadius: shape === 'circular' ? 'circular' : 'default',
          showPlaceholder: false,
          lazyLoad: lazyLoad,
          onLoad: this.handleImageLoaded,
          onError: this.handleImageError
        });
      }

      if (alt) {
        return _react.default.createElement(_Text.default, {
          styleName: "img",
          text: alt,
          color: color
        });
      }

      return _react.default.createElement(_Icon.default, {
        styleName: "img",
        name: iconName,
        size: size,
        color: color
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _classnames;

      var _this$props2 = this.props,
          className = _this$props2.className,
          shape = _this$props2.shape,
          src = _this$props2.src,
          iconBackground = _this$props2.iconBackground,
          background = _this$props2.background,
          size = _this$props2.size,
          status = _this$props2.status,
          inactive = _this$props2.inactive,
          onClick = _this$props2.onClick;
      var _this$state = this.state,
          isSrcLoaded = _this$state.isSrcLoaded,
          isSrcBroken = _this$state.isSrcBroken;
      var isSrcAvailable = !!src && isSrcLoaded && !isSrcBroken;
      var useIconBackground = !!iconBackground && (!isSrcAvailable || !background);
      var backgroundColor = useIconBackground ? iconBackground : background;
      var TagName = onClick ? _Clickable.default : 'div';
      return _react.default.createElement(TagName, {
        className: className,
        styleName: (0, _classnames2.default)('avatar', "shape-".concat(shape), "size-".concat(size), (_classnames = {
          inactive: inactive
        }, _defineProperty(_classnames, "bg-".concat(backgroundColor), backgroundColor), _defineProperty(_classnames, 'bg-white', backgroundColor === 'white' || !backgroundColor && isSrcAvailable && inactive), _classnames)),
        onClick: onClick
      }, this.renderContent(), status && _react.default.createElement("div", {
        styleName: "status-".concat(status)
      }));
    }
  }]);

  return Avatar;
}(_react.PureComponent);

exports.Avatar = Avatar;
Avatar.propTypes = {
  className: _propTypes.default.string,
  shape: _propTypes.default.oneOf(['circular', 'square']),
  src: _propTypes.default.string,
  alt: _propTypes.default.string,
  iconName: _propTypes.default.string,
  iconBackground: _propTypes.default.oneOf([''].concat(_toConsumableArray(_colors.backgroundNames))),
  color: _propTypes.default.oneOf(_colors.colorNames),
  background: _propTypes.default.oneOf([''].concat(_toConsumableArray(_colors.backgroundNames))),
  size: _propTypes.default.oneOf(_shapes.shapeSizeKeys),
  status: _propTypes.default.oneOf(['', 'online', 'offline']),
  inactive: _propTypes.default.bool,
  lazyLoad: _propTypes.default.bool,
  onClick: _propTypes.default.func
};
Avatar.defaultProps = {
  className: '',
  shape: 'circular',
  src: '',
  alt: '',
  iconName: 'person',
  iconBackground: '',
  background: 'primary-lightest',
  color: 'primary-lighter',
  size: 's',
  status: '',
  inactive: false,
  lazyLoad: false,
  onClick: null
};

var _default = (0, _reactCssModules.default)(Avatar, styles, {
  allowMultiple: true
});

exports.default = _default;