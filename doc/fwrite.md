## fwrite(filePath, content)

This function writes data to an open file pointer. It accepts a string or binary data and stores it in the file. On success, it returns the number of bytes written; on failure, it returns false.

**Alias:** `fwrite()`

**Parameters:**

- `filePath` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- `content` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- Returns: [`Promise<any>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## Example

```js
const fs = require('fsmate');

// With Promises:
fs.fwrite('example.txt', 'Hello World!')
.then(() => {
  console.log('success');
}).catch(err => {
  console.log(err);
});

// With async/await: (not recommended)
async function fwrite(filePath, content) {
  try {
    await fs.fwrite(filePath, content);
    console.log('success');
  } catch(err) {
    console.log(err);
  }
}

fwrite('example.txt', 'Hello World!');
```

For the synchronous version, see: [fwriteSync](./fwriteSync.md)