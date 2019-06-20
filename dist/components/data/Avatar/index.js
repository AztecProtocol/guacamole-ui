"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Avatar = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _styleConstants = require("../../../config/styleConstants");

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
  "avatar": "avatar-2d8f1f4e",
  "img": "avatar-6106b61a",
  "inactive": "avatar-f3acb719",
  "size-xxs": "avatar-a05208b4",
  "size-xs": "avatar-367f3bc9",
  "size-s": "avatar-9e161bb3",
  "size-m": "avatar-22236eb9",
  "size-l": "avatar-4ad20d38",
  "size-xl": "avatar-908932f4",
  "size-xxl": "avatar-bad879b2",
  "bg-primary": "avatar-c4dba2d3",
  "bg-primary-light": "avatar-324b1956",
  "bg-primary-lighter": "avatar-1646ae22",
  "bg-primary-lightest": "avatar-ffd88e85",
  "bg-black": "avatar-b9c2222e",
  "bg-grey-darker": "avatar-9545b4ba",
  "bg-grey-dark": "avatar-caaad073",
  "bg-grey": "avatar-ef250452",
  "bg-grey-light": "avatar-2edd096c",
  "bg-grey-lighter": "avatar-4c4513f1",
  "bg-grey-lightest": "avatar-8abe501c",
  "bg-white": "avatar-ae5c2bdb",
  "bg-white-light": "avatar-0d322e22",
  "bg-white-lighter": "avatar-d9138498",
  "bg-white-lightest": "avatar-b48d63d7",
  "bg-secondary": "avatar-c519beec",
  "bg-secondary-light": "avatar-b0486a32",
  "bg-secondary-lighter": "avatar-30578aa3",
  "bg-secondary-lightest": "avatar-1fd4efc4",
  "bg-pink": "avatar-e937e8d0",
  "bg-red": "avatar-d794853c",
  "bg-purple": "avatar-a7d7f11c",
  "bg-blue": "avatar-e430836d",
  "bg-green": "avatar-1a8251a0",
  "bg-yellow": "avatar-660c14e1",
  "bg-orange": "avatar-3a8bad4e",
  "bg-brown": "avatar-fdfc0538",
  "shape-circular": "avatar-54692a0a",
  "shape-square": "avatar-3d03eb0e",
  "status-online": "avatar-3bc0182a",
  "status-offline": "avatar-bb3a126b",
  "placeHolderShimmer": "avatar-4ffd4be0"
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
  iconBackground: _propTypes.default.oneOf([''].concat(_toConsumableArray(_styleConstants.backgroundNames))),
  color: _propTypes.default.oneOf(_styleConstants.colorNames),
  background: _propTypes.default.oneOf([''].concat(_toConsumableArray(_styleConstants.backgroundNames))),
  size: _propTypes.default.oneOf(_styleConstants.shapeSizeKeys),
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