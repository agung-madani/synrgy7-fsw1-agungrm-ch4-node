const surfaceAreaCube = (side) => {
    const surfaceAreaCube = side * side * 6;
    return surfaceAreaCube;
}

const volumeCube = (side) => {
    const volumeCube = side ** 3;
    return volumeCube;
}

module.exports = { surfaceAreaCube, volumeCube };