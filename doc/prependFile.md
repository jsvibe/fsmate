## prependFile(filePath, data)

Asynchronously prepends data to a file by reading its current contents and writing the new data before them. Supports optional read/write settings and works with streams for efficient handling of large files.

**Alias:** `prependFile()`

**Parameters:**

- `filePath` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- `data` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) | [`<Buffer>`](https://nodejs.org/api/buffer.html#buffer) | 
[`<Object>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) | [`<Unit8Array>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array/Uint8Array)
- Returns: [`Promise<any>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

# Example

```js
const fs = require('fsmate');

const file = '/tmp/dir/subdir/file.txt';
const data = 'Hello World!';

// With Promises:
fs.prependFile(file, data)
.then(() => {
  console.log('success');
}).catch(e => {
  console.log(e);
});

// With async/await:
async function prependFile(f, content) {
  try {
    await fs.prependFile(f, content);
    console.log('success');
  } catch(err) {
    console.log(err);
  }
}

prependFile(file, data);
```

For the synchronous version, see: [prependFileSync](./prependFileSync.md)