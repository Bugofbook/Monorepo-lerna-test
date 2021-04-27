'use strict';

module.exports = invokeIfElseIf;

function invokeIfElseIf([currentFnCon = () => true,currentFnTrue = f => f] = [], ...otherProcessfns) {
    return (arg) => {
        return currentFnCon(arg) ? currentFnTrue(arg) : invokeIfElseIf(...otherProcessfns)(arg);
    }
}
