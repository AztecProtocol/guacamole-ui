"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deviceBreakpoints = exports.default = void 0;

var _layout = require("../../../config/layout");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var deviceBreakpoints = Object.keys(_layout.deviceBreakpointMap).reverse();
exports.deviceBreakpoints = deviceBreakpoints;

var DeviceWidthDetector =
/*#__PURE__*/
function () {
  function DeviceWidthDetector() {
    var _this = this;

    _classCallCheck(this, DeviceWidthDetector);

    _defineProperty(this, "updateByWindowSize", function () {
      var currentWidth = window.innerWidth;
      var size = Object.keys(_this.sizeKeyToWidth).reverse().find(function (key) {
        return currentWidth >= _this.sizeKeyToWidth[key];
      });

      if (size !== _this.currentSize) {
        var prevSize = _this.currentSize;

        _this.setCurrentSize(size);

        _this.broadcastSizeChanged(prevSize, size);
      }
    });

    this.currentSize = 'xxs';
    this.currentLevel = deviceBreakpoints.indexOf(this.currentSize);
    this.subscribers = {};
    this.sizeKeyToWidth = {};
    deviceBreakpoints.forEach(function (size) {
      _this.subscribers[size] = [];
      var width = parseInt(_layout.deviceBreakpointMap[size], 10);
      _this.sizeKeyToWidth[size] = width;
    });

    var _ref = document || {},
        readyState = _ref.readyState;

    if (readyState === 'interactive' || readyState === 'complete') {
      this.updateByWindowSize();
    } else {
      document.addEventListener('DOMContentLoaded', function () {
        _this.updateByWindowSize();
      });
    }

    this.listenForResize();
  }

  _createClass(DeviceWidthDetector, [{
    key: "setCurrentSize",
    value: function setCurrentSize(size) {
      this.currentSize = size;
      this.currentLevel = deviceBreakpoints.indexOf(size);
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
    key: "listenForResize",
    value: function listenForResize() {
      window.addEventListener('resize', this.updateByWindowSize, true);
    }
  }, {
    key: "broadcastSizeChanged",
    value: function broadcastSizeChanged(prev, current) {
      var notified = [];
      var prevIdx = deviceBreakpoints.indexOf(prev);
      var currIdx = deviceBreakpoints.indexOf(current);
      var from = Math.min(prevIdx, currIdx);
      var to = Math.max(prevIdx, currIdx);

      for (var i = from; i <= to; i += 1) {
        var width = deviceBreakpoints[i];
        this.subscribers[width].forEach(function (callback) {
          if (notified.indexOf(callback) >= 0) return;
          callback(current);
          notified.push(callback);
        });
      }
    }
  }, {
    key: "applyToCurrentSize",
    value: function applyToCurrentSize(size) {
      var level = deviceBreakpoints.indexOf(size);
      return {
        gt: level < this.currentLevel,
        lt: level > this.currentLevel
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