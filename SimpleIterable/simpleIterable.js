let simpleIterable = (max) => {
    return {
        [Symbol.iterator]: function () {
            let i = 1;
            return {
                next: function () {

                    return i <= 5 ? { value: i++, done: false } : { value: undefined, done: true };
                }
            }
        }
    }
}

module.exports = {
    simpleIterable
}