## truncateSync(path)

Synchronously clears the contents of a file without deleting it. Creates an empty file if it does not exist.

**Alias:** `truncateSync()`

**Parameters:**

- `path` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- Returns: [`<void>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void)

## Example

```js
const fs = require('fsmate');

fs.truncateSync('myfile.txt');
console.log('File has been emptied successfully');
```

For the synchronous version, see: [truncate](./truncate.md)