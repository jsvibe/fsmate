## writeFile(filePath, data)

Asynchronously writes data to a file using streams. Accepts a readable stream or any data type. Supports stream options such as chunk size.

**Alias:** `writeFile()`

**Parameters:**

- `filePath` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- `content` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) | [`<Buffer>`](https://nodejs.org/api/buffer.html#buffer) | 
[`<Object>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) | [`<Unit8Array>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array/Uint8Array)
- Returns: [`Promise<any>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

# Example

```js
const fs = require('fsmate');

const data = {
  id: 1,
  user: 'foo',
  email: 'example@gmail.com',
  age: 22
};

// With Promises:
// If the `db.json` file does not exist, it will be created
fs.writeFile('db.json', data)
.then(() => {
  console.log('success');
}).catch(err => {
  console.log(err);
});

// With async/await:
async function writeFile(filePath, data) {
  try {
    await fs.writeFile(filePath, data);
    console.log('success');
  } catch(err) {
    console.log(err);
  }
}

writeFile('db.json', data);
```

For the synchronous version, see: [writeFileSync](./writeFileSync.md)