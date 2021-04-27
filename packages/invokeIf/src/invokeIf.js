'use strict';

module.exports = invokeIf;

function invokeIf(fnCondition = f=> f, fnTrue = f=> f, fnFalse = f=> f) {
    // TODO
    return (arg) => fnCondition(arg) ? fnTrue(arg) : fnFalse(arg)
}
