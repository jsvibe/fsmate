## empty(paths)

Empty files or directories.

Empties the given file(s) or directory(ies). Directories are cleared of their contents, and files are truncated without deletion.

**Alias:** `empty()`

**Parameters:**

- `paths` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures#string_type) | [`<string[]>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- Returns: [`Promise<any>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## Example

```js
const fs = require('fsmate');

// With Promises:
fs.empty('/home/components')
.then(() => {
  console.log('success');
}).catch(err => {
  console.log(err);
});

// With async/await:
async function empty(path) {
  try {
    await fs.empty(path);
    console.log('success');
  } catch(err) {
    console.log(err);
  }
}

empty('/home/components');
```

## 📁 Directory Structure

```
📁 home
└──📁 components ⟶ Empty dir
    ├──📁 dir ⟶ Removed
    ├──📄 file.txt ⟶ Removed
    └──📄 newfile.txt ⟶ Removed
```

For the synchronous version, see: [emptySync](./emptySync.md)

## Empty multiple files and directories

```js
const fs = require('fsmate');

// With Promises:
fs.empty([
  'home/node_modules',
  'home/src',
  'home/vendor',
  'home/components',
  'home/file.txt',
  'home/data.json'
])
.then(() => {
  console.log('success');
}).catch(err => {
  console.log(err);
});

// With async/await:
async function empty(paths) {
  try {
    await fs.empty(paths);
    console.log('success');
  } catch(err) {
    console.log(err);
  }
}

empty([
  'home/node_modules',
  'home/src',
  'home/vendor',
  'home/components',
  'home/file.txt',
  'home/data.json'
]);
```

## 📁 Directory Structure

```
📁 home
├──📁 node_modules
│  ├──📁 fsmate ⟶ Removed
│  ├──📁 printfy ⟶ Removed
│  ├──📄 .package-lock.json ⟶ Removed
│  └──📄 package.json ⟶ Removed
│
├──📁 src 
│  ├──📁 exports ⟶ Removed
│  ├──📁 modules ⟶ Removed
│  └──📄 package.json ⟶ Removed
│
├──📁 vendor
│  ├──📁 lazervel ⟶ Removed
│  └──📄 autoload.php ⟶ Removed
│
├──📁 components
│  ├──📁 profile ⟶ Removed
│  ├──📁 dashboard ⟶ Removed
│  └──📄 App.js ⟶ Removed
│
├──📄 file.txt ⟶ Empty file content
└──📄 data.json ⟶ Empty file content
```

For the synchronous version, see: [emptySync](./emptySync.md)