## multiStream(streams)

Combines multiple readable streams into a single sequential stream, reading each one in order without mixing data. This allows you to merge content (e.g., prepend + original file) efficiently without loading everything into memory at once. Especially useful for large files or streaming pipelines.

**Alias:** `multiStream()`

**Parameters:**

- `streams` [`<Readable>`](https://nodejs.org/api/stream.html#class-streamreadable)
- Returns: [`<Readable>`](https://nodejs.org/api/stream.html#class-streamreadable)

# Example

```js
const fs = require('fsmate');

const stream1 = fs.createInputStream('First data');
const stream2 = fs.createInputStream('Second data');
const stream3 = fs.createInputStream('Third data');

fs.multiStream([stream1, stream2, stream3]);
```

Learn more `createInputStream` see: [documentation](https://github.com/jquick/fsmate/blob/doc/createInputStream.md)