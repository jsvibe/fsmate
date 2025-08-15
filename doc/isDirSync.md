## isDirSync(path)

Checks if the given path points to a directory. Returns true if it’s a directory, otherwise false.

**Alias:** `isDirSync()`

**Parameters:**

- `path` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- Returns: [`<boolean>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures#boolean_type)

## Example

```js
const fs = require('fsmate');

// If path does not exists any file or folder then throwing error
// Otherwise returns true/false
fs.isDirSync('your-path');
```

For the asynchronous version, see: [isDir](./isDir.md)