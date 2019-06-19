const path = require('path');

const processRoot = process.cwd();

module.exports = {
  output: {
    path: path.join(processRoot, 'guacamole'),
    filename: 'guacamole.css',
    variablesFilename: 'guacamole-vars.scss',
  },
};
