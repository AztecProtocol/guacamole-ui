const md5 = require('md5');

module.exports = function generateCssName(resourcePath, localName) {
  const filename = resourcePath.replace(/.+\//, '').replace(/\.s?css$/, '');
  const relativePath = resourcePath.split('src/components').pop();
  const hash = md5(`${localName}_${relativePath}`).slice(0, 8);

  return `${filename}-${hash}`;
};
