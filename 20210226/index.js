import { select } from 'd3'

const data1 = [8, 4, 6, 9, 10]

const body = select('body')
    
const ul = body.append('ul')

ul.selectAll('li')
    .data('data1')
        .enter()
            .append('li')
            .attr('id', d=>`id-${d}`)
            .text(d=>d*2)

