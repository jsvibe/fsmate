## mkdirSync(paths)

Synchronously creates one or more directories recursively.

**Alias:** `mkdirSync()`

**Parameters:**

- `paths` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures#string_type) | [`<string[]>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- Returns: [`<void>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void)

## Example

```js
const fs = require('fsmate');

fs.mkdirSync('/home/mydir');
console.log('success');
```

## 📁 Directory Structure

```
📁 home
└──📁 mydir ⟶ Created
```

For the asynchronous version, see: [mkdir](./mkdir.md)

## How to create multiple directories

```js
const fs = require('fsmate');

fs.mkdirSync([
  '/home/global',
  '/home/dist',
  '/home/src',
  '/home/vendor'
]);

console.log('success');
```

## 📁 Directory Structure

```
📁 home
├──📁 global ⟶ Created
├──📁 dist ⟶ Created
├──📁 src ⟶ Created
└──📁 vendor ⟶ Created
```

For the asynchronous version, see: [mkdir](./mkdir.md)