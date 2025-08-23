## fseek(filePath, position)

This function moves the file pointer to a new position. The position is determined by an offset value and a reference point, which can be the beginning of the file, the current position, or the end of the file. It returns zero on success and -1 on failure.

**Alias:** `fseek()`

**Parameters:**

- `filePath` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- `position` [`<number>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
- Returns: [`Promise<any>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## Example

```js
const fs = require('fsmate');

const file = 'file.txt';

// With Promises:
fs.fseek(file, 55)
.then(() => {
  console.log('Pointer shifted on 55 position');
}).catch(err => {
  console.log(err);
});

// With async/await: (not recommended)
async function fseek(filePath, position) {
  try {
    await fs.fseek(filePath, position);
    console.log('Pointer shifted on 55 position');
  } catch(err) {
    console.log(err);
  }
}

fseek(file, 55);
```

For the synchronous version, see: [fseekSync](./fseekSync.md)