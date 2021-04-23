import {
  geoMercator,
  geoPath,
  select,
} from 'd3'
import eau from './water.json'
import rewind from '@mapbox/geojson-rewind'

const WIDTH = 800
const HEIGHT = 450

const projection = geoMercator()
  .fitExtent(
    [[0, 0], [WIDTH, HEIGHT]],
    eau      
  )

const pathGenerator = geoPath().projection(projection)

const svg = select('#map').append('svg')
  .attr('viewBox', `0 0 ${WIDTH} ${HEIGHT}`)

svg.selectAll('path.eau')
  .data(eau.features.filter(d => d.geometry.type === 'Polygon').map(d => rewind(d, true)))
  .enter()
  .append('path')
  .attr('class', 'eau')
  .attr('d', pathGenerator)
  .attr('fill', 'blue')

  console.log(eau)