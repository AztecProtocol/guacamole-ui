"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.safeReaddirSync = exports.copyFolder = exports.copyFile = exports.ensureDirectory = exports.isFile = exports.isDirectory = void 0;

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var isDirectory = function isDirectory(dest) {
  try {
    var stats = _fs["default"].statSync(dest);

    return stats.isDirectory();
  } catch (err) {
    return false;
  }
};

exports.isDirectory = isDirectory;

var isFile = function isFile(dest) {
  try {
    var stats = _fs["default"].statSync(dest);

    return stats.isFile();
  } catch (err) {
    return false;
  }
};

exports.isFile = isFile;

var ensureDirectory = function ensureDirectory(dest) {
  if (!isDirectory(dest)) {
    _fs["default"].mkdirSync(dest);
  }
};

exports.ensureDirectory = ensureDirectory;

var copyFile = function copyFile(src, dest) {
  return new Promise(function (resolve) {
    var readStream = _fs["default"].createReadStream(src);

    readStream.on('error', function (err) {
      return resolve({
        err: err,
        src: src,
        dest: dest
      });
    });
    readStream.on('end', function () {
      return resolve({
        src: src,
        dest: dest
      });
    });
    readStream.pipe(_fs["default"].createWriteStream(dest));
  });
};

exports.copyFile = copyFile;

var copyFolder = function copyFolder(src, dest) {
  return new Promise(
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(resolve) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // eslint-disable-line no-async-promise-executor
              ensureDirectory(dest);
              _context.next = 3;
              return Promise.all(_fs["default"].readdirSync(src).map(function (name) {
                var srcPath = _path["default"].join(src, name);

                var destPath = _path["default"].join(dest, name);

                if (isDirectory(srcPath)) {
                  return copyFolder(srcPath, destPath);
                }

                return copyFile(srcPath, destPath);
              }));

            case 3:
              resolve({
                src: src,
                dest: dest
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
};

exports.copyFolder = copyFolder;

var safeReaddirSync = function safeReaddirSync(dir) {
  try {
    var files = _fs["default"].readdirSync(dir);

    return files || [];
  } catch (err) {
    return [];
  }
};

exports.safeReaddirSync = safeReaddirSync;