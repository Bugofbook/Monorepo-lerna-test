// import aaa from "../src/index";

// const aaa =require('../src/index');

const compose = require('../src/common')

function add1 (num = 0) {
    return num + 1;
}
function add2 (num = 0) {
    return num + 2;
}

describe('@common/common', () => {
    it('needs tests', () => {
        expect(compose(add1, add2)(1)).toBe(4);
    });
});
