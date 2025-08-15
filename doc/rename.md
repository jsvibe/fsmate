## rename(oldPath, newPath, overwrite)

Renames a file or directory.

Asynchronously renames or moves a file or directory to a new location. If `overwrite` is `false` (default), the operation will fail if the target path already exists. Useful for safely reorganizing or relocating files.

**Alias:** `rename()`

**Parameters:**

- `oldPath` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- `newPath` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- `overwrite` [`<boolean>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures#boolean_type)
- Returns: [`Promise<any>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

# Example

```js
const fs = require('fsmate');

// With Promises:
fs.rename('/home/user/oldfile.txt', '/home/user/newfile.txt')
.then(() => {
  console.log('success');
}).catch(err => {
  console.log(err);
});

// With async/await:
async function rename(oldPath, newPath) {
  try {
    await fs.rename(oldPath, newPath);
    console.log('success');
  } catch(err) {
    console.log(err);
  }
}

rename('/home/user/oldfile.txt', '/home/user/newfile.txt');
```

## Move file and directories

**Note:** If your given `newPath` of director not same of `oldPath` directory then `fs.rename` will move your file or directory.

```js
const fs = require('fsmate');

// With Promises:
fs.rename('/home/user/oldfile.txt', '/home/user/src/newfile.txt', true)
.then(() => {
  console.log('success');
}).catch(err => {
  console.log(err);
});

// With async/await:
async function rename(oldPath, newPath, overwrite) {
  try {
    await fs.rename(oldPath, newPath);
    console.log('success');
  } catch(err) {
    console.log(err);
  }
}

rename('/home/user/oldfile.txt', '/home/user/src/newfile.txt', true);
```

For the synchronous version, see: [renameSync](./renameSync.md)