# Release Notes

## [v2.4.1](https://github.com/jsvibe/quanter/compare/v2.4.0...v2.4.1) - 01-09-2025

- Fixed bugs `fseek` and `fseekSync` now throwing error, If file or directory does not exists [@indianmodassir](https://github.com/indianmodassir).

## [v2.4.0](https://github.com/jsvibe/quanter/compare/v2.3.0...v2.4.0) - 23-08-2025

- Added `truncate` Clears file content without deleting it (creates if missing) [@indianmodassir](https://github.com/indianmodassir).
- Added `truncateSync` Sync Empties a file but keeps it (creates if missing) [@indianmodassir](https://github.com/indianmodassir).
- Improved documentation and fixed some missing code [@indianmodassir](https://github.com/indianmodassir).

## [v2.3.0](https://github.com/jsvibe/quanter/compare/v2.2.2...v2.3.0) - 23-08-2025

- Added `fseek` Seeks on a file pointer [@indianmodassir](https://github.com/indianmodassir).
- Added `fseekSync` Sync Seeks on a file pointer [@indianmodassir](https://github.com/indianmodassir).
- Added `ftell` Returns the current position of the file read/write pointer [@indianmodassir](https://github.com/indianmodassir).
- Added `ftellSync` Sync Returns the current position of the file read/write pointer [@indianmodassir](https://github.com/indianmodassir).
- Added `fgets` Gets line from file pointer [@indianmodassir](https://github.com/indianmodassir).
- Added `fgetsSync` Sync Gets line from file pointer [@indianmodassir](https://github.com/indianmodassir).
- Added `fpassthru` Output all remaining data on a file pointer [@indianmodassir](https://github.com/indianmodassir).
- Added `fpassthruSync` Sync Output all remaining data on a file pointer [@indianmodassir](https://github.com/indianmodassir).
- Added `fread` Binary-safe file read [@indianmodassir](https://github.com/indianmodassir).
- Added `freadSync` Sync Binary-safe file read [@indianmodassir](https://github.com/indianmodassir).
- Added `fwrite` Binary-safe file write [@indianmodassir](https://github.com/indianmodassir).
- Added `fwriteSync` Sync Binary-safe file write [@indianmodassir](https://github.com/indianmodassir).
- Added `rewind` Rewind the position of a file pointer [@indianmodassir](https://github.com/indianmodassir).
- Added `rewindSync` Sync Rewind the position of a file pointer [@indianmodassir](https://github.com/indianmodassir).
- Added `filesize` Gets file size [@indianmodassir](https://github.com/indianmodassir).
- Added `filesizeSync` Sync Gets file size [@indianmodassir](https://github.com/indianmodassir).

## [v2.2.2](https://github.com/jsvibe/quanter/compare/v2.2.1...v2.2.2) - 20-08-2025

- Fixed bugs like `esm` version and update `package.json` [@indianmodassir](https://github.com/indianmodassir).

## [v2.2.1](https://github.com/jsvibe/quanter/compare/v2.2.0...v2.2.1) - 18-08-2025

- Fixed bugs `readLine` and `readLineSync` [@indianmodassir](https://github.com/indianmodassir).

## [v2.2.0](https://github.com/jsvibe/quanter/compare/v2.1.1...v2.2.0) - 17-08-2025

- Added `move` Asyncronously moves a file or directory [@indianmodassir](https://github.com/indianmodassir).
- Added `moveSync` Sync moves a file or directory [@indianmodassir](https://github.com/indianmodassir).

## [v2.1.1](https://github.com/jsvibe/quanter/compare/v2.1.0...v2.1.1) - 17-08-2025

- Update Documentation `doc/multistream.md` file [@indianmodassir](https://github.com/indianmodassir).
- Removed temporary `tests` from repository we after include soon [@indianmodassir](https://github.com/indianmodassir).

## [v2.1.0](https://github.com/jsvibe/quanter/compare/v2.0.0...v2.1.0) - 17-08-2025

- Updated `package.json` Add the `exports` in `esm` support [@indianmodassir](https://github.com/indianmodassir)

## [v2.0.0](https://github.com/jsvibe/quanter/compare/v1.0.0...v2.0.0) - 16-08-2025

- Added `isLink` Check if the given path is a symbolic link. [@indianmodassir](https://github.com/indianmodassir)
- Added `exists` Check if a file or directory exists. [@indianmodassir](https://github.com/indianmodassir)
- Added `touch` Create a file if it doesn’t exist or update its timestamp. [@indianmodassir](https://github.com/indianmodassir)
- Added `rename` Rename or move a file/directory. [@indianmodassir](https://github.com/indianmodassir)
- Added `scandir` List files and directories in a given folder. [@indianmodassir](https://github.com/indianmodassir)
- Added `remove` Safely remove files or directories (with rename trick). [@indianmodassir](https://github.com/indianmodassir)
- Added `rm` Remove files or directories using native `fs.rm`. [@indianmodassir](https://github.com/indianmodassir)
- Added `empty` Remove all contents inside a file or directory without deleting it. [@indianmodassir](https://github.com/indianmodassir)
- Added `prependFile` Add content at the beginning of a file. [@indianmodassir](https://github.com/indianmodassir)
- Added `readFile` Read a file's content (optionally parse JSON). [@indianmodassir](https://github.com/indianmodassir)
- Added `readLine` Read a file line-by-line with range support. [@indianmodassir](https://github.com/indianmodassir)
- Added `writeFile` Write content to a file (overwrites existing). [@indianmodassir](https://github.com/indianmodassir)
- Added `appendFile` Append content to the end of a file. [@indianmodassir](https://github.com/indianmodassir)
- Added `dumpFile` Atomically write a file by first writing to a temp file. [@indianmodassir](https://github.com/indianmodassir)
- Added `isExecutableSync` Sync check for execute permissions. [@indianmodassir](https://github.com/indianmodassir)
- Added `isLinkSync` Sync check if path is a symbolic link. [@indianmodassir](https://github.com/indianmodassir)
- Added `isFileSync` Sync check if path is a regular file. [@indianmodassir](https://github.com/indianmodassir)
- Added `isDirSync` Sync check if path is a directory. [@indianmodassir](https://github.com/indianmodassir)
- Added `isReadableSync` Sync check for read permissions. [@indianmodassir](https://github.com/indianmodassir)
- Added `isWritableSync` Sync check for write permissions. [@indianmodassir](https://github.com/indianmodassir)
- Added `mkdirSync` Sync creates a directories recursively. [@indianmodassir](https://github.com/indianmodassir)
- Added `mkfileSync` Create an empty files (or overwrite if specified). [@indianmodassir](https://github.com/indianmodassir)
- Added `touchSync` Sync create/update file timestamp. [@indianmodassir](https://github.com/indianmodassir)
- Added `renameSync` Sync rename or move a file/directory. [@indianmodassir](https://github.com/indianmodassir)
- Added `scandirSync` Sync list directory contents. [@indianmodassir](https://github.com/indianmodassir)
- Added `removeSync` Sync safe remove (with rename trick). [@indianmodassir](https://github.com/indianmodassir)
- Added `appendFileSync` Sync append content to a file. [@indianmodassir](https://github.com/indianmodassir)
- Added `emptySync` Sync remove all contents inside a file/directory. [@indianmodassir](https://github.com/indianmodassir)
- Added `mirrorSync` Sync recursively copy a directory tree. [@indianmodassir](https://github.com/indianmodassir)
- Added `copySync` Sync copy a single file. [@indianmodassir](https://github.com/indianmodassir)
- Added `readFileSync` Read a file's content (optionally parse JSON). [@indianmodassir](https://github.com/indianmodassir)
- Added `rmSync` Sync remove file/directory using native `fs.rm`. [@indianmodassir](https://github.com/indianmodassir)
- Added `readLineSync` Sync read file line-by-line. [@indianmodassir](https://github.com/indianmodassir)
- Added `writeFileSync` Sync write content to a file. [@indianmodassir](https://github.com/indianmodassir)
- Added `prependFileSync` Sync add content at file start. [@indianmodassir](https://github.com/indianmodassir)
- Added `dumpFileSync` Sync atomic file write. [@indianmodassir](https://github.com/indianmodassir)
- Added `multiStream` Merge multiple readable streams into one. [@indianmodassir](https://github.com/indianmodassir)
- Added `stringify` Convert different data types to a string safely. [@indianmodassir](https://github.com/indianmodassir)
- Added `tmpName` Generate a random temporary file/directory name. [@indianmodassir](https://github.com/indianmodassir)
- Added `tempNam` Generate a SHA1-hash-based temp file name. [@indianmodassir](https://github.com/indianmodassir)
- Added `createInputStream` Convert string, Buffer, or object into a readable stream. [@indianmodassir](https://github.com/indianmodassir)
- Removed `fsMate.access()` method from [v2.0.0] [@indianmodassir](https://github.com/indianmodassir)
- Renamed `fsMate.mkFile` to `fsMate.mkfile` from [v2.0.0] [@indianmodassir](https://github.com/indianmodassir)

## [v1.0.0](https://github.com/jsvibe/fsmate/releases/tag/v1.0.0) - 26-07-2025

- Added `isFile` Check if the given path is a regular file. [@indianmodassir](https://github.com/indianmodassir)
- Added `isDir` Check if the given path is a directory. [@indianmodassir](https://github.com/indianmodassir)
- Added `isReadable` Check if a file/directory has read permissions. [@indianmodassir](https://github.com/indianmodassir)
- Added `isWritable` Check if a file/directory has write permissions. [@indianmodassir](https://github.com/indianmodassir)
- Added `isExecutable` Check if a file/directory has execute permissions. [@indianmodassir](https://github.com/indianmodassir)
- Added `mkdir` Creates a directories recursively. [@indianmodassir](https://github.com/indianmodassir)
- Added `mkFile` Create an empty files (or overwrite if specified). [@indianmodassir](https://github.com/indianmodassir)
- Added `copy` Copy a single file with overwrite control. [@indianmodassir](https://github.com/indianmodassir)
- Added `mirror` Recursively copy an entire directory tree. [@indianmodassir](https://github.com/indianmodassir)

fsMate includes a variety of changes to the application skeleton. Please consult the diff to see what's new.