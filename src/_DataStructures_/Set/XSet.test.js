const XSet = require('./index');

describe('Data Structure : Set', () => {
  it('XSet should be a Class', () => {
    expect(typeof XSet.prototype.constructor).toEqual('function');
  });

  describe('Creation of Set', () => {
    let letters;

    beforeAll(() => {
      letters = new XSet();
    });

    it('Should create a new Set with no elements', () => {
      expect(letters.values()).toEqual([]);
    });

    it('Should add letter A', () => {
      letters.add('a');
      expect(letters.has('a')).toBe(true);
    });

    it('Should add letter B', () => {
      letters.add('b');
      expect(letters.has('b')).toBe(true);
    });

    it('Should add letter C', () => {
      letters.add('c');
      expect(letters.has('c')).toBe(true);
    });

    it('Should not add duplicates', () => {
      letters.add('a');
      expect(letters.values()).toEqual(['a', 'b', 'c']);
    });

    it('Should remove letter A', () => {
      letters.remove('a');
      expect(letters.has('a')).toBe(false);
    });

    it('Should remove letter B', () => {
      letters.remove('b');
      expect(letters.has('b')).toBe(false);
    });
  });

  describe('Union of Sets', () => {
    it('Should contain the elements of both sets', () => {
      const first = new XSet();
      const second = new XSet();
      first.add('a');
      first.add('b');
      second.add('b');
      second.add('c');
      expect(first.union(second).values()).toEqual(['a', 'b', 'c']);
    });
  });
});
