/**
 * fsMate
 * A modular collection of file system utilities for Node.js
 * https://github.com/jsvibe/fsMate
 * 
 * @copyright 2025 Indian Modassir
 * @author Indian Modassir
 * 
 * Date: 02-08-2025 07:43:39 GMT+0530
 * MIT Licensed
 */
const readLine = require('readline');
const process = require('process');
const path = require('path');
const fs = require('fs');
const fs$prom = fs.promises;
const { Readable } = require('stream');
const { sprintf } = require('printfy');
const crypto = require('crypto');

/* fsMate */
const fsMate = {};

// 1MB chunks for speed & safety
const highWaterMark = 1024 ** 2;
const arr = [];
const slice = arr.slice;

{/*let CURSOR_POSITION = 0;*/}
let lastError;

// Executes a file system method safely and returns false on error
async function fs$async(method) {
  const fn = fs$prom[method] || fsMate[method];
  let output;

  lastError = '';

  try {
    output = await fn.apply(null, slice.call(arguments, 1));
    return output != null ? output : true;
  } catch(e) {
    return lastError = e, false;
  }
}

// Executes a synchronous FS method safely and returns false on error
function fs$sync(method) {
  method += 'Sync';
  const fn = fs[method] || fsMate[method];
  let output;

  lastError = '';

  try {
    output = fn.apply(null, slice.call(arguments, 1));
    return output != null ? output : true;
  } catch(e) {
    return lastError = e, false;
  }
}

// Reverses the given string
function strrev(str) {
  return str.split('').reverse().join('');
}

// Ensures the input is iterable; wraps string into an array
function iterable(obj) {
  return typeof obj === 'string' ? [obj] : obj;
}

// Iterates over items and calls the async callback for each, providing resolve/reject
function safeAsyncEach(obj, callback) {
  return new Promise(function(resolve, reject) {
    obj = iterable(obj);
    let name;

    for(name in obj) {
      callback.call(fsMate, resolve, reject, obj[name]);
    }
  });
}

// Replaces characters in 'str' based on mapping from 'from' to 'to'
function strtr(str, from, to) {
  let index, i = 0,
    result = '';

  for (; i < str.length; i++) {
    index = from.indexOf(str[i]);
    result += index > -1 && to[index] || str[i];
  }
  return result;
}

// Dynamically invokes an fs method (sync or async); throws if unsupported
function $fs(method, args, async) {
  let fn = async
    ? fs$prom[method]
    : fs[method];

  if (typeof fn !== 'function') {
    throw new Error(
      sprintf('Unsupported: [fs.%s] update node version.', method)
    );
  }
  
  return fn.apply(null, args);
};

/**
 * Generates a temporary,
 * obfuscated file or directory name using a given prefix.
 * 
 * @param {string} prefix Base directory for the temporary name.
 * @returns {string} A unique, safe temporary path.
 */
fsMate.tmpName = function(prefix) {
  return sprintf('%s/.!%s', prefix, strrev(strtr(crypto.randomBytes(2).toString('base64'), '/=', '-!')));
};

/**
 * Generates a temporary,
 * obfuscated file or directory name using a given prefix.
 * and encode filename in sha1 then convert hex format.
 * 
 * @param {string} prefix Base directory for the temporary name.
 * @param {string} suffix The file basename
 * @returns {string} A unique, safe temporary path.
 */
fsMate.tempNam = function(prefix, suffix) {
  return sprintf('%s/%s.tmp', prefix, crypto.createHash('sha1').update(suffix).digest('hex'));
};

/**
 * Tells whether the filename is a regular file
 * 
 * @param {string} path Path to the file.
 * @returns {Promise<any>} Resolves or rejects via callback.
 */
fsMate.isFile = function(path) {
  return stat(path, 'isFile');
};

/**
 * Tells whether the filename is a regular file
 * 
 * @param {string} path Path to the file.
 * @returns {boolean} Returns true if the file exists,
 * false otherwise.
 */
fsMate.isFileSync = function(path) {
  return stat(path, 'isFile', true);
};

/**
 * Tells whether the filename is a directory
 * 
 * @param {string} path Path to the dir.
 * @returns {boolean} Returns true if the dir exists,
 * false otherwise.
 */
fsMate.isDirSync = function(path) {
  return stat(path, 'isDirectory', true);
};

/**
 * Tells whether the filename is a directory
 * 
 * @param {string} path Path to the dir.
 * @returns {Promise<any>} Resolves or rejects via callback.
 */
fsMate.isDir = function(path) {
  return stat(path, 'isDirectory');
};

/**
 * Tells whether the filename is a directory
 * 
 * @param {string} path Path to the file.
 * @returns {Promise<any>} Resolves or rejects via callback.
 */
fsMate.isLink = function(path) {
  return stat(path, 'isSymbolicLink');
};

/**
 * Tells whether the filename is a symbolic link.
 * 
 * @param {string} path Path to the file.
 * @returns {boolean} Returns true if the dir exists,
 * false otherwise.
 */
