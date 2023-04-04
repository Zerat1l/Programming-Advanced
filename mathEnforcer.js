const { expect } = require('chai');
const { mathEnforcer } = require('./test');



describe('mathEnforcer', function() {
    describe('addFive function', function() {
        it('Should return undefind if param is not a number', () => {
            expect(mathEnforcer.addFive('a')).to.equal(undefined);
        })
        it('Should return undefind without param', () => {
            expect(mathEnforcer.addFive()).to.equal(undefined);
        })
        it('Should return positive number if param is 5', () => {
            expect(mathEnforcer.addFive(5)).to.equal(10);
        })
        it('Should return 8.14 if param is 3.14', () => {
            expect(mathEnforcer.addFive(3.14)).to.equal(8.14);
        })
        it('Should return 5.99 if param is 0.99', () => {
            expect(mathEnforcer.addFive(0.99)).to.equal(5.99);
        })
        it('Should return -5.99 if param is -10.99', () => {
            expect(mathEnforcer.addFive(-10.99)).to.equal(-5.99);
        })
        it('Should return 0 if param is -5', () => {
            expect(mathEnforcer.addFive(-5)).to.equal(0);
        })
    })
    describe('substract10 function', function() {
        it('Should return undefind if param is not a number', () => {
            expect(mathEnforcer.subtractTen('a')).to.equal(undefined);
        })
        it('Should return undefind if param is empty', () => {
            expect(mathEnforcer.subtractTen()).to.equal(undefined);
        })
        it('Should return 5 if param is 15', () => {
            expect(mathEnforcer.subtractTen(15)).to.equal(5);
        })
        it('Should return floating point number 8.9 if param is 1.1', () => {
            expect(mathEnforcer.subtractTen(1.1)).to.equal(-8.9);
        })
        it('Should return -6.86 if param is 3.14', () => {
            expect(mathEnforcer.subtractTen(3.14)).to.closeTo(-6.86, 0.5);
        })
        it('Should return floating number if parama is 0.99', () => {
            expect(mathEnforcer.subtractTen(0.99)).to.closeTo(-9.01, 0.001);
        })
        it('Should return 0', () => {
            expect(mathEnforcer.subtractTen(10)).to.equal(0);
        })
        it('Should return -10', () => {
            expect(mathEnforcer.subtractTen(0)).to.equal(-10);
        })
        it('Should return floating number if param is -0.99', () => {
            expect(mathEnforcer.subtractTen(-0.99)).to.equal(-10.99); //!
        })
    })
    describe('sum function', function() {
        it('Should return undefind if first param is not a number', () => {
            expect(mathEnforcer.sum('aaa')).to.equal(undefined);
        })
        it('Should return undefind if secound param is not a number', () => {
            expect(mathEnforcer.sum(5, 'a')).to.equal(undefined);
        })
        it('Should return undefind if no params are passed', () => {
            expect(mathEnforcer.sum()).to.equal(undefined);
        })
        it('Should return 10 if both params are 5', () => {
            expect(mathEnforcer.sum(5,5)).to.equal(10);
        })
        it('Should return negative number', () => {
            expect(mathEnforcer.sum(-5,-5)).to.equal(-10);
        })
        it('Should return floating point number wit -5 and 3.1', () => {
            expect(mathEnforcer.sum(-5,3.1)).to.closeTo(-1.9, 0.01);
        })
        it('Should return floating point number -5 and 3.22', () => {
            expect(mathEnforcer.sum(-5,3.22)).to.closeTo(-1.78, 0.01);
        })
        it('Should return positiv floating point number with 2.7 + 3.4', () => {
            expect(mathEnforcer.sum(2.7,3.4)).to.closeTo(6.1, 0.01);
        })
    })
})