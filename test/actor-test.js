const Actor = require('../lib/actor');
const HexPos = require('../lib/hexPos');
const expect = require('chai').expect;

describe('Actor', () => {
  it('initializes with its position', () => {
    const q = 10;
    const r = -2;
    const pos = new HexPos(q, r);
    const a = new Actor(pos);

    expect(a.pos).to.deep.equal(pos);
  })
});
