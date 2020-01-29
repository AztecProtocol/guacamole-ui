export default function extractColorDetail(color) {
  const [, rgbValue, opacity] = color.match(/^rgba\((.+),(.+)\)$/) || [];

  return {
    rgb: rgbValue
      ? `rgb(${rgbValue})`
      : color,
    opacity,
  };
}
