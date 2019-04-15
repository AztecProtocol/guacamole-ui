export default function extractColorDetail(color) {
  const [, rgb, opacity] = color.match(/^rgba\((.+),(.+)\)$/) || [];

  return {
    rgb: rgb || color,
    opacity,
  };
}
