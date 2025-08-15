## appendFileSync(filePath, data)
Append data to a file synchronously.
This method wraps `writeFile` with the append (`'a'`) flag, allowing new data to be added at the end of the file seamlessly.

**Alias:** `appendFileSync()`

**Parameters:**

- `filePath` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- `data` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) | [`<Buffer>`](https://nodejs.org/api/buffer.html#buffer) | 
[`<Object>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) | [`<Unit8Array>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array/Uint8Array)
- Returns: [`<void>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void)

## Example

```js
const fs = require('fsmate');

const file = '/tmp/dir/subdir/file.txt';
const data = 'Hello World!';

fs.appendFileSync(file, data);
console.log('success');
```

For the asynchronous version, see: [appendFile](./appendFile.md)