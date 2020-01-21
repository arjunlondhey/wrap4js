let balancedBraces = (inputString) => {
    let bracesStack = [];
    for (currentCharacter of inputString) {
        if (currentCharacter == "{" || currentCharacter == "[" || currentCharacter == "(") {
            bracesStack.push(currentCharacter);
        } else if (currentCharacter == "}" || currentCharacter == "]" || currentCharacter == ")") {
            if (bracesStack.length < 1) {
                return false;
            }
            let poppedBracket = bracesStack.pop();
            if (currentCharacter == "}" && poppedBracket != "{") {
                return false;
            } else if (currentCharacter == "]" && poppedBracket != "[") {
                return false;
            } else if (currentCharacter == ")" && poppedBracket != "(") {
                return false;
            }
        }
    }
    if (bracesStack.length > 0) {
        return false;
    }
    return true;
}

module.exports = {
    balancedBraces
}