fsMate.isLinkSync = function(path) {
  return stat(path, 'isSymbolicLink', true);
};

/* STAT */
function stat(path, executer, sync) {
  let execute = function(stats) {
    return executer ? stats[executer]() : stats;
  };

  try {
    lastError = '';
    return sync
      ? execute(fs.statSync(path))
      : new Promise(function (resolve, reject) {
        fs.stat(path, function (err, stats) {
          err ? reject(err) : resolve(execute(stats));
        });
      });
  } catch (e) {
    return lastError = e, false;
  }
}

/**
 * Tells whether a file or a dir exists and is readable
 * 
 * @param {string} path Path to the file or directory.
 * @returns {boolean} Returns true if the readable,
 * false otherwise.
 */
fsMate.isReadableSync = function(path) {
  return access(path, fs.constants.R_OK, true);
};

/**
 * Tells whether a file or a dir exists and is readable
 * 
 * @param {string} path Path to the file or directory.
 * @returns {Promise<any>} Resolves or rejects via callback.
 */
fsMate.isReadable = function(path) {
  return access(path, fs.constants.R_OK);
};

/**
 * Tells whether the filename is writable
 * 
 * @param {string} path Path to the file or directory.
 * @returns {boolean} Returns true if the writable,
 * false otherwise.
 */
fsMate.isWritableSync = function(path) {
  return access(path, fs.constants.W_OK, true);
};

/**
 * Tells whether the filename is writable
 * 
 * @param {string} path Path to the file or directory.
 * @returns {Promise<any>} Resolves or rejects via callback.
 */
fsMate.isWritable = function(path) {
  return access(path, fs.constants.W_OK);
};

/**
 * Tells whether the filename is executable
 * 
 * @param {string} path Path to the file or directory.
 * @returns {boolean} Returns true if the executable,
 * false otherwise.
 */
fsMate.isExecutableSync = function(path) {
  return access(path, fs.constants.X_OK, true);
};

/**
 * Tells whether the filename is executable
 * 
 * @param {string} path Path to the file or directory.
 * @returns {Promise<any>} Resolves or rejects via callback.
 */
fsMate.isExecutable = function(path) {
  return access(path, fs.constants.X_OK);
};

/* ACCESS */
function access(path, mode, sync) {
  try {
    lastError = '';
    return sync
      ? ($fs('accessSync', [path, mode]), true)
      : new Promise(function (resolve, reject) {
        $fs('access', [path, mode, function(err) {
          err ? reject(err) : resolve(!err);
        }]);
      });
  } catch (e) {
    return lastError = e, false;
  }
}

/**
 * Creates a directories recursively
 * Attempts to create the directory specified by pathname.
 * 
 * @param {string|string[]} paths 
 * @param {number} mode 
 * @returns {Promise<any>} Resolves or rejects via callback.
 */
fsMate.mkdir = function(paths, mode = 0o777) {
  return safeAsyncEach(paths, function(resolve, reject, path) {
    fs.mkdir(path, {recursive: true, mode}, function(err, path) {
      err ? reject(err) : resolve(!!path);
    });
  });
};

/**
 * Creates a directories recursively
 * Attempts to create the directory specified by pathname.
 * 
 * @param {string|string[]} paths 
 * @param {number} mode 
 */
fsMate.mkdirSync = function(paths, mode = 0o777) {
  paths = iterable(paths);
  let path;

  for(path of paths) {
    if (!this.isDirSync(path)) {
      fs.mkdirSync(path, {recursive: true, mode});
    }
  }
};

/**
 * Creates files.
 * 
 * @param {string|string[]} paths Path to file or files iterator
 * @param {boolean} overwrite true for overwrite, default false
 * @returns {Promise<any>} Resolves or rejects via callback.
 */
fsMate.mkfile = async function(paths, overwrite = false) {
  paths = iterable(paths);
  let path, fd;

  for(path of paths) {
    if (!overwrite && await fs$async('isReadable', path)) {
      throw new Error(
        sprintf('Failed to create [%s] file already exists.', path)
      );
    }

    fd = await fs$prom.open(path, 'w');
    await fd.close();
  }
};

/**
 * Checks if a file or directory exists (async).
 * Wraps fs.exists in a Promise.
 * 
 * @param {string} path Path to check.
 * @returns {Promise<any>} Resolves or rejects via callback.
 */
fsMate.exists = function(path) {
  return new Promise(function(resolve) {
    fs.exists(path, function(exists) {
      resolve(exists);
    });
  });
};

/**
 * Creates files.
 * 
 * @param {string|string[]} paths Path to file or files iterator
 * @param {boolean} overwrite true for overwrite, default false
 */
fsMate.mkfileSync = function(paths, overwrite = false) {
  paths = iterable(paths);
  let fd, path;

  for(path of paths) {
    if (!overwrite && this.isReadableSync(path)) {
      throw new Error(sprintf(
        'Cannot rename because the newPath [%s] already exists.',
        path
      ));
    }

    fd = fs.openSync(path, 'w');
    fs.closeSync(fd);
  }
};

