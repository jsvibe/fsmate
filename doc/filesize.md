## filesize(filename)

This function returns the size of a given file in bytes. If the file exists and is accessible, the result is an integer representing the total number of bytes. If the file does not exist or cannot be accessed, it returns false.

**Alias:** `filesize()`

**Parameters:**

- `filename` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- Returns: [`Promise<any>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## Example

```js
const fs = require('fsmate');

// With Promises:
fs.filesize('example.txt')
.then(size => {
  console.log(size);
}).catch(err => {
  console.log(err);
});

// With async/await:
async function filesize(filename) {
  try {
    const size = await fs.filesize(filename);
    console.log(size);
  } catch(err) {
    console.log(err);
  }
}

filesize('example.txt');
```

For the synchronous version, see: [filesizeSync](./filesizeSync.md)