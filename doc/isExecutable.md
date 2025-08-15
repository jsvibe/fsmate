# isExecutable(path)

Checks if the given file or directory has execute permissions. Returns a Promise that resolves if executable, otherwise rejects.

**Alias:** `isExecutable()`

**Parameters:**

- `path` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- Returns: [`Promise<any>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## Example

```js
const fs = require('fsmate');

// With Promises:
fs.isExecutable('your-path')
.then((res) => {
  console.log('Executable:', res);
}).catch(err => {
  console.log(err);
});

// With async/await:
async function isExecutable(path) {
  try {
    const matched = await fs.isExecutable(path);
    console.log('Executable:', matched);
  } catch(err) {
    console.log(err);
  }
}

isExecutable('your-path');
```

For the synchronous version, see: [isExecutableSync](./isExecutableSync.md)