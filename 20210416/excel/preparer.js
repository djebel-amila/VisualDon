// convertir tableau excel en json

const xlsx = require('xlsx')
const file = xlsx.readFile('peinaussteiger2018.xlsx')
const json = xlsx.utils.sheet_to_json(file.Sheets['data'])

// filtre pour ne garder que 
const json = json.filter(d => d.Kanton === 'VD')

// pour sauver en fichier json, 
// const json3 = JSON.stringify(json2)

// console.log(json2)
