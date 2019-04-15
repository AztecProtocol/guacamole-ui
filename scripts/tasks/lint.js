import cp from 'child_process';
import {
  isDirectory,
  isFile,
} from '../utils/fs';
import {
  log,
  successLog,
  errorLog,
} from '../utils/log';

const defaultDirectory = './src/**';

function processArgs(extraArgs) {
  let cutOffIndex = extraArgs.findIndex(a => a.match(/^--/));
  if (cutOffIndex < 0) {
    cutOffIndex = extraArgs.length;
  }

  return {
    files: extraArgs.slice(0, cutOffIndex),
    options: extraArgs.slice(cutOffIndex).filter(rule => rule !== '--'),
  };
}

async function lint(...args) {
  await new Promise((resolve) => {
    const {
      files,
      options,
    } = processArgs(args);
    const [file = defaultDirectory] = files;

    let validDirectory = true;
    let validFile;
    let targetFile = file;
    if (files.length > 1) {
      const segments = file.split('/');
      const filename = segments[segments.length - 1];
      if (filename.match(/.+\.js(x)?$/)) {
        segments.pop();
      }
      targetFile = `${segments.join('/')}/**`;
    } else if (file !== defaultDirectory && !targetFile.includes('**')) {
      validDirectory = isDirectory(file);
      validFile = isFile(file);
      if (!validDirectory && !validFile) {
        errorLog(`Cannot find file "${file}"`);
        return resolve();
      }
    }

    let logMsg;
    if (validDirectory) {
      logMsg = `Linting files in '${targetFile}'`;
    } else {
      logMsg = `Linting file "${targetFile}"`;
    }
    log(logMsg);

    const linter = cp.spawn('eslint', [
      targetFile,
      '--color',
      '--ext',
      '.js,.jsx',
      ...options,
    ]);

    linter.stdout.on('data', (data) => {
      log(`stdout:\n ${data}`);
    });

    linter.stderr.on('data', (data) => {
      log(`stderr:\n ${data}`);
    });

    linter.on('error', (error) => {
      errorLog(error);
    });

    linter.on('close', (code) => {
      switch (code) {
        case 0:
          successLog('Your code is beautiful 👍 ☕');
          break;
        case 1:
          break;
        default:
          log(`Child process exited with code ${code}`);
      }

      return resolve();
    });
  });
}

export default lint;
