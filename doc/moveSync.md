## moveSync(oldPath, newPath, overwrite)

Moves a file or directory.

The moveSync method provides the same functionality but runs synchronously, blocking the execution until the operation is finished. It is simple and reliable for scripts or tasks where immediate results are required.

**Alias:** `moveSync()`

**Parameters:**

- `oldPath` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- `newPath` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- `overwrite` [`<boolean>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures#boolean_type)
- Returns: [`<void>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void)

# Example

```js
const fs = require('fsmate');

// If your oldPath and newPath are same then thowing error
// Moved oldfile.txt ⟶ newfile.txt
fs.moveSync('/home/user/oldfile.txt', '/home/public/newfile.txt');
console.log('success');
```

For the asynchronous version, see: [move](./move.md)