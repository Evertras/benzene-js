const pixi = require('pixi.js');
const Hex = require('./hex');

class HexStage {
  constructor() {
    this.stage = new pixi.Container();

    const simpleHex = new Hex(new pixi.Point(100, 100), 50);
    const graphics = new pixi.Graphics();

    graphics.beginFill(0xff0000);
    graphics.drawPolygon(simpleHex.points);
    graphics.endFill();

    this.stage.addChild(graphics);
  }
}

module.exports = HexStage;
