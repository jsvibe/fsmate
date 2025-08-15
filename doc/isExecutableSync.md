# isExecutableSync(path)

Checks if the given file or directory has execute permissions. Returns `true` if executable, otherwise `false`.

**Alias:** `isExecutableSync()`

**Parameters:**

- `path` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- Returns: [`<boolean>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures#boolean_type)

## Example

```js
const fs = require('fsmate');

// If path does not exists any file or folder then throwing error
// Otherwise returns true/false
fs.isExecutableSync('your-path');
```

For the asynchronous version, see: [isExecutable](./isExecutable.md)