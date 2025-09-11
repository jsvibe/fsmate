## scandir(dir, options)

Asynchronously scans the contents of a directory and optionally its subdirectories. Supports returning plain file names, `Dirent` objects, or full paths, with options for deep scanning. Useful for building file lists or performing batch operations.

**Alias:** `scandir()`

**Parameters:**

- `dir` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- `options` [`<Object>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- `filter` [`<Array>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) | [`<Function>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
- Returns: [`Promise<any>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

# Example

```js
const fs = require('fsmate');

const options = {
  withFileTypes: true, // For Dirent                                              [optional]
  withFullPath: true,  // Attach with intial path                                 [optional]
  withDeepScan: true   // For deep scanning                                       [optional]
  dirOnly: true        // List only directories (fileOnly: true, List only files) [optional]
};

// With Promises:
fs.scandir('/home/sources', options)
.then(results => {
  console.log(results);
}).catch(err => {
  console.log('success');
});

// With async/await:
async function scandir(dir, options) {
  try {
    const res = await fs.scandir(dir, options);
    console.log(res);
  } catch(err) {
    console.log(err);
  }
}

scandir('/home/sources', options);
```

## With Filteration

```js
const fs = require('fsmate');

// Filteration with Array
fs.scandir('home/dirs/', {withDeepScan: true}, ['.bin', '.gitignore'])
.then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});

// Filteration with Function
fs.scandir('home/dirs/', {withDeepScan: true}, (file, index, files) => {
  return file[0] !== '.'; // Filter all .files
})
.then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});
```

For the synchronous version, see: [scandirSync](./scandirSync.md)