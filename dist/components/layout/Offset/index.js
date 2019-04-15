"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Offset = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _generateResponsiveStyleNames = _interopRequireWildcard(require("../../../helpers/generateResponsiveStyleNames"));

var _parseCssSizeValues = _interopRequireDefault(require("../../../helpers/parseCssSizeValues"));

var _responsiveCssSizes = _interopRequireDefault(require("../../../shapes/responsiveCssSizes"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  "all-xl-xxs": "offset__all-xl-xxs___2JVk7",
  "top-xl-xxs": "offset__top-xl-xxs___KtC22",
  "right-xl-xxs": "offset__right-xl-xxs___nxnam",
  "bottom-xl-xxs": "offset__bottom-xl-xxs___2_iG_",
  "left-xl-xxs": "offset__left-xl-xxs___2_dHV",
  "all-xl-xs": "offset__all-xl-xs___2227E",
  "top-xl-xs": "offset__top-xl-xs___2x_kb",
  "right-xl-xs": "offset__right-xl-xs___3FNEJ",
  "bottom-xl-xs": "offset__bottom-xl-xs___2BhSD",
  "left-xl-xs": "offset__left-xl-xs___OzmLQ",
  "all-xl-s": "offset__all-xl-s___3rDeW",
  "top-xl-s": "offset__top-xl-s___zoMeA",
  "right-xl-s": "offset__right-xl-s___1hrfu",
  "bottom-xl-s": "offset__bottom-xl-s___1drxp",
  "left-xl-s": "offset__left-xl-s___1d7zV",
  "all-xl-m": "offset__all-xl-m___1dZu9",
  "top-xl-m": "offset__top-xl-m___JBA-4",
  "right-xl-m": "offset__right-xl-m___2e4uU",
  "bottom-xl-m": "offset__bottom-xl-m___8pEZ7",
  "left-xl-m": "offset__left-xl-m___2AVQe",
  "all-xl-l": "offset__all-xl-l___2R94N",
  "top-xl-l": "offset__top-xl-l___3FkOn",
  "right-xl-l": "offset__right-xl-l___LOEj3",
  "bottom-xl-l": "offset__bottom-xl-l___jyauv",
  "left-xl-l": "offset__left-xl-l___18iNG",
  "all-xl-xl": "offset__all-xl-xl___vRMdR",
  "top-xl-xl": "offset__top-xl-xl___3WNJc",
  "right-xl-xl": "offset__right-xl-xl___3xAVy",
  "bottom-xl-xl": "offset__bottom-xl-xl___3bD-y",
  "left-xl-xl": "offset__left-xl-xl___EBR2-",
  "all-xl-xxl": "offset__all-xl-xxl___3QYk_",
  "top-xl-xxl": "offset__top-xl-xxl___2sgVw",
  "right-xl-xxl": "offset__right-xl-xxl___vG76u",
  "bottom-xl-xxl": "offset__bottom-xl-xxl___n56oI",
  "left-xl-xxl": "offset__left-xl-xxl___8xy4C",
  "all-xl-0": "offset__all-xl-0___33utT",
  "top-xl-0": "offset__top-xl-0___2EGqg",
  "right-xl-0": "offset__right-xl-0___35Fjl",
  "bottom-xl-0": "offset__bottom-xl-0___3p4oO",
  "left-xl-0": "offset__left-xl-0___9BU3P",
  "all-l-xxs": "offset__all-l-xxs___3bU2n",
  "top-l-xxs": "offset__top-l-xxs___3yeVL",
  "right-l-xxs": "offset__right-l-xxs___pGJff",
  "bottom-l-xxs": "offset__bottom-l-xxs___3vgsd",
  "left-l-xxs": "offset__left-l-xxs___2pFOO",
  "all-l-xs": "offset__all-l-xs___3PLMe",
  "top-l-xs": "offset__top-l-xs___3siTB",
  "right-l-xs": "offset__right-l-xs___23M7z",
  "bottom-l-xs": "offset__bottom-l-xs___1Dbod",
  "left-l-xs": "offset__left-l-xs___1xUII",
  "all-l-s": "offset__all-l-s___3b6S2",
  "top-l-s": "offset__top-l-s___fi7ns",
  "right-l-s": "offset__right-l-s___3I0rH",
  "bottom-l-s": "offset__bottom-l-s___3d8J3",
  "left-l-s": "offset__left-l-s___1J8vB",
  "all-l-m": "offset__all-l-m___6_Nes",
  "top-l-m": "offset__top-l-m___1edpj",
  "right-l-m": "offset__right-l-m___3yslZ",
  "bottom-l-m": "offset__bottom-l-m___1g_Zc",
  "left-l-m": "offset__left-l-m___2ei7U",
  "all-l-l": "offset__all-l-l___4MejR",
  "top-l-l": "offset__top-l-l___3Llr0",
  "right-l-l": "offset__right-l-l___wDSL3",
  "bottom-l-l": "offset__bottom-l-l___2cleb",
  "left-l-l": "offset__left-l-l___hYcIN",
  "all-l-xl": "offset__all-l-xl___jx3vO",
  "top-l-xl": "offset__top-l-xl___2LkmT",
  "right-l-xl": "offset__right-l-xl___Dr6nE",
  "bottom-l-xl": "offset__bottom-l-xl___2vw-0",
  "left-l-xl": "offset__left-l-xl___2KKMa",
  "all-l-xxl": "offset__all-l-xxl___Z_RJV",
  "top-l-xxl": "offset__top-l-xxl___u5Xuc",
  "right-l-xxl": "offset__right-l-xxl___2MK72",
  "bottom-l-xxl": "offset__bottom-l-xxl___1ABzy",
  "left-l-xxl": "offset__left-l-xxl___YfmYD",
  "all-l-0": "offset__all-l-0___HCxjZ",
  "top-l-0": "offset__top-l-0___1Jtmj",
  "right-l-0": "offset__right-l-0___2mByb",
  "bottom-l-0": "offset__bottom-l-0___1IU_Z",
  "left-l-0": "offset__left-l-0___TM-vc",
  "all-m-xxs": "offset__all-m-xxs___33EAO",
  "top-m-xxs": "offset__top-m-xxs___HFOY3",
  "right-m-xxs": "offset__right-m-xxs___1P-Qb",
  "bottom-m-xxs": "offset__bottom-m-xxs___2rzCp",
  "left-m-xxs": "offset__left-m-xxs___3N0jM",
  "all-m-xs": "offset__all-m-xs___2nNK9",
  "top-m-xs": "offset__top-m-xs___298Z6",
  "right-m-xs": "offset__right-m-xs___2P5Hm",
  "bottom-m-xs": "offset__bottom-m-xs___3dgjl",
  "left-m-xs": "offset__left-m-xs___FOK-m",
  "all-m-s": "offset__all-m-s___36JDc",
  "top-m-s": "offset__top-m-s___ikcvL",
  "right-m-s": "offset__right-m-s___3raU-",
  "bottom-m-s": "offset__bottom-m-s___2wrud",
  "left-m-s": "offset__left-m-s___24Viw",
  "all-m-m": "offset__all-m-m___1kno2",
  "top-m-m": "offset__top-m-m___12oUy",
  "right-m-m": "offset__right-m-m___xpj15",
  "bottom-m-m": "offset__bottom-m-m____IJ6w",
  "left-m-m": "offset__left-m-m___1cD1m",
  "all-m-l": "offset__all-m-l___2MxPX",
  "top-m-l": "offset__top-m-l___3v92q",
  "right-m-l": "offset__right-m-l___iBv08",
  "bottom-m-l": "offset__bottom-m-l___3PyNZ",
  "left-m-l": "offset__left-m-l___2F-VH",
  "all-m-xl": "offset__all-m-xl___3HgaI",
  "top-m-xl": "offset__top-m-xl___2whk0",
  "right-m-xl": "offset__right-m-xl___3MnsP",
  "bottom-m-xl": "offset__bottom-m-xl___13F1e",
  "left-m-xl": "offset__left-m-xl___2YGRK",
  "all-m-xxl": "offset__all-m-xxl___CuEfb",
  "top-m-xxl": "offset__top-m-xxl___1eMTU",
  "right-m-xxl": "offset__right-m-xxl___18tt-",
  "bottom-m-xxl": "offset__bottom-m-xxl___22aig",
  "left-m-xxl": "offset__left-m-xxl___2uamJ",
  "all-m-0": "offset__all-m-0___2ojQx",
  "top-m-0": "offset__top-m-0___3xIg2",
  "right-m-0": "offset__right-m-0___3yxz3",
  "bottom-m-0": "offset__bottom-m-0___Djjyq",
  "left-m-0": "offset__left-m-0___cSYOX",
  "all-s-xxs": "offset__all-s-xxs___19cQA",
  "top-s-xxs": "offset__top-s-xxs___rTEMX",
  "right-s-xxs": "offset__right-s-xxs___h1o3p",
  "bottom-s-xxs": "offset__bottom-s-xxs___3NZ8R",
  "left-s-xxs": "offset__left-s-xxs___ksC1e",
  "all-s-xs": "offset__all-s-xs___91AVn",
  "top-s-xs": "offset__top-s-xs___3YG4g",
  "right-s-xs": "offset__right-s-xs___2Rdo2",
  "bottom-s-xs": "offset__bottom-s-xs___3-Srs",
  "left-s-xs": "offset__left-s-xs___1UD15",
  "all-s-s": "offset__all-s-s___uGBVF",
  "top-s-s": "offset__top-s-s___10RVd",
  "right-s-s": "offset__right-s-s___2X4NZ",
  "bottom-s-s": "offset__bottom-s-s___7OmmN",
  "left-s-s": "offset__left-s-s___3u5FN",
  "all-s-m": "offset__all-s-m___qcHB2",
  "top-s-m": "offset__top-s-m___20aRx",
  "right-s-m": "offset__right-s-m___2ZhO2",
  "bottom-s-m": "offset__bottom-s-m___sfpeU",
  "left-s-m": "offset__left-s-m___3RSM8",
  "all-s-l": "offset__all-s-l___Cez8q",
  "top-s-l": "offset__top-s-l___1uMQW",
  "right-s-l": "offset__right-s-l___16vTw",
  "bottom-s-l": "offset__bottom-s-l___xMvqk",
  "left-s-l": "offset__left-s-l___381th",
  "all-s-xl": "offset__all-s-xl___1svhA",
  "top-s-xl": "offset__top-s-xl___2P-f5",
  "right-s-xl": "offset__right-s-xl___3o7Pu",
  "bottom-s-xl": "offset__bottom-s-xl___3JOAz",
  "left-s-xl": "offset__left-s-xl___1i7zL",
  "all-s-xxl": "offset__all-s-xxl___eBefL",
  "top-s-xxl": "offset__top-s-xxl___32RRi",
  "right-s-xxl": "offset__right-s-xxl___3Mvsi",
  "bottom-s-xxl": "offset__bottom-s-xxl___lFBab",
  "left-s-xxl": "offset__left-s-xxl___1HF9K",
  "all-s-0": "offset__all-s-0___1m9zg",
  "top-s-0": "offset__top-s-0___HBSqO",
  "right-s-0": "offset__right-s-0___3hcwV",
  "bottom-s-0": "offset__bottom-s-0___13qfe",
  "left-s-0": "offset__left-s-0___3sSHS",
  "all-xs-xxs": "offset__all-xs-xxs___34i1R",
  "top-xs-xxs": "offset__top-xs-xxs___r-5NL",
  "right-xs-xxs": "offset__right-xs-xxs___vJuaq",
  "bottom-xs-xxs": "offset__bottom-xs-xxs___QHDlu",
  "left-xs-xxs": "offset__left-xs-xxs___3aHMH",
  "all-xs-xs": "offset__all-xs-xs___9iwkq",
  "top-xs-xs": "offset__top-xs-xs___3yinz",
  "right-xs-xs": "offset__right-xs-xs___cxzKH",
  "bottom-xs-xs": "offset__bottom-xs-xs___CBUku",
  "left-xs-xs": "offset__left-xs-xs___1cbbG",
  "all-xs-s": "offset__all-xs-s___2qeR3",
  "top-xs-s": "offset__top-xs-s___3Ie9H",
  "right-xs-s": "offset__right-xs-s___2HbMD",
  "bottom-xs-s": "offset__bottom-xs-s___3cscd",
  "left-xs-s": "offset__left-xs-s___ficRQ",
  "all-xs-m": "offset__all-xs-m___2-K1y",
  "top-xs-m": "offset__top-xs-m___3d6kd",
  "right-xs-m": "offset__right-xs-m___12XWq",
  "bottom-xs-m": "offset__bottom-xs-m___mVzPg",
  "left-xs-m": "offset__left-xs-m___YjB-N",
  "all-xs-l": "offset__all-xs-l___3E0nd",
  "top-xs-l": "offset__top-xs-l___1S2gX",
  "right-xs-l": "offset__right-xs-l___Vb1t_",
  "bottom-xs-l": "offset__bottom-xs-l___1K_ZN",
  "left-xs-l": "offset__left-xs-l___2zyQ0",
  "all-xs-xl": "offset__all-xs-xl___2ufcR",
  "top-xs-xl": "offset__top-xs-xl___12u5-",
  "right-xs-xl": "offset__right-xs-xl___mesA-",
  "bottom-xs-xl": "offset__bottom-xs-xl___2AzoL",
  "left-xs-xl": "offset__left-xs-xl___2eFHW",
  "all-xs-xxl": "offset__all-xs-xxl___y2OgV",
  "top-xs-xxl": "offset__top-xs-xxl___yAudc",
  "right-xs-xxl": "offset__right-xs-xxl___2OmAE",
  "bottom-xs-xxl": "offset__bottom-xs-xxl___3LcdS",
  "left-xs-xxl": "offset__left-xs-xxl___3ooJE",
  "all-xs-0": "offset__all-xs-0___20xRd",
  "top-xs-0": "offset__top-xs-0___1R6kV",
  "right-xs-0": "offset__right-xs-0___3hcgZ",
  "bottom-xs-0": "offset__bottom-xs-0___3abq1",
  "left-xs-0": "offset__left-xs-0___y63AC"
};

var Offset = function Offset(_ref) {
  var className = _ref.className,
      margin = _ref.margin,
      top = _ref.top,
      right = _ref.right,
      bottom = _ref.bottom,
      left = _ref.left,
      children = _ref.children;

  var sizeMap = _objectSpread({
    top: top,
    right: right,
    bottom: bottom,
    left: left
  }, (0, _parseCssSizeValues.default)(margin));

  var sizeStyleNames = ['all', 'top', 'right', 'bottom', 'left'].filter(function (size) {
    return sizeMap[size];
  }).map(function (size) {
    return (0, _generateResponsiveStyleNames.default)(size, (0, _generateResponsiveStyleNames.responsiveStyleConfigAdaptor)(sizeMap[size]));
  });
  return _react.default.createElement("div", {
    className: className,
    styleName: sizeStyleNames.join(' ')
  }, children);
};

exports.Offset = Offset;
Offset.propTypes = {
  className: _propTypes.default.string,
  margin: _responsiveCssSizes.default,
  top: _responsiveCssSizes.default,
  right: _responsiveCssSizes.default,
  bottom: _responsiveCssSizes.default,
  left: _responsiveCssSizes.default,
  children: _propTypes.default.node
};
Offset.defaultProps = {
  className: '',
  margin: '',
  top: '',
  right: '',
  bottom: '',
  left: '',
  children: null
};

var _default = (0, _reactCssModules.default)(Offset, styles, {
  allowMultiple: true
});

exports.default = _default;