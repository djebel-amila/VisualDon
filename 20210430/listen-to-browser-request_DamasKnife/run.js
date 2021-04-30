const fs = require('fs')
const get = require('./get')
//const data = require('./testdata.json')
const parse = require('./parse')

const file = fs.createWriteStream('damas_knives2.ndjson')

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
// Attention, code runs in loop forever. When total is reached, program writes the same data over from line 0.

loop(0)