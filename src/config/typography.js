export const defaultFontFamily = '\'Cerebri Sans\', sans-serif';
export const defaultTextSizeKey = 'xs';

export const fontSizeMap = {
  xxs: '12px',
  xs: '14px',
  s: '16px',
  m: '20px',
  l: '24px',
  xl: '32px',
  xxl: '48px',
};

export const fontSizeKeys = Object.keys(fontSizeMap);

export const lineHeightMap = {
  xxs: '18px',
  xs: '20px',
  s: '24px',
  m: '28px',
  l: '36px',
  xl: '48px',
  xxl: '64px',
};

export const fontWeightMap = {
  light: 300,
  normal: 400,
  book: 450,
  semibold: 500,
  bold: 600,
};

export const fontWeightKeys = [
  'inherit',
  ...Object.keys(fontWeightMap),
];
