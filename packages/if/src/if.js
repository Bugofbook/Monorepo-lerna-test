'use strict';

module.exports = ifFunvtion;

function ifFunvtion(fnCondition = f=> f, fnTrue = f=> f, fnFalse = f=> f) {
    // TODO
    return (arg) => fnCondition(arg) ? fnTrue(arg) : fnFalse(arg)
}
