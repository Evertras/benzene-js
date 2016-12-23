const Tile = require('./tile');

class HexMap {
  constructor(width, height) {
    this.width = width;
    this.height = height;

    this.tiles = {};

    for (let q = 0; q < width; ++q) {
      this.tiles[q] = {};
      for (let r of [...Array(width).keys()].map(r => r - Math.floor(q / 2))) {
        this.tiles[q][r] = new Tile();
      }
    }
  }
}

module.exports = HexMap;
