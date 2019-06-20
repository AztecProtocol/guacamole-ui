"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FlexBox = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _generateResponsiveStyleNames = _interopRequireWildcard(require("../../../utils/generateResponsiveStyleNames"));

var _generateResponsiveShape = _interopRequireDefault(require("../../../utils/generateResponsiveShape"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  "flex-box": "flex-a66edbb4",
  "direction--row": "flex-5902ec7a",
  "direction--row-reverse": "flex-d1c43ec1",
  "direction--column": "flex-bc6be2f6",
  "direction--column-reverse": "flex-89c0f3c7",
  "align--flex-start": "flex-fcc98118",
  "align--flex-end": "flex-22838c72",
  "align--center": "flex-eb24cb03",
  "align--space-between": "flex-e8c2828e",
  "align--space-around": "flex-3bc83235",
  "align--space-evenly": "flex-8b6df1cd",
  "valign--flex-start": "flex-67308833",
  "valign--flex-end": "flex-0aea0851",
  "valign--center": "flex-8d78cee4",
  "valign--stretch": "flex-13fe6822",
  "valign--baseline": "flex-287d56b1",
  "nowrap--true": "flex-d0a435f6",
  "nowrap--false": "flex-b0058ff6",
  "direction-xs-row": "flex-031b05af",
  "direction-xs-row-reverse": "flex-5d13b78f",
  "direction-xs-column": "flex-49e9c86b",
  "direction-xs-column-reverse": "flex-89cc0a35",
  "align-xs-flex-start": "flex-d5acbe8c",
  "align-xs-flex-end": "flex-9696f89f",
  "align-xs-center": "flex-410cce2e",
  "align-xs-space-between": "flex-96fbe46d",
  "align-xs-space-around": "flex-ad5c79b2",
  "align-xs-space-evenly": "flex-6313a9e8",
  "valign-xs-flex-start": "flex-71e63beb",
  "valign-xs-flex-end": "flex-d1968d62",
  "valign-xs-center": "flex-e0daf076",
  "valign-xs-stretch": "flex-6d327f27",
  "valign-xs-baseline": "flex-df118173",
  "nowrap-xs-true": "flex-b1e09233",
  "nowrap-xs-false": "flex-f0c3aad1",
  "direction-s-row": "flex-bdaece17",
  "direction-s-row-reverse": "flex-0a6f3f23",
  "direction-s-column": "flex-ee5b6b47",
  "direction-s-column-reverse": "flex-302c4258",
  "align-s-flex-start": "flex-94a078bc",
  "align-s-flex-end": "flex-dc56f3c2",
  "align-s-center": "flex-c26378a3",
  "align-s-space-between": "flex-edcd8cdb",
  "align-s-space-around": "flex-4ef17002",
  "align-s-space-evenly": "flex-127c7101",
  "valign-s-flex-start": "flex-274af882",
  "valign-s-flex-end": "flex-b8f935ee",
  "valign-s-center": "flex-ddf92d6c",
  "valign-s-stretch": "flex-914243a0",
  "valign-s-baseline": "flex-aefe61d9",
  "nowrap-s-true": "flex-56b33ce7",
  "nowrap-s-false": "flex-5923b72d",
  "direction-m-row": "flex-50c58375",
  "direction-m-row-reverse": "flex-b8f46387",
  "direction-m-column": "flex-28f4aa56",
  "direction-m-column-reverse": "flex-ab84d0eb",
  "align-m-flex-start": "flex-5cfb20b4",
  "align-m-flex-end": "flex-f6181002",
  "align-m-center": "flex-24eee451",
  "align-m-space-between": "flex-c7906afd",
  "align-m-space-around": "flex-ed40f41b",
  "align-m-space-evenly": "flex-80ea2d96",
  "valign-m-flex-start": "flex-420747fe",
  "valign-m-flex-end": "flex-139b1d68",
  "valign-m-center": "flex-90981ce5",
  "valign-m-stretch": "flex-db82c70f",
  "valign-m-baseline": "flex-59bb2af1",
  "nowrap-m-true": "flex-e1478d68",
  "nowrap-m-false": "flex-d6512edd",
  "direction-l-row": "flex-ad062178",
  "direction-l-row-reverse": "flex-d9e8e6bc",
  "direction-l-column": "flex-1501c152",
  "direction-l-column-reverse": "flex-3a0c43f4",
  "align-l-flex-start": "flex-0e318a5e",
  "align-l-flex-end": "flex-91a89d41",
  "align-l-center": "flex-83eeb2ca",
  "align-l-space-between": "flex-267ea03d",
  "align-l-space-around": "flex-065c7027",
  "align-l-space-evenly": "flex-bb9d7703",
  "valign-l-flex-start": "flex-237fba0c",
  "valign-l-flex-end": "flex-24b7c526",
  "valign-l-center": "flex-6deb015e",
  "valign-l-stretch": "flex-b3899268",
  "valign-l-baseline": "flex-1554b714",
  "nowrap-l-true": "flex-d692429b",
  "nowrap-l-false": "flex-fbc914f0",
  "direction-xl-row": "flex-9bf34728",
  "direction-xl-row-reverse": "flex-a986c952",
  "direction-xl-column": "flex-befd6c48",
  "direction-xl-column-reverse": "flex-fa1704ea",
  "align-xl-flex-start": "flex-2b457d34",
  "align-xl-flex-end": "flex-13724f65",
  "align-xl-center": "flex-8133442d",
  "align-xl-space-between": "flex-63b1b30d",
  "align-xl-space-around": "flex-5a60b2b8",
  "align-xl-space-evenly": "flex-31f39fc4",
  "valign-xl-flex-start": "flex-f50b9f29",
  "valign-xl-flex-end": "flex-8626789a",
  "valign-xl-center": "flex-fe246b7b",
  "valign-xl-stretch": "flex-85620b6e",
  "valign-xl-baseline": "flex-756e6221",
  "nowrap-xl-true": "flex-a4fe5ccf",
  "nowrap-xl-false": "flex-8fc6a048",
  "direction-xxl-row": "flex-c2832ab5",
  "direction-xxl-row-reverse": "flex-cd0c6001",
  "direction-xxl-column": "flex-ac351c4d",
  "direction-xxl-column-reverse": "flex-45d78529",
  "align-xxl-flex-start": "flex-ccf378dd",
  "align-xxl-flex-end": "flex-e0ea8f15",
  "align-xxl-center": "flex-8c3b4089",
  "align-xxl-space-between": "flex-89c0c58e",
  "align-xxl-space-around": "flex-8714c37c",
  "align-xxl-space-evenly": "flex-b5e93b5f",
  "valign-xxl-flex-start": "flex-73a26c62",
  "valign-xxl-flex-end": "flex-b2f029ae",
  "valign-xxl-center": "flex-00ebf7e2",
  "valign-xxl-stretch": "flex-e66de497",
  "valign-xxl-baseline": "flex-d7330588",
  "nowrap-xxl-true": "flex-f061f5f0",
  "nowrap-xxl-false": "flex-f3db56c0",
  "fixedWidth": "flex-43137eec",
  "expand": "flex-61c8f7ed",
  "stretch": "flex-b39d430d"
};

var FlexBox = function FlexBox(_ref) {
  var className = _ref.className,
      direction = _ref.direction,
      align = _ref.align,
      valign = _ref.valign,
      expand = _ref.expand,
      fixedWidth = _ref.fixedWidth,
      stretch = _ref.stretch,
      nowrap = _ref.nowrap,
      children = _ref.children;
  return _react.default.createElement("div", {
    className: className,
    styleName: (0, _classnames.default)('flex-box', (0, _generateResponsiveStyleNames.default)('direction', direction, _generateResponsiveStyleNames.notEmptyString), (0, _generateResponsiveStyleNames.default)('align', align, _generateResponsiveStyleNames.notEmptyString), (0, _generateResponsiveStyleNames.default)('valign', valign, _generateResponsiveStyleNames.notEmptyString), (0, _generateResponsiveStyleNames.default)('nowrap', nowrap), {
      expand: expand,
      fixedWidth: fixedWidth,
      stretch: stretch
    })
  }, children);
};

exports.FlexBox = FlexBox;
FlexBox.propTypes = {
  className: _propTypes.default.string,
  direction: (0, _generateResponsiveShape.default)(['', 'row', 'row-reverse', 'column', 'column-reverse']),
  align: (0, _generateResponsiveShape.default)(['', 'flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']),
  valign: (0, _generateResponsiveShape.default)(['', 'flex-start', 'flex-end', 'center', 'stretch', 'baseline']),
  nowrap: (0, _generateResponsiveShape.default)([true, false]),
  expand: _propTypes.default.bool,
  fixedWidth: _propTypes.default.bool,
  stretch: _propTypes.default.bool,
  children: _propTypes.default.node.isRequired
};
FlexBox.defaultProps = {
  className: '',
  direction: 'row',
  align: '',
  valign: '',
  expand: false,
  fixedWidth: false,
  stretch: false,
  nowrap: false
};

var _default = (0, _reactCssModules.default)(FlexBox, styles, {
  allowMultiple: true
});

exports.default = _default;