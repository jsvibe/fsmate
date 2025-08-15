## empty(paths)

Empty files or directories.

Empties the given file(s) or directory(ies). Directories are cleared of their contents, and files are truncated without deletion.

**Alias:** `emptySync()`

**Parameters:**

- `paths` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures#string_type) | [`<string[]>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- Returns: [`<void>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void)

## Example

```js
const fs = require('fsmate');

fs.emptySync('/home/components');
console.log('success');
```

## 📁 Directory Structure

```
📁 home
└──📁 components ⟶ Empty dir
    ├──📁 dir ⟶ Removed
    ├──📄 file.txt ⟶ Removed
    └──📄 newfile.txt ⟶ Removed
```

For the asynchronous version, see: [empty](./empty.md)

## Empty multiple files and directories

```js
const fs = require('fsmate');

fs.emptySync([
  'home/node_modules',
  'home/src',
  'home/vendor',
  'home/components',
  'home/file.txt',
  'home/data.json'
]);
console.log('success');
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

For the asynchronous version, see: [empty](./empty.md)