const req = require('express/lib/request')
const http = require('http')//tao sv ao http
const server = http.createServer((req, res) => {
    console.log('run request ...')
    res.setHeader('Content-Type', 'text/html');
    res.write('<h3>Hello World!</h3>');
    res.write('<h2>from Eric DB</h2>');
    res.end;
})

server.listen(3000, 'localhost', () => {//bat buoc xuat tren port 3000
    console.log('Node.JS server is running on port: 3000');
})