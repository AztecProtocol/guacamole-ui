"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleStatus = exports.removeStatus = exports.addStatus = exports.getModifier = exports.hasStatus = void 0;

var _replaceValue = _interopRequireDefault(require("../../../../utils/replaceValue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hasStatus = function hasStatus(modifier, status) {
  return modifier && modifier.has(status) || false;
};

exports.hasStatus = hasStatus;

var getModifier = function getModifier(modifiers, value) {
  return modifiers && modifiers[value] || null;
};

exports.getModifier = getModifier;

var addStatus = function addStatus(modifiers, value, status) {
  var prevModifier = getModifier(modifiers, value);

  if (prevModifier && prevModifier.has(status)) {
    return modifiers;
  }

  var modifier = new Set(prevModifier);
  modifier.add(status);
  return (0, _replaceValue.default)(modifiers || {}, value, modifier, true);
};

exports.addStatus = addStatus;

var removeStatus = function removeStatus(modifiers, value, status) {
  var prevModifier = getModifier(modifiers, value);

  if (!prevModifier || !prevModifier.has(status)) {
    return modifiers;
  }

  var modifier = new Set(prevModifier);
  modifier.delete(status);

  if (!modifier.size) {
    modifier = null;
  }

  return (0, _replaceValue.default)(modifiers, value, modifier);
};

exports.removeStatus = removeStatus;

var toggleStatus = function toggleStatus(modifiers, value, status) {
  var modifier = getModifier(modifiers, value);
  return hasStatus(modifier, status) ? removeStatus(modifiers, value, status) : addStatus(modifiers, value, status);
};

exports.toggleStatus = toggleStatus;