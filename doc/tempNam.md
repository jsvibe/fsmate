# tempNam(prefix, suffix)

Generates a unique, obfuscated temporary file or directory name within the given prefix. The suffix (basename) is hashed using SHA-1 and converted to a hexadecimal string, ensuring safe and collision-resistant naming. The final name is appended with a .tmp extension.

**Alias:** `tempNam()`

**Parameters:**

- `prefix` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- `suffix` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- Returns: [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)

# Example

```js
const fs = require('fsmate');
fs.tempNam('/home/user', 'file.txt'); // Outputs: /home/user/5436437fa01a7d3e41d46741da54b451446774ca.tmp
fs.tempNam('/home/user', 'src'); // Outputs: /home/user/f27fede2220bcd326aee3e86ddfd4ebd0fe58cb9.tmp
fs.tempNam('/home/user', 'file.txt'); // Outputs: /home/user/5436437fa01a7d3e41d46741da54b451446774ca.tmp
```

Learn more `tmpName` see [documentation](./tmpName.md)