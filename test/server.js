const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 80;

const server = http.createServer((req, res) => {
    var url = require('url').parse(req.url);
    var filename = url.pathname.substring(1);

    fs.readFile(filename, function(err, content){
        if(err){
            res.writeHeader(404, {'Content-Type': 'text/plain; charset=UTF-8'});
            res.write(err.message);
            res.end();
        } else {
            res.writeHeader(200, {'Content-Type': 'text/html; charset=UTF-8'});
            res.write(content);
            res.end();
        }
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});