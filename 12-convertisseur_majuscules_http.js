let port = process.argv[2];
let http = require('http');
let fs = require('fs');
let map = require('through2-map');

// console.log(process.argv);

http.createServer((req, res) => {
if(req.method === 'POST'){
   req.pipe( map( chunk =>  {
        return chunk.toString().toUpperCase(); 
    })).pipe(res)
}
}).listen(Number(port));


