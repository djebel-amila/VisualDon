import L from 'leaflet'
import arbres from './arbres.json'
// import batiments from './batiments.json'
import restaurants from '../preparer/restaurants2.json'

const map = L.map('map').setView([46.78104, 6.64707], 17)

/* 
  L.tileLayer(
  'https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}',
  {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png',
  })
*/

/*
L.tileLayer('https://tile.osm.ch/switzerland/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	bounds: [[45, 5], [48, 11]]
})
*/

/* importer fonds de carte depuis un serveur OSM */
L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 1,
	maxZoom: 16,
	ext: 'jpg'
})
.addTo(map)

/* utiliser icon custom */
const icon = L.icon({
  //iconUrl: 'https://heig-datavis-2021.surge.sh/carte-leaflet/arbre.png',
  iconUrl: 'https://i.etsystatic.com/6875777/r/il/d41ecc/422526408/il_570xN.422526408_g3b1.jpg',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
})

restaurants.map(d => {
  const [lon, lat] = d
  L.marker([lat, lon], { icon }).addTo(map)
})

// arbres.map(d => {
//   const [lon, lat] = d
//   L.marker([lat, lon], { icon }).addTo(map)
// })

L.geoJSON(
  batiments,
  {
    style: feature =>
      feature.properties['name'] === 'Centre Saint-Roch'
        ? { color: 'indianred' }
        : { color: 'steelblue' },
    onEachFeature: (feature, layer) =>
      layer.bindPopup(feature.properties.name || feature.properties['addr:street'] || feature.properties.uid)
      
  },
).addTo(map)