## isLinkSync(path)

Checks if the given path is a symbolic link. Returns `true` if it’s a symlink, otherwise `false`.

**Alias:** `isLinkSync()`

**Parameters:**

- `path` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- Returns: [`<boolean>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures#boolean_type)

## Example

```js
const fs = require('fsmate');

// If path does not exists any file or folder then throwing error
// Otherwise returns true/false
fs.isLinkSync('/home/user/symlink.txt');
```

For the asynchronous version, see: [isLink](./isLink.md)