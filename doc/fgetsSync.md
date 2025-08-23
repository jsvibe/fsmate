## fgetsSync(filePath)

This method reads data synchronously from a file descriptor. It retrieves either a full line, up to the given maximum length, or until EOF is encountered. Since it is synchronous, execution is blocked until the read operation completes, and it returns the read string or throws an error on failure.

**Alias:** `fgetsSync()`

**Parameters:**

- `filePath` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- Returns: [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)

## Example

```js
const fs = require('fsmate');

const line = fs.fgetsSync('example.txt');
console.log(line);
```

For the asynchronous version, see: [fgets](./fgets.md)