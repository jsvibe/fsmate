# fsMate

fsMate A modular collection of file system utilities for Node.js

[![npm version](https://img.shields.io/npm/v/fsmate?style=flat-square&logo=npm)](https://www.npmjs.com/package/fsmate)
![license](https://img.shields.io/github/license/jsvibe/fsmate?style=flat-square&color=blue)
![author](https://img.shields.io/badge/Author-Indian%20Modassir-blue?style=flat-square)
[![jsDelivr Hits](https://img.shields.io/jsdelivr/npm/hm/fsmate?style=flat-square&logo=jsdelivr)](https://www.jsdelivr.com/package/npm/fsmate)
[![downloads month](https://img.shields.io/npm/dm/fsmate?style=flat-square)](https://www.npmjs.com/package/fsmate)

It simplifies working with files and directories by providing a higher-level, promise-based API for common file operations such as checking access permissions, creating files/directories, copying files, and mirroring directories.

> 🔧 Author: Indian Modassir  
> 📅 Date: 26-07-2025  
> 📦 Repository: [https://github.com/jsvibe/fsMate](https://github.com/jsvibe/fsMate)

---

## 🚀 Features

- Sync and async file system methods with smart detection
- Check file or directory accessibility (read/write/execute)
- Create files and directories safely
- Copy and mirror directories with override control
- Generate temporary file/directory names
- Fully promise-based where appropriate

---

## 📦 Installation

```bash
npm install fsmate
```

---

## 📖 Usage

```js
const fsMate = require('fsmate');

// Example: Create a directory recursively
fsMate.mkdir(['./example/nested/dir'])
  .then(() => console.log("Directory created"))
  .catch(console.error);

// Example: Copy file
fsMate.copy('./source.txt', './dest.txt', true)
  .then(() => console.log("File copied"))
  .catch(console.error);
```

---

## 📚 API Reference with Examples

---

### `fsMate.tmpName(prefix)`

Generates a temporary, obfuscated file or directory name using a given prefix.

```js
const fsMate = require('fsmate');

const tempPath = fsMate.tmpName('/tmp');
console.log(tempPath); // Example output: /tmp/.!qK9p
```

---

### `fsMate.AutoSync(methodName, ...args, [callback])`

Dynamically calls an `fs` method in async mode (if a callback is given) or sync mode otherwise.

```js
// Async usage
fsMate.AutoSync('readFile', 'example.txt', 'utf8', (err, data) => {
  if (!err) console.log(data);
});

// Sync usage
const content = fsMate.AutoSync('readFile', 'example.txt', 'utf8');
console.log(content);
```

---

### `fsMate.isFile(path, [callback])`

Checks if the path points to a file.

```js
// Sync
const isFile = fsMate.isFile('./data.txt');
console.log(isFile); // true or false

// Async
fsMate.isFile('./data.txt', (result) => {
  console.log(result); // true or false
});
```

---

### `fsMate.isDir(path, [callback])`

Checks if the path points to a directory.

```js
fsMate.isDir('./some-folder', (result) => {
  console.log(result); // true or false
});
```

---

### `fsMate.access(path, mode, [callback])`

Checks whether a file or directory is accessible with a specific mode.

```js
fsMate.access('./file.txt', fs.constants.R_OK, (accessible) => {
  console.log(accessible); // true or false
});
```

---

### `fsMate.isReadable(path, [callback])`

Checks if the path is readable.

```js
fsMate.isReadable('./file.txt', (readable) => {
  console.log(readable); // true or false
});
```

---

### `fsMate.isWritable(path, [callback])`

Checks if the path is writable.

```js
fsMate.isWritable('./file.txt', (writable) => {
  console.log(writable); // true or false
});
```

---

### `fsMate.isExecutable(path, [callback])`

Checks if the path is executable.

```js
fsMate.isExecutable('./script.sh', (executable) => {
  console.log(executable); // true or false
});
```

---

### `fsMate.mkdir(paths, [mode])`

Creates directories recursively.  
**`paths`** can be a single path or an array.

```js
fsMate.mkdir(['./logs/app', './temp/cache'])
  .then(() => console.log("Directories created"))
  .catch(console.error);
```

---

### `fsMate.mkFile(paths, [override])`

Creates empty files. If `override` is false, existing files are left untouched.

```js
fsMate.mkFile(['./output.txt'], true)
  .then(() => console.log("File created"))
  .catch(console.error);
```

---

### `fsMate.copy(originPath, targetPath, [override])`

Copies a file from source to destination. If `override` is false and target exists, it skips.

```js
fsMate.copy('./input.txt', './backup/input.txt', true)
  .then(() => console.log("File copied"))
  .catch(console.error);
```

---

### `fsMate.mirror(originDir, targetDir, [override])`

Recursively mirrors one directory into another.

```js
fsMate.mirror('./sourceDir', './destinationDir', true)
  .then(() => console.log("Directory mirrored"))
  .catch(console.error);
```

---

## 📄 License

MIT License.  
© 2025 Indian Modassir

---

## 🙌 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 🧪 Tests

Currently, no test suite is included. Basic testing can be done manually via example scripts. A test suite will be added in future releases.

---

## 🌐 Links

- GitHub: [https://github.com/jsvibe/fsMate](https://github.com/jsvibe/fsMate)
