export default function getScaleByPosition(
  position,
  left,
  right,
  {
    min = 0,
    max = 100,
    step = 1,
  } = {},
) {
  const base = right - left;
  if (!base) {
    return min;
  }

  const pos = Math.max(left, position);
  const diff = Math.round(((max - min) * (pos - left)) / base);
  return Math.min(max, min + (Math.round(diff / step) * step));
}
