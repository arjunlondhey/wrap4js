const centerText = (inputText, maxChars) => {
    let splittedText = splitTextByMaxChars(inputText, maxChars);
    return splittedText.map((text) => centerTextByMaxChars(text, maxChars));
}

const splitTextByMaxChars = (inputText, maxChars) => {
    let wordList = inputText.split(' ');
    let sentence = "";
    let text = [];
    for (word of wordList) {
        if ((maxChars - sentence.length) > word.length) {
            sentence += word + " ";
        } else if ((maxChars - sentence.length) == word.length) {
            sentence += word;
        } else {
            text.push(sentence);
            sentence = word + " ";
        }
    }
    sentence.length > 0 ? text.push(sentence) : "";
    return text;
}

const centerTextByMaxChars = (inputText, maxChars) => {
    let centeredText = "";
    if (inputText.length < maxChars) {
        let spacesRequired = maxChars - inputText.length;
        let spacesRequiredLeft = spacesRequired > 1 ? Math.ceil(spacesRequired / 2) : spacesRequired;
        let spacesRequiredRight = maxChars - (inputText.length + spacesRequiredLeft);
        centeredText = " ".repeat(spacesRequiredLeft) + inputText + " ".repeat(spacesRequiredRight);
    } else {
        centeredText = inputText;
    }
    return centeredText;
}


module.exports = { centerText }