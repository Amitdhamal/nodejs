import path, { basename } from 'path';
const faskFile = 'user/desktop/file.txt';

console.log(path.join('folder1', 'folder2', 'file.txt'));
console.log(basename(faskFile));
console.log(path.extname(faskFile));
console.log(path.dirname(faskFile));
