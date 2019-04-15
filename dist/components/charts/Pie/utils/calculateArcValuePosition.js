"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = calculateArcValuePosition;

function calculateArcValuePosition(_ref) {
  var radius = _ref.radius,
      strokeWidth = _ref.strokeWidth,
      value = _ref.value,
      startDeg = _ref.startDeg,
      outsideOfArc = _ref.outsideOfArc;
  var innerRadius = radius - strokeWidth;
  var theta = Math.PI * (value % 100) / 50 - Math.PI / 2;
  var inset = false;
  var thetaOffset = strokeWidth / innerRadius / 2;

  if (value % 100 === 0 || value > 100) {
    thetaOffset = 0;

    if (value >= 100) {
      inset = true;
    }
  } else if (outsideOfArc || thetaOffset * 2 - theta > Math.PI / 2) {
    thetaOffset = -(thetaOffset * (outsideOfArc ? 2 : 1));
  } else {
    inset = true;
  }

  var centerRadius = radius - strokeWidth / 2;
  var thetaStart = startDeg * Math.PI / 180;
  var rX = centerRadius * Math.cos(thetaStart + theta - thetaOffset);
  var rY = centerRadius * Math.sin(thetaStart + theta - thetaOffset);
  return {
    x: rX + radius,
    y: rY + radius,
    inset: inset
  };
}