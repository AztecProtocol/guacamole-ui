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

export const defaultInputOutlineColor = colorMap['grey-light'];
export const defaultInputActiveOutlineColor = colorMap['secondary-light'];
export const defaultInputValueColor = colorMap['grey-dark'];

export const darkThemeInputOutlineColor = colorMap['white-light'];
export const darkThemeInputActiveOutlineColor = colorMap.white;
export const darkThemeInputValueColor = colorMap.white;
