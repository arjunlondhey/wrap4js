const substitutionCipher = (inputString) => {
    if (typeof inputString !== "string") {
        throw new Error();
    }
    let substitutedString = "";
    for (let currentChar of inputString) {
        if ((currentChar.charCodeAt() >= 65 && currentChar.charCodeAt() <= 90) || (currentChar.charCodeAt() >= 97 &&
                currentChar.charCodeAt() <= 122)) {
            substitutedString += substitueCipherToChar(currentChar, computeCipher(currentChar));
        } else {
            substitutedString += currentChar;
        }
    }
    return substitutedString;
}

const substitueCipherToChar = (inputChar, cipher) => {
    let charCode = inputChar.charCodeAt();
    let shiftedCipher = charCode + cipher;
    if (charCode <= 90) {
        if ((shiftedCipher / 90) > 1) {
            shiftedCipher = (64 + (shiftedCipher % 90));
        }
    } else {
        if ((shiftedCipher / 122) > 1) {
            shiftedCipher = (96 + (shiftedCipher % 122));
        }
    }
    return String.fromCharCode(shiftedCipher);
}

const computeCipher = (inputChar) => {
    return (inputChar.charCodeAt() % 2 == 0) ? 6 : 4;
}

module.exports = {
    substitutionCipher
}