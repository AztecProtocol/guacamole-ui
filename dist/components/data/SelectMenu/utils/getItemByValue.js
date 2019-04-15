"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getItemByValue;

function getItemByValue(itemGroups, value) {
  var item = null;
  itemGroups.find(function (_ref) {
    var items = _ref.items;
    item = items && items.find(function (i) {
      return i.value === value;
    });
    return item;
  });
  return item;
}