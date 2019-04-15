import fs from 'fs';
import path from 'path';
import {
  copyFile,
  copyFolder,
} from '../utils/fs';
import {
  logEntries,
  errorLog,
  successLog,
} from '../utils/log';

const nameMapping = {
  './src/fonts': './dist/fonts',
  './src/assets': './dist/assets',
};

export default async function copy() {
  const root = path.resolve(__dirname, '../../');

  const promises = Object.keys(nameMapping)
    .map((from) => {
      const src = path.join(root, from);
      const to = nameMapping[from];
      if (fs.statSync(src).isFile()) {
        return copyFile(src, path.join(root, to));
      }

      const dest = path.join(root, to);
      return copyFolder(src, dest);
    });

  const result = await Promise.all(promises);
  const copiedMessages = [];
  result.forEach(({
    err,
    src,
    dest,
  }) => {
    if (err) {
      errorLog(err);
    } else {
      copiedMessages.push(`  ${path.relative(root, src)} ➔  ${path.relative(root, dest)}`);
    }
  });

  logEntries(copiedMessages);
  successLog(`${result.length} files/folders copied.`);
}
