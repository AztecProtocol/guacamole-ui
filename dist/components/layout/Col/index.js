"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Col = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _generateResponsiveStyleNames = _interopRequireDefault(require("../../../helpers/generateResponsiveStyleNames"));

var _generateResponsiveShape = _interopRequireDefault(require("../../../helpers/generateResponsiveShape"));

var _responsiveColumns = _interopRequireDefault(require("../../../shapes/responsiveColumns"));

var _responsiveTextAlign = _interopRequireDefault(require("../../../shapes/responsiveTextAlign"));

var _responsiveSizes = _interopRequireDefault(require("../../../shapes/responsiveSizes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  "bg-primary": "col__bg-primary___1TWTv",
  "bg-primary-light": "col__bg-primary-light___jMY6X",
  "bg-primary-lighter": "col__bg-primary-lighter___3Jtfk",
  "bg-primary-lightest": "col__bg-primary-lightest___GUPD9",
  "bg-black": "col__bg-black___g_8ZT",
  "bg-grey-darker": "col__bg-grey-darker___2LkNf",
  "bg-grey-dark": "col__bg-grey-dark___NIy6Z",
  "bg-grey": "col__bg-grey___3-yEb",
  "bg-grey-light": "col__bg-grey-light___3PDFv",
  "bg-grey-lighter": "col__bg-grey-lighter___2pc9f",
  "bg-grey-lightest": "col__bg-grey-lightest___36YbG",
  "bg-white": "col__bg-white___1vrbE",
  "bg-white-light": "col__bg-white-light___1swjB",
  "bg-white-lighter": "col__bg-white-lighter___2sZfY",
  "bg-white-lightest": "col__bg-white-lightest___3wH-l",
  "bg-secondary": "col__bg-secondary___TClu7",
  "bg-secondary-light": "col__bg-secondary-light___3eyyl",
  "bg-secondary-lighter": "col__bg-secondary-lighter___2TYQg",
  "bg-secondary-lightest": "col__bg-secondary-lightest___2C5QE",
  "bg-red": "col__bg-red___1a3c_",
  "bg-green": "col__bg-green___1BBpE",
  "bg-blue": "col__bg-blue___2ipWH",
  "bg-yellow": "col__bg-yellow___3fX0A",
  "col-m-auto": "col__col-m-auto___2CJTE",
  "col-m-0": "col__col-m-0___2boja",
  "shift-m-0": "col__shift-m-0___2p-cD",
  "col-m-1": "col__col-m-1___Xq5Kx",
  "shift-m-1": "col__shift-m-1___2xmSp",
  "col-m-2": "col__col-m-2___1hc2S",
  "shift-m-2": "col__shift-m-2___2hNDi",
  "col-m-3": "col__col-m-3___1evf8",
  "shift-m-3": "col__shift-m-3___-DK7M",
  "col-m-4": "col__col-m-4___2Bq2I",
  "shift-m-4": "col__shift-m-4___ul9Bm",
  "col-m-5": "col__col-m-5___1q6AP",
  "shift-m-5": "col__shift-m-5____Bx5c",
  "col-m-6": "col__col-m-6___3hiEr",
  "shift-m-6": "col__shift-m-6___qTqBo",
  "col-m-7": "col__col-m-7___1VGXD",
  "shift-m-7": "col__shift-m-7___38SNS",
  "col-m-8": "col__col-m-8___263KP",
  "shift-m-8": "col__shift-m-8___21cl-",
  "col-m-9": "col__col-m-9___FJuBH",
  "shift-m-9": "col__shift-m-9___5ORjm",
  "col-m-10": "col__col-m-10___gC7v_",
  "shift-m-10": "col__shift-m-10___NXmrk",
  "col-m-11": "col__col-m-11___1pmBW",
  "shift-m-11": "col__shift-m-11___111zr",
  "col-m-12": "col__col-m-12___dj3NG",
  "shift-m-12": "col__shift-m-12___3R6XQ",
  "margin-m-xxs": "col__margin-m-xxs___26cuK",
  "margin-m-xs": "col__margin-m-xs___6bbz7",
  "margin-m-s": "col__margin-m-s___1n8XC",
  "margin-m-m": "col__margin-m-m___N2evO",
  "margin-m-l": "col__margin-m-l___1mFqO",
  "margin-m-xl": "col__margin-m-xl___29S33",
  "margin-m-xxl": "col__margin-m-xxl___2Lk8L",
  "margin-m-none": "col__margin-m-none___13su2",
  "align-m-left": "col__align-m-left___1zKfH",
  "align-m-center": "col__align-m-center___9qm-n",
  "align-m-right": "col__align-m-right___LutOm",
  "col-s-auto": "col__col-s-auto___3USJT",
  "col-s-0": "col__col-s-0___20qUO",
  "shift-s-0": "col__shift-s-0___1kPWx",
  "col-s-1": "col__col-s-1___1cC0n",
  "shift-s-1": "col__shift-s-1___3p8Et",
  "col-s-2": "col__col-s-2___5t26m",
  "shift-s-2": "col__shift-s-2___CA93g",
  "col-s-3": "col__col-s-3___roKKL",
  "shift-s-3": "col__shift-s-3___28aSz",
  "col-s-4": "col__col-s-4___1cH6G",
  "shift-s-4": "col__shift-s-4___2pvMO",
  "col-s-5": "col__col-s-5___1GbIC",
  "shift-s-5": "col__shift-s-5___24KSH",
  "col-s-6": "col__col-s-6___3-n-k",
  "shift-s-6": "col__shift-s-6___3YMko",
  "col-s-7": "col__col-s-7___11kDb",
  "shift-s-7": "col__shift-s-7___1zpsD",
  "col-s-8": "col__col-s-8___1lKp8",
  "shift-s-8": "col__shift-s-8___1sCHc",
  "col-s-9": "col__col-s-9___362Aa",
  "shift-s-9": "col__shift-s-9___38G8U",
  "col-s-10": "col__col-s-10___YWyzB",
  "shift-s-10": "col__shift-s-10___20yuU",
  "col-s-11": "col__col-s-11___KkGTk",
  "shift-s-11": "col__shift-s-11___OOSOg",
  "col-s-12": "col__col-s-12___1xAUi",
  "shift-s-12": "col__shift-s-12___vuiI7",
  "margin-s-xxs": "col__margin-s-xxs___ISNdX",
  "margin-s-xs": "col__margin-s-xs___2BTss",
  "margin-s-s": "col__margin-s-s___2WMVe",
  "margin-s-m": "col__margin-s-m___2-ytL",
  "margin-s-l": "col__margin-s-l___zJi6X",
  "margin-s-xl": "col__margin-s-xl___2Mfi0",
  "margin-s-xxl": "col__margin-s-xxl___hjKb5",
  "margin-s-none": "col__margin-s-none___3mY0n",
  "align-s-left": "col__align-s-left___3zXwr",
  "align-s-center": "col__align-s-center___2Ymu3",
  "align-s-right": "col__align-s-right___VfGTw",
  "col-xs-auto": "col__col-xs-auto___2fF_U",
  "col-xs-0": "col__col-xs-0___7jico",
  "shift-xs-0": "col__shift-xs-0___3ZoBD",
  "col-xs-1": "col__col-xs-1___1uWp3",
  "shift-xs-1": "col__shift-xs-1___2MlTj",
  "col-xs-2": "col__col-xs-2___4AXkA",
  "shift-xs-2": "col__shift-xs-2___2gewc",
  "col-xs-3": "col__col-xs-3___145LI",
  "shift-xs-3": "col__shift-xs-3___5vNJZ",
  "col-xs-4": "col__col-xs-4___2x4fK",
  "shift-xs-4": "col__shift-xs-4___10Q3A",
  "col-xs-5": "col__col-xs-5___1_45F",
  "shift-xs-5": "col__shift-xs-5___2oHst",
  "col-xs-6": "col__col-xs-6___2Xn3J",
  "shift-xs-6": "col__shift-xs-6___1DWyT",
  "col-xs-7": "col__col-xs-7___3ucAn",
  "shift-xs-7": "col__shift-xs-7___7c0W0",
  "col-xs-8": "col__col-xs-8___3BuAB",
  "shift-xs-8": "col__shift-xs-8___kL6X-",
  "col-xs-9": "col__col-xs-9___3xaoT",
  "shift-xs-9": "col__shift-xs-9___1LQ6U",
  "col-xs-10": "col__col-xs-10___2RPgg",
  "shift-xs-10": "col__shift-xs-10___2M7Wh",
  "col-xs-11": "col__col-xs-11___1a8Ld",
  "shift-xs-11": "col__shift-xs-11___ChGpq",
  "col-xs-12": "col__col-xs-12___3_NG6",
  "shift-xs-12": "col__shift-xs-12___2YZKS",
  "margin-xs-xxs": "col__margin-xs-xxs___1UfHw",
  "margin-xs-xs": "col__margin-xs-xs___2mG1P",
  "margin-xs-s": "col__margin-xs-s___12NC3",
  "margin-xs-m": "col__margin-xs-m___3Lzrb",
  "margin-xs-l": "col__margin-xs-l___3xaj0",
  "margin-xs-xl": "col__margin-xs-xl___3uzEE",
  "margin-xs-xxl": "col__margin-xs-xxl___3OIpD",
  "margin-xs-none": "col__margin-xs-none___1QhZ-",
  "align-xs-left": "col__align-xs-left___25qYr",
  "align-xs-center": "col__align-xs-center___LK_9c",
  "align-xs-right": "col__align-xs-right___8Xlx9"
};

var Col = function Col(_ref) {
  var className = _ref.className,
      column = _ref.column,
      shift = _ref.shift,
      margin = _ref.margin,
      background = _ref.background,
      align = _ref.align,
      style = _ref.style,
      children = _ref.children;
  return _react.default.createElement("div", {
    className: className,
    styleName: (0, _classnames2.default)(column && (0, _generateResponsiveStyleNames.default)('col', column), shift && shift !== 0 ? (0, _generateResponsiveStyleNames.default)('shift', shift) : '', margin && margin !== 'none' ? (0, _generateResponsiveStyleNames.default)('margin', margin) : '', align && (0, _generateResponsiveStyleNames.default)('align', align) || '', _defineProperty({}, "bg-".concat(background), background)),
    style: style
  }, children);
};

exports.Col = Col;
Col.propTypes = {
  className: _propTypes.default.string,
  column: _responsiveColumns.default,
  shift: (0, _generateResponsiveShape.default)([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  margin: _responsiveSizes.default,
  background: _propTypes.default.string,
  align: _responsiveTextAlign.default,
  style: _propTypes.default.objectOf(_propTypes.default.string),
  children: _propTypes.default.node
};
Col.defaultProps = {
  className: '',
  column: 'auto',
  shift: 0,
  margin: 'm',
  background: '',
  align: '',
  style: null,
  children: null
};

var _default = (0, _reactCssModules.default)(Col, styles, {
  allowMultiple: true
});

exports.default = _default;