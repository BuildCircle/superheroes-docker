const http = require('http');
const fetch = require('node-fetch');

const host = 'localhost';
const port = 8000;

const server = http.createServer();
server.on('request', async (req, res) => {
    try {
        const characterResponse = await fetch('https://s3.eu-west-2.amazonaws.com/build-circle/characters.json');
        const responseBody = await characterResponse.text();

        res.writeHead(200);
        res.end(responseBody);
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