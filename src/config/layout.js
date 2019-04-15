export const defaultSize = '8px';

export const deviceBreakpointMap = {
  l: '2000px',
  m: '1248px',
  s: '960px',
  xs: '767px',
};

export const deviceBreakpoints = Object.keys(deviceBreakpointMap);

export const maxDeviceWidthL = deviceBreakpointMap.l;
export const maxDeviceWidthM = deviceBreakpointMap.m;
export const maxDeviceWidthS = deviceBreakpointMap.s;
export const maxDeviceWidthXs = deviceBreakpointMap.xs;

export const maxGridColumns = 12;

export const spacingMap = {
  xxs: '2px',
  xs: '4px',
  s: '8px',
  m: '12px',
  l: '16px',
  xl: '24px',
  xxl: '36px',
};

export const sizeKeys = ['0', ...Object.keys(spacingMap)];

export const defaultPageSpacings = {
  xl: 'xl',
  l: 'l',
  m: 'l',
  s: 'l',
  xs: 'l',
};

export const defaultPageSpacingKeyXl = defaultPageSpacings.xl;
export const defaultPageSpacingKeyL = defaultPageSpacings.l;
export const defaultPageSpacingKeyM = defaultPageSpacings.m;
export const defaultPageSpacingKeyS = defaultPageSpacings.s;
export const defaultPageSpacingKeyXs = defaultPageSpacings.xs;

export const defaultSpacingKeyXl = 'xl';
export const defaultSpacingKeyL = 'xl';
export const defaultSpacingKeyM = 'l';
export const defaultSpacingKeyS = 'l';
export const defaultSpacingKeyXs = 'm';
