'use strict';

const invokeIf = require('../src/invokeIf');

function fnCondition(arg) {
    return arg >= 18
}

function fnTrue(arg) {
    return `age is ${arg}, over 18`
}

function fnFalse(arg) {
    return `age is ${arg}, under 18`
}

describe('@common/if', () => {
    const newFunction = invokeIf(fnCondition, fnTrue, fnFalse)
    it('needs tests1', () => {
        expect(newFunction(10)).toBe('age is 10, under 18')
    });
    it('needs tests2', () => {
        expect(newFunction(20)).toBe('age is 20, over 18')
    });
});
