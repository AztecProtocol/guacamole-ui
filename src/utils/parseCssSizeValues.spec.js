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

  it('parse a string with 4 symmetric values', () => {
    expect(parseCssSizeValues('s xs s xs')).toEqual({
      v: 's',
      h: 'xs',
    });

    expect(parseCssSizeValues('s l s xs')).toEqual({
      v: 's',
      right: 'l',
      left: 'xs',
    });
  });

  it('parse a string with 4 identical values', () => {
    expect(parseCssSizeValues('s s s s')).toEqual({
      all: 's',
    });
  });

  it('parse a string with 3 values', () => {
    expect(parseCssSizeValues('s xs l')).toEqual({
      top: 's',
      bottom: 'l',
      h: 'xs',
    });

    expect(parseCssSizeValues('s xs s')).toEqual({
      v: 's',
      h: 'xs',
    });
  });

  it('parse a string with 2 values', () => {
    expect(parseCssSizeValues('s xs')).toEqual({
      v: 's',
      h: 'xs',
    });
  });

  it('parse a responsive value array', () => {
    expect(parseCssSizeValues({
      m: 's',
      s: 'l',
      xs: 'xl',
    })).toEqual({
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
      v: {
        m: 's',
      },
      h: {
        m: 'xl',
        s: 'm',
      },
      top: {
        s: '0',
      },
      bottom: {
        s: 'l',
      },
      all: {
        xs: 'xxs',
      },
    });
  });
});
