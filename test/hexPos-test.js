const HexPos = require('../lib/hexPos');
const expect = require('chai').expect;

describe('HexPos', () => {
  it('contains an axial coordinate pair', () => {
    const q = 4;
    const r = -2;
    const p = new HexPos(q, r);

    expect(p.q).to.equal(q);
    expect(p.r).to.equal(r);
  });
});
