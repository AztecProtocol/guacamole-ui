export default function getTreeNodeByValue(data, value) {
  if (!data) {
    return null;
  }

  for (let i = 0; i < data.length; i += 1) {
    const row = data[i];
    const targetData = row.value === value
      ? row
      : getTreeNodeByValue(row.data, value);

    if (targetData) {
      return targetData;
    }
  }

  return null;
}
