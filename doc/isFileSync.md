## isFileSync(path)

Synchronously checks if the given path points to a regular file. Returns `true` if it is a file, otherwise `false`.

**Alias:** `isFileSync()`

**Parameters:**

- `path` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- Returns: [`<boolean>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures#boolean_type)

## Example

```js
const fs = require('fsmate');

// If path does not exists any file or folder then throwing error
// Otherwise returns true/false
fs.isFileSync('/home/user/file.txt');
```

For the asynchronous version, see: [isFile](./isFile.md)