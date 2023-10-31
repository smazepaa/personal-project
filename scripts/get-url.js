const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/example') {
        res.write('test urls');
        res.end();

    } else {
        // Handle other routes or show a 404 Not Found page
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>');
    }
});

const port = 8080;
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});