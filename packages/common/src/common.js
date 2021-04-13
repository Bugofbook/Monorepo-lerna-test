function compose(...fns) {
    // TODO
    return (arg) => {
        return fns.reduce((pre, fn) => fn(pre), arg)
    }
}

module.exports = compose