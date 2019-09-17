import updateColorsInConfig from './updateColorsInConfig';
import deepMerge from './deepMerge';

describe('updateColorsInConfig', () => {
  const colorMap = {
    red: '#F23A5B',
    blue: '#2772CE',
    green: '#41BA00',
  };
  const defaultConfig = {
    defaultTextColor: '#41BA00',
    inputTextColorName: 'blue',
    inputTextColor: '#2772CE',
    fontName: 'Arial',
    colorMap,
  };

  it('take a custom config and update color for a rule if it has a corresponding color name key', () => {
    const newBlue = '#7174FF';
    const customConfig = {
      colorMap: {
        blue: newBlue,
      },
    };
    const source = deepMerge(defaultConfig, customConfig);
    expect(source.inputTextColor).not.toBe(newBlue);

    const newConfig = updateColorsInConfig(
      source,
      customConfig,
    );
    expect(newConfig).toEqual({
      ...defaultConfig,
      inputTextColor: newBlue,
      colorMap: {
        ...colorMap,
        blue: newBlue,
      },
    });
  });

  it('update color for a rule if its color name key has changed', () => {
    const customConfig = {
      inputTextColorName: 'red',
    };
    const source = deepMerge(defaultConfig, customConfig);
    expect(source.inputTextColor).not.toBe(colorMap.red);

    const newConfig = updateColorsInConfig(
      source,
      customConfig,
    );
    expect(newConfig).toEqual({
      ...defaultConfig,
      inputTextColorName: 'red',
      inputTextColor: colorMap.red,
    });
  });

  it('will not add new rule if a name key has no rule in default config', () => {
    const customConfig = {
      borderColorName: 'red',
    };
    const source = deepMerge(defaultConfig, customConfig);
    const newConfig = updateColorsInConfig(
      source,
      customConfig,
    );
    expect(newConfig).toEqual(source);
  });

  it('will not change color if its color name is invalid', () => {
    const customConfig = {
      inputTextColorName: 'gold',
    };
    const source = deepMerge(defaultConfig, customConfig);
    const newConfig = updateColorsInConfig(
      source,
      customConfig,
    );
    expect(newConfig).toEqual({
      ...defaultConfig,
      inputTextColorName: 'gold',
    });
  });

  it('will not override with the new color name if the code is defined in custom config', () => {
    const customConfig = {
      inputTextColorName: 'red',
      inputTextColor: '#000',
      colorMap: {
        ...colorMap,
        red: '#f0f0f0',
      },
    };
    const source = deepMerge(defaultConfig, customConfig);
    expect(source.inputTextColorName).toBe('red');

    const newConfig = updateColorsInConfig(
      source,
      customConfig,
    );
    expect(newConfig).toEqual({
      ...defaultConfig,
      inputTextColorName: 'red',
      inputTextColor: '#000',
      colorMap: {
        ...colorMap,
        red: '#f0f0f0',
      },
    });
  });
});
