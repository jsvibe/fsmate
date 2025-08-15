## mkdir(paths)

Asynchronously creates one or more directories recursively. Returns a Promise that resolves when all directories are created.

**Alias:** `mkdir()`

**Parameters:**

- `paths` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures#string_type) | [`<string[]>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- Returns: [`Promise<any>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)


```js
const fs = require('fsmate');

// With Promises:
fs.mkdir('/home/mydir')
.then(() => {
  console.log('success');
}).catch(err => {
  console.log(err);
});

// With async/await:
async function mkdir(path) {
  try {
    await fs.mkdir(path);
    console.log('success');
  } catch(err) {
    console.log(err);
  }
}

mkdir('/home/mydir');
```

## 📁 Directory Structure

```
📁 home
└──📁 mydir ⟶ Created
```

For the synchronous version, see: [mkdirSync](./mkdirSync.md)

## How to create multiple directories

```js
const fs = require('fsmate');

// With Promises:
fs.mkdir([
  '/home/global',
  '/home/dist',
  '/home/src',
  '/home/vendor'
])
.then(() => {
  console.log('success');
}).catch(err => {
  console.log(err);
});

// Wit async/await:
// Same above...
```

## 📁 Directory Structure

```
📁 home
├──📁 global ⟶ Created
├──📁 dist ⟶ Created
├──📁 src ⟶ Created
└──📁 vendor ⟶ Created
```

For the synchronous version, see: [mkdirSync](./mkdirSync.md)