/**
 * fsMate A modular collection of file system utilities for Node.js
 * https://github.com/jsvibe/fsMate
 * 
 * @author Indian Modassir
 * 
 * Date: 26-07-2025 11:36 PM
 */
const process = require("process");
const path = require("path");
const fs = require("fs");
const {sprint} = require("printfy");
const crypto = require("crypto");

const arr = [];
const slice = arr.slice;
const concat = arr.concat;

/* fsMate */
const fsMate = {};

/**
 * Safely iterates over an iterable or any value
 * 
 * @param {*} obj The value to iterate
 * @param {Function} callback Function to call on each item
 */
function safeEach(obj, callback) {
  let i;
  obj = obj && typeof obj === "object" && isFunction(obj[Symbol.iterator])
    ? obj : [obj];

  for(i in obj) {
    callback(obj[i], i, obj);
  }
}

/**
 * Reverses the characters in a string.
 * 
 * @param {string} str The string to reverse.
 * @returns {string} The reversed string.
 */
function strrev(str) {
  return str.split("").reverse().join("");
}

/**
 * Checks whether the provided argument is a function.
 * 
 * @param {*} obj The value to test.
 * @returns {boolean} Returns true if the input is a function, false otherwise.
 */
function isFunction(obj) {
  return typeof obj === "function";
}

/**
 * Translate characters or replace substrings
 * 
 * @param {string} str The input string to translate.
 * @param {string} from A string containing characters to be replaced.
 * @param {string} to A string containing replacement characters
 * @returns {string} The translated string.
 */
function strtr(str, from, to) {
  let index, i = 0, result = "";
  for (; i < str.length; i++) {
    index = from.indexOf(str[i]);
    result += index !== -1 && to[index] || str[i];
  }
  return result;
}

/**
 * Asynchronously processes each item in an object or iterable using a callback
 * 
 * @param {*} obj An object or iterable to loop through.
 * @param {Function} callback Function called per item.
 * @returns {Promise<any>} Resolves or rejects via callback.
 */
function safeAsyncEach(obj, callback) {
  return new Promise(function(resolve, reject) {
    safeEach(obj, function(value, i, obj) {
      callback.call(fsMate, resolve, reject, value, i, obj);
    });
  });
}

/**
 * Dynamically invokes a Node.js 'fs' module method in either async or sync mode,
 * depending on whether a callback function is provided.
 * 
 * @param {string} prop The name of the 'fs' method
 * @param {Array}  args Arguments to pass to the method.
 * @returns {*} The result of the fs method call (either async or sync).
 */
function AutoSync(prop) {
  const args = slice.call(arguments, 1);
  const callback = args.pop();
  
  // Handle: Callback/Sync
  return isFunction(callback) ? fs[prop].apply(null, concat.call(args, callback)) : fs[prop + "Sync"].apply(null, args);
}

/**
 * Generates a temporary, obfuscated file or directory name using a given prefix.
 * 
 * @param {string} prefix Base directory for the temporary name.
 * @returns {string} A unique, safe temporary file/directory path.
 */
fsMate.tmpName = function(prefix) {
  return sprint("%s/.!%s", prefix, strrev(strtr(crypto.randomBytes(2).toString("base64"), "/=", "-!")));
};

fsMate.AutoSync = AutoSync;
fsMate.fs = fs;

/**
 * Tells whether the filename is a regular file
 * 
 * @param {PathLike} path Path to the file.
 * @param {Function} callback 
 */
fsMate.isFile = function(path, callback) {
  try {
    return isFunction(callback) ? fs.stat(path, function(e, stats) {
      !e && stats.isFile() && callback(true);
    }) : fs.statSync(path).isFile();
  } catch(e) {
    return false;
  }
};

/**
 * Tells whether the filename is a directory
 * 
 * @param {PathLike} path Path to the dir.
 * @param {Function} callback 
 */
fsMate.isDir = function(path, callback) {
  try {
    return isFunction(callback) ? fs.stat(path, function(e, stats) {
      !e && stats.isDirectory() && callback(true);
    }) : fs.statSync(path).isDirectory();
  } catch(e) {
    return false;
  }
};

/**
 * 
 * @param {PathLike} path 
 * @param {*} mode 
 * @param {Function} callback 
 * @returns 
 */
fsMate.access = function(path, mode, callback) {
  try {
    return AutoSync("access", path, mode, callback), true;
  } catch (e) {
    return false
  }
};

