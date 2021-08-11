const http = require('http');
const fetch = require('node-fetch');

const host = '0.0.0.0';
const port = 80;

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

process.on('SIGTERM', () => {
    console.info('SIGTERM signal received.');
    console.log('Closing http server.');
    server.close(() => {
        console.log('Http server closed.');
    });
});