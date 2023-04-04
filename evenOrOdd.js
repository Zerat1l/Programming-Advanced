const { expect } = require('chai');
const isOddOrEven = require('./test');

describe('isOddOrEven', function () {
    it('Should return even when string length is even', () => {
        expect(isOddOrEven('even')).to.equal('even');
    })
    it('Should return odd when string length is odd', () => {
        expect(isOddOrEven('odd')).to.equal('odd');
    })
    it('Should return undefind when input is not a string', () => {
        expect(isOddOrEven(1)).to.equal(undefined);
    })
})