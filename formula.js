// formula.js

const cube = (side) => {
    const surfaceAreaCube = side * side * 6;
    const volumeCube = side ** 3;
    return [surfaceAreaCube, volumeCube];
}

const block = (length, width, height) => {
    const surfaceAreaBlock = 2 * (length * width + length * height + width * height);
    const volumeBlock = length * width * height;
    return [surfaceAreaBlock, volumeBlock];
}

const prismTriangle = (base, height, depth) => {
    const surfaceAreaPrism = 2 * ((base * height) + (base * depth) + (height * depth));
    const volumePrism = base * height * depth;
    return [surfaceAreaPrism, volumePrism];
}

module.exports = { cube, block, prismTriangle };
