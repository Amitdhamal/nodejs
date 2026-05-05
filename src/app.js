// import http from 'http';
// import os from 'os'
// import fs from 'fs'
// import express from 'express'
// import { comment } from './commentdata.js';
// import { json } from 'stream/consumers';
// const user = os.homedir().slice(os.homedir().lastIndexOf('\\')+1)
// const app = express()

// const products = {
//   "order_id": 6363763262239,
//   "products": [
//     {
//       "prod_id": "abc12345",
//       "name": "Asus Laptop",
//       "price": 431.43
//     },
//     {
//       "prod_id": "def45678",
//       "name": "Karcher Hose Set",
//       "price": 22.13
//     }
//   ]
// }






// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'content-type': 'text/html' })
//   res.write(`User ${user} visited server on ${new Date()}`)
//   fs.appendFile('log.txt', `User ${user} visited server on ${new Date()}` + '\n', (err) => {
//     console.log(err ? err : 'no bug')
//     return
//   })

//   res.end()
// })

const PORT = 3300

// const apiServer = http.createServer((req, res) => {
//   if (req.url == '/') {
//     res.writeHead(200, { 'content-type': 'application/json' })
//     res.end(`Hii ${user}`)
//   }
//   else if (req.url == '/api/products') {
  
//     res.writeHead(200, { 'content-type': 'application/json' })
//     res.write(JSON.stringify(products))
//     res.end()
//   }
//   else{
//     res.writeHead(200, { 'content-type': 'application/json' })
//     res.end(`पृष्ठ आढळले नाही`)
//   }
//})


// server.listen(PORT,()=>{
//   console.log(`Server running on ${PORT}`)
// })


// const users = [
//     { "id": 1, "first_name": "Douglass", "last_name": "Chieco", "email": "dchieco0@cocolog-nifty.com", "gender": "Male", "ip_address": "31.182.40.31" },
//     { "id": 2, "first_name": "Bartolomeo", "last_name": "Rubberts", "email": "brubberts1@is.gd", "gender": "Male", "ip_address": "55.188.31.173" },
//     { "id": 3, "first_name": "Garey", "last_name": "Corley", "email": "gcorley2@patch.com", "gender": "Male", "ip_address": "170.32.236.43" },
//     { "id": 4, "first_name": "Kienan", "last_name": "Wilcock", "email": "kwilcock3@deviantart.com", "gender": "Male", "ip_address": "233.232.102.196" },
//     { "id": 5, "first_name": "Emlen", "last_name": "Ors", "email": "eors4@salon.com", "gender": "Male", "ip_address": "37.165.104.111" },
//     { "id": 6, "first_name": "Vance", "last_name": "Matelaitis", "email": "vmatelaitis5@biglobe.ne.jp", "gender": "Male", "ip_address": "247.107.41.110" },
//     { "id": 7, "first_name": "Joelie", "last_name": "Neeves", "email": "jneeves6@nationalgeographic.com", "gender": "Agender", "ip_address": "249.153.134.205" },
//     { "id": 8, "first_name": "Nessi", "last_name": "Engall", "email": "nengall7@nbcnews.com", "gender": "Female", "ip_address": "130.199.250.83" },
//     { "id": 9, "first_name": "Maxy", "last_name": "Wimpeney", "email": "mwimpeney8@pcworld.com", "gender": "Male", "ip_address": "117.42.178.208" },
//     { "id": 10, "first_name": "Silas", "last_name": "Headings", "email": "sheadings9@mozilla.com", "gender": "Male", "ip_address": "238.127.214.10" }
//   ]


// app.use(express.json());
// app.get('/api/users/:id',async(req,res)=>{
  
//   try{
//     console.log(req.params)
//     let id = req.params.id
//     await res.status(200).json(users.filter(user => user.id == id))
//   }
//   catch{
//     res.status(500).send('internal Server errpor')
//   }
// })

// app.get('/api/users',async(req,res)=>{
  
//   try{
//      await res.status(200).json(users)
//   }
//   catch{
//     res.status(500).send('internal Server errpor')
//   }
// })

// app.get('/api/mobiles/:id', (req, res) => {
//     const mobiles = [
//         { id: 1, brand: 'Iphone ', price: 100099 },
//         { id: 2, brand: 'Samsung', price: 190099 },
//     ];
//     const mobile = mobiles.find(m => m.id === parseInt(req.params.id));
//     if (mobile) {
//         res.status(200).json(mobile);
//     } else {
//         res.status(404).json({ message: 'Mobile not found' });
//     }
// });

