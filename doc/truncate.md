## truncate(path)

Asynchronously clears the contents of a file without deleting it. Creates an empty file if it does not exist.

**Alias:** `truncate()`

**Parameters:**

- `path` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- Returns: [`Promise<any>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## Example

```js
const fs = require('fsmate');

// With Promises:
fs.truncate('myfile.txt')
.then(() => {
  console.log('File has been emptied successfully');
}).catch(err => {
  console.log(err);
});

// With async/await:
async function truncate(path) {
  try {
    await fs.truncate(path);
    console.log('File has been emptied successfully');
  } catch(err) {
    console.log(err);
  }
}

truncate('myfile.txt');
```

For the synchronous version, see: [truncateSync](./truncateSync.md)