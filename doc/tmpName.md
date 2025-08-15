## tmpName(prefix)

Generates a unique, obfuscated temporary file or directory name within the given prefix path. The name includes a random, safe character sequence to minimize collisions and avoid exposing predictable patterns.

**Alias:** `tmpName()`

**Parameters:**

- `prefix` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- Returns: [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)

# Example

```js
const fs = require('fsmate');
fs.tmpName('foot/bar/baz'); // Outputs: 'foot/bar/.!!/.!HyZq'
fs.tmpName('foot/bar/baz'); // Outputs: 'foot/bar/.!!/.!XTfs'
fs.tmpName('foot/bar/baz'); // Outputs: 'foot/bar/.!!/.!C80D'
```

Learn more `tempNam` see [documentation](./tempNam.md)