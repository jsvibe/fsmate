## rmSync(files)

Synchronously removes one or more files or directories, renaming directories to temporary names before deletion to avoid conflicts. Supports options like `{ recursive: true, force: true }`. Ideal for scripts that require immediate, blocking cleanup.

**Alias:** `rmSync()`

**Parameters:**

- `files` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) | [`<string[]>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- Returns: [`<void>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void)

# Example

```js
const fs = require('fsmate');

fs.rmSync('/home/node_modules');
console.log('success');
```

## 📁 Directory Structure

```
📁 home
├──📁 node_modules ⟶ Removed
├──📁 docs
└──📁 vendor ⟶ Removed
```

For the asynchronous version, see: [remove](./remove.md)

## Remove multiple files and directories

```js
const fs = require('fsmate');

fs.rmSync([
  'node_modules',
  'vendor',
  'src',
  'README.md',
  'package-lock.json'
]);
console.log('success');
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

For the asynchronous version, see: [rm](./rm.md)