export default function getPositionBoundaries(e, {
  prefix = '',
  suffix = '',
  allowNegative = false,
} = {}) {
  const {
    value,
  } = e.target;
  const negativeSignLength = value.startsWith(`-${prefix}`) ? 1 : 0;

  const boundaries = [];
  if (allowNegative && prefix) {
    boundaries.push([0, negativeSignLength]);
  }
  boundaries.push([
    prefix ? prefix.length + negativeSignLength : 0,
    value.length - suffix.length,
  ]);

  return boundaries;
}
