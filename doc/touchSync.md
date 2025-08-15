## touchSync(files, mtime, atime)

Synchronously sets the access and modification times for one or more files. If a file does not exist, it will be created. Useful for quickly refreshing timestamps during scripts or builds.

**Alias:** `touchSync()`

**Parameters:**

- `files` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) | [`<string[]>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- `mtime` [`<number>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) | [`<Date>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- `atime` [`<number>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) | [`<Date>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- Returns: [`<void>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void)

# Example

```js
const fs = require('fsmate');

fs.touchSync('newfile.txt');
console.log('success');
```

## Using mtime and atime

```js
const fs = require('fsmate');

let modifiedTime = new Date();
let accessTime = new Date();

fs.touchSync('newfile.txt', modifiedTime, accessTime);
console.log('success');
```

## Creates multiple files

```js
const fs = require('fsmate');

let modifiedTime = new Date();
let accessTime = new Date();

fs.touch([
  'newfile.txt',
  'README.md',
  'LICENSE'
], modifiedTime, accessTime);
console.log('success');
```

For the asynchronous version, see: [touch](./touch.md)