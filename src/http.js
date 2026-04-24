import http from 'http';

export default function createServer(app) {
  const server = http.createServer(app).listen(3000, () => {
    console.log('Server is running on port 3000');
  });
  return server;
}

console.log(process.env.PORT);