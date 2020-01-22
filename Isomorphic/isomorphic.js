let isomorphic = ([strA, strB]) => {
    if (!validateIsomorphicInput(strA, strB))
        return false;
    return (JSON.stringify(getCharOccurenceCount(strA)) == JSON.stringify(getCharOccurenceCount(strB)) ? true : false);
}

let validateIsomorphicInput = (strA, strB) => {
    if (typeof strA != "string" || typeof strB != "string")
        return false;
    if (strA.length != strB.length)
        return false;
    return true;
}

let getCharOccurenceCount = (inputString) => {
    let charMap = {};
    [...inputString].forEach((presentChar) => {
        charMap[presentChar] ? charMap[presentChar] += 1 : charMap[presentChar] = 1;
    });
    return Object.values(charMap).sort();
}

module.exports = {
    isomorphic
}