const pixi = require('pixi.js');
const Point = pixi.Point;

class Hex {
  constructor(center, side) {
    // http://www.rdwarf.com/lerickson/hex/
    const a = side*0.5;
    const b = 0.866*side;

    this.points = [
      new Point(0, b),
      new Point(a, 0),
      new Point(a+side, 0),
      new Point(2*side, b),
      new Point(a+side, 2*b),
      new Point(a, 2*b)
    ].map(p => new Point(p.x + center.x, p.y + center.y));
  }
}

module.exports = Hex;
