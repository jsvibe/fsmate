## mirror(originDir, targetDir, overwrite)

Asynchronously copies files and directories from the source to the target. Overwrites existing files unless `overwrite` is `false`. Does not delete extra files in the target.

**Alias:** `mirror()`

**Parameters:**

- `originDir` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- `targetDir` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- `overwrite` [`<boolean>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures#boolean_type)
- Returns: [`Promise<any>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## Example

```js
const fs = require('fsmate');

// With Promises:
fs.mirror('react-project', 'mirror-project')
.then(() => {
  console.log('success');
}).catch(err => {
  console.log(err);
});

// With async/await:
async function mirror(originDir, targetDir) {
  try {
    await fs.mirror(originDir, targetDir);
    console.log('success');
  } catch(err => {
    console.log(err);
  });
}

mirror('react-project', 'mirror-project');
```

For the synchronous version, see: [mirrorSync](./mirrorSync.md)