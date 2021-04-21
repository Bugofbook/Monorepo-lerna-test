'use strict';

const invokeIfElseIf = require('../src/invokeIfElseIf');
function fbig1000 (e = 0) {
    return e > 1000;
}
function fbig100 ( e = 0) {
    return e > 100;
}
function fbig10 ( e = 0) {
    return e > 10;
}
function ftr1000 ( e = 10) {
    return `${e} is big than 1000`
}
function ftr100 ( e = 10) {
    return `${e} is big than 100`
}
function ftr10 ( e = 10) {
    return `${e} is big than 10`
}
function ffa ( e = 10) {
    return `${e} is small than 10`
}

describe('invokeIfElseIf', () => {
    const ConditionFn = [
        [fbig1000, ftr1000],
        [fbig100, ftr100],
        [fbig10, ftr10],
        [() => true, ffa]
    ]
    const newFunction = invokeIfElseIf(...ConditionFn);
    it('needs tests1', () => {
        expect(newFunction(1001)).toBe('1001 is big than 1000')
    });
    it('needs tests2', () => {
        expect(newFunction(101)).toBe('101 is big than 100')
    });
    it('needs tests3', () => {
        expect(newFunction(11)).toBe('11 is big than 10')
    });
    it('needs tests4', () => {
        expect(newFunction(1)).toBe('1 is small than 10')
    });
});
