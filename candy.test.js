const Candy = require('./candy')

describe('Candy', () => {
  it('returns the name', () => {
    newCandy = new Candy('Mars', 4.99);
    expect(newCandy.getName()).toEqual('Mars');
  });

  it('returns the price', () => {
    newCandy = new Candy('Mars', 4.99);
    expect(newCandy.getPrice()).toEqual(4.99);
  });
});