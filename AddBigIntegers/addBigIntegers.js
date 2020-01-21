const addBigIntegers = (inputString) => {
    let numberArray = inputString.split(/\r?\n/);
    return numberArray.filter((item, index) => index > 0)
        .reduce((sum, currentValue) => addString(sum, currentValue));
}
const addString = (inputString1, inputString2) => {
    firstInputList = inputString1.split('').reverse();
    secondInputList = inputString2.split('').reverse();
    let sum = '';
    let maxLengthString = Math.max(inputString1.length, inputString2.length);
    let is_carry = false;
    for (let i = 0; i < maxLengthString; i++) {
        let currentSum = 0;
        if (firstInputList[i] && secondInputList[i]) {
            currentSum = parseInt(firstInputList[i]) + parseInt(secondInputList[i]);

        } else if (firstInputList[i] && !secondInputList[i]) {
            currentSum = parseInt(firstInputList[i]);

        } else if (!firstInputList[i] && secondInputList[i]) {
            currentSum = parseInt(secondInputList[i]);
        }

        if (is_carry) {
            currentSum += 1;
            is_carry = false;
        }
        if (currentSum >= 10) {
            is_carry = true;
            sum += currentSum.toString()[1];
        } else {
            sum += currentSum.toString();
        }
    }
    sum = sum.split('').reverse().join('');

    if (is_carry) {
        sum = '1' + sum;
    }
    return sum;
}

module.exports = {
    addBigIntegers
}