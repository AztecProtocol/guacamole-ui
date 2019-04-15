import get from 'lodash/get';

const ASC = true;
const DESC = false;

const sort = (data, sortBy, asc, sortGet = get) =>
  [...data].sort((a, b) => {
    const vA = sortGet(a, sortBy);
    const vB = sortGet(b, sortBy);
    if (vA === vB) {
      return 0;
    }
    return ((vA < vB ^ asc) && 1) || -1; // eslint-disable-line no-bitwise
  });

const sortBySortedArray = (data, sortedArray, sortBy, sortGet = get) => {
  const indexMap = {};
  sortedArray.forEach((value, index) => {
    indexMap[value] = index;
  });
  const sortGetIndex = item => indexMap[sortGet(item, sortBy)];

  return sort(data, sortBy, ASC, sortGetIndex);
};

const makeSort = (sortBy, defaultAsc) =>
  (data, asc) => sort(data, sortBy, asc || defaultAsc);

export default sort;

export {
  ASC,
  DESC,
  makeSort,
  sortBySortedArray,
};