/**
 * Sets access and modification time of file.
 * 
 * @param {string|string[]} files Path to file or files iterator
 * @param {number} mtime The modified time
 * @param {number} atime 
 */
fsMate.touchSync = function(files, mtime, atime) {
  files = iterable(files);
  let file;

  for(file of files) {
    this.mkdirSync(path.dirname(file));
    this.mkfileSync(file, true);
    if (mtime) {
      fs.utimesSync(file, atime, mtime);
    }
  }
};

/**
 * Sets access and modification time of file.
 * 
 * @param {string|string[]} files Path to file or files iterator
 * @param {number} mtime The modified time
 * @param {number} atime The 
 * @returns {Promise<any>} Resolves or rejects via callback.
 */
fsMate.touch = async function(files, mtime, atime) {
  files = iterable(files);
  let file;

  for(file of files) {
    await this.mkdir(path.dirname(file));
    await this.mkfile(file, true);
    if (mtime) {
      await fs$prom.utimes(file, atime, mtime);
    }
  }
};

/**
 * Renames a file or directory.
 * 
 * @param {string} oldPath The old file path
 * @param {string} newPath The new file path
 * @param {boolean} overwrite true for overwrite, default false
 * @returns {Promise<any>} Resolves or rejects via callback.
 */
fsMate.rename = async function(oldPath, newPath, overwrite = false) {

  if (!overwrite &&
    (await fs$async('isReadable', newPath))) {
    throw new Error(sprintf(
      'Cannot rename because the newPath [%s] already exists.',
      newPath
    ));
  }

  await fs$prom.rename(oldPath, newPath);
};

/**
 * Renames a file or directory.
 * 
 * @param {string} oldPath The old file path
 * @param {string} newPath The new file path
 * @param {boolean} overwrite true for overwrite, default false
 * @returns {boolean} Returns true if the renamed,
 * false otherwise
 */
fsMate.renameSync = function(oldPath, newPath, overwrite = false) {

  // We check that target does not exist
  if (!overwrite && this.isReadableSync(newPath)) {
    throw new Error(sprintf(
      'Cannot rename because the newPath [%s] already exists.',
      newPath
    ));
  }

  return fs$sync('rename', oldPath, newPath);
};

/**
 * Moves a file or directory.
 * 
 * @param {string} oldPath The old file path
 * @param {string} newPath The new file path
 * @param {boolean} overwrite true for overwrite, default false
 * @returns {Promise<any>} Resolves or rejects via callback.
 */
fsMate.move = async function(oldPath, newPath, overwrite = false) {
  const oldDir = path.resolve(path.dirname(oldPath));
  const newDir = path.resolve(path.dirname(newPath));

  if (path.resolve(oldDir) === path.resolve(newDir)) {
    throw new Error(sprintf(
      'Failed to move file or directory: [%s] and [%s] are the same.',
      oldDir,
      newDir
    ));
  }

  return this.rename(oldPath, newPath, overwrite);
};

/**
 * Moves a file or directory.
 * 
 * @param {string} oldPath The old file path
 * @param {string} newPath The new file path
 * @param {boolean} overwrite true for overwrite, default false
 * @returns {boolean} Returns true if the renamed,
 * false otherwise
 */
fsMate.moveSync = function(oldPath, newPath, overwrite = false) {
  const oldDir = path.resolve(path.dirname(oldPath));
  const newDir = path.resolve(path.dirname(newPath));

  if (path.resolve(oldDir) === path.resolve(newDir)) {
    throw new Error(sprintf(
      'Failed to move file or directory: [%s] and [%s] are the same.',
      oldDir,
      newDir
    ));
  }

  return this.renameSync(oldPath, newPath, overwrite);
};

/**
 * Recursively reads directory contents.
 * Supports options for deep scan, file types, and full paths.
 * 
 * @param {string} dir Path to the dir
 * @param {Object} options Scan options.
 * @returns {Promise<any>} Resolves or rejects via callback.
 */
 fsMate.scandir = async function(dir, options = {}) {
  let file, buffer, filePath,
    files = await fs$prom.readdir(dir, {withFileTypes: true}),
    {withDeepScan, withFileTypes, withFullPath} = options,
    results = arguments[2] || [];

  for(file of files) {
    buffer = file.name;
    filePath = path.join(dir, buffer);
    
    if (withFileTypes) {
      buffer = file;
    }

    if (withFullPath) {
      buffer.name ? buffer.name = filePath : buffer = filePath;
    }

    results.push(buffer);

    if (withDeepScan && file.isDirectory()) {
      await fsMate.scandir(filePath, options, results);
    }
  }

  return Promise.resolve(results);
};

