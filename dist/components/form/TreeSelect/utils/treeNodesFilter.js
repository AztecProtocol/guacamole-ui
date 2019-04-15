"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = treeNodesFilter;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var isMatchNode = function isMatchNode(node, value, ignoreCase) {
  var _map = [node.title, value].map(function (v) {
    return ignoreCase && v.toLowerCase() || v;
  }),
      _map2 = _slicedToArray(_map, 2),
      targetValue = _map2[0],
      requiredValue = _map2[1];

  return targetValue.includes(requiredValue);
};

function treeNodesFilter(data, value) {
  var ignoreCase = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (!data || !value) {
    return data;
  }

  var findMatchTreeNode = function findMatchTreeNode(nodes) {
    if (!nodes) {
      return nodes;
    }

    var matchNodes = [];
    nodes.forEach(function (_ref) {
      var childData = _ref.data,
          node = _objectWithoutProperties(_ref, ["data"]);

      var match = isMatchNode(node, value, ignoreCase);
      var matchChildNodes = findMatchTreeNode(childData);
      if (!match && !matchChildNodes) return;

      var newNode = _objectSpread({}, node, {
        highlight: match
      });

      if (matchChildNodes) {
        newNode.data = matchChildNodes;
      }

      matchNodes.push(newNode);
    });
    return matchNodes.length ? matchNodes : null;
  };

  return findMatchTreeNode(data) || [];
}