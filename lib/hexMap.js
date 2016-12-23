const Tile = require('./tile');

class HexMap {
  constructor(width, height) {
    this.width = width;
    this.height = height;

    this.tiles = {};

    function genShiftFunc(q) {
      return r => r - Math.floor(q / 2);
    }

    for (let q = 0; q < width; ++q) {
      this.tiles[q] = {};
      for (let r of [...Array(height).keys()].map(genShiftFunc(q))) {
        this.tiles[q][r] = new Tile();
      }
    }
  }
}

module.exports = HexMap;
