import {
  deviceBreakpointKeys,
} from '../config/styleConstants';

const directions = ['top', 'right', 'bottom', 'left'];

function parseCssSizeString(sizeStr) {
  const values = sizeStr
    .trim()
    .replace(/\s+/g, ' ')
    .split(' ');

  if (values.length < 2) {
    values.push(values[0]);
  }

  if (values.length < 3) {
    values.push(values[0]);
  }

  if (values.length < 4) {
    values.push(values[1]);
  }

  const sizeMap = {};
  if (values.every((v, i) => !i || v === values[i - 1])) {
    [sizeMap.all] = values;
    values.forEach((v, i) => {
      values[i] = '';
    });
  } else {
    if (values[0] === values[2]) {
      [sizeMap.v] = values;
      values[0] = '';
      values[2] = '';
    }
    if (values[1] === values[3]) {
      [, sizeMap.h] = values;
      values[1] = '';
      values[3] = '';
    }
  }

  directions.forEach((dir, i) => {
    if (values[i] !== '') {
      sizeMap[dir] = values[i];
    }
  });

  return sizeMap;
}

function isSimpleValue(val) {
  return val.match(/^\S*$/);
}

function containSimpleValueOnly(values) {
  return deviceBreakpointKeys
    .every((key) => !values[key] || isSimpleValue(values[key]));
}

export default function parseCssSizeValues(values) {
  if (typeof values === 'string') {
    return isSimpleValue(values)
      ? { all: values }
      : parseCssSizeString(values);
  }

  if (containSimpleValueOnly(values)) {
    return {
      all: values,
    };
  }

  const sizeMap = {};
  deviceBreakpointKeys
    .filter((key) => values[key])
    .forEach((key) => {
      const sizes = parseCssSizeString(values[key]);
      Object.keys(sizes).forEach((dir) => {
        if (!sizeMap[dir]) {
          sizeMap[dir] = {};
        }
        sizeMap[dir][key] = sizes[dir];
      });
    });

  return sizeMap;
}
