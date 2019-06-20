"use strict";

var md5 = require('md5');

module.exports = function generateCssName(resourcePath, localName) {
  var filename = resourcePath.replace(/.+\//, '').replace(/\.s?css$/, '');
  var relativePath = resourcePath.split('src/components').pop();
  var hash = md5("".concat(localName, "_").concat(relativePath)).slice(0, 8);
  return "".concat(filename, "-").concat(hash);
};