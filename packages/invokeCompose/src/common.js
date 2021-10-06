export default function invokeCompose(...fns) {
    if (fns.length === 0 ) {
        return (arg) => arg;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    // TODO
    return (arg) => {
        return fns.reduce((pre, fn) => fn(pre), arg)
    }
}
