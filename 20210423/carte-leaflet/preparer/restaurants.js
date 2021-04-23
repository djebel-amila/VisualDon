const data = require('./restaurants.json')

const result = data.features
  .filter(d => d.geometry.type === 'Point' && d.properties.amenity === 'restaurant')
  .map(d => d.geometry.coordinates)


JSON.stringify(result)
console.log(result)