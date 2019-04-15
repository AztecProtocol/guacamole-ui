export const colorMap = {
  primary: 'rgb(18,38,63)',
  'primary-light': 'rgba(18,38,63, 0.8)',
  'primary-lighter': 'rgba(18,38,63, 0.5)',
  'primary-lightest': 'rgba(18,38,63, 0.1)',

  black: '#000000',
  'grey-darker': 'rgba(0, 0, 0, 0.85)',
  'grey-dark': 'rgba(0, 0, 0, 0.7)',
  grey: 'rgba(0, 0, 0, 0.45)',
  'grey-light': 'rgba(0, 0, 0, 0.2)',
  'grey-lighter': 'rgba(0, 0, 0, 0.1)',
  'grey-lightest': '#F9fbfd',

  white: '#FFFFFF',
  'white-light': 'rgba(255, 255, 255, 0.85)',
  'white-lighter': 'rgba(255, 255, 255, 0.5)',
  'white-lightest': 'rgba(255, 255, 255, 0.1)',

  secondary: 'rgb(74,144,226)',
  'secondary-light': 'rgba(74, 144, 226, 0.7)',
  'secondary-lighter': 'rgba(74,144,226, 0.3)',
  'secondary-lightest': 'rgba(74,144,226, 0.1)',

  red: '#F23A5B',
  green: '#1BD1A6',
  blue: '#1766F0',
  yellow: '#fff5cc',
};

export const darkBackgroundColors = [
  'primary',
  'primary-light',
  'primary-lighter',
  'secondary',
  'secondary-light',
  'black',
  'grey-darker',
  'grey-dark',
  'grey',
  'red',
  'blue',
  'green',
  'white-lightest',
];

export const colorNames = Object.keys(colorMap);

export const backgroundNames = colorNames;

export const textColorNames = [...colorNames, 'default', 'label'];

export const defaultShadowColor = colorMap['grey-lighter'];

export const defaultBorderColorKey = 'grey-lighter';
export const defaultBorderColor = colorMap[defaultBorderColorKey];

export const defaultHoverBackgroundColor = colorMap['grey-lightest'];

export const defaultTextColorKey = 'grey-darker';
export const defaultTextColor = colorMap[defaultTextColorKey];

export const defaultLabelColorKey = 'grey';
export const defaultLabelColor = colorMap[defaultLabelColorKey];

export const defaultLinkColorKey = 'secondary';
export const defaultLinkColor = colorMap[defaultLinkColorKey];

export const overlayThemeBgMap = {
  primary: 'primary-lightest',
  secondary: 'secondary-lightest',
  white: 'white-lighter',
};

export const svgProgressThemeBgMap = {
  primary: 'primary-lightest',
  secondary: 'secondary-lightest',
  white: 'white-lighter',
};

export const overlayThemeNames = Object.keys(overlayThemeBgMap);

export const defaultTextColorMap = {
  default: defaultTextColor,
  label: defaultLabelColor,
};
