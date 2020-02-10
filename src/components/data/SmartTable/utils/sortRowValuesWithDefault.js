import getFormFieldValue from 'utils/getFormFieldValue';
import sort, {
  sortBySortedArray,
} from 'utils/sort';

export default function sortRowValuesWithDefault(
  prevSortedData,
  sortBy,
  sortOrder,
  getRowKey,
  fields,
) {
  const toBeSorted = prevSortedData.map((row) => ({
    ...row,
    key: getRowKey(row),
    [`${sortBy}`]: getFormFieldValue(sortBy, row, fields),
  }));
  const {
    sortGet,
  } = fields.find(({
    fieldName,
  }) => fieldName === sortBy) || {};
  const sortedKeys = sort(toBeSorted, sortBy, sortOrder, sortGet)
    .map(({
      key,
    }) => key);
  const sortGetKey = (row) => getRowKey(row);

  return sortBySortedArray(prevSortedData, sortedKeys, sortBy, sortGetKey);
}
