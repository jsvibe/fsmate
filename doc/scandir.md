## scandir(dir, options)

Asynchronously scans the contents of a directory and optionally its subdirectories. Supports returning plain file names, `Dirent` objects, or full paths, with options for deep scanning. Useful for building file lists or performing batch operations.

**Alias:** `scandir()`

**Parameters:**

- `dir` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- `options` [`<Object>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- Returns: [`Promise<any>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

# Example

```js
const fs = require('fsmate');

const options = {
  withFileTypes: true, // For Dirent
  withFullPath: true,  // Attach with intial path
  withDeepScan: true   // For deep scanning
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

For the synchronous version, see: [scandirSync](./scandirSync.md)