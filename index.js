// index.js

const formulas = require('./formula');

const side = 5;
const [surfaceAreaCube, volumeCube] = formulas.cube(side);
console.log(`Cube Surface Area: ${surfaceAreaCube}, Volume: ${volumeCube}`);

const length = 3, width = 4, height = 5;
const [surfaceAreaBlock, volumeBlock] = formulas.block(length, width, height);
console.log(`Block Surface Area: ${surfaceAreaBlock}, Volume: ${volumeBlock}`);

const base = 3, triangleHeight = 4, prismDepth = 5;
const [surfaceAreaPrism, volumePrism] = formulas.prismTriangle(base, triangleHeight, prismDepth);
console.log(`Triangle Prism Surface Area: ${surfaceAreaPrism}, Volume: ${volumePrism}`);
