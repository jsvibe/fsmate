## readFileSync(filePath, parsed)

Synchronously reads the entire file content. If `parsed` is `true`, attempts to parse the content as JSON. Useful for scripts where immediate, blocking access to file data is required.

**Alias:** `readFileSync()`

**Parameters:**

- `filePath` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- `parsed` [`<boolean>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures#boolean_type)
- Returns: [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) | [`<Object>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

# Example

```js
const fs = require('fsmate');

const data = fs.readFile('example.txt');
console.log(data);
```

## Use with second param `parsed`

```js
const fs = require('fsmate');

const data = fs.readFile('package.json', true);

// File content will be parsed as JSON
console.log(data);
```

For the asynchronous version, see: [readFile](./readFile.md)