## freadSync(filePath, length)

This method reads a given number of bytes synchronously from a file descriptor. Being synchronous, it blocks execution until the read completes, and it either returns the data or throws an error if the operation fails.

**Alias:** `freadSync()`

**Parameters:**

- `filePath` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- `length` [`<number>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
- Returns: [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)

## Example

```js
const fs = require('fsmate');

const file = 'example.txt';

// If read custom content
const data = fs.freadSync(file, 50);
console.log(data);

// OR

// Read full content
const fd = fs.freadSync(file, fs.filesizeSync(file));
console.log(fd);
```

For the asynchronous version, see: [fread](./fread.md)