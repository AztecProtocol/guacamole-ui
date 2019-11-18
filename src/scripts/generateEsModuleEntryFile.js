import path from 'path';
import fs from 'fs';
import {
  isFile,
} from './utils/fs';
import {
  errorLog,
  successLog,
} from './utils/log';

export default async function generateEsModuleEntryFile() {
  const entryFilePath = path.resolve(__dirname, '../index.js');
  const destFilePath = path.resolve(__dirname, '../../dist/guacamole.js');

  const modules = [];
  let fileContent = fs.readFileSync(entryFilePath, 'utf8');
  fileContent = fileContent.replace(/\s{1,}/g, ' ');
  fileContent.replace(/import ([a-z]{1,}) from '\.((\/[a-z]+){1,})';/ig, (_, $0, $1) => {
    const isJsFile = isFile(path.resolve(__dirname, `..${$1}.jsx`));
    modules.push(`export { default as ${$0} } from '.${$1}${!isJsFile ? '/index' : ''}.js';`);
  });

  const esModuleFileContent = `${modules.join('\n')}\n`;

  await fs.writeFile(destFilePath, esModuleFileContent, (error) => {
    if (error) {
      errorLog(error);
      process.exit(1);
    } else {
      successLog(
        'ES Modules entry file created',
        `  path: ${destFilePath}`,
      );
    }
  });
}
