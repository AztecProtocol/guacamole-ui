"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _styleConstants = require("../../../config/styleConstants");

var _Icon = _interopRequireDefault(require("../../general/Icon"));

var _Image = _interopRequireDefault(require("../../general/Image"));

var _Text = _interopRequireDefault(require("../../general/Text"));

var _Clickable = _interopRequireDefault(require("../../utils/Clickable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

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
  "bg-transparent": "avatar-81b61199",
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
  "layer-1": "avatar-52daf1fc",
  "layer-2": "avatar-a138e872",
  "layer-3": "avatar-f24ac2fc",
  "shape-circular": "avatar-54692a0a",
  "shape-square": "avatar-3d03eb0e",
  "status-online": "avatar-3bc0182a",
  "status-offline": "avatar-bb3a126b",
  "placeHolderShimmer": "avatar-4ffd4be0"
};

var Avatar = /*#__PURE__*/function (_PureComponent) {
  _inherits(Avatar, _PureComponent);

  var _super = _createSuper(Avatar);

  function Avatar(props) {
    var _this;

    _classCallCheck(this, Avatar);

    _this = _super.call(this, props);

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
        return /*#__PURE__*/_react["default"].createElement(_Image["default"], {
          className: styles.img,
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
        return /*#__PURE__*/_react["default"].createElement(_Text["default"], {
          className: styles.img,
          text: alt,
          color: color
        });
      }

      return /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        className: styles.img,
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
          testId = _this$props2.testId,
          className = _this$props2.className,
          shape = _this$props2.shape,
          src = _this$props2.src,
          iconBackground = _this$props2.iconBackground,
          background = _this$props2.background,
          layer = _this$props2.layer,
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
      var TagName = onClick ? _Clickable["default"] : 'div';

      var tagProps = _defineProperty({}, onClick ? 'testId' : 'data-testid', testId);

      return /*#__PURE__*/_react["default"].createElement(TagName, _extends({}, tagProps, {
        className: (0, _classnames2["default"])(className, styles.avatar, styles["shape-".concat(shape)], styles["size-".concat(size)], (_classnames = {}, _defineProperty(_classnames, styles.inactive, inactive), _defineProperty(_classnames, styles["bg-".concat(backgroundColor)], backgroundColor), _defineProperty(_classnames, styles['bg-white'], backgroundColor === 'white' || !backgroundColor && isSrcAvailable && inactive), _defineProperty(_classnames, styles["layer-".concat(layer)], layer), _classnames)),
        onClick: onClick
      }), this.renderContent(), status && /*#__PURE__*/_react["default"].createElement("div", {
        className: styles["status-".concat(status)]
      }));
    }
  }]);

  return Avatar;
}(_react.PureComponent);

Avatar.propTypes = {
  testId: _propTypes["default"].string,
  className: _propTypes["default"].string,
  shape: _propTypes["default"].oneOf(['circular', 'square']),
  src: _propTypes["default"].string,
  alt: _propTypes["default"].string,
  iconName: _propTypes["default"].string,
  iconBackground: _propTypes["default"].oneOf([''].concat(_toConsumableArray(_styleConstants.backgroundNames))),
  color: _propTypes["default"].oneOf(_styleConstants.textColorNames),
  background: _propTypes["default"].oneOf([''].concat(_toConsumableArray(_styleConstants.backgroundNames))),
  layer: _propTypes["default"].oneOf(_styleConstants.shadowLayerKeys),
  size: _propTypes["default"].oneOf(_styleConstants.shapeSizeKeys),
  status: _propTypes["default"].oneOf(['', 'online', 'offline']),
  inactive: _propTypes["default"].bool,
  lazyLoad: _propTypes["default"].bool,
  onClick: _propTypes["default"].func
};
Avatar.defaultProps = {
  testId: undefined,
  className: '',
  shape: 'circular',
  src: '',
  alt: '',
  iconName: 'person',
  iconBackground: '',
  background: 'primary-lightest',
  color: 'primary-lighter',
  layer: 0,
  size: 's',
  status: '',
  inactive: false,
  lazyLoad: false,
  onClick: null
};
var _default = Avatar;
exports["default"] = _default;