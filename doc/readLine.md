## readLine(filePath, start, end)

Asynchronously reads specific lines from a file, returning only the requested range. The `start` and `end` parameters can be line numbers or boolean flags (`true` for full range). Useful for partial file reads without loading the entire file into memory.

**Alias:** `readLine()`

**Parameters:**

- `filePath` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- `start` [`<number>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures#number_type)
- `end` [`<number>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures#number_type)
- Returns: [`Promise<any>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

# Example

```js
const fs = require('fsmate');

// If true|null|undefined `start` will set start of line
const start = 3;

// If true|null|undefined `end` will set end of line
const end = 50;

// With Promises:
fs.readLine('multiline.txt', start, end)
.then((lines) => {
  console.log(lines);
}).catch(err => {
  console.log(err);
});

// With async/await:
async function readLine(filePath, start, end) {
  try {
    const lines = await fs.readLine(filePath, start, end);
    console.log(lines);
  } catch(err) {
    console.log(err);
  }
}

readLine('your-file.txt', start, end);
```

For the synchronous version, see: [readLineSync](./readLineSync.md)