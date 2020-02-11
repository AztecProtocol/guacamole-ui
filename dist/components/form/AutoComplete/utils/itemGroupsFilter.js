"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = itemGroupsFilter;
exports.makeItemGroupsFilter = void 0;

var _sort = _interopRequireWildcard(require("../../../../utils/sort"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function itemGroupsFilter(itemGroupsSource, value, _ref) {
  var _ref$getMatchingDista = _ref.getMatchingDistance,
      getMatchingDistance = _ref$getMatchingDista === void 0 ? function () {
    return 1;
  } : _ref$getMatchingDista,
      _ref$maxVisibleItems = _ref.maxVisibleItems,
      maxVisibleItems = _ref$maxVisibleItems === void 0 ? -1 : _ref$maxVisibleItems,
      _ref$showZeroMatch = _ref.showZeroMatch,
      showZeroMatch = _ref$showZeroMatch === void 0 ? false : _ref$showZeroMatch;
  var itemScorePairs = [];
  itemGroupsSource.forEach(function (group) {
    var items = group.items;
    items.forEach(function (item) {
      var score = getMatchingDistance(value, item);

      if (showZeroMatch || score > 0) {
        itemScorePairs.push({
          value: item.value,
          score: score
        });
      }
    });
  });
  var visibleSortedItems = (0, _sort["default"])(itemScorePairs, 'score');

  if (maxVisibleItems >= 0) {
    visibleSortedItems = visibleSortedItems.slice(0, maxVisibleItems);
  }

  var validValueMap = {};
  var sortedValues = [];
  visibleSortedItems.forEach(function (_ref2) {
    var itemValue = _ref2.value;
    validValueMap[itemValue] = true;
    sortedValues.push(itemValue);
  });
  var itemGroups = itemGroupsSource.map(function (group) {
    var items = group.items;
    var validItems = items.filter(function (item) {
      return validValueMap[item.value];
    });
    return _objectSpread({}, group, {
      items: (0, _sort.sortBySortedArray)(validItems, sortedValues, 'value')
    });
  });
  return itemGroups.filter(function (_ref3) {
    var items = _ref3.items;
    return items.length > 0;
  });
}

var makeItemGroupsFilter = function makeItemGroupsFilter(itemGroupsSource, _ref4) {
  var _ref4$getMatchingDist = _ref4.getMatchingDistance,
      getMatchingDistance = _ref4$getMatchingDist === void 0 ? function () {
    return 1;
  } : _ref4$getMatchingDist,
      _ref4$maxVisibleItems = _ref4.maxVisibleItems,
      maxVisibleItems = _ref4$maxVisibleItems === void 0 ? -1 : _ref4$maxVisibleItems,
      _ref4$showZeroMatch = _ref4.showZeroMatch,
      showZeroMatch = _ref4$showZeroMatch === void 0 ? false : _ref4$showZeroMatch;
  return function (value) {
    return itemGroupsFilter(itemGroupsSource, value, {
      getMatchingDistance: getMatchingDistance,
      maxVisibleItems: maxVisibleItems,
      showZeroMatch: showZeroMatch
    });
  };
};

exports.makeItemGroupsFilter = makeItemGroupsFilter;