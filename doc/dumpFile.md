## dumpFile(filePath, content)
Safely writes data to a file by writing to a temp file first, then atomically replacing the original. Ensures directory exists and cleans up on failure.

**Alias:** `dumpFile()`

**Parameters:**

- `filePath` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- `content` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) | [`<Buffer>`](https://nodejs.org/api/buffer.html#buffer) | 
[`<Object>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) | [`<Unit8Array>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array/Uint8Array)
- Returns: [`Promise<any>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## Example

```js
const fs = require('fsmate');

const content = 'Hello World';

// With Promises:
fs.dumpFile('/home/user/dir/newfile.txt', content)
.then(() => {
  console.log('success');
}).catch(err => {
  console.log(err);
});

// With async/await:
async function dumpFile(originFile, content) {
  try {
    await fs.dumpFile(originFile, content);
    console.log('success');
  } catch(err) {
    console.log(err);
  }
}

dumpFile('/home/user/dir/newfile.txt', content);
```

## 📁 Directory Structure

```
📁 home
└──📁 user
    └──📁 dir
        ├──📄 file.txt
        └──📄 newfile.txt ⟶ Created newfile.txt
```
For the synchronous version, see: [dumpFileSync](./dumpFileSync.md)

## Using overwrite

```js
const fs = require('fsmate');

const content = {
  id: 1,
  user: 'foo',
  email: 'example@gmail.com',
  adult: true
};

// With Promises:
fs.dumpFile('/home/user/dir/newfile.txt', content)
.then(() => {
  console.log('success');
}).catch(err => {
  console.log(err);
});

// With async/await:
async function dumpFile(originFile, content) {
  try {
    await fs.dumpFile(originFile, content);
    console.log('success');
  } catch(err) {
    console.log(err);
  }
}

dumpFile('/home/user/dir/newfile.txt', content);
```

## 📁 Directory Structure

```
📁 home
└──📁 user
    └──📁 dir
        ├──📄 file.txt
        └──📄 newfile.txt ⟶ overwrite file data
```
For the synchronous version, see: [dumpFileSync](./dumpFileSync.md)