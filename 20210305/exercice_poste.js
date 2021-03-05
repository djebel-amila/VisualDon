const data = require('./noms.json'))


cons resultat = data
        .filter(d => d.plz === '1400' && d.sexcode === 'w')
        .map(d => ({ nom: d.nachname, nombre: d.anzahl }))
        .sort((a,b) => a.nombre > b.nombre ? 1 : -1)

console.log(JSON.stringify(resultat, null, 2))