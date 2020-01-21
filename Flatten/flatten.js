const flatten = (arr, depth = 1) => {
    if (arr.length < 1 || depth < 1)
        return arr;
    return flattenHelper(arr, depth);
}

const flattenHelper = (arr, depth) => {
    for (let i = 0; i < depth; i++) {
        if (Array.isArray(arr))
            arr = [].concat(...arr);
    }
    return arr;
}
module.exports = {
    flatten
}