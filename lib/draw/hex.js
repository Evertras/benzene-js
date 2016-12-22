const pixi = require('pixi.js');
const Point = pixi.Point;

class Hex extends pixi.Graphics {
  constructor(center, side) {
    super();
    // http://www.rdwarf.com/lerickson/hex/
    const a = side*0.5;
    const b = 0.866*side;

    this.points = [
      new Point(0, b),
      new Point(a, 0),
      new Point(a+side, 0),
      new Point(2*side, b),
      new Point(a+side, 2*b),
      new Point(a, 2*b),
      new Point(0, b),
    ].map(p => new Point(p.x + center.x, p.y + center.y));

    this.redraw();

    this.interactive = true;
    this.hitArea = new pixi.Polygon(this.points);

    this.mouseover = function(mouseData) {
      this.highlighted = true;
      this.redraw();
    };

    this.mouseout = function(mouseData) {
      this.highlighted = false;
      this.redraw();
    }
  }

  redraw() {
    this.clear();
    this.lineStyle(3, 0xff000);
    if (this.highlighted) {
      this.beginFill(0xff0000);
    } else {
      this.beginFill(0x0000ff);
    }
    this.drawPolygon(this.points);
    this.endFill();
  }
}

module.exports = Hex;
