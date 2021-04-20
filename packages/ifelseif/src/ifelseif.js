'use strict';

module.exports = ifelseif;

function ifelseif([currentFnCon = () => true,currentFnTrue = f => f] = [], ...otherProcessfns) {
    return (arg) => {
        return currentFnCon(arg) ? currentFnTrue(arg) : ifelseif(...otherProcessfns)(arg);
    }
}
