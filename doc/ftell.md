## ftell(filePath)

This function returns the current position of the file pointer as an integer. If the file is not seekable or the operation fails, it returns false.

**Alias:** `ftell()`

**Parameters:**

- `filePath` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- Returns: [`Promise<any>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## Example

```js
const fs = require('fsmate');

// With Promises:
fs.ftell('file.txt')
.then(pos => {
  // Current pointer position
  console.log(pos);
}).catch(err => {
  console.log(err);
});

// With async/await (Not-Recommended)
async function ftell(filePath) {
  try {
    const pos = await fs.ftell(filePath);
    console.log(pos);
  } catch(err) {
    console.log(err);
  }
}

ftell('file.txt');
```

For the synchronous version, see: [ftellSync](./ftellSync.md)