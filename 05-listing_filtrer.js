let fs      = require('fs');
let path    = require('path');

let chaine      = process.argv[2];
let extension   = `.${process.argv[3]}`;

fs.readdir(chaine, 'utf8', (err, data) => {
    if (err){
        console.log(err);
        return
      };
    let listeFiltrerParFichierMD = data.filter(extensionMD => path.extname(extensionMD) === extension);
    console.log(listeFiltrerParFichierMD.join('\n'));
})