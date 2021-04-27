'use strict';

module.exports = invokeswitch;

function invokeswitch(fnCondition = f => f,  fnCaseValueMap = new Map()) {
    const currentMap = new Map(fnCaseValueMap);
    return (arg) => {
        let currentfrag = fnCondition(arg);
        return (currentMap.has(currentfrag)) ? currentMap.get(currentfrag)(arg) : arg
    }
}
