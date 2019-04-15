export default function getFlattenItemValues(itemGroups) {
  const values = [];
  itemGroups.forEach(({
    items = [],
  }) => {
    items.forEach(({
      value, disabled,
    }) => {
      if (!disabled) {
        values.push(value);
      }
    });
  });

  return values;
}
