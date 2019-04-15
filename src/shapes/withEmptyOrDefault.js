export default function withEmptyOrDefault(oneOf) {
  return [...oneOf, '', 'none', 'default'];
}
