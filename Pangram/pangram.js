let isPangram = (sentence) => {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (let currentCharacter of sentence) {
        let num = alphabet.indexOf(currentCharacter);
        if (currentCharacter == alphabet[num]) {
            alphabet = alphabet.replace(currentCharacter, '');
        }
    }
    if (alphabet.length == 0)
        return true;
    return false;
}
module.exports = {
    isPangram
}