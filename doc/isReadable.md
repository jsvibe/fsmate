## isReadable(path)

Asynchronously checks if the given file or directory exists and has read permissions. Returns a Promise that resolves if readable, otherwise rejects.

**Alias:** `isReadable()`

**Parameters:**

- `path` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- Returns: [`Promise<any>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## Example

```js
const fs = require('fsmate');

// With Promises:
fs.isReadable('/home/user/file.txt')
.then(matched => {
  console.log('isReadable:', matched);
}).catch(err => {
  console.log(err);
});

// With async/await:
async function isReadable(path) {
  try {
    const matched = fs.isReadable(path);
    console.log('isReadable:', matched);
  } catch(err) {
    console.log(err);
  }
}

isReadable('/home/user/file.txt');
```

For the synchronous version, see: [isReadbaleSync](./isReadbaleSync.md)