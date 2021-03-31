let http = require('http');

let chemin = process.argv[2];

// methode sans le module bl :

// http.get(chemin, res => {
//     // creation dune varible data vide auquelle on va ajouter au fur et à mesure les données
//   let data = ''
//   console.log(res);

//   res.on("data", d => {
//     data += d
//   })
//   res.on("end", () => {
//     // console.log(data.join('\n'))
//     // affichage de la longueur de la chaine de caractères
//     console.log(data.length);
//     // affichage de la chaine de caractères
//     console.log(data);
//   })
// })

// methode avec le module bl :

const bl = require('bl');
// console.log(bl);

http.get(chemin, response => {
    return response.pipe(bl((err, data) => {

      if (err) console.error(err);

      data = data.toString();
      console.log(data.length);
      return console.log(data);
    }));
  });