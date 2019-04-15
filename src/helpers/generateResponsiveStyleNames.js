import {
  deviceBreakpoints,
} from '../config/layout';

const defaultValidation = () => true;
const notEmptyString = v => v !== '';

// use this for config that has xl key before we change our default size to xl
export const responsiveStyleConfigAdaptor = value =>
  (typeof value !== 'object' && {
    xl: `${value}`,
  }) || value;

export default function generateResponsiveStyleNames(
  prefix,
  sizes,
  validation = defaultValidation,
) {
  const sizeMap = typeof sizes !== 'object' ? {
    m: `${sizes}`,
  } : sizes;

  return deviceBreakpoints
    .filter(key => key in sizeMap && validation(sizeMap[key]))
    .map(key => `${prefix}${(prefix && '-') || ''}${key}-${sizeMap[key]}`);
}

export {
  notEmptyString,
};
