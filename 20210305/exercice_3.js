const data = require('./biosentiers-all-events.json')

// const listSpeciesId = d => d.properties.speciesId && d.properties.speciesId !== "obersono-bers-onob-erso-nobersonober" est équivalent à : 
function listSpeciesId(d) {
    return d.properties.speciesId && d.properties.speciesId !== "obersono-bers-onob-erso-nobersonober"
}


const reducer = (r , d) => {
    if (r[d.properties.speciesId]) { 
      return { ...r, [d.properties.speciesId]: r[d.properties.speciesId] + 1 }
   } else {
        return {...r, [d.properties.speciesId]: 1} 
   }
 }

const SpeciesIdCount = data.filter(listSpeciesId).reduce(reducer,{})

// console.log(typeof(SpeciesIdCount))

const data2 = require('./data-package.json')
const data3 = data2.species
    .map(d => ({ speciesId: d.id, name: d.commonName.fr, count: SpeciesIdCount[d.id] }))
    .filter(d => d.count)

console.log(JSON.stringify(data3))
