import webpack from 'webpack';
import formatWebpackMessages from 'react-dev-utils/formatWebpackMessages';
import MemoryFS from 'memory-fs';
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import webpackConfig from './generateCssWebpackConfig';
import {
  ensureDirectory,
} from './utils/fs';
import {
  log,
  successLog,
  warnLog,
  logEntries,
} from './utils/log';

process.env.NODE_ENV = 'production';

const copyFilesFromMemory = (mfs, outputPath) => {
  mfs.readdirSync(outputPath).forEach((filename) => {
    if (filename.endsWith('.js')) return;
    const filepath = path.join(outputPath, filename);
    if (mfs.statSync(filepath).isDirectory()) {
      ensureDirectory(filepath);
      copyFilesFromMemory(mfs, filepath);
    } else {
      fs.writeFileSync(filepath, mfs.readFileSync(filepath));
    }
  });
};

export default function bundleCss(webpackOptions = {}) {
  log('Generating minified css. This will take a moment...');

  const config = webpackConfig(webpackOptions);
  const compiler = webpack(config);
  const mfs = new MemoryFS();
  compiler.outputFileSystem = mfs;
  compiler.run((err, stats) => {
    const messages = formatWebpackMessages(stats.toJson({}, true));
    if (messages.errors.length) {
      throw new Error(messages.errors.join('\n\n'));
    }

    const outputPath = config.output.path;
    copyFilesFromMemory(mfs, outputPath);

    if (messages.warnings.length) {
      warnLog(messages.warnings.join('\n'));
    } else {
      const {
        output: {
          filename,
          variablesFilename,
        },
      } = webpackOptions;
      successLog('Your custom style files are compiled successfully!');
      const outputFiles = [
        filename,
        variablesFilename,
      ];
      if (!webpackOptions.ignoreFonts) {
        outputFiles.push('fonts/');
      }
      logEntries([
        ...outputFiles,
        '',
        chalk.grey(`path: ${outputPath}`),
      ]);
    }
  });
}
