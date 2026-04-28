import http from 'http';
import os from 'os'
import fs from 'fs'
import express from 'express'

const user = os.homedir().slice(os.homedir().lastIndexOf('\\')+1)
const app = express()

const products = {
  "order_id": 6363763262239,
  "products": [
    {
      "prod_id": "abc12345",
      "name": "Asus Laptop",
      "price": 431.43
    },
    {
      "prod_id": "def45678",
      "name": "Karcher Hose Set",
      "price": 22.13
    }
  ]
}


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

const users = [
    { "id": 1, "first_name": "Douglass", "last_name": "Chieco", "email": "dchieco0@cocolog-nifty.com", "gender": "Male", "ip_address": "31.182.40.31" },
    { "id": 2, "first_name": "Bartolomeo", "last_name": "Rubberts", "email": "brubberts1@is.gd", "gender": "Male", "ip_address": "55.188.31.173" },
    { "id": 3, "first_name": "Garey", "last_name": "Corley", "email": "gcorley2@patch.com", "gender": "Male", "ip_address": "170.32.236.43" },
    { "id": 4, "first_name": "Kienan", "last_name": "Wilcock", "email": "kwilcock3@deviantart.com", "gender": "Male", "ip_address": "233.232.102.196" },
    { "id": 5, "first_name": "Emlen", "last_name": "Ors", "email": "eors4@salon.com", "gender": "Male", "ip_address": "37.165.104.111" },
    { "id": 6, "first_name": "Vance", "last_name": "Matelaitis", "email": "vmatelaitis5@biglobe.ne.jp", "gender": "Male", "ip_address": "247.107.41.110" },
    { "id": 7, "first_name": "Joelie", "last_name": "Neeves", "email": "jneeves6@nationalgeographic.com", "gender": "Agender", "ip_address": "249.153.134.205" },
    { "id": 8, "first_name": "Nessi", "last_name": "Engall", "email": "nengall7@nbcnews.com", "gender": "Female", "ip_address": "130.199.250.83" },
    { "id": 9, "first_name": "Maxy", "last_name": "Wimpeney", "email": "mwimpeney8@pcworld.com", "gender": "Male", "ip_address": "117.42.178.208" },
    { "id": 10, "first_name": "Silas", "last_name": "Headings", "email": "sheadings9@mozilla.com", "gender": "Male", "ip_address": "238.127.214.10" }
  ]


app.use(express.json());
app.post('/api/users/:username',async(req,res)=>{
  
  try{
    console.log(req.params)
    let username = req.params.username
    let password = req.body.password
    console.log({
      username: username,
      password:password
    })
    // await res.status(200).json(users.filter(user => user.id == id))
  }
  catch{
    res.status(500).send('internal Server errpor')
  }
})

app.get('/api/users',async(req,res)=>{
  
  try{
     await res.status(200).json(users)
  }
  catch{
    res.status(500).send('internal Server errpor')
  }
})

app.listen(PORT,()=>{
  console.log(`Server runing on ${PORT}`)
})


