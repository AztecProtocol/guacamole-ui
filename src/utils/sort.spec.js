import sort, {
  ASC,
  DESC,
  makeSort,
  sortBySortedArray,
} from './sort';

describe('sort', () => {
  it('sort data in descending order by assigned key', () => {
    const data = [
      {
        name: 'a',
        age: 10,
      },
      {
        name: 'b',
        age: 8,
      },
      {
        name: 'ac',
        age: 1,
      },
    ];

    expect(sort(data, 'name')).toEqual([
      {
        name: 'b',
        age: 8,
      },
      {
        name: 'ac',
        age: 1,
      },
      {
        name: 'a',
        age: 10,
      },
    ]);

    expect(sort(data, 'age')).toEqual([
      {
        name: 'a',
        age: 10,
      },
      {
        name: 'b',
        age: 8,
      },
      {
        name: 'ac',
        age: 1,
      },
    ]);
  });

  it('sort data by assigned key and order', () => {
    const data = [
      {
        name: 'a',
        age: 10,
      },
      {
        name: 'b',
        age: 8,
      },
      {
        name: 'ac',
        age: 1,
      },
    ];

    expect(sort(data, 'name', DESC)).toEqual([
      {
        name: 'b',
        age: 8,
      },
      {
        name: 'ac',
        age: 1,
      },
      {
        name: 'a',
        age: 10,
      },
    ]);

    expect(sort(data, 'name', ASC)).toEqual([
      {
        name: 'a',
        age: 10,
      },
      {
        name: 'ac',
        age: 1,
      },
      {
        name: 'b',
        age: 8,
      },
    ]);

    expect(sort(data, 'age', DESC)).toEqual([
      {
        name: 'a',
        age: 10,
      },
      {
        name: 'b',
        age: 8,
      },
      {
        name: 'ac',
        age: 1,
      },
    ]);

    expect(sort(data, 'age', ASC)).toEqual([
      {
        name: 'ac',
        age: 1,
      },
      {
        name: 'b',
        age: 8,
      },
      {
        name: 'a',
        age: 10,
      },
    ]);
  });

  it('sort data by path', () => {
    const complexData = [
      {
        birthday: {
          year: 1990,
          month: 1,
          day: 14,
        },
      },
      {
        birthday: {
          year: 1994,
          month: 12,
          day: 7,
        },
      },
      {
        birthday: {
          year: 2008,
          month: 6,
          day: 1,
        },
      },
    ];

    expect(sort(complexData, 'birthday.month')).toEqual([
      {
        birthday: {
          year: 1994,
          month: 12,
          day: 7,
        },
      },
      {
        birthday: {
          year: 2008,
          month: 6,
          day: 1,
        },
      },
      {
        birthday: {
          year: 1990,
          month: 1,
          day: 14,
        },
      },
    ]);

    expect(sort(complexData, 'birthday.day')).toEqual([
      {
        birthday: {
          year: 1990,
          month: 1,
          day: 14,
        },
      },
      {
        birthday: {
          year: 1994,
          month: 12,
          day: 7,
        },
      },
      {
        birthday: {
          year: 2008,
          month: 6,
          day: 1,
        },
      },
    ]);
  });

  it('accept custom get function', () => {
    const complexData = [
      {
        birthday: {
          year: 1990,
          month: 1,
          day: 14,
        },
      },
      {
        birthday: {
          year: 1994,
          month: 12,
          day: 7,
        },
      },
      {
        birthday: {
          year: 2008,
          month: 6,
          day: 1,
        },
      },
    ];

    const getDateFormat = (data, fieldName) => {
      const {
        year, month, day,
      } = data[fieldName];
      return `${day}${month}${year}`;
    };

    expect(sort(complexData, 'birthday', ASC, getDateFormat)).toEqual([
      {
        birthday: {
          year: 1990,
          month: 1,
          day: 14,
        },
      },
      {
        birthday: {
          year: 2008,
          month: 6,
          day: 1,
        },
      },
      {
        birthday: {
          year: 1994,
          month: 12,
          day: 7,
        },
      },
    ]);
  });

  it('preserve order when values are the same', () => {
    const data = [
      {
        birthday: {
          year: 1990,
          month: 1,
          day: 1,
        },
      },
      {
        birthday: {
          year: 2008,
          month: 6,
          day: 1,
        },
      },
      {
        birthday: {
          year: 1990,
          month: 12,
          day: 1,
        },
      },
    ];

    expect(sort(data, 'birthday.day', ASC)).toEqual([
      {
        birthday: {
          year: 1990,
          month: 1,
          day: 1,
        },
      },
      {
        birthday: {
          year: 2008,
          month: 6,
          day: 1,
        },
      },
      {
        birthday: {
          year: 1990,
          month: 12,
          day: 1,
        },
      },
    ]);

    expect(sort(data, 'birthday.day', DESC)).toEqual([
      {
        birthday: {
          year: 1990,
          month: 1,
          day: 1,
        },
      },
      {
        birthday: {
          year: 2008,
          month: 6,
          day: 1,
        },
      },
      {
        birthday: {
          year: 1990,
          month: 12,
          day: 1,
        },
      },
    ]);
  });
});

describe('makeSort', () => {
  it('return a reusable sorting function', () => {
    const sortByName = makeSort('name', ASC);

    expect(sortByName([
      {
        name: 'z',
      },
      {
        name: 'a',
      },
      {
        name: 'i',
      },
    ])).toEqual([
      {
        name: 'a',
      },
      {
        name: 'i',
      },
      {
        name: 'z',
      },
    ]);

    expect(sortByName([
      {
        name: 3,
      },
      {
        name: 1,
      },
      {
        name: 2,
      },
    ])).toEqual([
      {
        name: 1,
      },
      {
        name: 2,
      },
      {
        name: 3,
      },
    ]);
  });

  it('return a reusable function with both data and order being configurable', () => {
    const sortByName = makeSort('name');

    const data = [
      {
        name: 'z',
      },
      {
        name: 'a',
      },
      {
        name: 'i',
      },
    ];

    expect(sortByName(data, ASC)).toEqual([
      {
        name: 'a',
      },
      {
        name: 'i',
      },
      {
        name: 'z',
      },
    ]);

    expect(sortByName(data, DESC)).toEqual([
      {
        name: 'z',
      },
      {
        name: 'i',
      },
      {
        name: 'a',
      },
    ]);
  });
});

describe('sortByExternalArray', () => {
  it('sort an array of objects by a sorted array', () => {
    const data = [
      {
        name: 'a',
        age: 10,
      },
      {
        name: 'b',
        age: 8,
      },
      {
        name: 'c',
        age: 1,
      },
    ];

    const sortedNames = ['c', 'b', 'a'];
    expect(sortBySortedArray(data, sortedNames, 'name')).toEqual([
      {
        name: 'c',
        age: 1,
      },
      {
        name: 'b',
        age: 8,
      },
      {
        name: 'a',
        age: 10,
      },
    ]);

    const sortedNames2 = ['b', 'c', 'a'];
    expect(sortBySortedArray(data, sortedNames2, 'name')).toEqual([
      {
        name: 'b',
        age: 8,
      },
      {
        name: 'c',
        age: 1,
      },
      {
        name: 'a',
        age: 10,
      },
    ]);
  });
});
