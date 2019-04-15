import del from 'del';
import path from 'path';
import {
  log,
  logEntries,
  errorLog,
} from '../utils/log';

export const bundles = [
  './dist/*',
];

function logResult(deleted) {
  if (deleted.length) {
    const root = path.resolve(__dirname, '../../');
    const lines = deleted.map(file => `  ${path.relative(root, file)}`);
    logEntries(lines);
    log(`${deleted.length} file${deleted.length === 1 ? '' : 's'} deleted.`);
  } else {
    log('Nothing to delete.');
  }
}

async function clean() {
  try {
    const deleted = del.sync(bundles);
    logResult(deleted);
  } catch (err) {
    errorLog(err);
  }
}

export default clean;
