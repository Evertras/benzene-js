const pixi = require('pixi.js');
const Hex = require('./hex');
const HexMap = require('../hexMap');

const sqrt5 = Math.sqrt(5);
const sqrt3 = Math.sqrt(3);
const sqrt2 = Math.sqrt(2);

const sin30 = Math.sin(30 * Math.PI / 180);
const cos30 = Math.cos(30 * Math.PI / 180);

class HexStage {
  constructor(edge) {
    this.stage = new pixi.Container();
    this.map = new HexMap(8, 3);

    const parseFunc = s => parseInt(s, 10);

    for (let q of Object.keys(this.map.tiles).map(parseFunc)) {
      for (let r of Object.keys(this.map.tiles[q]).map(parseFunc)) {
        const x = edge * 3/2 * q;
        const y = edge * sqrt3 * (r + q/2);
        const simpleHex = new Hex(new pixi.Point(x + edge*2, y + edge*2), edge);

        this.stage.addChild(simpleHex);
      }
    }
  }
}

module.exports = HexStage;
