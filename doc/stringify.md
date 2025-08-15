## stringify(data)

Converts different data types into their string form for safe storage or display. Handles `null/undefined` as an empty string, Buffers and `Uint8Array` as UTF-8 text, objects as pretty-printed JSON, and numbers/bigints as strings. Throws an error for unsupported types, ensuring predictable output.

**Alias:** `stringify()`

**Parameters:**

- `data` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) | [`<Buffer>`](https://nodejs.org/api/buffer.html#buffer) | 
[`<Object>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) | [`<Unit8Array>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array/Uint8Array) | [`<number>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
- Returns: [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)

# Example

```js
const fs = require('fsmate');

let data;

// Array
data = fs.stringify(['foo', 'bar', 'baz']);
fs.writeFileSync('your-file-path', data);

// Number or Bigint
data = fs.stringify(8969569832335);
fs.writeFileSync('your-file-path', data);

// Object
data = fs.stringify({user: 'john', age: 18});
fs.writeFileSync('your-file-path', data);

// Unit8Array
const content = 'Hello World';
const encoder = new TextEncoder();
const Unit8Array = encoder.encode(content);
data = fs.stringify(Unit8Array);
fs.writeFileSync('your-file-path', data);

// Buffer
const Buffer = Buffer.from('Hello World');
data = fs.stringify(Buffer);
fs.writeFileSync('your-file-path', data);

// String
data = fs.stringify('Hello World');
fs.writeFileSync('your-file-path', data);
```

Learn for more `fs.createInputStream` method: [createInputStream](./createInputStream.md)