/**
 * Recursively reads directory contents.
 * Supports options for deep scan, file types, and full paths.
 * 
 * @param {string} dir Path to the dir
 * @param {Object} options Scan options.
 * @returns {Array} Array of file names, Dirent objects, or full paths.
 */
fsMate.scandirSync = function(dir, options = {}) {
  let file, buffer, filePath,
    files = fs.readdirSync(dir, {withFileTypes: true}),
    {withDeepScan, withFileTypes, withFullPath} = options,
    results = arguments[2] || [];

  for(file of files) {
    buffer = file.name;
    filePath = path.join(dir, buffer);
    
    if (withFileTypes) {
      buffer = file;
    }

    if (withFullPath) {
      buffer.name ? buffer.name = filePath : buffer = filePath;
    }

    results.push(buffer);

    if (withDeepScan && file.isDirectory()) {
      fsMate.scandirSync(filePath, options, results);
    }
  }

  return results;
};

/**
 * Removes files or directories.
 * Renames directories to temp names before deletion to avoid issues.
 * 
 * @param {string|string[]} files Path to file or files iterator
 * @param {boolean} recursive Whether to remove directories recursively.
 * @returns {Promise<any>} Resolves or rejects via callback.
 */
fsMate.remove = async function(files, recursive) {
  let file, tmpName, fsIterator, origFile;

  // Reverse to delete children before parents
  files = typeof files !== 'string'
    ? files.reverse()
    : [files];

  // Take advantage of `fs.rm` if supported!
  if (fs.rm) {
    // return this.rm(files);
  }

  for(file of files) {
    if (await this.isLink(file)) {
      if (!(await fs$async('unlink', file)) || path.sep !== '\\' || (await fs$async('rmdir', file))) {
        throw lastError;
      }
    } else if (await this.isDir(file)) {
      if (!recursive) {
        tmpName = this.tmpName(path.dirname(await fs$prom.realpath(file)));

        if (await this.exists(tmpName)) {
          await this.remove([tmpName], true);
        }
        
        // Renaming temp dir [.!!oTZ], if not exists
        if (!(await this.exists(tmpName)) && (await fs$async('rename', file, tmpName))) {
          origFile = file;
          file = tmpName;
        } else {
          origFile = null;
        }
      }

      fsIterator = await this.scandir(file, {withFullPath: true});
      await this.remove(fsIterator, true);

      // Removes empty directory
      if (!(await fs$async('rmdir', file)) && (await this.exists(file)) && !recursive) {

        if (origFile && await fs$async('rename', file, origFile)) {
          file = origFile;
        }

        throw lastError;
      }

    // Removes files
    } else if (!(await fs$async('unlink', file)) && (lastError || (await this.exists(file)))) {
      throw lastError;
    }
  }
};

/**
 * Removes files or directories.
 * Renames directories to temp names before deletion to avoid issues.
 * 
 * @param {string|string[]} files Path to file or files iterator
 * @param {boolean} recursive Whether to remove directories recursively. 
 */
fsMate.removeSync = function(files, recursive) {
  let file, tmpName, fsIterator, origFile;

  // Reverse to delete children before parents
  files = typeof files !== 'string'
    ? files.reverse()
    : [files];

  // Take advantage of `fs.rm` if supported!
  if (fs.rmSync) {
    return this.rmSync(files);
  }

  for(file of files) {
    if (this.isLinkSync(file)) {
      if (!fs$sync('unlink', file) || path.sep !== '\\' || fs$sync('rmdir', file)) {
        throw lastError;
      }
    } else if (this.isDirSync(file)) {
      if (!recursive) {
        tmpName = this.tmpName(path.dirname(file));

        if (fs.existsSync(tmpName)) {
          this.removeSync([tmpName], true);
        }
        
        // Renaming temp dir [.!!oTZ], if not exists
        if (!fs.existsSync(tmpName) && fs$sync('rename', file, tmpName)) {
          origFile = file;
          file = tmpName;
        } else {
          origFile = null;
        }
      }

      fsIterator = this.scandirSync(file, {withFullPath: true});
      this.removeSync(fsIterator, true);

      // Removes empty directory
      if (!fs$sync('rmdir', file) && fs.existsSync(file) && !recursive) {

        if (origFile && fs$sync('rename', file, origFile)) {
          file = origFile;
        }

        throw lastError;
      }

    // Removes files
    } else if (!fs$sync('unlink', file) && (lastError || fs.existsSync(file))) {
      throw lastError;
    }
  }
};

/**
 * Removes files or directories asynchronously with options.
 * Renames directories to temp names before deletion to avoid issues.
 * 
 * @param {string|string[]} files Path to file or files iterator
 * @param {Object} options Removal options
 * @returns {Promise<any>} Resolves or rejects via callback.
 */
