// let port = process.argv[2];
// let http = require('http');
// let url = require('url');
  
// http.createServer((req, res) => {  
//     res.writeHead(200, {'Content-Type' : 'application/json'})
//     var queryString = url.parse(req.url, true);
//     let pahtname = queryString.pathname;
//     // let minute = queryString.query.iso.split(':')[1];
//     // let heure = queryString.query.iso.split(':')[0].split('T')[1];
//     // let seconde = queryString.query.iso.split(':')[2].split('.')[0];
    
//     // let obj = JSON.stringify({
//     //     "hour":heure,
//     //     "minute": minute,
//     //     "second": seconde
//     // });

//     // console.log(queryString);

// }).listen(Number(port));


let fs = require('fs');
let http = require('http');
let map  = require('through2-map');
let url  = require('url');

let port = process.argv[2];

// console.log(`Go clic : http://localhost:${port}/`);

let resultJson = (obj) => {
    return JSON.stringify(obj);
}

const server = http.createServer((request, response) => {

    // Craft de l'url au format attendu
    const monUrl = `http://${request.headers.host}${request.url}`;
    let monUrlInfos = new URL(monUrl);
    // console.log(monUrlInfos);
    
    const dateToParse = new Date(monUrlInfos.searchParams.get('iso'));
    let ojbHeure = {
        hour: dateToParse.getHours(),
        minute: dateToParse.getMinutes(),
        second: dateToParse.getSeconds()
    }
    let objUnix = {
        unixtime : dateToParse.getTime()
    }
    if ( ojbHeure.hour < 10 ) { ojbHeure.hour  = "0" + ojbHeure.hour }
    if ( ojbHeure.minute < 10) { ojbHeure.minute  = "0" + ojbHeure.minute }
    if ( ojbHeure.second < 10) { ojbHeure.second  = "0" + ojbHeure.second }

    if(monUrlInfos.pathname === "/api/parsetime"){
        response.end(resultJson(ojbHeure));
    }

    if(monUrlInfos.pathname === "/api/unixtime"){
        response.end(resultJson(objUnix))
    }
    // console.log(monUrlInfos);
    response.end();
    

})
server.listen(port);

