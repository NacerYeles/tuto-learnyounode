let http = require('http');

let chemin = process.argv[2];

http.get(chemin, res => {
  let data = []

  // il sagit d'un objet éméttant des évènements: "data", "end" et "error" sont rattacher a une function comme le AddEventListener()
  // comme l'exemple ci-dessous
  res.on("data", d => {
    data.push(d.toString())
  })
  res.on("end", () => {
    console.log(data.join('\n'))
  })

  // res.end() va prendre un seul parametre et éxéccuter un string contrairement a res.on qui ecoute une fonction passer en parametre
})