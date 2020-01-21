const filterArrayWithoutQueryElements = (queryArray, inputArray) => {
    if (!Array.isArray(inputArray) || !Array.isArray(queryArray))
        throw new Error('array required');
    return inputArray.filter((currentindex) => {
        return queryArray.includes(currentindex) ? false : true;
    });
}

module.exports = {
    filterArrayWithoutQueryElements
}