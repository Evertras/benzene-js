const HexMap = require('../lib/hexMap');
const expect = require('chai').expect;

describe('HexMap', () => {
  it('creates a new rectangular map with a tracked width and height', () => {
    const width = 5;
    const height = 3;

    const map = new HexMap(width, height);

    expect(map.width).to.equal(width);
    expect(map.height).to.equal(height);
  });

  it('starts with the correct tile coordinates', () => {
    const width = 3;
    const height = 4;

    const map = new HexMap(width, height);

    expect(map.tiles).to.have.all.keys(['0','1','2']);
    expect(map.tiles[0]).to.have.all.keys(['0','1','2', '3']);
    expect(map.tiles[1]).to.have.all.keys(['0','1','2', '3']);
    expect(map.tiles[2]).to.have.all.keys(['-1','0','1', '2']);
  });
});
