import webpack from 'webpack';
import formatWebpackMessages from 'react-dev-utils/formatWebpackMessages';
import {
  log,
  successLog,
  warnLog,
} from 'src/scripts/utils/log';
import webpackConfig from '../../webpack.config';

process.env.NODE_ENV = 'production'; // this assures React is built in prod mode and that the Babel dev config doesn't apply.

async function bundle() {
  log('Generating minified bundle. This will take a moment...');

  await new Promise((resolve, reject) => {
    const config = webpackConfig('production');
    webpack(config).run((err, stats) => {
      const messages = formatWebpackMessages(stats.toJson({}, true));
      if (messages.errors.length) {
        return reject(new Error(messages.errors.join('\n\n')));
      }

      if (messages.warnings.length) {
        warnLog(messages.warnings.join('\n'));
      } else {
        log(`Webpack stats: ${stats}`);
        successLog("Your app is compiled in production mode in /dist. It's ready to roll!");
      }

      resolve();
    });
  });
}

export default bundle;
