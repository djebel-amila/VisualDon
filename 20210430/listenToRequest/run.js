const fs = require('fs')
const get = require('./get')
const parse = require('./parse')

const file = fs.createWriteStream('sextoys.ndjson')

const loop = offset => {
  get(offset)
    .then(res => {
      const { nextOffset, total, data } = parse(res)
      data.forEach(d => file.write(`${JSON.stringify(d)}\n`))
      if (nextOffset < total) {
        setTimeout(10)
        loop(nextOffset)
      }
    })
}

loop(0)