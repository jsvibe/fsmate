## rewind(filePath)

This function resets the file pointer back to the beginning of the file. It is equivalent to calling fseek(handle, 0, SEEK_SET).

**Alias:** `rewind()`

**Parameters:**

- `filePath` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- Returns: [`Promise<any>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## Example

```js
const fs = require('fsmate');

// With Promises:
fs.rewind('example.txt')
.then(() => {
  console.log('Moved pointer position at 0');
}).catch(err => {
  console.log(err);
});

// With async/await: (not recommended)
async function rewind(filePath) {
  try {
    await fs.rewind(filePath);
    console.log('Moved pointer position at 0');
  } catch(err) {
    console.log(err);
  }
}

rewind('example.txt');
```

For the synchronous version, see: [rewindSync](./rewindSync.md)