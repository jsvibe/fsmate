## exists(path)

Asynchronously checks whether the specified file or directory exists, returning a Promise that resolves to true or false.

**Alias:** `exists()`

**Parameters:**

- `path` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- Returns: [`Promise<any>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## Example

```js
const fs = require('fsmate');

// With Promises:
fs.exists('/home/user/file.txt')
.then((isExists) => {
  console.log('exists:', isExists);
}).catch(err => {
  console.log(err);
});

// With async/await:
async function exists(path) {
  try {
    const isExists = await fs.exists(path);
    console.log('exists:', isExists);
  } catch(err) {
    console.log(err);
  }
}

exists('/home/user/file.txt');
```