fsMate.rm = async function(files, options) {
  let file, tmpName, origFile;

  options = options || {recursive: true, force: true};
  
  // Reverse to delete children before parents
  files = typeof files !== 'string'
    ? files.reverse()
    : [files];

  for(file of files) {
    if (await this.isDir(file)) {
      tmpName = this.tmpName(path.dirname(await fs$prom.realpath(file)));

      // Renaming temp dir [.!!oTZ], if not exists
      if (!(await this.exists(tmpName)) && (await fs$async('rename', file, tmpName))) {
        origFile = file;
        file = tmpName;
      } else {
        origFile = null;
      }
    }

    try {
      // Final remove it!
      await $fs('rm', [file, options], true);
    } catch(e) {
      // Restore original folder name
      if (origFile && await fsMate.rename(file, origFile)) {
        file = origFile;
      }
      throw e;
    }
  }
};

/**
 * Removes files or directories asynchronously with options.
 * Renames directories to temp names before deletion to avoid issues.
 * 
 * @param {string|string[]} files Path to file or files iterator
 * @param {Object} options Removal options
 */
fsMate.rmSync = function(files, options) {
  let file, tmpName, origFile;

  options = options || {recursive: true, force: true};

  // Reverse to delete children before parents
  files = typeof files !== 'string'
    ? files.reverse()
    : [files];

  for(file of files) {
    if (this.isDirSync(file)) {
      tmpName = this.tmpName(path.dirname(fs.realpathSync(file)));

      // Renaming temp dir [.!!oTZ], if not exists
      if (!fs.existsSync(tmpName) && fs$sync('rename', file, tmpName)) {
        origFile = file;
        file = tmpName;
      } else {
        origFile = null;
      }
    }

    // Final remove synchronously
    $fs('rmSync', [file, options]);
  }
};

/**
 * Mirrors a directory to another.
 * 
 * Copies files and directories from the origin directory into the target directory. By default:
 * 
 * - existing files in the target directory will be overwritten,
 *   except if they are newer (see the `overwrite` option)
 * - files in the target directory that do not exist in the source directory will not be deleted
 * 
 * @param {string} originDir The origin directory path
 * @param {string} targetDir Destination path
 * @param {boolean} overwrite true for overwrite, default false
 * @returns {Promise<any>} Resolves or rejects via callback.
 */
fsMate.mirror = async function(originDir, targetDir, overwrite = false) {
  let file, fsIterator, target;

  if (!(await fs$async('isDir', originDir))) {
    throw lastError;
  }

  // Creates first directory
  await this.mkdir(targetDir);

  fsIterator = await this.scandir(originDir, {
    withDeepScan: true,
    withFullPath: true,
    withFileTypes: true
  });

  for(file of fsIterator) {
    target = path.join(targetDir, file.name.slice(originDir.length));

    if (file.isDirectory()) {
      await this.mkdir(target);
    } else if (file.isFile()) {
      await this.copy(file.name, target, overwrite);
    } else {
      throw new Error(
        sprintf('Unable to guess [%s] file type.', file.name)
      );
    }
  }
};

/**
 * Mirrors a directory to another.
 * 
 * Copies files and directories from the origin directory into the target directory. By default:
 * 
 * - existing files in the target directory will be overwritten,
 *   except if they are newer (see the `overwrite` option)
 * - files in the target directory that do not exist in the source directory will not be deleted
 * 
 * @param {string} originDir The origin directory path
 * @param {string} targetDir Destination path
 * @param {boolean} overwrite true for overwrite, default false
 */
fsMate.mirrorSync = function(originDir, targetDir, overwrite = false) {
  let file, fsIterator, target;

  this.isDirSync(originDir);
  this.mkdirSync(targetDir);

  fsIterator = this.scandirSync(originDir, {
    withDeepScan: true,
    withFullPath: true,
    withFileTypes: true
  });

  for(file of fsIterator) {
    target = path.join(targetDir, file.name.slice(originDir.length));

    if (file.isDirectory()) {
      this.mkdirSync(target);
    } else if (file.isFile()) {
      this.copySync(file.name, target, overwrite);
    } else {
      throw new Error(
        sprintf('Unable to guess [%s] file type.', file.name)
      );
    }
  }
};

/**
 * Copies a file.
 * 
 * If the target file is older than the origin file, it's always overwritten.
 * If the target file is newer, it is overwritten only when the
 * overwrite option is set to true.
 * 
 * @param {string} originFile The origin file path
 * @param {string} targetFile Destination file path
 * @param {boolean} overwrite true for overwrite, default false
 */
fsMate.copySync = function(originFile, targetFile, overwrite = false) {
  let doCopy = true;

  if (!this.isFileSync(originFile)) {
    throw lastError;
  }

  if (!overwrite && this.isFileSync(targetFile)) {
    doCopy = false;
  }

  // Creates directory
  this.mkdirSync(path.dirname(targetFile));

  if (doCopy) {
    fs.copyFileSync(originFile, targetFile);
  }
};

/**
 * Copies a file.
 * 
 * If the target file is older than the origin file, it's always overwritten.
 * If the target file is newer, it is overwritten only when the
 * overwrite option is set to true.
 * 
 * @param {string} originFile The origin file path
 * @param {string} targetFile Destination file path
 * @param {boolean} overwrite true for overwrite, default false
 * @returns {Promise<any>} Resolves or rejects via callback.
 */
