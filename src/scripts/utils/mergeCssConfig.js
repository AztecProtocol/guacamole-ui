import source from 'src/config';
import * as styleConstants from '../../config/styleConstants';
import deepMerge from './deepMerge';
import updateColorsInConfig from './updateColorsInConfig';

const capitalize = text => `${text[0].toUpperCase()}${text.substr(1).toLowerCase()}`;

export default function mergeCssConfig(theme) {
  let config = {
    ...deepMerge(source, theme),
    ...styleConstants, // values defined in this file can't be overwritten by user
  };

  const {
    deviceBreakpointMap,
  } = theme || {};

  if (deviceBreakpointMap) {
    Object.keys(deviceBreakpointMap).forEach((key) => {
      config[`minDeviceWidth${capitalize(key)}`] = deviceBreakpointMap[key];
    });
  }

  config = updateColorsInConfig(
    config,
    theme,
  );

  return config;
}
