export default function isFlexibleImage({
  ratio, width, height,
}) {
  if (ratio) {
    return false;
  }

  return !width
        || !height
        || (width === 'auto')
        || (height === 'auto');
}
