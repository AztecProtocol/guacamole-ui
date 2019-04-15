"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getTreeNodeByValue;

function getTreeNodeByValue(data, value) {
  if (!data) {
    return null;
  }

  for (var i = 0; i < data.length; i += 1) {
    var row = data[i];
    var targetData = row.value === value ? row : getTreeNodeByValue(row.data, value);

    if (targetData) {
      return targetData;
    }
  }

  return null;
}