/**
 * Tells whether a file or a dir exists and is readable
 * 
 * @param {PathLike} path Path to the file or directory.
 * @param {Function} callback 
 * @returns 
 */
fsMate.isReadable = function(path, callback) {
  return this.access(path, fs.constants.R_OK, callback);
};

/**
 * Tells whether the filename is writable
 * 
 * @param {PathLike} path The filename being checked.
 * @param {Function} callback 
 * @returns 
 */
fsMate.isWritable = function(path, callback) {
  return this.access(path, fs.constants.W_OK, callback);
};

/**
 * Tells whether the filename is executable
 * 
 * @param {PathLike} path Path to the file.
 * @param {Function} callback 
 */
fsMate.isExecutable = function(path, callback) {
  return this.access(path, fs.constants.X_OK, callback);
};

/**
 * Creates a directory recursively.
 * 
 * @param {PathLike|PathLike[]} paths 
 * @param {} mode
 * @param {Function} callback 
 * @returns {Promise<any>} Resolves or rejects via callback.
 */
fsMate.mkdir = function(paths, mode = 0o777) {
  if (isFunction(mode)) {
    callback = mode || callback;
    mode = 0o777;
  }

  return safeAsyncEach(paths, function(resolve, reject, path) {
    fs.mkdir(path, {recursive: true, mode}, function(error, path) {
      error ? reject(error) : resolve(path);
    });
  });
};

/**
 * 
 * @param {PathLike|PathLike[]} paths 
 * @param {boolean} override
 * @returns {Promise<any>} Resolves or rejects via callback.
 */
fsMate.mkFile = function(paths, override = false) {
  return safeAsyncEach(paths, function(resolve, reject, path) {
    if (!override && this.isFile(path)) {
      return;
    }

    fs.open(path, 'w', function(error, fd) {
      error || fd == null ? reject(error) : resolve(fd);
    });
  });
};

/**
 * Copies a file.
 * 
 * If the target file is older than the origin file, it's always overwritten.
 * If the target file is newer, it is overwritten only when the
 * override option is set to true.
 * 
 * @param {PathLike} originPath 
 * @param {PathLike} targetPath 
 * @param {boolean} override 
 * @returns {Promise<any>} Resolves or rejects via callback.
 */
fsMate.copy = function(originPath, targetPath, override = false) {
  return new Promise(function(resolve, reject) {
    if (!fsMate.isFile(originPath)) {
      return reject(sprint(
        "Failed to copy [%s] because file does not exist.",
        originPath
      ));
    }

    if (!override && fsMate.isFile(targetPath)) {
      resolve(targetPath);
      return;
    }

    fsMate.mkdir(path.dirname(targetPath)).finally(function() {
      const source = fs.createReadStream(originPath);
      const dest = fs.createWriteStream(targetPath);
      
      source.on("error", reject);
      dest.on("error", reject);
      source.pipe(dest).on("finish", resolve).on("error", reject);
    }).catch(reject);
  });
};

/**
 * Mirrors a directory to another.
 * 
 * Copies files and directories from the origin directory into the target directory. By default:
 * 
 * - existing files in the target directory will be overwritten,
 *   except if they are newer (see the `override` option)
 * - files in the target directory that do not exist in the source directory will not be deleted
 * 
 * @param {PathLike} originDir 
 * @param {PathLike} targetDir 
 * @param {boolean} override 
 * @returns {Promise<any>} Resolves or rejects via callback.
 */
fsMate.mirror = function(originDir, targetDir, override = false) {
  return new Promise(function(resolve, reject) {
    if (!fsMate.isDir(originDir)) {
      return reject(sprint(
        "The origin directory specified [%s] was not found.",
        originDir
      ));
    }

    fs.readdir(originDir, {recursive: true}, function(error, buffers) {
      if (error) {
        return reject(error);
      }

      let buffer, copyPath, subPath,
        length = buffers.length,
        i = 0;

      for(; i < length; i++) {
        buffer = buffers[i];
        copyPath = path.join(targetDir, buffer);
        subPath = path.join(originDir, buffer);
        
        if (fsMate.isDir(subPath)) {
          fsMate.mirror(subPath, copyPath);
          fsMate.mkdir(copyPath);
        } else if (fsMate.isFile(subPath)) {
          fsMate.copy(subPath, copyPath, override);
        } else {
          reject(sprint("Unable to guess [%s] file type.", buffer));
        }
      }
    });
  });
};

/* EXPORT */
module.exports = fsMate;