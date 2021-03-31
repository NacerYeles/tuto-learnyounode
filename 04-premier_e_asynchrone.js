let fs = require('fs');
let chaine = process.argv[2];
fs.readFile(chaine, 'utf8', (err, data) => {
    if (err){
        console.log(err);
        return
      };
    console.log(data.split("\n").length - 1);
})

// let NombreLigne = lireFichier.split("\n").length - 1;
// console.log("toto", lireFichier);