//dealing with routing

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    //use req.url === 'url'
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type':'text/html'});
        fs.createReadStream(__dirname + '/index.htm').pipe(res);
    }
    else if (req.url === '/api'){
        res.writeHead(200, {'Content-Type':'application/json'});
        var obj = {
            firstname: 'Xtranghero',
            lastname: 'Vin'
        }
        res.end(JSON.stringify(obj));
    }
    else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/404.htm').pipe(res);
    }

}).listen(3306,'127.0.0.1');
