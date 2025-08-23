## remove(files, recursive)

Asynchronously removes one or more files or directories. For directories, it can optionally perform recursive deletion. To avoid file system conflicts, directories may be temporarily renamed before removal. Also handles symbolic links and ensures child items are deleted before parents.

**Alias:** `remove()`

**Parameters:**

- `files` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) | [`<string[]>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- `recursive` [`<boolean>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures#boolean_type)
- Returns: [`Promise<any>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

# Example

```js
const fs = require('fsmate');

// With Promises:
fs.remove('/home/node_modules')
.then(() => {
  console.log('success');
}).catch(err => {
  console.log(err);
});

// With async/await:
async function remove(path) {
  try {
    await fs.remove(path);
    console.log('success');
  } catch(err) {
    console.log(err);
  }
}

remove('/home/vendor');
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

fs.remove([
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

For the synchronous version, see: [removeSync](./removeSync.md)