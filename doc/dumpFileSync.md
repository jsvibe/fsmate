## dumpFileSync(filePath, content)
Safely writes data to a file by writing to a temp file first, then atomically replacing the original. Ensures directory exists and cleans up on failure.

**Alias:** `dumpFileSync()`

**Parameters:**

- `filePath` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- `content` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) | [`<Buffer>`](https://nodejs.org/api/buffer.html#buffer) | 
[`<Object>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) | [`<Unit8Array>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array/Uint8Array)
- Returns: [`<void>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void)

## Example

```js
const fs = require('fsmate');

const content = 'Hello World';

fs.dumpFileSync('/home/user/dir/newfile.txt', content);
console.log('success');
```

## 📁 Directory Structure

```
📁 home
└──📁 user
    └──📁 dir
        ├──📄 file.txt
        └──📄 newfile.txt ⟶ Created newfile.txt
```
For the asynchronous version, see: [dumpFile](./dumpFile.md)

## Using overwrite

```js
const fs = require('fsmate');

const content = {
  id: 1,
  user: 'foo',
  email: 'example@gmail.com',
  adult: true
};

fs.dumpFile('/home/user/dir/newfile.txt', content);
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
For the asynchronous version, see: [dumpFile](./dumpFile.md)