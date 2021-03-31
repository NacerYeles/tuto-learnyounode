let fs      = require('fs');
let path    = require('path');

module.exports = function filterDir(cheminRepertoire, extensionFiltrage, callback) {
    fs.readdir(cheminRepertoire, (err, data) => {
        if (err){
            return callback(err);
          };
        let listeFiltrerParFichierMD = data.filter(extensionMD => path.extname(extensionMD) === `.${extensionFiltrage}`);
        return callback(null, listeFiltrerParFichierMD)
    })
}