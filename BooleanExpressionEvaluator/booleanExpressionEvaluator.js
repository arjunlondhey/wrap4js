let booleanExpressionEvaluator = (inputString) => {
    if (typeof inputString != "string") {
        throw new Error();
    }
    inputArray = inputString.replace(/true/g, "1").replace(/false/g, "0");
    let valueStack = [];
    let opStack = [];
    for (inputValue of inputArray) {
        if (inputValue == " ")
            continue;
        if (inputValue == "1" || inputValue == "0") {
            valueStack.push((inputValue == '1'));
        } else if (inputValue == "&" || inputValue == "|" || inputValue == "!" ||
            inputValue == "^" || inputValue == "(") {
            opStack.push(inputValue);
        } else if (inputValue == ")") {
            if (!evaluateStack(opStack, valueStack)("(")) {
                throw new Error();
            }
        } else {
            throw new Error();
        }
    }
    if (opStack.length > 0) {
        if (!evaluateStack(opStack, valueStack)("")) {
            throw new Error();
        }
    }
    return valueStack[0] ? true : false;
}

const evaluateStack = (opStack, valueStack) => {
    return (inputString) => {
        while (opStack.length > 0 && opStack[opStack.length - 1] != inputString) {
            let opElement = opStack.pop();
            if (isStackEmpty(valueStack)) {
                return false;
            }
            let valElement1 = valueStack.pop();
            if (opElement == "&") {
                if (isStackEmpty(valueStack)) {
                    return false;
                }
                let valElement2 = valueStack.pop();
                valueStack.push((valElement1 & valElement2));
            } else if (opElement == "|") {
                if (isStackEmpty(valueStack)) {
                    return false;
                }
                let valElement2 = valueStack.pop();
                valueStack.push((valElement1 | valElement2));
            } else if (opElement == "^") {
                if (isStackEmpty(valueStack)) {
                    return false;
                }
                let valElement2 = valueStack.pop();
                valueStack.push((valElement1 ^ valElement2));
            } else if (opElement == "!") {
                valueStack.push(!valElement1);
            }
        }
        if (opStack[opStack.length - 1] == inputString) {
            opStack.pop();
        }
        return true;
    }
}
const isStackEmpty = (inputStack) => {
    return inputStack.length > 0 ? false : true;
}

module.exports = {
    booleanExpressionEvaluator
}