## readLineSync(filePath, start, end)

Synchronously reads specific lines from a file and returns them as an array. Allows defining the start and end lines, making it useful for quick lookups or extracting file segments.

**Alias:** `readLineSync()`

**Parameters:**

- `filePath` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- `start` [`<number>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures#number_type)
- `end` [`<number>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures#number_type)
- Returns: [`<array>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

# Example

```js
const fs = require('fsmate');

// If true|null|undefined `start` will set start of line
const start = 3;

// If true|null|undefined `end` will set end of line
const end = 50;

const lines = fs.readLineSync('your-file.txt', start, end);
console.log(lines);
```

For the asynchronous version, see: [readLine](./readLine.md)