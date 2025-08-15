## removeSync(files, recursive)

Synchronously removes one or more files or directories. Can delete directories recursively or rename them to temporary names before removal to prevent conflicts. Also supports symbolic link handling and ensures safe deletion order for nested items.

**Alias:** `removeSync()`

**Parameters:**

- `files` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) | [`<string[]>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- `recursive` [`<boolean>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures#boolean_type)
- Returns: [`<void>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void)

# Example

```js
const fs = require('fsmate');

fs.removeSync('/home/node_modules');
console.log('success');
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

fs.removeSync([
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

For the asynchronous version, see: [remove](./remove.md)