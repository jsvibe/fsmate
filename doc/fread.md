## fread(filePath, length)

This function reads a specified number of bytes from an open file pointer. On success, it returns the data as a string; on failure, it returns false. It is frequently used to read raw binary data or fixed-length chunks from files.

**Alias:** `fread()`

**Parameters:**

- `filePath` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- `length` [`<number>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
- Returns: [`Promise<any>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)


## Example

```js
const fs = require('fsmate');

const file = 'example.txt';

// With Promises:
// Read 50 character from 'file'
fs.fread(file, 50)
.then(data => {
  console.log(data);
}).catch(err => {
  console.log(err);
});

// With async/await:
async function fread(filePath, length) {
  try {
    const data = await fs.fread(filePath, length);
    console.log(data);
  } catch(err) {
    console.log(err);
  }
}

// Read full content
fread(file, fs.filesizeSync(file));
```

For the synchronous version, see: [freadSync](./freadSync.md)