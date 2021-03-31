let port = process.argv[2];
let templatePUG = process.argv[3];
// let chemin = require('./src/views/');

const express = require('express')
const app = express()

// console.log(templatePUG);

app.set('views', './src/views');
app.set('view engine', 'pug');
app.get('/home', (req, res) => {
    res.render('index', {date: new Date().toDateString()})
});
app.listen(port);

/*************************************************************************************/
/*********************** Résultat proposer par le tuto en bas ************************/
/*************************************************************************************/


// RÉEL                                  ATTENDU
// ────────────────────────────────────────────────────────────────────────────────

//    "<h1>Hello World</h1><p>Today is Fri Mar 26 2021.</p>" ==    "<h1>Hello World</h1><p>Today is Fri Mar 26 2021.</p>"

// ────────────────────────────────────────────────────────────────────────────────

// ✓ Vos résultats correspondent à ceux attendus

// # RÉUSSI

// Votre solution pour PUG fonctionne !

// Voici la solution officielle, si vous voulez comparer :

// ────────────────────────────────────────────────────────────────────────────────
//     const express = require('express')
//     const app = express()
//     app.set('view engine', 'pug')
//     app.set('views', process.argv[3])
//     app.get('/home', function(req, res) {
//       res.render('index', {date: new Date().toDateString()})
//     })
//     app.listen(process.argv[2])


// ────────────────────────────────────────────────────────────────────────────────

// Il vous reste 5 défis.
// Tapez 'expressworks' pour afficher le menu.
