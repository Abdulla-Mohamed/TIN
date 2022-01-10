const http = require('http');
const url = require('url');

//separate numbers by &, url will look like http://localhost:5412/sub?v1=x&v2=x where x is a number
http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    const queryObject = url.parse(req.url,true).query;
    const pathname = url.parse(req.url, true).pathname;
    const v1 = parseInt(queryObject.v1);
    const v2 = parseInt(queryObject.v2);
    if(isNaN(v1) || isNaN(v2)){
        res.writeHead(400, {"Content-Type": "text/html"});
        res.write("no vlues where added");

        res.end();
        return;
    }
    switch(pathname){
        case "/add":
            res.write(`v1 + v2 is ${v1+v2}`);
            break;
        case "/sub":
            res.write(`v1 - v2 is ${v1-v2}`);
            break;
        case "/mul":
            res.write(`v1 * v2 is ${v2*v1}`);
            break;
        case "/div":
            res.write(`c2 / v2 is ${v1/v2}`);
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write(`The pathname is not correct`)
    }

    res.end();
}).listen(5412)

