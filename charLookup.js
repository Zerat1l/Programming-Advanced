const { expect } = require('chai');
const { lookupChar } = require('./test');


describe('lookupChar', function () {
    it('Should return undefind if first arg is not a string', () => {
        expect(lookupChar(1,1)).to.equal(undefined)
    })
    it('Should return undefind if the secound arg is not a intiger', () => {
        expect(lookupChar('aaa', 1.5)).to.equal(undefined);
    })
    it('Should return undefind if secound arg is not correct', () => {
        expect(lookupChar('aaa','a')).to.equal(undefined);
    })
    it('Should return "incorect index" if index is lower than 0', () => {
        expect(lookupChar('aaa',-1)).to.equal('Incorrect index');
    })
    it('Should return "incorect index" if index greater than string length', () => {
        expect(lookupChar('aaa',10)).to.equal('Incorrect index');
    })
    it('Should return the correct char at index 0', () => {
        expect(lookupChar('test',0)).to.equal('t');
    })
    it('Should return the correct char if the index the last of the length', () => {
        expect(lookupChar('test',3)).to.equal('t');
    })
    it('Should return the correct char', () => {
        expect(lookupChar('string', 0)).to.equal('s');
    })
    it('Should return the correct char', () => {
        expect(lookupChar('Pesho', 4)).to.equal('o');
    })
})