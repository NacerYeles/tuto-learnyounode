let tab = process.argv;
let tab2 = [];
let somme = 0;
for(let i = 2; i < tab.length ; i++) { tab2.push(tab[i]); }
tab2.forEach(e => somme += Number(e))
console.log(somme)

