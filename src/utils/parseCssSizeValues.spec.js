import parseCssSizeValues from './parseCssSizeValues';

describe('parseCssSizeValues test', () => {
  it('parse a simple value string', () => {
    expect(parseCssSizeValues('s')).toEqual({
      all: 's',
    });
  });

  it('parse a string with 4 values', () => {
    expect(parseCssSizeValues('s xs l xl')).toEqual({
      top: 's',
      right: 'xs',
      bottom: 'l',
      left: 'xl',
    });
  });

  it('parse a string with 3 values', () => {
    expect(parseCssSizeValues('s xs l')).toEqual({
      top: 's',
      right: 'xs',
      bottom: 'l',
      left: 'xs',
    });
  });

  it('parse a string with 2 values', () => {
    expect(parseCssSizeValues('s xs')).toEqual({
      top: 's',
      right: 'xs',
      bottom: 's',
      left: 'xs',
    });
  });

  it('parse a responsive value array', () => {
    expect(parseCssSizeValues({
      m: 's',
      s: 'l',
      xs: 'xl',
    }))
      .toEqual({
        all: {
          m: 's',
          s: 'l',
          xs: 'xl',
        },
      });
  });

  it('parse a responsive value array with more than one value', () => {
    expect(parseCssSizeValues({
      m: 's xl',
      s: '0 m l',
      xs: 'xxs',
    })).toEqual({
      top: {
        m: 's',
        s: '0',
        xs: 'xxs',
      },
      right: {
        m: 'xl',
        s: 'm',
        xs: 'xxs',
      },
      bottom: {
        m: 's',
        s: 'l',
        xs: 'xxs',
      },
      left: {
        m: 'xl',
        s: 'm',
        xs: 'xxs',
      },
    });
  });
});
