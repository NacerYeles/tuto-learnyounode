let http = require('http');
let bl = require('bl');

let urls = [ process.argv[2], process.argv[3], process.argv[4] ];
let resultat = [];
let cmpt = 0;

let boucleAffichage = tableauDeResultat =>  tableauDeResultat.map(e => console.log(e))
    

let getSurPlusieurUrl = () => {
     urls.forEach( (url, i) => {
          http.get(url, response => {
            return response.pipe(bl((err, data) => {
        
              if (err) console.error(err);
        
              data = data.toString();

              resultat[i] = data

            //   console.log(resultat[i]);
              cmpt++

              if(cmpt === 3){
                return boucleAffichage(resultat);
              }
            //   console.log(resultat);
            //   if(resultat.length === 3){
            //     return boucleAffichage(resultat)
            //   }else{
            //       console.log(err);
            //   }
            }));
          });
    })
}

getSurPlusieurUrl();



// Votre solution pour JONGLER AVEC L'ASYNCHRONE fonctionne !

// Voici la solution officielle, si vous voulez comparer :

// ──────────────────────────────────────────────────────────────────────────

//    'use strict'
//    const http = require('http')
//    const bl = require('bl')
//    const results = []
//    let count = 0

//    function printResults () {
//      for (let i = 0; i < 3; i++) {
//        console.log(results[i])
//      }
//    }

//    function httpGet (index) {
//      http.get(process.argv[2 + index], function (response) {
//        response.pipe(bl(function (err, data) {
//          if (err) {
//            return console.error(err)
//          }

//          results[index] = data.toString()
//          count++

//          if (count === 3) {
//            printResults()
//          }
//        }))
//      })
//    }

//    for (let i = 0; i < 3; i++) {
//      httpGet(i)
//    }

