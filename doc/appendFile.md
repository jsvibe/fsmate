## appendFile(filePath, data, options)
Append data to a file asynchronously.
This method wraps `writeFile` with the append (`'a'`) flag, allowing new data to be added at the end of the file seamlessly.

**Alias:** `appendFile()`

**Parameters:**

- `filePath` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- `data` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) | [`<Buffer>`](https://nodejs.org/api/buffer.html#buffer) | 
[`<Object>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) | [`<Unit8Array>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array/Uint8Array)
- Returns: [`Promise<any>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## Example

```js
const fs = require('fsmate');

const file = '/tmp/dir/subdir/file.txt';
const data = 'Hello World!';

// With Promises:
fs.appendFile(file, data)
.then(() => {
  console.log('success');
}).catch(e => {
  console.log(e);
});

// With async/await:
async function appendFile(f, content) {
  try {
    await fs.appendFile(f, content);
    console.log('success');
  } catch(err) {
    console.log(err);
  }
}

appendFile(file, data);
```

For the synchronous version, see: [appendFileSync](./appendFileSync.md)