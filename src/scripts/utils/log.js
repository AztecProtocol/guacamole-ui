/* eslint-disable no-console */
import chalk from 'chalk';

function formatLog(title, ...rest) {
  console.log(title);
  if (rest.length > 0) {
    console.log(...rest.map((msg) => chalk.gray(msg)));
  }
  console.log('');
}

export function successLog(...args) {
  const [message, ...rest] = args;
  formatLog(chalk.green(message), ...rest);
}

export function warnLog(...args) {
  const [message, ...rest] = args;
  formatLog(chalk.yellow.bold(` ${message} `), ...rest);
}

export function errorLog(...args) {
  const [message, ...rest] = args;
  formatLog(chalk.white.bgRed.bold(` ${message} `), ...rest);
}

export function log(...args) {
  formatLog(...args);
}

export function logEntries(files) {
  log(`${files.map((file) => `  ${file}`).join('\n')}`);
}

export default log;
