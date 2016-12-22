const pixi = require('pixi.js');

const HexStage = require('./lib/hexStage.js');

console.log('Loaded benzene');

class Benzene {
  constructor() {
    this.renderer = new pixi.autoDetectRenderer(800, 600);
  }

  render() {
    const hexStage = new HexStage();
    this.renderer.render(hexStage.stage);
  }
}

window.Benzene = new Benzene();
