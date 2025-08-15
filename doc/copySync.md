## copy(originFile, targetFile, overwrite)
Synchronously copies a file from a source path (originFile) to a destination path (targetFile) with conditional overwrite behavior.

**Alias:** `copy()`

**Parameters:**

- `originFile` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- `targetFile` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- `overwrite` [`<boolean>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures#boolean_type)
- Returns: [`<void>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void)

**overwrite:**
- If the target file is older than the origin file, it's always overwritten.
- If the target file is newer, it is overwritten only when the overwrite option is set to true.

## Example

```js
const fs = require('fsmate');

fs.copySync('/home/user/dir/file.txt', '/home/user/dir/newfile.txt');
console.log('success');
```

## 📁 Directory Structure

```
📁 home
└──📁 user
    └──📁 dir
        ├──📄 file.txt
        └──📄 newfile.txt ⟶ copied new file here
```
For the asynchronous version, see: [copy](./copy.md)

## Using overwrite

```js
const fs = require('fsmate');

fs.copySync('/home/user/dir/file.txt', '/home/user/dir/newfile.txt');
console.log('success');
```

## 📁 Directory Structure

```
📁 home
└──📁 user
    └──📁 dir
        ├──📄 file.txt
        └──📄 newfile.txt ⟶ overwrite file data
```
For the asynchronous version, see: [copy](./copy.md)