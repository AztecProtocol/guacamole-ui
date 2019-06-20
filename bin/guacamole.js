#!/usr/bin/env node

'use strict'; // eslint-disable-line

const mri = require('mri');
const getConfig = require('../dist/scripts/utils/getConfig').default;
const bundleCss = require('../dist/scripts/bundleCss').default;
const {
  generateSassVariablesSync,
} = require('../dist/scripts/generateSassVariables');
const {
  ensureDirectory,
} = require('../dist/scripts/utils/fs');

const argv = mri(process.argv.slice(2));
const command = argv._[0];

const processRoot = process.cwd();

const configFilepath = argv.config || processRoot;
const config = getConfig(configFilepath);

function generateStyles() {
  const {
    output: {
      path: outputPath,
    },
  } = config;
  ensureDirectory(outputPath);
  generateSassVariablesSync(config);
  const customTheme = config.theme || {};
  bundleCss({
    ...config,
    ignoreFonts: !!customTheme.defaultFontFamily,
  });
}

switch (command) {
  case 'generateStyles':
    generateStyles();
    break;
  default:
    console.log(`Command '${command}' is not available.`); // eslint-disable-line no-console
}
