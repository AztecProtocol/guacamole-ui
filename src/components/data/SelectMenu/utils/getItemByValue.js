export default function getItemByValue(itemGroups, value) {
  let item = null;
  itemGroups.find(({
    items,
  }) => {
    item = items && items.find(((i) => i.value === value));
    return item;
  });

  return item;
}
