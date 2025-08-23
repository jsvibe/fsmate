## fgets(filePath)

This function reads a line from an open file pointer. It stops when a newline is encountered, when the specified maximum length is reached, or when the end-of-file (EOF) is reached. On success, it returns the read string; on failure or if EOF is reached immediately, it returns false.

**Alias:** `fgets()`

**Parameters:**

- `filePath` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- Returns: [`Promise<any>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## Example

```js
const fs = require('fsmate');

// With Promises:
fs.fgets('example.txt')
.then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});

// With async/await:
async function fgets(filePath) {
  try {
    const line = await fs.fgets(filePath);
    console.log(line);
  } catch(err) {
    console.log(err);
  }
}

fgets('example.txt');
```

For the synchronous version, see: [fgetsSync](./fgetsSync.md)