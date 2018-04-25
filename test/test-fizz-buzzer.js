const expect = require('chai').expect;

const fizzBuzz = require('../fizzBuzzer');

describe('fizzbuzz', function () {
  it('should return "fizz-buzz"', () => {
    const nums = [15,30,45]
    nums.forEach(num => {
      expect(fizzBuzz(num)).to.equal('fizz-buzz')
    });
  });
  it('should return "buzz"', () => {
    const nums = [5, 10, 20];
    nums.forEach(num => {
      expect(fizzBuzz(num)).to.equal('buzz');
    });
  });
  it('should return "fizz"', () => {
    const nums = [3,6,9];
    nums.forEach(num => {
      expect(fizzBuzz(num)).to.equal('fizz')
    });
  });
  it('should return a number', () => {
    const nums = [4,1,7];
    nums.forEach( num => {
        expect(fizzBuzz(num)).to.equal(num);
    });
  });
  it('should return an error', () => {
    const letters = ['a','ab','abc'];
    letters.forEach((letter) => {
      expect(() => {fizzBuzz(letter)}).to.throw(Error);
    });
  });
});
