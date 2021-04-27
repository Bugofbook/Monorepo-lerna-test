'use strict';

const invokefor = require('../src/invokefor.JS');

function fnProcess(arg = 0) {
    return arg + 2
}

describe('invokefor', () => {
    const newFunction1 = invokefor(3, fnProcess);
    const newFunction2 = invokefor(5, fnProcess);
    it('needs tests1', () => {
        expect(newFunction1(3)).toBe(9);
    });
    it('needs tests2', () => {
        expect(newFunction2(3)).toBe(13);
    });
});
