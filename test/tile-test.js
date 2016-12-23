const Tile = require('../lib/tile');
const expect = require('chai').expect;

describe('Tile', () => {
  it('creates an empty object for attributes by default', () => {
    const tile = new Tile();

    expect(tile.attributes).to.deep.equal({});
    expect(tile.isEmpty()).to.be.true;
  });

  it('assigns the supplied attributes', () => {
    const attrs = {
      terrain: 'forest'
    };

    const tile = new Tile(attrs);

    expect(tile.attributes).to.deep.equal(attrs);
  })
});
