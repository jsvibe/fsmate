## scandirSync(dir, options)

Synchronously scans the contents of a directory and optionally its subdirectories. Supports returning plain file names, `Dirent` objects, or full paths, with options for deep scanning. Ideal for quick scans in scripts where blocking is acceptable.

**Alias:** `scanDirSync()`

**Parameters:**

- `dir` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- `options` [`<Object>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- `filter` [`<Array>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) | [`<Function>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
- Returns: [`<void>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void)

# Example

```js
const fs = require('fsmate');

const options = {
  withFileTypes: true, // For Dirent
  withFullPath: true,  // Attach with intial path
  withDeepScan: true   // For deep scanning
};

const results = fs.scandirSync('/home/sources', options);
console.log(results);
```

## With Filteration

```js
const fs = require('fsmate');

// Filteration with Array
let files = fs.scandirSync('home/dirs/', {withDeepScan: true}, ['.bin', '.gitignore']);
console.log(files);

// Filteration with Function
files = fs.scandir('home/dirs/', {withDeepScan: true}, (file, index, files) => {
  return file[0] !== '.'; // Filter all .files
});
console.log(files);
```

For the asynchronous version, see: [scandir](./scandir.md)