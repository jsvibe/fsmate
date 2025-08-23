## fpassthruSync(filePath)

This synchronous method reads the remaining contents of a file descriptor from the current position to the end of the file and writes it directly to the output stream. It blocks execution until the entire operation is finished.

**Alias:** `fpassthruSync()`

**Parameters:**

- `filePath` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- Returns: [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)

## Example

```js
const fs = require('fsmate');

const data = fs.fpassthruSync('file.txt');
console.log(data);
```

For the asynchronous version, see: [fpassthru](./fpassthru.md)