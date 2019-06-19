import loaderUtils from 'loader-utils';
import jsToSass from '../utils/jsToSass';

export default function jsToSassLoader(content) {
  const {
    entry,
  } = loaderUtils.getOptions(this) || {};
  this.addDependency(entry);
  const fileContent = require(entry).default; // eslint-disable-line
  if (typeof fileContent !== 'object' || Array.isArray(fileContent)) {
    return content;
  }

  return [jsToSass(fileContent), content].join('\n');
}
