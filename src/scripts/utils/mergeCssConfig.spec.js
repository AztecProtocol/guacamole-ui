import mergeCssConfig from './mergeCssConfig';
import * as styleConstants from '../../config/styleConstants';

jest.mock('src/config', () => ({
  defaultTextColor: '#41BA00',
  inputTextColorName: 'blue',
  inputTextColor: '#2772CE',
  fontName: 'Arial',
  fontSizeNames: ['s', 'm', 'l'],
  colorMap: {
    red: '#F23A5B',
    blue: '#2772CE',
    green: '#41BA00',
  },
  deviceBreakpointMap: {
    m: '960px',
    s: '768px',
    xs: '480px',
  },
  minDeviceWidthXs: '480px',
  minDeviceWidthS: '768px',
  minDeviceWidthM: '960px',
}));

describe('mergeCssConfig', () => {
  it('merge css config with default config', () => {
    const newConfig = mergeCssConfig({
      inputTextColor: '#aeaeae',
      colorMap: {
        red: '#f0f0f0',
      },
      fontSizeNames: ['xs', 's'],
    });

    expect(newConfig).toEqual({
      defaultTextColor: '#41BA00',
      inputTextColorName: 'blue',
      inputTextColor: '#aeaeae',
      fontName: 'Arial',
      colorMap: {
        red: '#f0f0f0',
        blue: '#2772CE',
        green: '#41BA00',
      },
      fontSizeNames: ['xs', 's'],
      deviceBreakpointMap: {
        m: '960px',
        s: '768px',
        xs: '480px',
      },
      minDeviceWidthXs: '480px',
      minDeviceWidthS: '768px',
      minDeviceWidthM: '960px',
      ...styleConstants,
    });
  });

  it('update layout related rules if deviceBreakpointMap has changed', () => {
    const newConfig = mergeCssConfig({
      deviceBreakpointMap: {
        m: '1220px',
        xs: '350px',
      },
    });

    expect(newConfig).toEqual({
      defaultTextColor: '#41BA00',
      inputTextColorName: 'blue',
      inputTextColor: '#2772CE',
      fontName: 'Arial',
      fontSizeNames: ['s', 'm', 'l'],
      colorMap: {
        red: '#F23A5B',
        blue: '#2772CE',
        green: '#41BA00',
      },
      deviceBreakpointMap: {
        m: '1220px',
        s: '768px',
        xs: '350px',
      },
      minDeviceWidthXs: '350px',
      minDeviceWidthS: '768px',
      minDeviceWidthM: '1220px',
      ...styleConstants,
    });
  });

  it('update color if the code has changed', () => {
    const newBlue = '#2772CE';
    const newConfig = mergeCssConfig({
      colorMap: {
        blue: newBlue,
      },
    });

    expect(newConfig).toEqual({
      defaultTextColor: '#41BA00',
      inputTextColorName: 'blue',
      inputTextColor: newBlue,
      fontName: 'Arial',
      fontSizeNames: ['s', 'm', 'l'],
      colorMap: {
        red: '#F23A5B',
        blue: newBlue,
        green: '#41BA00',
      },
      deviceBreakpointMap: {
        m: '960px',
        s: '768px',
        xs: '480px',
      },
      minDeviceWidthXs: '480px',
      minDeviceWidthS: '768px',
      minDeviceWidthM: '960px',
      ...styleConstants,
    });
  });
});
