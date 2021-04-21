'use strict';

module.exports = invokewhile;

function invokewhile(fnCondition = () => false, fnProcess = f => f) {
    return (arg) => {
        return fnCondition(arg) ? invokewhile(fnCondition, fnProcess)(fnProcess(arg)) : arg;
    }
}
