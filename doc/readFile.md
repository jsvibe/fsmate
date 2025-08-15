## readFile(filePath, parsed)

Asynchronously reads the entire file content with optional stream settings like chunk size. If `parsed` is `true`, the file content will be parsed as JSON. Suitable for reading both plain text and structured data.

**Alias:** `readFile()`

**Parameters:**

- `filePath` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- `parsed` [`<boolean>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures#boolean_type)
- Returns: [`Promise<any>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

# Example

```js
const fs = require('fsmate');

// With Promises:
fs.readFile('file.txt')
.then((content) => {
  console.log(content);
}).catch(err => {
  console.log(err);
});

// With async/await:
async function readFile(filePath) {
  try {
    const content = await fs.readFile(filePath);
    console.log(content);
  } catch(err) {
    console.log(err);
  }
}

readFile('file.txt');
```

## Use with second param `parsed`

```js
const fs = require('fsmate');

// With Promises:
fs.readFile('db.json', true)
.then((content) => {
  // File content will be parsed as JSON
  console.log(content);
}).catch(err => {
  console.log(err);
});

// With async/await:
async function readFile(filePath, parsed) {
  try {
    // File content will be parsed as JSON
    const content = await fs.readFile(filePath, parsed);
    console.log(content);
  } catch(err) {
    console.log(err);
  }
}

readFile('package.json', true);
```

For the synchronous version, see: [readFileSync](./readFileSync.md)