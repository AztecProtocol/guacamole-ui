export default function calculateArcValuePosition({
  radius,
  strokeWidth,
  value,
  startDeg,
  outsideOfArc,
}) {
  const innerRadius = radius - strokeWidth;
  const theta = ((Math.PI * (value % 100)) / 50) - (Math.PI / 2);
  let inset = false;
  let thetaOffset = strokeWidth / innerRadius / 2;
  if (value % 100 === 0 || value > 100) {
    thetaOffset = 0;
    if (value >= 100) {
      inset = true;
    }
  } else if (outsideOfArc || (thetaOffset * 2) - theta > Math.PI / 2) {
    thetaOffset = -(thetaOffset * (outsideOfArc ? 2 : 1));
  } else {
    inset = true;
  }
  const centerRadius = radius - (strokeWidth / 2);
  const thetaStart = (startDeg * Math.PI) / 180;
  const rX = centerRadius * Math.cos((thetaStart + theta) - thetaOffset);
  const rY = centerRadius * Math.sin((thetaStart + theta) - thetaOffset);

  return {
    x: rX + radius,
    y: rY + radius,
    inset,
  };
}
