## isWritableSync(path)

Synchronously checks if the given file or directory has write permissions. Returns true if writable, otherwise false.

**Alias:** `isWritableSync()`

**Parameters:**

- `path` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- Returns: [`<boolean>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures#boolean_type)

## Example

```js
const fs = require('fsmate');

// If path does not exists any file or folder then throwing error
// Otherwise returns true/false
fs.isWritableSync('/var/www/index.html');
```

For the asynchronous version, see: [isWritable](./isWritable.md)