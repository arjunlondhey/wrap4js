const sumFibs = (num) => {
    if (num < 0) return -1;
    if (num === 0)
        return 1;
    if (num === 1)
        return 2;

    const arrFib = [1, 1];
    let nextFib = 0;
    let sum = 2;

    while ((nextFib = arrFib[0] + arrFib[1]) <= num) {
        sum += nextFib % 2 != 0 ? (nextFib) : 0;
        arrFib.unshift(nextFib);
    }
    return sum;
}

module.exports = {
    sumFibs
}