import fs from 'fs';

fs.writeFile('file.txt', 'Hello, World!', (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    };
    console.log('File has been created!');
});

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

fs.appendFile('file.txt', ' hows going', (err) => {
    if (err) {
        console.error('Error appending file:', err);
        return;
    } 
    console.log('File has been updated!');
})

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
})

fs.rename('file.txt', 'newFile.txt', (err) => {
    if (err) {
        console.error('Error renaming file:', err);
        return;
    } 
    console.log('File has been renamed!');
})

fs.realpath('newFile.txt', (err, realpath) => {
    if (err) { 
        console.error('Error resolving file path:', err);
        return;
    }   
    console.log('Resolved file path:', realpath);
})