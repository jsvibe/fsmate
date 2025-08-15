## copy(originFile, targetFile, overwrite)
Synchronously copies a file from a source path (originFile) to a destination path (targetFile) with conditional overwrite behavior.

**Alias:** `copy()`

**Parameters:**

- `originFile` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- `targetFile` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- `overwrite` [`<boolean>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures#boolean_type)
- Returns: [`Promise<any>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

**overwrite:**
- If the target file is older than the origin file, it's always overwritten.
- If the target file is newer, it is overwritten only when the overwrite option is set to true.

## Example

```js
const fs = require('fsmate');

// With Promises:
fs.copy('/home/user/dir/file.txt', '/home/user/dir/newfile.txt')
.then(() => {
  console.log('success');
}).catch(err => {
  console.log(err);
});

// With async/await:
async function copy(originFile, targetFile) {
  try {
    await fs.copy(originFile, targetFile);
    console.log('success');
  } catch(err) {
    console.log(err);
  }
}

copy('/home/user/dir/file.txt', '/home/user/dir/newfile.txt');
```

## 📁 Directory Structure

```
📁 home
└──📁 user
    └──📁 dir
        ├──📄 file.txt
        └──📄 newfile.txt ⟶ copied new file here
```
For the synchronous version, see: [copySync](./copySync.md)

## Using overwrite

```js
const fs = require('fsmate');

// With Promises:
fs.copy('/home/user/dir/file.txt', '/home/user/dir/newfile.txt', true)
.then(() => {
  console.log('success');
}).catch(err => {
  console.log(err);
});

// With async/await:
async function copy(originFile, targetFile, overwrite) {
  try {
    await fs.copy(originFile, targetFile, overwrite);
    console.log('success');
  } catch(err) {
    console.log(err);
  }
}

copy('/home/user/dir/file.txt', '/home/user/dir/newfile.txt', true);
```

## 📁 Directory Structure

```
📁 home
└──📁 user
    └──📁 dir
        ├──📄 file.txt
        └──📄 newfile.txt ⟶ overwrite file data
```
For the synchronous version, see: [copySync](./copySync.md)