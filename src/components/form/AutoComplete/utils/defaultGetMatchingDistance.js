export default function defaultGetMatchingDistance(value, item) {
  const formatedValue = value.trim().toLowerCase();
  if (!formatedValue) {
    return 0;
  }

  const {
    title,
  } = item;
  return title.toLowerCase().includes(formatedValue) ? 1 : 0;
}
