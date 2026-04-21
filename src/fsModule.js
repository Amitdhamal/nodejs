import fs from 'fs';
import path from 'path';
const faskFile = 'F:\\';
const filePath = path.join( faskFile, 'demo','file.txt');

fs.writeFile( filePath, 'Hello, World!', (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    };
    console.log('File has been created!');
});


// fs.appendFile('file.txt', ' \nhow are you...?', (err) => {
//     if (err) {//         console.error('Error appending file:', err);
//         return;
//     } 
//     console.log('File has been updated!');
// })

// fs.readFile('file.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log('read2:',data);
// })
