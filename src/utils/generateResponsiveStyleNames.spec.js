import generateResponsiveStyleNames from './generateResponsiveStyleNames';

describe('generate responsive style names by prefix and sizes', () => {
  it('generate an array of style names with sizes object', () => {
    expect(generateResponsiveStyleNames(
      'padding',
      {
        m: 'xl',
      },
    )).toEqual([
      'padding-m-xl',
    ]);

    expect(generateResponsiveStyleNames(
      'padding',
      {
        m: 'xl',
        s: 'm',
        xs: 'l',
      },
    )).toEqual([
      'padding-m-xl',
      'padding-s-m',
      'padding-xs-l',
    ]);
  });

  it('ignore invalid keys', () => {
    expect(generateResponsiveStyleNames(
      'padding',
      {
        m: 'xl',
        foo: 'bar',
      },
    )).toEqual([
      'padding-m-xl',
    ]);
  });

  it('accept a value string and use it for size m', () => {
    expect(generateResponsiveStyleNames(
      'padding',
      'xl',
    )).toEqual([
      'padding--xl',
    ]);
  });

  it('allow empty prefix', () => {
    expect(generateResponsiveStyleNames(
      '',
      'xl',
    )).toEqual([
      'xl',
    ]);

    expect(generateResponsiveStyleNames(
      '',
      {
        m: 'xl',
        xs: 'l',
        xxs: 'm',
      },
    )).toEqual([
      'm-xl',
      'xs-l',
      'm',
    ]);
  });

  it('convert to string if sizes is not a string or object', () => {
    expect(generateResponsiveStyleNames(
      'padding',
      true,
    )).toEqual([
      'padding--true',
    ]);

    expect(generateResponsiveStyleNames(
      'padding',
      {
        m: true,
        xs: false,
      },
    )).toEqual([
      'padding-m-true',
      'padding-xs-false',
    ]);

    expect(generateResponsiveStyleNames(
      'padding',
      1,
    )).toEqual([
      'padding--1',
    ]);
  });

  it('accept a validation function', () => {
    const noMediumSize = val => val !== 'm';
    expect(generateResponsiveStyleNames(
      'padding',
      {
        m: 'xl',
        s: 'm',
        xs: 'l',
      },
      noMediumSize,
    )).toEqual([
      'padding-m-xl',
      'padding-xs-l',
    ]);

    const noSmallerThan5 = val => val >= 5;
    expect(generateResponsiveStyleNames(
      'col',
      {
        m: 0,
        s: 4,
        xs: 9,
      },
      noSmallerThan5,
    )).toEqual([
      'col-xs-9',
    ]);
  });
});
