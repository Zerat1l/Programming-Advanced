const { expect } = require('chai');
const isOddorEven = require('../test.js');


describe('isOddOrEven', function() {
    it('isString', () => {
        expect(isOddorEven(4)).to.undefined;
    })
    it('isOdd', () => {
        expect(isOddorEven('s')).to.equal('odd');
    })
    it('isEven', () => {
        expect(isOddorEven('aa')).to.equal('even');
    })
    it('isNotOdd', () => {
        expect(isOddorEven('aa')).to.not.equal('odd');
    })
})