// app.post('/api/login', (req, res) => {
//     const username = req.body.username;
//     const password = req.body.password;
    
//     if (username === 'admin' && password === 'Pass@123') {
//         res.status(200).json({ message: 'Login successful' });
//     } else {
//         res.status(401).json({ message: 'Invalid credentials' });
//     }
// });

// app.post('/api/commentbook',async(req,res)=>{
//   try{
//     console.log('Request body:', req.body); // Debug log
//     const page = parseInt(req.body?.pageno) || 1
//     const limit = parseInt(req.body?.limit) || 10
//     const startIndex = (page - 1) * limit
//     const endIndex = startIndex + limit
    
//     const paginatedComments = comment.slice(startIndex, endIndex)
//     console.log(`Hey user you are on page no ${page} with each page having ${limit} entries`)
//     res.status(200).json(paginatedComments)
//   }
//   catch(err){
//     console.error('Error:', err); // Log the actual error
//     res.status(500).send('internal Server errors')
//   }
// })

// let userDb = [
//   {id:101,role:'writer',name:'A'},
//   {id:102,role:'producer',name:'B'},
//   {id:103,role:'director',name:'C'}
// ]

// app.put('/api/filmcast/:id',(req,res)=>{
//   const id = parseInt(req.params.id)
//   const newRole = req.body.role
  
//   const userIndex = userDb.findIndex(user => user.id == id)
//   if (userIndex === -1) {
//     return res.status(404).json({ error: 'User id not found' })
//   }

//   userDb[userIndex].role = newRole
//   res.json({
//     message: 'user updated',
//     user: userDb
//   })

// })

// app.listen(PORT,()=>{
//   console.log(`Server runing on ${PORT}`)
// })


import express from 'express'
import connectDB from './config/db.js'
import User from './models/user.js'
const app = express()
app.use(express.json())
connectDB()

app.post('/api/users',async(req,res)=>{
    try{
        
        const newUser = new User(req.body)
        await newUser.save()
        res.status(201).json(newUser)
    } catch(err){
        console.error('Error creating user:', err)
        res.status(500).json({error:'Internal Server Error'})
    }
})

app.get('/api/users',async(req,res)=>{
    try{
        const users = await User.find()
        console.log(users)
        res.status(200).json(users)
    } catch(err){
        console.error('Error fetching users:', err)
        res.status(500).json({error:'Internal Server Error'})
    }
})

app.put('/api/users/:id',async(req,res)=>{
    try{
        const userid = req.params.id
        console.log(userid)
        if(!userid){
            res.status(200).json('User not found')
        }
        else{
            const UserObj = req.body
            console.log(UserObj)
            const updatedUser = await User.findByIdAndUpdate(userid,UserObj)
            res.status(201).json({'message': true,'data':updatedUser})
        }
    }
    catch{
        console.error('Error updating users:')
        res.status(500).json({error:'Internal Server Error'})
    }
})

app.put('/api/users/:id',async(req,res)=>{
    try{
        const userid = req.params.id
        console.log(userid)
        if(!userid){
            res.status(200).json('User not found')
        }
        else{
            const UserObj = req.body
            console.log(UserObj)
            const updatedUser = await User.findByIdAndUpdate(userid,UserObj)
            res.status(201).json({'message': true,'data':updatedUser})
        }
    }
    catch{
        console.error('Error updating users:')
        res.status(500).json({error:'Internal Server Error'})
    }
})

app.delete('/api/users/:id',async(req,res)=>{
    try{
        const userid = req.params.id
        console.log(userid)
        if(!userid){
            res.status(200).json('User not found')
        }
        else{
           
            const deletedUser = await User.findByIdAndDelete(userid)
            res.status(204).json({'message': true,'deleted user data':deletedUser})
        }
    }
    catch{
        console.error('Error deleting users:')
        res.status(500).json({error:'Internal Server Error'})
    }
})

app.patch('/api/users/:id',async(req,res)=>{
    try{
        const userid = req.params.id
        console.log(userid)
        if(!userid){
            res.status(200).json('User not found')
        }
        else{
            const UserObj = req.body
            console.log(UserObj)
            const updatedUser = await User.findByIdAndUpdate(userid,{$set:UserObj})
            res.status(201).json({'message': true,'data':updatedUser})
        }
    }
    catch{
        console.error('Error updating users:')
        res.status(500).json({error:'Internal Server Error'})
    }
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
