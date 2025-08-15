## createInputStream(data)

Converts input data into a readable stream that can be directly piped into file system write operations.
Useful for writing any kind of structured or unstructured data to files using streams in Node.js.

**Alias:** `createInputStream()`

**Parameters:**

- `data` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) | [`<Buffer>`](https://nodejs.org/api/buffer.html#buffer) | 
[`<Object>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) | [`<Unit8Array>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array/Uint8Array) | [`<number>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
- Returns: [`<Readable>`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream)

## Example

```js
const fs = require('fsmate');

let data;

// Array
data = fs.createInputStream(['foo', 'bar', 'baz']);
fs.appendFile('your-file-path', data);

// Number or Bigint
data = fs.createInputStream(8969569832335);
fs.appendFile('your-file-path', data);

// Object
data = fs.createInputStream({user: 'john', age: 18});
fs.appendFile('your-file-path', data);

// Unit8Array
const content = 'Hello World';
const encoder = new TextEncoder();
const Unit8Array = encoder.encode(content);
data = fs.createInputStream(Unit8Array);
fs.appendFile('your-file-path', data);

// Buffer
const Buffer = Buffer.from('Hello World');
data = fs.createInputStream(Buffer);
fs.appendFile('your-file-path', data);

// String
data = fs.createInputStream('Hello World');
fs.appendFile('your-file-path', data);
```

Learn for more `fs.stringify` method: [stringify](./stringify.md)