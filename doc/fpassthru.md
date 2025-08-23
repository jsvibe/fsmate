## fpassthru(filePath)

This function outputs all remaining data from the current position of a file pointer to the end of the file, writing it directly to the output buffer. It is commonly used for streaming data without having to manually loop through file contents.

**Alias:** `fpassthru()`

**Parameters:**

- `filePath` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- Returns: [`Promise<any>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## Example

```js
const fs = require('fsmate');

// With Promises:
fs.fpassthru('file.txt')
.then(data => {
  console.log(data);
}).catch(err => {
  console.log(err);
});

// With async/await:
async function fpassthru(filePath) {
  try {
    const data = await fpassthru(filePath);
    console.log(data);
  } catch(err) {
    console.log(err);
  }
}

fpassthru('file.txt');
```

For the synchronous version, see: [fpassthruSync](./fpassthruSync.md)