## mkfile(paths, overwrite)

Asynchronously creates one or more files. Overwrites existing files only if `overwrite` is `true`.

**Alias:** `mkfile()`

**Parameters:**

- `paths` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures#string_type) | [`<string[]>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- `overwrite` [`<boolean>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures#boolean_type)
- Returns: [`Promise<any>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

# Example

```js
const fs = require('fsmate');

// With Promises:
fs.mkfile('example.txt')
.then(() => {
  console.log('success');
}).catch(err => {
  console.log(err);
});

// With async/await:
async function mkfile(path, overwrite) {
  try {
    await fs.mkfile(path, overwrite);
    console.log('success');
  } catch(err) {
    console.log(err);
  }
}

mkfile('example.txt');
```

## How to create multiple files

```js
const fs = require('fsmate');

// With Promises:
fs.mkfile([
  'package.json',
  'package-lock.json',
  'README.md',
  'LICENSE',
  'CONTRIBUTING.md'
])
.then(() => {
  console.log('success');
}).catch(err => {
  console.log(err);
});

// With async/await:
async function mkfile(paths, overwrite) {
  try {
    await fs.mkfile(paths, overwrite);
    console.log('success');
  } catch(err) {
    console.log(err);
  }
}

mkfile([
  'package.json',      // ⟶ overwrite content
  'package-lock.json', // ⟶ overwrite content
  'README.md',         // ⟶ overwrite content
  'LICENSE',           // ⟶ overwrite content
  'CONTRIBUTING.md'    // ⟶ overwrite content
], true);
```

For the synchronous version, see: [mkfileSync](./mkfileSync.md)