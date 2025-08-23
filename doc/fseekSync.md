## fseekSync(filePath, position)

This synchronous method repositions a file descriptor’s pointer to a new location within the file. The offset is applied relative to the specified reference point (start, current, or end). It returns zero on success and throws an error if it fails.

**Alias:** `fseekSync()`

**Parameters:**

- `filePath` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- `position` [`<number>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
- Returns: [`<void>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void)

## Example

```js
const fs = require('fsmate');

const file = 'file.txt';

let pos = fs.ftellSync(file); // Initial pointer position
console.log(pos);

fs.fseekSync(file, 44); // Changed pointer position
pos = fs.ftellSync(file); // Updated pointer position
console.log(pos);
```

For the asynchronous version, see: [fseek](./fseek.md)