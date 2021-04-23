'use strict';

module.exports = invokefor;

function invokefor(doTime = 1, fnProcess = f=> f) {
    // TODO
    return (arg) => {
        return doTime === 0 ? arg : invokefor(doTime - 1, fnProcess)(fnProcess(arg));
    }
}
