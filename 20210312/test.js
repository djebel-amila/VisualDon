{
    // ...
    plugins: [
      // autres plugin...
      json(),
    ]
  }


import json from '@rollup/plugin-json'



import data from './data.json'
import pkg from './package.json';
console.log(`running version ${pkg.version}`);

