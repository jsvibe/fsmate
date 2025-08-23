## rewindSync(filePath)

This synchronous method immediately moves the file descriptor’s pointer back to the start of the file, serving as a shortcut to reset file position without specifying an offset.

**Alias:** `rewindSync()`

**Parameters:**

- `filePath` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- Returns: [`<void>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void)

## Example

```js
const fs = require('fsmate');

// Move pointer to initial position 0
fs.rewindSync('example.txt');
```

For the asynchronous version, see: [rewind](./rewind.md)