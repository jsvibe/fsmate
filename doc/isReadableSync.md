## isReadableSync(path)

Synchronously checks if the given file or directory exists and has read permissions. Returns true if readable, otherwise false.

**Alias:** `isReadableSync()`

**Parameters:**

- `path` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- Returns: [`<boolean>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures#boolean_type)

## Example

```js
const fs = require('fsmate');

// If path does not exists any file or folder then throwing error
// Otherwise returns true/false
fs.isReadableSync('/home/user/file.txt');
```

For the asynchronous version, see: [isReadable](./isReadable.md)