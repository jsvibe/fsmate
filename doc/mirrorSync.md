## mirrorSync(originDir, targetDir, overwrite)

Synchronously copies files and directories from the source to the target. Overwrites existing files unless `overwrite` is `false`. Does not delete extra files in the target.

**Alias:** `mirrorSync()`

**Parameters:**

- `originDir` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- `targetDir` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- `overwrite` [`<boolean>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures#boolean_type)
- Returns: [`<void>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void)

## Example

```js
const fs = require('fsmate');

fs.mirrorSync('react-project', 'mirror-project');
console.log('success');
```

For the asynchronous version, see: [mirror](./mirror.md)