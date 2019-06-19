export const camelToKebabCase = str => str
  .replace(/([A-Z])/g, '-$1')
  .toLowerCase()
  .replace(/^(-)/, '');

export const isSassValue = (val) => {
  const strVal = `${val}`;
  return !!(strVal.match(/^(.+\s)?[0-9]+(px|%)?(\s.+)?$/)
    || strVal.match(/#(?:[0-9a-f]{3}){1,2}(\s.+)?$/i)
    || strVal.match(/^(rgb(a)?|url)/)
    || strVal.match(/'|"|,/));
};

const formatValue = val => (!isSassValue(val) && `'${val}'`) || `${val}`;

export default function jsToSass(source) {
  let sass = '';
  Object.keys(source).forEach((jsKey) => {
    const cssKey = camelToKebabCase(jsKey);
    if (typeof source[jsKey] === 'function') return;

    let value = source[jsKey];
    if (typeof value === 'object') {
      let valueArr = [];
      if (Array.isArray(value)) {
        valueArr = source[jsKey].map(formatValue);
      } else {
        Object.keys(source[jsKey]).map(key => valueArr.push(`'${camelToKebabCase(key)}':${formatValue(value[key])}`));
      }
      value = `(${valueArr.join(',')})`;
    } else {
      value = formatValue(value);
    }

    sass += `$${cssKey}: ${value.replace(/"/g, "'")};\n`;
  });

  return sass;
}
