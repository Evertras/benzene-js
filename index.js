const pixi = require('pixi.js');

const HexStage = require('./lib/hexStage.js');

console.log('Loaded benzene');

class Benzene {
  constructor() {
    this.renderer = new pixi.autoDetectRenderer(800, 600);
    this.hexStage = new HexStage();
  }

  render() {
    this.renderer.render(this.hexStage.stage);
  }
}

window.Benzene = new Benzene();
