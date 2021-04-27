'use strict';

const invokeswitch = require('../src/invokeswitch');

let fCond = e => `${e}${e}`;
let fCase1 = () => "成績為A";
let fCase2 = () => "成績為B";
let fCase3 = () => "成績為C";
let fCase4 = () => "成績為D";

describe('invokeswitch', () => {
    const CaseObj = [
        ["aa", fCase1],
        ["bb", fCase2],
        ["cc", fCase3],
        ["dd", fCase4]
      ];
    const newFunction = invokeswitch(fCond, CaseObj)
    it('needs tests1', () => {
        expect(newFunction('a')).toBe("成績為A")
    });
    it('needs tests1', () => {
        expect(newFunction('b')).toBe("成績為B")
    });
    it('needs tests1', () => {
        expect(newFunction('c')).toBe("成績為C")
    });
    it('needs tests1', () => {
        expect(newFunction('d')).toBe("成績為D")
    });
    it('needs tests1', () => {
        expect(newFunction('e')).toBe("e")
    });
});
