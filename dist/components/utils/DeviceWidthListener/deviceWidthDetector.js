"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styleConstants = require("../../../config/styleConstants");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DeviceWidthDetector =
/*#__PURE__*/
function () {
  function DeviceWidthDetector() {
    var _this = this;

    _classCallCheck(this, DeviceWidthDetector);

    _defineProperty(this, "register", function (breakpointSizeMap) {
      var isSameMap = breakpointSizeMap === _this.breakpointSizeMap || _styleConstants.deviceBreakpointKeys.every(function (key) {
        return breakpointSizeMap[key] === _this.breakpointSizeMap[key];
      });

      if (!isSameMap) {
        _this.unbindActions();

        var prevSubscribers = _objectSpread({}, _this.subscribers);

        _styleConstants.deviceBreakpointKeys.forEach(function (key) {
          if (breakpointSizeMap[key] === _this.breakpointSizeMap[key]) return;
          _this.subscribers[key] = [];
          _this.sizeKeyToWidth[key] = parseInt(breakpointSizeMap[key], 10);
        });

        _this.breakpointSizeMap = breakpointSizeMap;
        Object.keys(prevSubscribers).forEach(function (key) {
          prevSubscribers[key].forEach(function (cb) {
            return _this.subscribe(key, cb);
          });
        });

        var _ref = document || {},
            readyState = _ref.readyState;

        if (readyState === 'interactive' || readyState === 'complete') {
          _this.updateByWindowSize();
        } else {
          document.addEventListener('DOMContentLoaded', function () {
            _this.updateByWindowSize();
          });
        }

        _this.bindActions();
      }

      return _this.orderedKeys;
    });

    _defineProperty(this, "updateByWindowSize", function () {
      var currentWidth = window.innerWidth;

      var size = _toConsumableArray(_this.orderedKeys).reverse().find(function (key) {
        return currentWidth >= _this.sizeKeyToWidth[key];
      });

      if (size !== _this.currentSize) {
        var prevSize = _this.currentSize;

        _this.setCurrentSize(size);

        _this.broadcastSizeChanged(prevSize, size);
      }
    });

    this.breakpointSizeMap = {};
    this.orderedKeys = _styleConstants.deviceBreakpointKeys[0] === 'xxs' ? _styleConstants.deviceBreakpointKeys : _toConsumableArray(_styleConstants.deviceBreakpointKeys).reverse();
    this.currentSize = 'xxs';
    this.currentLevel = this.orderedKeys.indexOf(this.currentSize);
    this.subscribers = {};
    this.sizeKeyToWidth = {};
  }

  _createClass(DeviceWidthDetector, [{
    key: "setCurrentSize",
    value: function setCurrentSize(size) {
      this.currentSize = size;
      this.currentLevel = this.orderedKeys.indexOf(size);
    }
  }, {
    key: "forceChangeSize",
    value: function forceChangeSize(size) {
      if (size !== this.currentSize) {
        this.broadcastSizeChanged(this.currentSize, size);
        this.setCurrentSize(size);
      }
    }
  }, {
    key: "bindActions",
    value: function bindActions() {
      window.addEventListener('resize', this.updateByWindowSize, true);
    }
  }, {
    key: "unbindActions",
    value: function unbindActions() {
      window.removeEventListener('resize', this.updateByWindowSize, true);
    }
  }, {
    key: "broadcastSizeChanged",
    value: function broadcastSizeChanged(prev, current) {
      var notified = [];
      var prevIdx = this.orderedKeys.indexOf(prev);
      var currIdx = this.orderedKeys.indexOf(current);
      var from = Math.min(prevIdx, currIdx);
      var to = Math.max(prevIdx, currIdx);

      for (var i = from; i <= to; i += 1) {
        var sizeKey = this.orderedKeys[i];
        this.subscribers[sizeKey].forEach(function (callback) {
          if (notified.indexOf(callback) >= 0) return;
          callback(current);
          notified.push(callback);
        });
      }
    }
  }, {
    key: "applyToCurrentSize",
    value: function applyToCurrentSize(size) {
      var level = this.orderedKeys.indexOf(size);
      return {
        gt: level < this.currentLevel,
        gte: level <= this.currentLevel,
        lt: level > this.currentLevel,
        lte: level >= this.currentLevel
      };
    }
  }, {
    key: "subscribe",
    value: function subscribe(size, func) {
      this.subscribers[size].push(func);
      return this.applyToCurrentSize(size);
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(size, func) {
      var index = this.subscribers[size].findIndex(function (callback) {
        return callback === func;
      });

      if (index >= 0) {
        this.subscribers[size].splice(index, 1);
      }
    }
  }]);

  return DeviceWidthDetector;
}();

var _default = new DeviceWidthDetector();

exports.default = _default;