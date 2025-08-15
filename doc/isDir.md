## isDir(path)

Checks if the given path points to a directory. Returns a Promise that resolves to true if it’s a directory, otherwise false.

**Alias:** `isDir()`

**Parameters:**

- `path` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- Returns: [`Promise<any>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## Example

```js
const fs = require('fsmate');

fs.isDir('your-path')
.then((isExists) => {
  console.log('exists:', isExists);
}).catch(err => {
  console.log(err);
});

async function isDir(path) {
  try {
    const isExists = await fs.isDir(path);
    console.log('exists:', isExists);
  } catch(err) {
    console.log(err);
  }
}

isDir('your-path');
```

For the synchronous version, see: [isDirSync](./isDirSync.md)