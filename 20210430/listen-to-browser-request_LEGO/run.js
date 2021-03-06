const fs = require('fs')
const get = require('./get')
//const data = require('./testdata.json')
const parse = require('./parse')

const file = fs.createWriteStream('lego.ndjson')

const loop = offset => {
  get(offset)
    .then(res => {
      const { nextOffset, total, data } = parse(res)
      data.forEach(d => file.write(`${JSON.stringify(d)}\n`))
      if (nextOffset < total) {
        loop(nextOffset)
      }
    })
}

loop(0)