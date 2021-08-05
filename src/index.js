var http = require('http');
var https = require('https');

const host = 'localhost';
const port = 8000;

const server = http.createServer();
server.on('request', async (req, res) => {
    try {
        res.writeHead(200);
        res.end('Hello world');
    }
    catch (e) {
        res.writeHead(500);
        res.end(`Error occurred: ${e}`);
    }
})
server.on('error', () => {

})

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});