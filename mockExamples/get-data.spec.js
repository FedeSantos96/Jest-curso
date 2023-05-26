/**
 * @jest-environment jsdom
 */

/*
  - Mock function (jest.fn)
  - Mock implementacion
  - Mock -> Spys
*/
const sum = require('./get-data');
describe('MainTest', () => {
  beforeEach(() => {
    window.melidata = jest.fn();
  })
  
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('adds 1 + 2 to equal 3', () => {
    sum(1, 2)
    expect(console.error).toBeCalled();
  });
})
