import path from 'path';
import {
  isFile,
} from './fs';
import {
  errorLog,
} from './log';
import deepMerge from './deepMerge';
import defaultConfig from '../../../guacamole.config';

const CONFIG_FILE_NAME = 'guacamole.config.js';

export default function getConfig(configFilepath) {
  let config = defaultConfig;

  if (configFilepath) {
    const configFileDest = [
      configFilepath,
      path.join(configFilepath, CONFIG_FILE_NAME),
    ].find(filepath => isFile(filepath));

    if (configFileDest) {
      const processRoot = process.cwd();
      const configFileName = path.resolve(processRoot, configFileDest);

      try {
        const customConfig = require(configFileName); // eslint-disable-line
        config = deepMerge(config, customConfig);
      } catch (error) {
        errorLog(
          'Cannot require file\n',
          `path: ${configFileName}\n`,
          error,
        );
      }
    }
  }

  return config;
}
