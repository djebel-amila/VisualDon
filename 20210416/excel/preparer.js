const xlsx = require('xlsx')

const file = xlsx.readFile('peinaussteiger2018.xlsx')
const json = xlsx.utils.sheet_to_json(file.Sheets['Ma feuille'])