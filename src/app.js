import http from 'http';
import os from 'os'
import fs from 'fs'

const user = os.homedir().slice(os.homedir().lastIndexOf('\\')+1)

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


const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' })
  res.write(`User ${user} visited server on ${new Date()}`)
  fs.appendFile('log.txt', `User ${user} visited server on ${new Date()}` + '\n', (err) => {
    console.log(err)
    return
  })

  res.end()
})

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


server.listen(PORT,()=>{
  console.log(`Server running on ${PORT}`)
})



