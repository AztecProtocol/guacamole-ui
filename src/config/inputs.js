import {
  colorMap,
} from './colors';

export const inputSizeMap = {
  xs: '24px',
  s: '28px',
  m: '32px',
  l: '40px',
};

export const inputFontSizeKeyMap = {
  xs: 'xxs',
  s: 'xxs',
  m: 'xs',
  l: 's',
};

export const inputStatusColorMap = {
  error: colorMap.red,
  focus: colorMap['secondary-light'],
};

export const inputBorderWidth = '1px';

export const defaultInputBgColor = colorMap.white;
export const defaultInputOutlineColor = colorMap['grey-light'];
export const defaultInputActiveBgColor = colorMap.white;
export const defaultInputActiveOutlineColor = colorMap['secondary-light'];
export const defaultInputValueColor = colorMap['grey-dark'];
export const defaultInputPlaceholderColor = colorMap['grey-light'];

export const darkInputBgColor = 'rgba(255,255,255,0)';
export const darkInputOutlineColor = colorMap['white-light'];
export const darkInputActiveBgColor = 'rgba(255,255,255,0)';
export const darkInputActiveOutlineColor = colorMap.white;
export const darkInputValueColor = colorMap.white;
export const darkInputPlaceholderColor = colorMap['white-lighter'];

export const inlineInputBgColor = colorMap['grey-lightest'];
export const inlineInputActiveBgColor = colorMap['grey-lightest'];
export const inlineInputActiveOutlineColor = colorMap['secondary-light'];
export const inlineInputValueColor = colorMap['grey-dark'];
export const inlineInputPlaceholderColor = colorMap['grey-light'];
