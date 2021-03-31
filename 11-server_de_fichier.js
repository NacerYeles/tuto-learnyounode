let port = Number(process.argv[2]);

let filename = process.argv[3];
let http = require('http');
let fs = require('fs');

http.createServer(function (req, res) {
  let readStream = fs.createReadStream(filename);
  res.writeHead(200, {'Content-Type': 'text/plain'});

  readStream.on('open',  () => readStream.pipe(res) );

  // Je recup l'erreur 
  readStream.on('error', err => res.end(err));

}).listen(port);


// Votre solution pour SERVEUR DE FICHIERS HTTP fonctionne !

// Voici la solution officielle, si vous voulez comparer :

// ─────────────────────────────────────────────────────────────────────────────

//    'use strict'
//    const http = require('http')
//    const fs = require('fs')

//    const server = http.createServer(function (req, res) {
//      res.writeHead(200, { 'content-type': 'text/plain' })

//      fs.createReadStream(process.argv[3]).pipe(res)
//    })

//    server.listen(Number(process.argv[2]))
