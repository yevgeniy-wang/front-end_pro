const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, POST, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');

    console.log(req.method)

    if (req.method === 'POST' && req.url === '/order') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString(); // преобразовать буфер в строку
        });

        req.on('end', () => {
            console.log(JSON.parse(body))
            res.end('ok');
        });
    }

    if (req.method === 'OPTIONS') {
        res.end();
    }
});
server.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});