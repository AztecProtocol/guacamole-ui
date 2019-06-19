const generateCssName = require('../../src/scripts/utils/generateCssName');

module.exports = function generateScopedName(localName, resourcePath) {
  return generateCssName(resourcePath, localName);
};
