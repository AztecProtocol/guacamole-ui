import {
  sizeKeys,
} from './layout';

export const roundedCornerMap = {
  none: '0',
  xxs: '2px',
  xs: '4px',
  s: '6px',
  m: '8px',
  l: '12px',
  circular: '100%',
};

export const roundedCornerKeys = Object.keys(roundedCornerMap);

export const defaultRoundedCornerKey = 'xs';

export const shadowLayerKeys = [0, 1, 2, 3];

export const imageRatioNames = [
  'square', // 1 * 1
  'classic', // 3 * 2
  'golden', // 16.18 * 10
  'landscape', // 16 * 9
  'ultra', // 2.76 * 1
];

export const shapeSizeKeys = ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'];

export const avatarSizesMap = {
  xxs: '20px',
  xs: '24px',
  s: '32px',
  m: '40px',
  l: '48px',
  xl: '56px',
  xxl: '72px',
};

export const avatarTextSizeMap = {
  xxs: 'xxs',
  xs: 'xxs',
  s: 'xxs',
  m: 'xs',
  l: 'm',
  xl: 'l',
  xxl: 'xl',
};

export const badgeSizeMap = {
  xxs: '16px',
  xs: '20px',
  s: '24px',
  m: '28px',
  l: '32px',
  xl: '36px',
  xxl: '48px',
};

export const shiftSize = (size, diff, allowZero = false) => {
  let newIndex = sizeKeys.indexOf(size) + diff;
  if (!allowZero && newIndex <= 0) {
    newIndex = 1;
  } else if (newIndex >= sizeKeys.length) {
    newIndex = sizeKeys.length - 1;
  }

  return sizeKeys[newIndex];
};
