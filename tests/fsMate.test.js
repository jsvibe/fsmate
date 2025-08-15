const fs = require('fs');
const path = require('path');
const os = require('os');
const fsMate = require('fsmate');

const tempRoot = path.join(os.tmpdir(), 'fsmate_test');
const testDir = path.join(tempRoot, 'dir');
const testFile = path.join(tempRoot, 'file.txt');
const nestedDir = path.join(testDir, 'nested');
const nestedFile = path.join(testDir, 'nested', 'nested.txt');
const copyDir = path.join(tempRoot, 'copy');
const mirrorDir = path.join(tempRoot, 'mirror');
const prependFilePath = path.join(tempRoot, 'prepend.txt');

beforeAll(() => {
  fs.rmSync(tempRoot, { recursive: true, force: true });
  fs.mkdirSync(tempRoot, { recursive: true });
});

afterAll(() => {
  fs.rmSync(tempRoot, { recursive: true, force: true });
});

describe('FSMate Full Method Test Suite', () => {
  
  // ---------- Async Methods ----------
  test('mkdir should create directory', async () => {
    await fsMate.mkdir(testDir);
    expect(await fsMate.isDir(testDir)).toBe(true);
  });

  test('mkfile should create file', async () => {
    await fsMate.mkfile(testFile);
    expect(await fsMate.isFile(testFile)).toBe(true);
  });

  test('writeFile should write to file', async () => {
    await fsMate.writeFile(testFile, 'Hello World');
    const content = await fsMate.readFile(testFile, 'utf8');
    expect(content).toBe('Hello World');
  });

  test('appendFile should append content', async () => {
    await fsMate.appendFile(testFile, '!!!');
    const content = await fsMate.readFile(testFile, 'utf8');
    expect(content).toBe('Hello World!!!');
  });

  test('prependFile should prepend content', async () => {
    await fsMate.writeFile(prependFilePath, 'World');
    await fsMate.prependFile(prependFilePath, 'Hello ');
    const content = await fsMate.readFile(prependFilePath, 'utf8');
    expect(content).toBe('Hello World');
  });

  test('exists should detect existing file', async () => {
    const exists = await fsMate.exists(testFile);
    expect(exists).toBe(true);
  });

  test('touch should update file timestamp', async () => {
    const oldStat = fs.statSync(testFile).mtimeMs;
    await fsMate.touch(testFile);
    const newStat = fs.statSync(testFile).mtimeMs;
    expect(newStat).toBeGreaterThanOrEqual(oldStat);
  });

  test('rename should rename file', async () => {
    const renamedPath = path.join(tempRoot, 'renamed.txt');
    await fsMate.rename(testFile, renamedPath, true);
    expect(await fsMate.isFile(renamedPath)).toBe(true);
    await fsMate.rename(renamedPath, testFile, true); // revert
  });

  test('scandir should list directory', async () => {
    const files = await fsMate.scandir(tempRoot);
    expect(files.length).toBeGreaterThan(0);
  });

  test('copy should copy file', async () => {
    await fsMate.copy(testFile, path.join(copyDir, 'file.txt'));
    expect(await fsMate.isFile(path.join(copyDir, 'file.txt'))).toBe(true);
  });

  test('mirror should copy all contents of a directory', async () => {
    await fsMate.mkdir(nestedDir);
    await fsMate.writeFile(nestedFile, 'Nested');
    await fsMate.mirror(testDir, mirrorDir);
    expect(await fsMate.isFile(path.join(mirrorDir, 'nested', 'nested.txt'))).toBe(true);
  });

  test('empty should remove all contents but keep folder', async () => {
    await fsMate.empty(copyDir);
    const files = await fsMate.scandir(copyDir);
    expect(files.length).toBe(0);
  });

  test('remove should delete file', async () => {
    await fsMate.remove(nestedFile);
    expect(await fsMate.exists(nestedFile)).toBe(false);
  });

  test('rm should delete folder', async () => {
    await fsMate.rm(nestedDir);
    expect(await fsMate.exists(nestedDir)).toBe(false);
  });

  test('dumpFile should overwrite file with JSON/stringified content', async () => {
    await fsMate.dumpFile(testFile, { key: 'value' });
    const content = JSON.parse(await fsMate.readFile(testFile, 'utf8'));
    expect(content.key).toBe('value');
  });

  test('readLine should read file line-by-line', async () => {
    await fsMate.writeFile(testFile, 'line1\nline2');
    const lines = await fsMate.readLine(testFile, 0);
    expect(lines[0]).toBe('line1');
  });

  test('isReadable should check read permission', async () => {
    const canRead = await fsMate.isReadable(testFile);
    expect(canRead).toBe(true);
  });

  test('isWritable should check write permission', async () => {
    const canWrite = await fsMate.isWritable(testFile);
    expect(canWrite).toBe(true);
  });

  // ---------- Sync Methods ----------
  test('mkdirSync should create dir', () => {
    fsMate.mkdirSync(path.join(tempRoot, 'syncDir'));
    expect(fsMate.isDirSync(path.join(tempRoot, 'syncDir'))).toBe(true);
  });

  test('mkfileSync should create file', () => {
    fsMate.mkfileSync(path.join(tempRoot, 'syncFile.txt'));
    expect(fsMate.isFileSync(path.join(tempRoot, 'syncFile.txt'))).toBe(true);
  });

  test('writeFileSync should write file', () => {
    fsMate.writeFileSync(testFile, 'SyncWrite');
    expect(fsMate.readFileSync(testFile, 'utf8')).toBe('SyncWrite');
  });

  test('appendFileSync should append', () => {
    fsMate.appendFileSync(testFile, '123');
    expect(fsMate.readFileSync(testFile, 'utf8')).toBe('SyncWrite123');
  });

  test('prependFileSync should prepend', () => {
    fsMate.prependFileSync(testFile, 'PRE-');
    expect(fsMate.readFileSync(testFile, 'utf8')).toBe('PRE-SyncWrite123');
  });

  test('existsSync should detect file', () => {
    expect(fs.existsSync(testFile)).toBe(true);
  });

  test('touchSync should update timestamp', () => {
    const oldStat = fs.statSync(testFile).mtimeMs;
    fsMate.touchSync(testFile);
    const newStat = fs.statSync(testFile).mtimeMs;
    expect(newStat).toBeGreaterThanOrEqual(oldStat);
  });

  test('renameSync should rename file', () => {
    const syncRenamePath = path.join(tempRoot, 'syncRenamed.txt');
    fsMate.renameSync(testFile, syncRenamePath);
    expect(fsMate.isFileSync(syncRenamePath)).toBe(true);
    fsMate.renameSync(syncRenamePath, testFile);
  });

  test('scandirSync should list dir', () => {
    const list = fsMate.scandirSync(tempRoot);
    expect(list.length).toBeGreaterThan(0);
  });

  test('copySync should copy file', () => {
    fsMate.copySync(testFile, path.join(copyDir, 'syncCopy.txt'));
    expect(fsMate.isFileSync(path.join(copyDir, 'syncCopy.txt'))).toBe(true);
  });

  test('mirrorSync should mirror dir', () => {
    fsMate.mirrorSync(testDir, mirrorDir);
    expect(fsMate.isDirSync(mirrorDir)).toBe(true);
  });

  test('emptySync should empty dir', () => {
    fsMate.emptySync(copyDir);
    const files = fsMate.scandirSync(copyDir);
    expect(files.length).toBe(0);
  });

  test('removeSync should remove file', () => {
    fsMate.writeFileSync(path.join(tempRoot, 'tempFile.txt'), 'data');
    fsMate.removeSync(path.join(tempRoot, 'tempFile.txt'));
    expect(fs.existsSync(path.join(tempRoot, 'tempFile.txt'))).toBe(false);
  });

  test('rmSync should remove dir', () => {
    fsMate.mkdirSync(path.join(tempRoot, 'tempDir'));
    fsMate.rmSync(path.join(tempRoot, 'tempDir'));
    expect(fs.existsSync(path.join(tempRoot, 'tempDir'))).toBe(false);
  });

  test('dumpFileSync should dump JSON', () => {
    fsMate.dumpFileSync(testFile, { sync: true });
    const content = fsMate.readFileSync(testFile, true);
    expect(content.sync).toBe(true);
  });

  test('readLineSync should read specific line', () => {
    fsMate.writeFileSync(testFile, 'a\nb\nc');
    expect(fsMate.readLineSync(testFile, 1)[0]).toBe('b');
  });

  test('isReadableSync should check read perm', () => {
    expect(fsMate.isReadableSync(testFile)).toBe(true);
  });

  test('isWritableSync should check write perm', () => {
    expect(fsMate.isWritableSync(testFile)).toBe(true);
  });

  // ---------- Other Methods ----------
  test('multiStream should merge multiple streams', done => {
    const fileA = path.join(tempRoot, 'a.txt');
    const fileB = path.join(tempRoot, 'b.txt');
    fs.writeFileSync(fileA, 'Hello ');
    fs.writeFileSync(fileB, 'World');
    const streams = fsMate.multiStream([fs.createReadStream(fileA), fs.createReadStream(fileB)]);
    let data = '';
    streams.on('data', chunk => data += chunk);
    streams.on('end', () => {
      expect(data).toBe('Hello World');
      done();
    });
  });

  test('stringify should stringify objects', () => {
    const json = fsMate.stringify({ hello: 'world' });
    expect(json).toContain('"hello": "world"');
  });

  test('tmpName should return temp path', async () => {
    const tmpPath = await fsMate.tmpName();
    expect(typeof tmpPath).toBe('string');
  });

  test('tempNam should return temp path (sync)', () => {
    const tmpPath = fsMate.tempNam('root', 'myfile.txt');
    expect(typeof tmpPath).toBe('string');
  });

  test('createInputStream should return readable stream', () => {
    fs.writeFileSync(testFile, 'StreamContent');
    const stream = fsMate.createInputStream(testFile);
    expect(typeof stream.on).toBe('function');
  });
});