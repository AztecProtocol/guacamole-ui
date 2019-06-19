const sass = require('node-sass');
const path = require('path');

const srcDir = path.resolve(__dirname, '../../src');

module.exports = function preprocessCss(data, filename) {
  const dirLevel = path.relative(filename, srcDir);
  const result = sass.renderSync({
    data: `@import "${dirLevel.replace(/\.\.$/, 'styles/variables')}"; ${data}`,
    file: filename,
  }).css;

  return result.toString('utf8');
};