fsMate.copy = async function(originFile, targetFile, overwrite = false) {
  let source, dest, doCopy = true;

  if (!(await fs$async('isFile', originFile))) {
    throw lastError;
  }

  if (!overwrite &&
    (await fs$async('isFile', targetFile))) {
    doCopy = false;
  }

  await this.mkdir(path.dirname(targetFile));

  if (doCopy) {
    return new Promise(function(resolve, reject) {
      source = $fs('createReadStream', [originFile]);
      dest = $fs('createWriteStream', [targetFile]);

      source.on("error", reject);
      dest.on("error", reject);
      source.pipe(dest).on("error", reject).on('finish', resolve);
    });
  }
};

/**
 * Empty files or directories.
 * 
 * @param {string} paths Path to file or files iterator
 * @returns {Promise<any>} Resolves or rejects via callback.
 */
fsMate.empty = async function(paths) {
  let path;
  paths = iterable(paths);

  for(path of paths) {
    if (await this.isDir(path)) {
      await this.remove(await this.scandir(path, {withFullPath: true}));
    } else if (this.isFile(path)) {
      await fs$prom.open(path, 'w');
    } else {
      throw new Error(sprintf('Unable to guess [%s] file type.', file.name));
    }
  }
};

/**
 * Empty files or directories.
 * 
 * @param {string} paths Path to file or files iterator
 */
fsMate.emptySync = function(paths) {
  let path;
  paths = iterable(paths);

  for(path of paths) {
    if (this.isDirSync(path)) {
      this.removeSync(this.scandirSync(path, {withFullPath: true}));
    } else if (this.isFileSync(path)) {
      fs.openSync(path, 'w');
    } else {
      throw new Error(sprintf('Unable to guess [%s] file type.', file.name));
    }
  }
};

/**
 * Creates a readable input stream from various data types.
 * 
 * - Converts objects to pretty-printed JSON strings.
 * - Accepts Buffer, string, number, bigint, or null/undefined.
 * - Converts strings and other primitives to Buffer for efficient streaming.
 * 
 * @param {*} data The input data to convert into a readable stream.
 * @returns A readable stream representing the input data.
 */
fsMate.createInputStream = function(data) {
  let inputStream, bufferString;

  // If the data is Uint8Array, then decode it
  if (data instanceof Uint8Array) {
    data = new TextDecoder().decode(data);
  }

  // If the data is an object, then convert it into a JSON string.
  if (typeof data === 'object' && !Buffer.isBuffer(data)) {
    try {
      data = JSON.stringify(data, null, 2);
    } catch(err) {
      throw err;
    }
  }

  // Case 1: Buffer (binary or raw data)
  if (Buffer.isBuffer(data)) {
    inputStream = Readable.from([data]);
  }

  // Case 2: String (text, bigint or binary string)
  else if (typeof data === 'string' || typeof data === 'number' || typeof data === 'bigint' || data == null) {
    // If it's a binary string, convert to buffer first for better performance
    bufferString = Buffer.from(String(data == null ? '' : data), 'utf-8');
    inputStream = Readable.from([bufferString]);
  }

  // Unsupported type
  else {
    throw new Error('Unsupported input type. Expected Buffer or string.');
  }

  return inputStream;
};

/**
 * Converts various data types to a string representation.
 *
 * - Returns an empty string for null or undefined.
 * - Converts Buffer data to UTF-8 string.
 * - Serializes objects to pretty-printed JSON.
 * - Converts strings, numbers, and bigints to string.
 * - Throws an error for unsupported types.
 * 
 * @param {*} data The input data to stringify.
 * @returns {string} The string representation of the input data.
 */
fsMate.stringify = function(data) {

  // Return an empty string if data is null or undefined
  if (data == null) {
    return '';
  }

  // Case 1: Buffer (binary or raw data)
  if (Buffer.isBuffer(data)) {
    data = data.toString('utf-8');
  }

  // If the data is Uint8Array, then decode it
  else if (data instanceof Uint8Array) {
    data = new TextDecoder().decode(data);
  }

  // Case 2: If the data is an object, then convert it into a JSON string.
  else if (typeof data === 'object') {
    try {
      data = JSON.stringify(data, null, 2);
    } catch(err) {
      throw err;
    }
  }

  // Case 3: String (text, bigint or binary string)
  else if (typeof data === 'string' || typeof data === 'number' || typeof data === 'bigint') {
    data = data.toString();
  }
  
  // Unsupported type
  else {
    throw new Error('Unsupported data type.');
  }

  return data;
}

/**
 * Reads a file asynchronously and optionally parses its content as JSON.
 * Supports options for the read stream, including chunk size.
 * 
 * @param {string} filePath Path to the file to read.
 * @param {Object} options Read stream options or parsed flag.
 * @param {boolean} parsed If true, parse the file content as JSON.
 * @returns {Promise<any>} Resolves or rejects via callback.
 */
