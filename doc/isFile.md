## isFile(path)

Checks if the given path points to a regular file. Returns a Promise that resolves to `true` if it’s a file, otherwise `false`.

**Alias:** `isFile()`

**Parameters:**

- `path` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- Returns: [`Promise<any>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## Example

```js
const fs = require('fsmate');

// With Promises:
fs.isFile('/home/user/file.txt')
.then(matched => {
  console.log('isFile:', matched);
}).catch(err => {
  console.log(err);
});

// With async/await:
async function isFile(path) {
  try {
    const matched = await fs.isFile(path);
    console.log('isFile:', matched);
  } catch(err) {
    console.log(err);
  }
}

isFile('/home/user/file.txt');
```

For the synchronous version, see: [isFileSync](./isFileSync.md)