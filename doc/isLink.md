## isLink(path)

Checks if the given path is a symbolic link. Returns a Promise that resolves to `true` if it’s a symlink, otherwise `false`.

**Alias:** `isLink()`

**Parameters:**

- `path` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- Returns: [`Promise<any>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## Example

```js
const fs = require('fsmate');

// With Promises:
fs.isLink('/home/user/symlink.txt')
.then(matched => {
  console.log('isLink:', matched);
}).catch(err => {
  console.log(err);
});

// With async/await:
async function isLink(path) {
  try {
    const matched = await fs.isLink(path);
    console.log('isLink:', matched);
  } catch(err) {
    console.log(err);
  }
}

isLink('/home/user/symlink.txt');
```

For the synchronous version, see: [isLinkSync](./isLinkSync.md)