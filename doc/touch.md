## touch(files, mtime, atime)

Asynchronously sets the access and modification times for one or more files. If a file does not exist, it will be created. Useful for updating file timestamps without altering content.

**Alias:** `touch()`

**Parameters:**

- `files` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) | [`<string[]>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- `mtime` [`<number>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) | [`<Date>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- `atime` [`<number>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) | [`<Date>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- Returns: [`Promise<any>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

# Example

```js
const fs = require('fsmate');

fs.touch('newfile.txt')
.then(() => {
  console.log('success');
}).catch(err => {
  console.log(err);
});

async function touch(filePath) {
  try {
    await fs.touch(filePath);
    console.log('success');
  } catch(err) {
    console.log(err);
  }
}

touch('newfile.txt');
```

## Using mtime and atime

```js
const fs = require('fsmate');

let modifiedTime = new Date();
let accessTime = new Date();

// With Promises:
fs.touch('newfile.txt', modifiedTime, accessTime)
.then(() => {
  console.log('success');
}).catch(err => {
  console.log(err);
});

// With async/await:
async function touch(filePath, modifiedTime, accessTime) {
  try {
    await fs.touch(filePath, modifiedTime, accessTime);
    console.log('success');
  } catch(err) {
    console.log(err);
  }
}

touch('newfile.txt', modifiedTime, accessTime);
```

## Creates multiple files

```js
const fs = require('fsmate');

let modifiedTime = new Date();
let accessTime = new Date();

// With Promises:
fs.touch([
  'newfile.txt',
  'README.md',
  'LICENSE'
], modifiedTime, accessTime)
.then(() => {
  console.log('success');
}).catch(err => {
  console.log(err);
});

// With async/await:
async function touch(filePath, modifiedTime, accessTime) {
  try {
    await fs.touch(filePath, modifiedTime, accessTime);
    console.log('success');
  } catch(err) {
    console.log(err);
  }
}

touch([
  'newfile.txt',
  'README.md',
  'LICENSE'
], modifiedTime, accessTime);
```

For the synchronous version, see: [touchSync](./touchSync.md)