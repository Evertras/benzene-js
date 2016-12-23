class Tile {
  constructor(attrs) {
    this.attributes = attrs || {};
  }

  isEmpty() {
    return Object.keys(this.attributes).length === 0;
  }
}

module.exports = Tile;
