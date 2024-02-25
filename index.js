const app = require('./app');
const http = require ('http');

const server = http.createServer(app);

server.listen (5002, () => {
   
    console.log('servidor corriendo');
})