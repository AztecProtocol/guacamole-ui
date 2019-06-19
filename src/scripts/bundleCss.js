import webpack from 'webpack';
import formatWebpackMessages from 'react-dev-utils/formatWebpackMessages';
import MemoryFS from 'memory-fs';
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import webpackConfig from './generateCssWebpackConfig';
import {
  log,
  successLog,
  warnLog,
  logEntries,
} from './utils/log';

process.env.NODE_ENV = 'production';

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
    mfs.readdirSync(outputPath).forEach((filename) => {
      if (filename.endsWith('.js')) return;
      const filepath = path.join(outputPath, filename);
      fs.writeFileSync(filepath, mfs.readFileSync(filepath));
    });

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
      logEntries([
        filename,
        variablesFilename,
        '',
        chalk.grey(`path: ${outputPath}`),
      ]);
    }
  });
}
