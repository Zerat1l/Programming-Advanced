const { expect } = require('chai');

function sum(a,b) {
    return a + b;
}

describe('Main test', function() {
    it('Works with whole numbers', function() {
        expect(sum(3,5)).to.equal(8);
    });
    it('Works with floating-points numbers', function() {
       expect(sum(0.1, 0.2)).to.equal(0.3);
    });
});