fsMate.readFile = function(filePath, options, parsed) {
  return new Promise(function(resolve, reject) {
    let readStream, data = '';

    if (typeof options === 'boolean') {
      parsed = parsed || options;
      options = undefined;
    }

    options = options || {};

    // Set default 1MB chunks for speed & safety
    options.highWaterMark = options.highWaterMark || highWaterMark;
    readStream = $fs('createReadStream', [filePath, options]);
    readStream.on('error', reject);

    // Handle data in chunks
    readStream.on('data', function(chunk) {
      data += chunk;
    });

    readStream.on('end', function() {
      if (parsed) {
        try {data = JSON.parse(data)} catch(e) {}
      }
      resolve(data);
    });
  });
};

/**
 * Reads lines from a file asynchronously, returning a slice of lines.
 * 
 * @param {string} filePath Path to the file to read.
 * @param {boolean|number} start Starting line index (inclusive) or true for start from 0.
 * @param {boolean|number} end Ending line index (exclusive) or true for all lines.
 * @returns {Promise<any>} Resolves or rejects via callback.
 */
fsMate.readLine = function(filePath, start, end) {
  return new Promise(function(resolve, reject) {
    let rl, fileStream,
      lines = [];

    // Set default 1MB chunks for speed & safety
    fileStream = $fs('createReadStream', [filePath, {highWaterMark}]);

    rl = readLine.createInterface({
      input: fileStream,
      crlfDelay: true
    });

    rl.on('line', function(line) {
      lines.push(line);

    }).on('close', function() {
      if (start === true || start == null) start = 0;
      if (end === true || end == null) end = lines.length;

      if (start >= end || (typeof start !== 'number')) {
        reject(sprintf('Invalid line range [%s-%s]', start, end));
        return;
      }
      resolve(lines.slice(start, end));
    });
  });
};

/**
 * Writes data to a file asynchronously using streams.
 * 
 * If data is not a readable stream, it will be converted to one.
 * Supports stream options like chunk size via `options`.
 * 
 * @param {string} filePath Path to the file to write.
 * @param {*} data Data to write; can be a readable stream or other data types.
 * @param {Object} options Stream options (e.g., highWaterMark).
 * @returns {Promise<any>} Resolves or rejects via callback.
 */
fsMate.writeFile = function(filePath, data, options) {
  return new Promise(function(resolve, reject) {
    options = options || {};

    // Set default 1MB chunks for speed & safety
    options.highWaterMark = options.highWaterMark || highWaterMark;

    writeStream = $fs('createWriteStream', [filePath, options]);
    inputStream = data instanceof Readable ? data : fsMate.createInputStream(data);

    inputStream.pipe(writeStream);
    writeStream.on('finish', resolve).on('error', reject);
  });
}

/**
 * Append data to a file asynchronously.
 * 
 * This method wraps `writeFile` with the append (`'a'`) flag,
 * allowing new data to be added at the end of the file seamlessly.
 * 
 * @param {string} filePath The path of the target file.
 * @param {*} data The content to append.
 * @param {Object} options Optional stream options.
 * @returns {Promise<any>} Resolves or rejects via callback.
 */
fsMate.appendFile = function(filePath, data, options) {
  options = options || {};
  options.flags = 'a';
  return this.writeFile(filePath, data, options);
};

/**
 * Prepends data to a file asynchronously.
 * 
 * Reads the existing file content, then writes the new data
 * followed by the original content, effectively adding at the start.
 * 
 * @param {string} filePath Path of the target file.
 * @param {*} data options Data to prepend.
 * @param {Object} options Optional read/write options.
 * @returns {Promise<any>} Resolves or rejects via callback.
 */
fsMate.prependFile = async function(filePath, data, options) {
  const prevData = await this.readFile(filePath, options);

  return this.writeFile(filePath, this.multiStream([
    this.createInputStream(data),
    this.createInputStream(prevData)
  ]), options);
};

/**
 * Atomically dumps safely writes content into a file.
 * 
 * Creates the directory if needed, writes to a temp file,
 * then atomically replaces the original file.
 * 
 * @param {string} filePath Target file path.
 * @param {*} content The content to write into the file.
 * @returns {Promise<any>} Resolves or rejects via callback.
 */
fsMate.dumpFile = async function(filePath, content) {
  const dir = path.dirname(filePath);

  if (!(await fs$async('isDir', dir))) {
    await this.mkdir(dir);
  }

  const tempFile = this.tempNam(dir, path.basename(filePath));

  try {
    // Write to temp file
    await this.writeFile(tempFile, content);

    // Replace original file with temp file (atomic on most OSes)
    await fs$prom.rename(tempFile, filePath);
  } catch(err) {

    // Cleanup temp file if error
    if (await this.exists(tempFile)) {
      await fs$prom.unlink(tempFile);
    }
    throw err;
  }
};

