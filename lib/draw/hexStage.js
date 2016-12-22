const pixi = require('pixi.js');
const Hex = require('./hex');

class HexStage {
  constructor() {
    this.stage = new pixi.Container();

    const simpleHex = new Hex(new pixi.Point(100, 100), 50);

    this.stage.addChild(simpleHex);
  }
}

module.exports = HexStage;
