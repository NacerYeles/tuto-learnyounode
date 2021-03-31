// console.log(process.argv);

let port = process.argv[2];

let net = require('net');
 
let server = net.createServer();
 

var today = new Date();

let ddmmyyyy = today.toLocaleDateString().split('/')
var dd = ddmmyyyy[0]
var mm = ddmmyyyy[1];
var yyyy = ddmmyyyy[2];
var hh = today.getHours();
var min = today.getMinutes();

if (hh<10) {hh = "0" + hh}
if (min<10) {min = "0" + min}
// if (dd<10) {dd = "0" + dd}
// if (mm<10) {mm = "0" + mm}
// if (yyyy<10) {yyyy = "0" + yyyy}

today = yyyy + '-' + mm + '-' + dd + ' ' + hh + ':' + min + '\n';
// console.log(today);
// 'connection' listener
server.on('connection', (socket) => {
    // console.log('connected');
    // socket.on('end', () => {
    //     console.log('disconnected');
    // });
    socket.write(today);
    socket.end();
});
 
// handle errors
server.on('error', (err) => {
  throw err;
});
 
// listen on port 8080 on local host with a backlog of 200
server.listen(port, 'localhost', 200, () => {
    // console.log('opened server on', server.address());
});


// Votre solution pour SERVEUR DE TEMPS fonctionne !

// Voici la solution officielle, si vous voulez comparer :

// ─────────────────────────────────────────────────────────────────────────────

  //  'use strict'
  //  const net = require('net')

  //  function zeroFill (i) {
  //    return (i < 10 ? '0' : '') + i
  //  }

  //  function now () {
  //    const d = new Date()
  //    return d.getFullYear() + '-' +
  //      zeroFill(d.getMonth() + 1) + '-' +
  //      zeroFill(d.getDate()) + ' ' +
  //      zeroFill(d.getHours()) + ':' +
  //      zeroFill(d.getMinutes())
  //  }

  //  const server = net.createServer(function (socket) {
  //    socket.end(now() + '\n')
  //  })

  //  server.listen(Number(process.argv[2]))
