fsMate
======

fsMate A modular collection of file system utilities for Node.js

[![npm version](https://img.shields.io/npm/v/fsmate?logo=npm)](https://www.npmjs.com/package/fsmate)
![license](https://img.shields.io/github/license/jsvibe/fsmate?color=blue)
[![downloads month](https://img.shields.io/npm/dm/fsmate)](https://www.npmjs.com/package/fsmate)
[![jsDelivr Hits](https://img.shields.io/jsdelivr/npm/hm/fsmate?logo=jsdelivr)](https://www.jsdelivr.com/package/npm/fsmate)
[![author](https://img.shields.io/badge/Author-Modassir-blue)](https://github.com/indianmodassir)
[![Publish Package to npm](https://github.com/jsvibe/fsmate/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/jsvibe/fsmate/actions/workflows/npm-publish.yml)

> This package accesses the local file system to perform its core functionality.
It does not transmit file contents to any remote server.

It simplifies working with files and directories by providing a higher-level, promise-based API for common file operations such as checking access permissions, creating files/directories, copying files, and mirroring directories.

Installation
------------

```bash
npm install fsmate
```

Usage
-----

Use this syntax when working in Node.js environments that follow the CommonJS module system.

### CommonJS

```js
const fsMate = require('fsmate');
```

**Note:** The deprecated constants `fs.F_OK`, `fs.R_OK`, `fs.W_OK`, & `fs.X_OK` are not exported on Node.js v24.0.0+; please use their fs.constants equivalents.

### ESM

There is also an `fsmate/esm` import, that supports both default and named exports. However, note that fs methods are not included in `fsmate/esm;` you still need to import `fs` and/or `fs/promises` seperately:

```js
import fsMate from 'fsmate/esm';
import {remove, copy, rename} = 'fsmate/esm';
```

but you probably want to just use regular `fsmate` instead of `fsmate/esm` for default exports:

```js
import fsMate from 'fsmate';
```

Async vs Async/Await vs Sync
----------------------------

All async methods will return a promise

JavaScript handles file operations in three ways: Promises run tasks in the background with `.then()` / `.catch()`, `async/await` makes them look sequential, and `synchronous` methods pause execution until the task finishes—simple and straightforward.

Example:

```js
const fsMate = require('fsmate');

// Async with Promises:
fsMate.mirror('/home/user/myDir', '/home/user/mirrorDir')
.then(() => console.log('success'))
.catch(err => console.log(err));

// With async/await:
async function mirror(originDir, targetDir) {
  try {
    await fsMate.mirror(originDir, targetDir);
    console.log('success');
  } catch(err) {
    console.log(err);
  }
}

mirror('/home/user/myDir', '/home/user/mirrorDir');

// Sync:
try {
  fsMate.mirrorSync('/home/user/myDir', '/home/user/mirrorDir');
  console.log('success');
} catch(err) {
  console.log(err);
}
```

Learn for more Documentation see: [more](https://github.com/jsvibe/fsmate/tree/main/doc)

Methods And Features
--------------------

### Async

Asynchronous methods with short describe and complete documentation.

|Method|Description|
|:--------|:--------|
|[isExecutable](doc/isExecutable.md)|Check if a file/directory has execute permissions.|
|[isFile](doc/isFile.md)|Check if the given path is a regular file.|
|[isDir](doc/isDir.md)|Check if the given path is a directory.|
|[isLink](doc/isLink.md)|Check if the given path is a symbolic link.|
|[isReadable](doc/isReadable.md)|Check if a file/directory has read permissions.|
|[isWritable](doc/isWritable.md)|Check if a file/directory has write permissions.|
|[mkdir](doc/mkdir.md)|Creates a directories recursively.|
|[mkfile](doc/mkfile.md)|Create an empty files (or overwrite if specified).|
|[exists](doc/exists.md)|Check if a file or directory exists.|
|[touch](doc/touch.md)|Create a file if it doesn’t exist or update its timestamp.|
|[rename](doc/rename.md)|Rename or move a file/directory.|
|[move](doc/move.md)|Asyncronously moves a file or directory.|
|[scandir](doc/scandir.md)|List files and directories in a given folder.|
|[remove](doc/remove.md)|Safely remove files or directories (with rename trick).|
|[rm](doc/rm.md)|Remove files or directories using native `fs.rm`.|
|[mirror](doc/mirror.md)|Recursively copy an entire directory tree.|
|[copy](doc/copy.md)|Copy a single file with overwrite control.|
|[truncate](doc/truncate.md)|Clears file content without deleting it (creates if missing).|
|[empty](doc/empty.md)|Remove all contents inside a file or directory without deleting it.|
|[prependFile](doc/prependFile.md)|Add content at the beginning of a file.|
|[readFile](doc/readFile.md)|Read a file's content (optionally parse JSON).|
|[readLine](doc/readLine.md)|Read a file line-by-line with range support.|
|[writeFile](doc/writeFile.md)|Write content to a file (overwrites existing).|
|[appendFile](doc/appendFile.md)|Append content to the end of a file.|
|[dumpFile](doc/dumpFile.md)|Atomically write a file by first writing to a temp file.|
|[filesize](doc/filesize.md)|Gets file size in bytes.|
|[fseek](doc/fseek.md)|Seeks on a file pointer.|
|[ftell](doc/ftell.md)|Returns the current position of the file read/write pointer.|
|[fgets](doc/fgets.md)|Gets line from file pointer.|
|[fpassthru](doc/fpassthru.md)|Output all remaining data on a file pointer.|
|[fread](doc/fread.md)|Binary-safe file read.|
|[fwrite](doc/fwrite.md)|Binary-safe file write.|
|[rewind](doc/rewind.md)|Rewind the position of a file pointer.|

### Sync

Synchronous methods with short describe and complete documentation.

|Method|Description|
|:--------|:--------|
|[isExecutableSync](doc/isExecutableSync.md)|Sync check for execute permissions.|
|[isLinkSync](doc/isLinkSync.md)|Sync check if path is a symbolic link.|
|[isFileSync](doc/isFileSync.md)|Sync check if path is a regular file.|
|[isDirSync](doc/isDirSync.md)|Sync check if path is a directory.|
|[isReadableSync](doc/isReadableSync.md)|Sync check for read permissions.|
|[isWritableSync](doc/isWritableSync.md)|Sync check for write permissions.|
|[mkdirSync](doc/mkdirSync.md)|Sync creates a directories recursively.|
|[mkfileSync](doc/mkfileSync.md)|Create an empty files (or overwrite if specified).|
|[touchSync](doc/touchSync.md)|Sync create/update file timestamp.|
|[renameSync](doc/renameSync.md)|Sync rename or move a file/directory.|
|[moveSync](doc/moveSync.md)|Sync moves a file or directory.|
|[scandirSync](doc/scandirSync.md)|Sync list directory contents.|
|[removeSync](doc/removeSync.md)|Sync safe remove (with rename trick).|
|[appendFileSync](doc/appendFileSync.md)|Sync append content to a file.|
|[emptySync](doc/emptySync.md)|Sync remove all contents inside a file/directory.|
|[mirrorSync](doc/mirrorSync.md)|Sync recursively copy a directory tree.|
|[copySync](doc/copySync.md)|Sync copy a single file.|
|[truncateSync](doc/truncateSync.md)|Sync Empties a file but keeps it (creates if missing).|
|[readFileSync](doc/readFileSync.md)|Read a file's content (optionally parse JSON).|
|[rmSync](doc/rmSync.md)|Sync remove file/directory using native `fs.rm`.|
|[readLineSync](doc/readLineSync.md)|Sync read file line-by-line.|
|[writeFileSync](doc/writeFileSync.md)|Sync write content to a file.|
|[prependFileSync](doc/prependFileSync.md)|Sync add content at file start.|
|[dumpFileSync](doc/dumpFileSync.md)|Sync atomic file write.|
|[filesizeSync](doc/filesizeSync.md)|Sync Gets file size in bytes.|
|[fseekSync](doc/fseekSync.md)|Sync Seeks on a file pointer.|
|[ftellSync](doc/ftellSync.md)|Sync Returns the current position of the file read/write pointer.|
|[fgetsSync](doc/fgetsSync.md)|Sync Gets line from file pointer.|
|[fpassthruSync](doc/fpassthruSync.md)|Sync Output all remaining data on a file pointer.|
|[freadSync](doc/freadSync.md)|Sync Binary-safe file read.|
|[fwriteSync](doc/fwriteSync.md)|Sync Binary-safe file write.|
|[rewindSync](doc/rewindSync.md)|Sync Rewind the position of a file pointer.|

### Other Methods

Here listed other methods with short describe and complete documentation.

|Method|Description|
|:--------|:--------|
|[multiStream](doc/multiStream.md)|Merge multiple readable streams into one.|
|[stringify](doc/stringify.md)|Convert different data types to a string safely.|
|[tmpName](doc/tmpName.md)|Generate a random temporary file/directory name.|
|[tempNam](doc/tempNam.md)|Generate a SHA1-hash-based temp file name.|
|[createInputStream](doc/createInputStream.md)|Convert string, Buffer, or object into a readable stream.|

Contributing
------------

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

License
-------

Licensed Under [MIT](LICENSE)

Copyright (c) 2025 [Indian Modassir](https://github.com/indianmodassir)
