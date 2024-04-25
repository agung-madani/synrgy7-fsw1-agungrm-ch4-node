const surfaceAreaBlock = (length, width, height) => {
    const surfaceAreaBlock = 2 * (length * width + length * height + width * height);
    return surfaceAreaBlock;
}

const volumeBlock = (length, width, height) => {
    const volumeBlock = length * width * height;
    return volumeBlock;
}

module.exports = { surfaceAreaBlock,volumeBlock };