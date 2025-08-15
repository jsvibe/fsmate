## isWritable(path)

Asynchronously checks if the given file or directory has write permissions. Returns a Promise that resolves if writable, otherwise rejects.

**Alias:** `isWriable()`

**Parameters:**

- `path` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- Returns: [`Promise<any>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## Example

```js
const fs = require('fsmate');

// With Promises:
fs.isWritable('/var/www/index.html')
.then(() => {
  console.log('isWritable');
}).catch(err => {
  console.log(err);
});

// With async/await:
async function isWritable(path) {
  try {
    fs.isWritable(path);
    console.log('Writable');
  } catch(err) {
    console.log(err);
  }
}

isWritable('/var/www/index.html');
```

For the synchronous version, see: [isWritableSync](./isWritableSync.md)