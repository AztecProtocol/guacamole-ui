import jsToSass, {
  camelToKebabCase,
  isSassValue,
} from './jsToSass';

describe('camelToKebabCase', () => {
  it('convert a camel case string to kebab case', () => {
    expect(camelToKebabCase('white')).toBe('white');
    expect(camelToKebabCase('whiteLight')).toBe('white-light');
    expect(camelToKebabCase('sizeS')).toBe('size-s');
    expect(camelToKebabCase('sizeSpacingM')).toBe('size-spacing-m');
    expect(camelToKebabCase('sizeSM')).toBe('size-s-m');
    expect(camelToKebabCase('SizeXl')).toBe('size-xl');
  });
});

describe('isSassValue', () => {
  it('check if a value is a sass variable', () => {
    expect(isSassValue('0')).toBe(true);
    expect(isSassValue('32')).toBe(true);

    expect(isSassValue('32px')).toBe(true);
    expect(isSassValue('32px 0')).toBe(true);
    expect(isSassValue('32px 16px')).toBe(true);

    expect(isSassValue('0%')).toBe(true);
    expect(isSassValue('100%')).toBe(true);

    expect(isSassValue('#fff')).toBe(true);
    expect(isSassValue('#000000')).toBe(true);
    expect(isSassValue('#123abc')).toBe(true);
    expect(isSassValue('#123abg')).toBe(false);

    expect(isSassValue('rgb(0, 0, 0)')).toBe(true);
    expect(isSassValue('rgba(0, 0, 0, 0.5)')).toBe(true);

    expect(isSassValue('linear-gradient(37deg, #fff 0%, #000 100%)')).toBe(true);

    expect(isSassValue('url("http://127.0.0.1/")')).toBe(true);
    expect(isSassValue('url("///bg.png")')).toBe(true);

    expect(isSassValue('white')).toBe(false);
    expect(isSassValue('white-light')).toBe(false);

    expect(isSassValue('times, sans-serif')).toBe(true);
    expect(isSassValue("'Cerebri Sans'")).toBe(true);
    expect(isSassValue('Cerebri Sans')).toBe(false);
  });
});

describe('jsToSass', () => {
  it('translates basic variables definitions', () => {
    const jsConfig = {
      hex: '#ffffff',
      rgba: 'rgba(0, 0, 0, 0.5)',
      name: 'grey-light',
      url: 'url("http://127.0.0.1/")',
      size: 8,
    };
    const sassConfig = jsToSass(jsConfig);
    const sass = sassConfig.split('\n');
    expect(sass[0]).toBe('$hex: #ffffff;');
    expect(sass[1]).toBe('$rgba: rgba(0, 0, 0, 0.5);');
    expect(sass[2]).toBe("$name: 'grey-light';");
    expect(sass[3]).toBe("$url: url('http://127.0.0.1/');");
    expect(sass[4]).toBe('$size: 8;');
  });

  it('translates arrays', () => {
    const jsConfig = {
      list: [1, 2],
      listWithEmptyValue: [
        '',
        'item1',
        'item2',
      ],
    };
    const sassConfig = jsToSass(jsConfig);
    const sass = sassConfig.split('\n');
    expect(sass[0]).toBe('$list: (1,2);');
    expect(sass[1]).toBe("$list-with-empty-value: ('','item1','item2');");
  });

  it('translates objects', () => {
    const jsConfig = {
      map: {
        hex: '#ffffff',
        rgba: 'rgba(0, 0, 0, 0.5)',
      },
      'second-map': {
        'grey-light': 'rgba(#000000, 0.2)',
        greyLighter: 'rgba(#000000, 0.1)',
      },
    };
    const sassConfig = jsToSass(jsConfig);
    const sass = sassConfig.split('\n');
    expect(sass[0]).toBe("$map: ('hex':#ffffff,'rgba':rgba(0, 0, 0, 0.5));");
    expect(sass[1]).toBe("$second-map: ('grey-light':rgba(#000000, 0.2),'grey-lighter':rgba(#000000, 0.1));");
  });
});
