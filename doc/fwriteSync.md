## fwriteSync(filePath, content)

This synchronous method writes data to a file descriptor. It blocks execution until the write completes and returns the number of bytes written, or throws an error if the write operation fails.

**Alias:** `fwriteSync()`

**Parameters:**

- `filePath` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- `content` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- Returns: [`<void>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void)

## Example

```js
const fs = require('fsmate');

fs.fwriteSync('myfile.txt', 'Hello World!');
```

For the asynchronous version, see: [fwrite](./fwrite.md)