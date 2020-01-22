const cacheFunction = (fn) => {
    let cachedResults = {};
    return (input) => {
        if (cachedResults[input])
            return cachedResults[input];
        let computedValue = fn(input);
        cachedResults[input] = computedValue;
        return computedValue;
    };
}

module.exports = {
    cacheFunction
}