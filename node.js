const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 8080;
const home = fs.readFileSync('vermaporperties.html')


const buy = fs.readFileSync('buy.html')


const server = http.createServer((req, res)=>{
    console.log(req.url);
    url = req.url;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if(url == '/'){
        res.end(home);
    }
    else if(url == '/about'){
        res.end(buy);
    }

    else{
        res.statusCode = 404;
        res.end("<h1>404 not found</h1>");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });