
Synchronously creates one or more files. Overwrites existing files only if `overwrite` is `true`.

**Alias:** `mkfileSync()`

**Parameters:**

- `paths` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures#string_type) | [`<string[]>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- `overwrite` [`<boolean>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures#boolean_type)
- Returns: [`<void>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void)

# Example

```js
const fs = require('fsmate');

fs.mkfileSync('example.txt');
console.log('success');
```

## How to create multiple files

```js
const fs = require('fsmate');

// With Promises:
fs.mkfileSync([
  'package.json',
  'package-lock.json',
  'README.md',
  'LICENSE',
  'CONTRIBUTING.md'
]);
console.log('success');
```

For the asynchronous version, see: [mkfile](./mkfile.md)