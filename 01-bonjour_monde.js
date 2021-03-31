let port = process.argv[2];

const express = require('express')
const app = express()

app.get('/home', function(req, res) {
      res.end('Bonjour, monde !')
})
app.listen(port)

/*************************************************************************************/
/*********************** Résultat proposer par le tuto en bas ************************/
/*************************************************************************************/


// ✓ Vos résultats correspondent à ceux attendus

// # RÉUSSI

// Votre solution pour BONJOUR, MONDE ! fonctionne !

// Voici la solution officielle, si vous voulez comparer :

// ────────────────────────────────────────────────────────────────────────────────
//     const express = require('express')
//     const app = express()
//     app.get('/home', function(req, res) {
//       res.end('Bonjour, monde !')
//     })
//     app.listen(process.argv[2])


// ────────────────────────────────────────────────────────────────────────────────

// Il vous reste 7 défis.
// Tapez 'expressworks' pour afficher le menu.
