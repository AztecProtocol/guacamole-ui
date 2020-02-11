"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handleKeyDown;

var _getPositionBoundaries = _interopRequireDefault(require("./getPositionBoundaries"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function handleKeyDown(e, selection, updateCursorPosition) {
  var _ref = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
      _ref$allowNegative = _ref.allowNegative,
      allowNegative = _ref$allowNegative === void 0 ? false : _ref$allowNegative,
      _ref$allowDecimal = _ref.allowDecimal,
      allowDecimal = _ref$allowDecimal === void 0 ? false : _ref$allowDecimal,
      _ref$prefix = _ref.prefix,
      prefix = _ref$prefix === void 0 ? '' : _ref$prefix,
      _ref$suffix = _ref.suffix,
      suffix = _ref$suffix === void 0 ? '' : _ref$suffix;

  var keyCode = e.keyCode,
      target = e.target;
  var value = target.value;
  var start = selection.start,
      end = selection.end;
  var boundaries = (0, _getPositionBoundaries["default"])(e, {
    allowNegative: allowNegative,
    prefix: prefix,
    suffix: suffix
  });

  switch (keyCode) {
    case 8:
      {
        if (start === end) {
          if (!boundaries.some(function (_ref2) {
            var _ref3 = _slicedToArray(_ref2, 2),
                min = _ref3[0],
                max = _ref3[1];

            return start > min && start <= max;
          })) {
            e.preventDefault();
            var boundIndex = boundaries.findIndex(function (_ref4) {
              var _ref5 = _slicedToArray(_ref4, 1),
                  min = _ref5[0];

              return start === min;
            });

            if (boundIndex > 0) {
              updateCursorPosition(boundaries[boundIndex - 1][1]);
            }
          } else if (value[start - 1] === ',') {
            e.preventDefault();
            updateCursorPosition(start - 1);
          }
        }

        break;
      }

    case 37:
      {
        var nextStart = start - 1;

        if (value[nextStart - 1] === ',' && !e.shiftKey) {
          e.preventDefault();
          updateCursorPosition(start - 2);
        } else {
          var _boundIndex = boundaries.findIndex(function (_ref6) {
            var _ref7 = _slicedToArray(_ref6, 2),
                max = _ref7[1];

            return nextStart <= max;
          });

          if (_boundIndex < 0 || nextStart < boundaries[_boundIndex][0]) {
            e.preventDefault();

            if (_boundIndex === 0) {
              updateCursorPosition(boundaries[0][0]);
            } else if (_boundIndex > 0) {
              updateCursorPosition(boundaries[_boundIndex - 1][1]);
            } else {
              updateCursorPosition(boundaries[boundaries.length - 1][1]);
            }
          }
        }

        break;
      }

    case 38:
      e.preventDefault();
      updateCursorPosition(boundaries[0][0]);
      break;

    case 39:
      {
        if (value[end] === ',' && !e.shiftKey) {
          e.preventDefault();
          updateCursorPosition(end + 2);
        } else {
          var _boundIndex2 = boundaries.findIndex(function (_ref8) {
            var _ref9 = _slicedToArray(_ref8, 2),
                max = _ref9[1];

            return end <= max;
          });

          if (_boundIndex2 < 0 || end === boundaries[_boundIndex2][1]) {
            e.preventDefault();

            if (_boundIndex2 < 0 || _boundIndex2 === boundaries.length - 1) {
              updateCursorPosition(boundaries[boundaries.length - 1][1]);
            } else {
              updateCursorPosition(boundaries[_boundIndex2 + 1][0]);
            }
          }
        }

        break;
      }

    case 40:
      e.preventDefault();
      updateCursorPosition(boundaries[boundaries.length - 1][1]);
      break;

    default:
      {
        var _char = e.key;

        if (start === end && _char.length === 1 && !e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey) {
          var isValidDigit = _char.match(/[0-9]/) && (start !== 0 || !value.startsWith("-".concat(prefix)));
          var isValidSign = _char === '-' && allowNegative && !value.startsWith("-".concat(prefix));
          var isValidDecimal = _char === '.' && allowDecimal && value.indexOf('.') === -1; // will always be false if prefix or suffix has a dot

          if (!isValidDigit && !isValidSign && !isValidDecimal) {
            e.preventDefault();
          }
        }
      }
  }
}