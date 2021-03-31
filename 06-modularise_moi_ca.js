let myModule = require('./06-mymodule');
const folderName          = process.argv[2];
let extensionAFiltrer   = process.argv[3];

myModule(folderName, extensionAFiltrer, (err, data) => console.log(err ? err : data.join('\n')));