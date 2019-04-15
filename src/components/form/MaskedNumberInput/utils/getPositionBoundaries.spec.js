import getPositionBoundaries from './getPositionBoundaries';

const inputEvent = value => ({
  target: {
    value,
  },
});

describe('getPositionBoundaries', () => {
  it('return selectable position boundary for input value', () => {
    expect(getPositionBoundaries(inputEvent(''))).toEqual([
      [0, 0],
    ]);

    expect(getPositionBoundaries(inputEvent('123'))).toEqual([
      [0, 3],
    ]);

    expect(getPositionBoundaries(inputEvent('123,456,789'))).toEqual([
      [0, 11],
    ]);
  });

  it('return boundary excluding prefix', () => {
    const prefix = 'start';
    expect(getPositionBoundaries(inputEvent('start123'), {
      prefix,
    })).toEqual([
      [5, 8],
    ]);

    expect(getPositionBoundaries(inputEvent('start123,456'), {
      prefix,
    })).toEqual([
      [5, 12],
    ]);
  });

  it('return boundary excluding suffix', () => {
    const suffix = 'end';
    expect(getPositionBoundaries(inputEvent('123end'), {
      suffix,
    })).toEqual([
      [0, 3],
    ]);

    expect(getPositionBoundaries(inputEvent('123,456end'), {
      suffix,
    })).toEqual([
      [0, 7],
    ]);
  });

  it('return boundary excluding prefix and suffix', () => {
    const prefix = 'start';
    const suffix = 'end';
    expect(getPositionBoundaries(inputEvent('start123end'), {
      prefix,
      suffix,
    })).toEqual([
      [5, 8],
    ]);

    expect(getPositionBoundaries(inputEvent('start123,456end'), {
      prefix,
      suffix,
    })).toEqual([
      [5, 12],
    ]);
  });

  it('return boundaries including negative sign and selectable value', () => {
    const prefix = 'start';
    const suffix = 'end';
    const allowNegative = true;
    expect(getPositionBoundaries(inputEvent('start123end'), {
      prefix,
      suffix,
      allowNegative,
    })).toEqual([
      [0, 0],
      [5, 8],
    ]);

    expect(getPositionBoundaries(inputEvent('start123end'), {
      prefix,
      allowNegative,
    })).toEqual([
      [0, 0],
      [5, 11],
    ]);

    expect(getPositionBoundaries(inputEvent('start123end'), {
      suffix,
      allowNegative,
    })).toEqual([
      [0, 8],
    ]);

    expect(getPositionBoundaries(inputEvent('-start123end'), {
      prefix,
      suffix,
      allowNegative,
    })).toEqual([
      [0, 1],
      [6, 9],
    ]);

    expect(getPositionBoundaries(inputEvent('-123end'), {
      suffix,
      allowNegative,
    })).toEqual([
      [0, 4],
    ]);
  });
});
