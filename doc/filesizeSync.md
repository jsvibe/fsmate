## filesizeSync(filename)

This method retrieves the size of a file synchronously. It accepts a file path and returns its size in bytes. If the file is not available or cannot be accessed, it throws an error.

**Alias:** `filesizeSync()`

**Parameters:**

- `filename` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- Returns: [`<number>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)

## Example

```js
const fs = require('fsmate');

const size = fs.filesizeSync('example.txt');
console.log(size);
```

For the asynchronous version, see: [filesize](./filesize.md)