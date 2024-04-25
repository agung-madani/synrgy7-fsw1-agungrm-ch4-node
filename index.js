// const cubes = require('./cube');
// const blocks = require('./block');
// const prismTriangles = require('./prismTriangle');

// const side = 5;
// const volumeCube = cubes.volumeCube(side);
// console.log(`Cube Volume: ${volumeCube}`);

// const os = require('os')
// const fs = require('fs')



// fs.writeFileSync('./result.txt', `volume: ${volumeCube}`,'utf-8')


// const data = fs.readFileSync('./result.txt', 'utf-8')
// console.log(data)


const { writeFiles, readFiles } = require('./people');

writeFiles(); // You need to pass the 'people' array here
readFiles();