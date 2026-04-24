import fs from 'fs/promises';

// async function createDatabase(filePath) {
//     try {
//        const user = [{id: 1, name: 'Amit dhamal', email: 'jhondeo@sss.com'},
//                     {id: 2, name: 'Vinayak Donekar', email: 'ded@ggg.com'},
//                     {id: 3, name: 'gaurav mahahajan', email: 'eeee@ggg.com'}];
//         const jsonData = JSON.stringify(user, null,2);
//         await fs.writeFile(filePath, jsonData);
//         console.log('Database created successfully.');
//     } catch (error) {
//         console.error('Error creating database: ', error);
//     }
// }
// createDatabase('./miniatabase.json'); 

async function readDatabase(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        const users = JSON.parse(data);
        console.log('Database content: ', users);
        console.log('firstUserid:', users[0].id);
        console.log('secondUserEmail:', users[1].email);
        console.log('thirdUserName:', users[2].name);
        console.log('allUserNames:', users.map(user => user.name));
    } catch (error) {
        console.error('Error reading database: ', error);
    } 
}

readDatabase('./miniatabase.json');

// async function updateDatabase(filePath) {
//     try {
//         const data = await  fs.readFile(filePath, 'utf8');
//         const users = JSON.parse(data);
//         users.push({id: 4, name: 'guru dhamal', email: ' '});
//         const jsonData = JSON.stringify(users, null, 2);
//         await fs.writeFile(filePath, jsonData);
//         console.log('Database updated successfully.');
//     } catch (error) {
//         console.error('Error updating database: ', error);
//     }
// }

// updateDatabase('./miniatabase.json');
