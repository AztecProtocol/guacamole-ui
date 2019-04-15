"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _ImageWrapper = _interopRequireDefault(require("./ImageWrapper"));

var _ImagePlaceholder = _interopRequireDefault(require("./ImagePlaceholder"));

var _isFlexibleImage = _interopRequireDefault(require("./utils/isFlexibleImage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styles = {
  "ratio-square": "image__ratio-square___dGY9i",
  "ratio-classic": "image__ratio-classic___3Jmh1",
  "ratio-golden": "image__ratio-golden___2H6WH",
  "ratio-landscape": "image__ratio-landscape___1ZJT-",
  "ratio-ultra": "image__ratio-ultra___2Xu2p",
  "wrapper": "image__wrapper___3MkBG",
  "mocked-holder": "image__mocked-holder___1kbJa",
  "preload-img": "image__preload-img___G_4Wv",
  "img": "image__img___35Ain",
  "free": "image__free___3y_Wy",
  "bg": "image__bg___3xOJd",
  "placeholder": "image__placeholder___2fLoV",
  "isLoading": "image__isLoading___C2u3b",
  "placeHolderShimmer": "image__placeHolderShimmer___BGwuJ",
  "placeholder-icon": "image__placeholder-icon___3joxc"
};

var RealImage =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(RealImage, _PureComponent);

  _createClass(RealImage, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var src = nextProps.src,
          backgroundUrl = nextProps.backgroundUrl;
      var _prevState$prevProps = prevState.prevProps,
          prevSrc = _prevState$prevProps.src,
          prevBackgroundUrl = _prevState$prevProps.backgroundUrl;

      if (src === prevSrc && backgroundUrl === prevBackgroundUrl) {
        return null;
      }

      var isEmptyImage = !src && !backgroundUrl;
      return {
        loaded: isEmptyImage,
        error: false,
        prevProps: {
          src: src,
          backgroundUrl: backgroundUrl
        }
      };
    }
  }]);

  function RealImage(props) {
    var _this;

    _classCallCheck(this, RealImage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RealImage).call(this, props));
    var src = props.src,
        backgroundUrl = props.backgroundUrl;
    var isEmptyImage = !src && !backgroundUrl;
    _this.state = {
      loaded: isEmptyImage,
      error: false,
      prevProps: {
        // eslint-disable-line react/no-unused-state
        src: src,
        backgroundUrl: backgroundUrl
      }
    };
    _this.handleImageLoaded = _this.handleImageLoaded.bind(_assertThisInitialized(_this));
    _this.handleImageError = _this.handleImageError.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(RealImage, [{
    key: "handleImageLoaded",
    value: function handleImageLoaded() {
      var onLoad = this.props.onLoad;
      this.setState({
        loaded: true
      });
      onLoad();
    }
  }, {
    key: "handleImageError",
    value: function handleImageError() {
      var onError = this.props.onError;
      this.setState({
        loaded: true,
        error: true
      });
      onError();
    }
  }, {
    key: "renderImage",
    value: function renderImage() {
      var _this$props = this.props,
          src = _this$props.src,
          backgroundUrl = _this$props.backgroundUrl,
          alt = _this$props.alt,
          showPlaceholder = _this$props.showPlaceholder;
      var _this$state = this.state,
          loaded = _this$state.loaded,
          error = _this$state.error;

      if (!src && !backgroundUrl || error) {
        return null;
      }

      if (!loaded && showPlaceholder) {
        return _react.default.createElement("img", {
          styleName: "preload-img",
          src: src || backgroundUrl,
          alt: "",
          onLoad: this.handleImageLoaded,
          onError: this.handleImageError
        });
      }

      if (src) {
        var _this$props2 = this.props,
            ratio = _this$props2.ratio,
            width = _this$props2.width,
            height = _this$props2.height;
        var styleName = (0, _classnames.default)('img', {
          free: !ratio && width === 'auto'
        });
        var isPercentage = !!width && width.match(/.+%$/);
        return _react.default.createElement("img", {
          styleName: styleName,
          src: src,
          alt: alt,
          onLoad: this.handleImageLoaded,
          width: isPercentage ? '100%' : width,
          height: height
        });
      }

      if (backgroundUrl) {
        var _this$props3 = this.props,
            backgroundPosition = _this$props3.backgroundPosition,
            backgroundSize = _this$props3.backgroundSize;
        var imageStyle = {
          backgroundImage: "url(".concat(backgroundUrl, ")")
        };

        if (backgroundPosition) {
          imageStyle.backgroundPosition = backgroundPosition;
        }

        if (backgroundSize) {
          imageStyle.backgroundSize = backgroundSize;
        }

        return _react.default.createElement("div", {
          styleName: "bg",
          style: imageStyle
        }, !showPlaceholder && !loaded && !error && _react.default.createElement("img", {
          styleName: "preload-img",
          src: src || backgroundUrl,
          alt: "",
          onLoad: this.handleImageLoaded,
          onError: this.handleImageError
        }));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          className = _this$props4.className,
          ratio = _this$props4.ratio,
          width = _this$props4.width,
          height = _this$props4.height,
          src = _this$props4.src,
          backgroundUrl = _this$props4.backgroundUrl,
          borderRadius = _this$props4.borderRadius,
          children = _this$props4.children,
          showPlaceholder = _this$props4.showPlaceholder;
      var _this$state2 = this.state,
          loaded = _this$state2.loaded,
          error = _this$state2.error;
      var wrapperRatio = (0, _isFlexibleImage.default)({
        ratio: ratio,
        width: width,
        height: height
      }) && (!loaded || error) ? 'golden' : ratio;
      var isEmptyImage = !src && !backgroundUrl;
      var hasPlaceholder = showPlaceholder && (!loaded || isEmptyImage || error);
      return _react.default.createElement(_ImageWrapper.default, {
        className: className,
        ratio: wrapperRatio,
        width: width,
        height: height,
        borderRadius: borderRadius
      }, this.renderImage(), hasPlaceholder && _react.default.createElement(_ImagePlaceholder.default, {
        styleName: "mocked-holder",
        isLoading: !loaded,
        noWrapper: true
      }), children);
    }
  }]);

  return RealImage;
}(_react.PureComponent);

RealImage.propTypes = {
  className: _propTypes.default.string.isRequired,
  ratio: _propTypes.default.string.isRequired,
  width: _propTypes.default.string.isRequired,
  height: _propTypes.default.string.isRequired,
  src: _propTypes.default.string.isRequired,
  backgroundUrl: _propTypes.default.string.isRequired,
  backgroundPosition: _propTypes.default.string.isRequired,
  backgroundSize: _propTypes.default.string.isRequired,
  borderRadius: _propTypes.default.string.isRequired,
  alt: _propTypes.default.string.isRequired,
  children: _propTypes.default.node,
  showPlaceholder: _propTypes.default.bool.isRequired,
  onLoad: _propTypes.default.func.isRequired,
  onError: _propTypes.default.func.isRequired
};
RealImage.defaultProps = {
  children: null
};

var _default = (0, _reactCssModules.default)(RealImage, styles, {
  allowMultiple: true
});

exports.default = _default;