import {
  deviceBreakpoints,
  defaultDeviceBreakpoint,
} from '../config/layout';

const defaultValidation = () => true;
const notEmptyString = v => v !== '';

export default function generateResponsiveStyleNames(
  prefix,
  sizes,
  validation = defaultValidation,
) {
  const sizeMap = typeof sizes !== 'object' ? {
    [defaultDeviceBreakpoint]: `${sizes}`,
  } : sizes;

  return deviceBreakpoints
    .filter(key => key in sizeMap && validation(sizeMap[key]))
    .map(key => `${prefix}${(prefix && '-') || ''}${key !== defaultDeviceBreakpoint ? key : ''}-${sizeMap[key]}`);
}

export {
  notEmptyString,
};
