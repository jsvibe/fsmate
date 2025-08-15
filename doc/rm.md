## rm(files)

Asynchronously removes one or more files or directories. Directories are first renamed to a temporary name to prevent deletion conflicts. Supports options like `{ recursive: true, force: true }` for deep and forced deletion. Useful for safe cleanup operations where rollback is possible if deletion fails.

**Alias:** `rm()`

**Parameters:**

- `files` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) | [`<string[]>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- Returns: [`Promise<any>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

# Example

```js
const fs = require('fsmate');

fs.rm('/home/node_modules')
.then(() => {
  console.log('success');
}).catch(err => {
  console.log(err);
});

async function rm(path) {
  try {
    fs.rm(path);
    console.log('success');
  } catch(err) {
    console.log(err);
  }
}

rm('/home/vendor');
```

## 📁 Directory Structure

```
📁 home
├──📁 node_modules ⟶ Removed
├──📁 docs
└──📁 vendor ⟶ Removed
```

For the synchronous version, see: [removeSync](./removeSync.md)

## Remove multiple files and directories

```js
const fs = require('fsmate');

fs.rm([
  'node_modules',
  'vendor',
  'src',
  'README.md',
  'package-lock.json'
])
.then(() => {
  console.log('success');
}).catch(err => {
  console.log(err);
});
```

## 📁 Directory Structure

```
📁 node_modules      ⟶ Removed
📁 dist
📁 vendor            ⟶ Removed
📁 src               ⟶ Removed
📁 components
📄 README.md         ⟶ Removed
📄 package.json
📄 package-lock.json ⟶ Removed
```

For the synchronous version, see: [rmSync](./rmSync.md)