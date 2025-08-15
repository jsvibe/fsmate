## prependFileSync(filePath, data)

Synchronously prepends data to a file by reading its current contents and adding the new data at the beginning. Useful for quick, blocking updates where performance is less critical.

**Alias:** `prependFileSync()`

**Parameters:**

- `filePath` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- `data` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) | [`<Buffer>`](https://nodejs.org/api/buffer.html#buffer) | 
[`<Object>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) | [`<Unit8Array>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array/Uint8Array)
- Returns: [`<void>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void)

# Example

```js
const fs = require('fsmate');

const file = '/tmp/dir/subdir/file.txt';
const data = 'Hello World!';

fs.prependFileSync(file, data);
console.log('success');
```

For the asynchronous version, see: [prependFile](./prependFile.md)