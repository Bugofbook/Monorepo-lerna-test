'use strict';

const invokewhile = require('../src/invokewhile');

function fnCondition(arg = 0) {
    return arg < 10;
}
function fnProcess(arg = 0) {
    return arg + 2
}
describe('invokedowhile', () => {
    const newFunction1 = invokewhile(fnCondition, fnProcess);
    const newFunction2 = invokewhile(() => false, fnProcess);
    it('needs tests1', () => {
        expect(newFunction1(3)).toBe(11);
    });
    it('needs tests2', () => {
        expect(newFunction2(3)).toBe(3);
    });
});
