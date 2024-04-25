const surfaceAreaPrism = (base, height, depth) => {
    const surfaceAreaPrism = 2 * ((base * height) + (base * depth) + (height * depth));
    return surfaceAreaPrism;
}

const volumePrism = (base, height, depth) => {
    const volumePrism = base * height * depth;
    return volumePrism;
}

module.exports = { surfaceAreaPrism,volumePrism };