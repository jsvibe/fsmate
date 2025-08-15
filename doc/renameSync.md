# renameSync(oldPath, newPath, overwrite)

Renames a file or directory.

Synchronously renames or moves a file or directory. If `overwrite` is `false`, the operation will throw an error if the target path exists. Suitable for scripts that require immediate, blocking renames.

**Alias:** `renameSync()`

**Parameters:**

- `oldPath` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- `newPath` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- `overwrite` [`<boolean>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures#boolean_type)
- Returns: [`<void>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void)

# Example

```js
const fs = require('fsmate');

// Renamed oldfile.txt ⟶ newfile.txt
fs.renameSync('/home/user/oldfile.txt', '/home/user/newfile.txt');
console.log('success');
```

## Move file and directories

**Note:** If your given `newPath` of director not same of `oldPath` directory then `fs.rename` will move your file or directory.

```js
const fs = require('fsmate');

// Moved to src/newfile.txt directory
fs.renameSync('/home/user/oldfile.txt', '/home/user/src/newfile.txt', true);
console.log('success');
```

For the asynchronous version, see: [rename](./rename.md)