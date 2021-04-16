// convertir tableau excel en json

const xlsx = require('xlsx')
const file = xlsx.readFile('peinaussteiger2018.xlsx')
const json = xlsx.utils.sheet_to_json(file.Sheets['data'])

// filtre pour ne garder que VD
// const json = json.filter(d => d.Kanton === 'VD')


const resultat = json
        .filter(d => d.Kanton === 'VD' && !isNaN(d.DTV_2018))
        .map(d => ({ nom: d.Bahnhof_Haltestelle, passage: d.DTV_2018, passageOuvres: d.DWV_2018, passageNonouvre: d.DNWV_2018 }))
        .sort((a,b) => a.passage > b.passage ? -1 : 1)
        .filter((d, i) => i < 10)

// pour sauver en fichier json, 
// const json3 = JSON.stringify(json2)
console.log(resultat)
