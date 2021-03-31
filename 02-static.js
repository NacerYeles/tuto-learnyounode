let port = process.argv[2];
let fichierHtml = process.argv[3];
let express = require('express');
let app = express();
// let public = path.join(__dirname, 'public');

// app.use('/', express.static(public));
// app.use(express.static(fichierHtml));
app.use(express.static('C:/Users/nacer/OneDrive/Documents/LaPasserelle/Javascript/Semaine 2/tuto-expressworks-apprendreExpressJS-nacer/public'));
// app.use(express.static('C:/Users/nacer/OneDrive/Documents/LaPasserelle/Javascript/Semaine 2/tuto-expressworks-apprendreExpressJS-nacer/media'));

app.listen(665);

/*************************************************************************************/
/*********************** Résultat proposer par le tuto en bas ************************/
/*************************************************************************************/


// ✓ Vos résultats correspondent à ceux attendus

// # RÉUSSI

// Votre solution pour STATIQUE fonctionne !

// Voici la solution officielle, si vous voulez comparer :

// ────────────────────────────────────────────────────────────────────────────────
//     const path = require('path')
//     const express = require('express')
//     const app = express()

//     app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));

//     app.listen(process.argv[2])

// ────────────────────────────────────────────────────────────────────────────────

// Il vous reste 6 défis.
// Tapez 'expressworks' pour afficher le menu.
