## ftellSync(filePath)

This synchronous method retrieves the current position of a file descriptor. It returns the pointer’s position as an integer offset within the file or throws an error if it fails.

**Alias:** `ftellSync()`

**Parameters:**

- `filePath` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- Returns: [`<number>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)

## Example

```js
const fs = require('fsmate');

// ftellSync will returns current pointer position
let pos = fs.ftellSync('file.txt');
console.log(pos);
```

For the asynchronous version, see: [ftell](./ftell.md)