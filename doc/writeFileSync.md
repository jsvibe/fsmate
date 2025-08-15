## writeFileSync(filePath, data)

Synchronously writes data to a file. Accepts a readable stream or any data type.

**Alias:** `writeFileSync()`

**Parameters:**

- `filePath` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- `content` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) | [`<Buffer>`](https://nodejs.org/api/buffer.html#buffer) | 
[`<Object>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) | [`<Unit8Array>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array/Uint8Array)
- Returns: [`<void>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void)

# Example

```js
const fs = require('fsmate');

const data = {
  id: 1,
  user: 'foo',
  email: 'example@gmail.com',
  age: 22
};

fs.writeFileSync('db.json', data);
console.log('success');
```

For the asynchronous version, see: [writeFile](./writeFile.md)