/**
 * Combines multiple readable streams into a single sequential stream.
 * 
 * Streams are read one after another, preserving their order.
 * Useful for merging content (e.g. prepend + original) without buffering all at once.
 * 
 * @param {Iterable<Readable>} streams An array or iterable of readable streams.
 * @returns {Readable} A single combined readable stream.
 */
fsMate.multiStream = function(streams) {
  return Readable.from((async function*() {
    for(const stream of streams) {
      for await(const chunk of stream) {
        yield chunk;
      }
    }
  })());
};

/**
 * Reads a file asynchronously and optionally parses its content as JSON.
 * Supports options for the read stream, including chunk size.
 * 
 * @param {string} filePath Path to the file to read.
 * @param {Object} options Read stream options or parsed flag.
 * @param {boolean} parsed If true, parse the file content as JSON.
 * @returns {string|any} The file content as a string or parsed object.
 */
fsMate.readFileSync = function(filePath, parsed) {
  let fd, buffer,
    position = 0,
    data = '',
    read = function() {
      const bytes = fs.readSync(fd, buffer, 0, buffer.length, position);
      if (bytes > 0) {
        data += buffer.toString('utf-8', 0, bytes);
        position += bytes;
        read();
      } else {
        fs.closeSync(fd);
      }
    };

  fd = fs.openSync(filePath, 'r');
  buffer = Buffer.alloc(highWaterMark);
  read();

  if (parsed) {
    try {data = JSON.parse(data)} catch(e) {}
  }

  return data;
};

/**
 * Reads lines from a file asynchronously, returning a slice of lines.
 * 
 * @param {string} filePath Path to the file to read.
 * @param {boolean|number} start Starting line index (inclusive) or true for start from 0.
 * @param {boolean|number} end Ending line index (exclusive) or true for all lines.
 * @returns {Array} Returns a collection of lines
 */
fsMate.readLineSync = function(filePath, start, end) {
  const CRLF = /\r?\n/g;
  const data = this.readFileSync(filePath);
  const lines = data.split(CRLF);

  if (start === true || start == null) {
    start = 0;
  }

  if (end === true || end == null) {
    end = lines.length;
  }

  if (start >= end || (typeof start !== 'number')) {
    throw new Error(
      sprintf('Invalid line range [%s-%s]', start, end)
    );
  }

  return lines.slice(start, end);
};

/**
 * Writes data to a file asynchronously using streams.
 * 
 * If data is not a readable stream, it will be converted to one.
 * Supports stream options like chunk size via `options`.
 * 
 * @param {string} filePath Path to the file to write.
 * @param {*} data Data to write; can be a readable stream or other data types.
 * @param {Object} options Stream options (e.g., highWaterMark).
 */
fsMate.writeFileSync = function(filePath, data) {
  const fd = fs.openSync(filePath, 'w');
  fs.writeSync(fd, this.stringify(data));
  fs.closeSync(fd);
};

/**
 * Append data to a file synchronously.
 * 
 * This method wraps `writeFile` with the append (`'a'`) flag,
 * allowing new data to be added at the end of the file seamlessly.
 * 
 * @param {string} filePath The path of the target file.
 * @param {*} data The content to append.
 * @param {Object} options Optional stream options.
 */
fsMate.appendFileSync = function(filePath, data) {
  const fd = fs.openSync(filePath, 'a');
  fs.writeSync(fd, this.stringify(data));
  fs.closeSync(fd);
};

/**
 * Prepends data to a file synchronously.
 * 
 * Reads the existing file content, then writes the new data
 * followed by the original content, effectively adding at the start.
 * 
 * @param {string} filePath Path of the target file.
 * @param {*} data options Data to prepend.
 * @param {Object} options Optional read/write options.
 */
fsMate.prependFileSync = function(filePath, data) {
  const prevData = this.readFileSync(filePath);
  return this.dumpFileSync(filePath, this.stringify(data) + prevData);
};

/**
 * Atomically dumps safely writes content into a file.
 * 
 * Creates the directory if needed, writes to a temp file,
 * then atomically replaces the original file.
 * 
 * @param {string} filePath Target file path.
 * @param {*} content The content to write into the file.
 */
fsMate.dumpFileSync = function(filePath, content) {
  const dir = path.dirname(filePath);

  if (!fs$sync('isDir', dir)) {
    this.mkdirSync(dir);
  }

  const tempFile = this.tempNam(dir, path.basename(filePath));

  try {
    // Write to temp file
    this.writeFileSync(tempFile, content);

    // Replace original file with temp file (atomic on most OSes)
    this.renameSync(tempFile, filePath, true);
  } catch(err) {

    // Cleanup temp file if error
    if (this.isFileSync(filePath)) {
      fs.unlinkSync(filePath);
    }
    throw err;
  }
};

/* Handle promise unhandledRejection */
process.on('unhandledRejection', function() {});

/* EXPORT */
module.exports = fsMate;