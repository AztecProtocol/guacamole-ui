"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = generateEsModuleEntryFile;

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _fs2 = require("./utils/fs");

var _log = require("./utils/log");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function generateEsModuleEntryFile() {
  return _generateEsModuleEntryFile.apply(this, arguments);
}

function _generateEsModuleEntryFile() {
  _generateEsModuleEntryFile = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var entryFilePath, destFilePath, modules, fileContent, esModuleFileContent;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            entryFilePath = _path["default"].resolve(__dirname, '../index.js');
            destFilePath = _path["default"].resolve(__dirname, '../../dist/guacamole.js');
            modules = [];
            fileContent = _fs["default"].readFileSync(entryFilePath, 'utf8');
            fileContent = fileContent.replace(/\s{1,}/g, ' ');
            fileContent.replace(/import ([a-z]{1,}) from '\.((\/[a-z]+){1,})';/ig, function (_, $0, $1) {
              var isJsFile = (0, _fs2.isFile)(_path["default"].resolve(__dirname, "..".concat($1, ".jsx")));
              modules.push("export { default as ".concat($0, " } from '.").concat($1).concat(!isJsFile ? '/index' : '', ".js';"));
            });
            esModuleFileContent = "".concat(modules.join('\n'), "\n");
            _context.next = 9;
            return _fs["default"].writeFile(destFilePath, esModuleFileContent, function (error) {
              if (error) {
                (0, _log.errorLog)(error);
                process.exit(1);
              } else {
                (0, _log.successLog)('ES Modules entry file created', "  path: ".concat(destFilePath));
              }
            });

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _generateEsModuleEntryFile.apply(this, arguments);
}