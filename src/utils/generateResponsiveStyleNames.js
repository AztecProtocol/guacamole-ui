import {
  deviceBreakpointKeys,
  defaultDeviceBreakpointKey,
} from '../config/styleConstants';

const defaultValidation = () => true;
const notEmptyString = v => v !== '';

export default function generateResponsiveStyleNames(
  prefix,
  sizes,
  validation = defaultValidation,
) {
  const sizeMap = typeof sizes !== 'object'
    ? {
      [defaultDeviceBreakpointKey]: `${sizes}`,
    }
    : sizes;

  return deviceBreakpointKeys
    .filter(key => key in sizeMap && validation(sizeMap[key]))
    .map(key => [
      prefix,
      prefix ? '-' : '',
      key !== defaultDeviceBreakpointKey ? key : '',
      prefix || key !== defaultDeviceBreakpointKey ? '-' : '',
      sizeMap[key],
    ].join(''));
}

export {
  notEmptyString,
};
