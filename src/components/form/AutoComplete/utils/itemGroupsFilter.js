import sort, {
  sortBySortedArray,
} from 'utils/sort';

export default function itemGroupsFilter(
  itemGroupsSource,
  value,
  {
    getMatchingDistance = () => 1,
    maxVisibleItems = -1,
    showZeroMatch = false,
  },
) {
  const itemScorePairs = [];
  itemGroupsSource.forEach((group) => {
    const {
      items,
    } = group;
    items.forEach((item) => {
      const score = getMatchingDistance(value, item);
      if (showZeroMatch || score > 0) {
        itemScorePairs.push({
          value: item.value,
          score,
        });
      }
    });
  });

  let visibleSortedItems = sort(itemScorePairs, 'score');
  if (maxVisibleItems >= 0) {
    visibleSortedItems = visibleSortedItems.slice(0, maxVisibleItems);
  }

  const validValueMap = {};
  const sortedValues = [];
  visibleSortedItems.forEach(({
    value: itemValue,
  }) => {
    validValueMap[itemValue] = true;
    sortedValues.push(itemValue);
  });

  const itemGroups = itemGroupsSource.map((group) => {
    const {
      items,
    } = group;
    const validItems = items.filter((item) => validValueMap[item.value]);
    return {
      ...group,
      items: sortBySortedArray(validItems, sortedValues, 'value'),
    };
  });

  return itemGroups.filter(({
    items,
  }) => items.length > 0);
}

export const makeItemGroupsFilter = (
  itemGroupsSource,
  {
    getMatchingDistance = () => 1,
    maxVisibleItems = -1,
    showZeroMatch = false,
  },
) => (value) => itemGroupsFilter(
  itemGroupsSource,
  value,
  {
    getMatchingDistance,
    maxVisibleItems,
    showZeroMatch,
  },
);
