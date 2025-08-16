## move(oldPath, newPath, overwrite)

Moves a file or directory.

The move method asynchronously relocates or renames files and directories, ensuring paths aren’t identical. By default, it blocks overwriting unless explicitly allowed.

**Alias:** `move()`

**Parameters:**

- `oldPath` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- `newPath` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- `overwrite` [`<boolean>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures#boolean_type)
- Returns: [`Promise<any>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

# Example

```js
const fs = require('fsmate');

// With Promises:
fs.move('/home/user/oldfile.txt', '/home/public/newfile.txt')
.then(() => {
  console.log('success');
}).catch(err => {
  console.log(err);
});

// With async/await:
async function move(oldPath, newPath) {
  try {
    await fs.move(oldPath, newPath);
    console.log('success');
  } catch(err) {
    console.log(err);
  }
}

move('/home/user/oldfile.txt', '/home/public/newfile.txt');
```

For the synchronous version, see: [moveSync](./moveSync.md)