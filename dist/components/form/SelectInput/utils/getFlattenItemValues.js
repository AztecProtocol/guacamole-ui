"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getFlattenItemValues;

function getFlattenItemValues(itemGroups) {
  var values = [];
  itemGroups.forEach(function (_ref) {
    var _ref$items = _ref.items,
        items = _ref$items === void 0 ? [] : _ref$items;
    items.forEach(function (_ref2) {
      var value = _ref2.value,
          disabled = _ref2.disabled;

      if (!disabled) {
        values.push(value);
      }
    });
  });
  return values;
}