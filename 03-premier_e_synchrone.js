let fs = require('fs');
let chaine = process.argv[2];
let lireFichier = fs.readFileSync(chaine).toString();
let NombreLigne = lireFichier.split("\n").length - 1;
console.log(NombreLigne);