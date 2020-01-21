const convertIntToRoman = (num) => {
    if (num <= 0) return '0';
    if (typeof num !== 'number') return '0';
    let romanToIntMap = {
            M: 1000,
            CM: 900,
            D: 500,
            CD: 400,
            C: 100,
            XC: 90,
            L: 50,
            XL: 40,
            X: 10,
            IX: 9,
            V: 5,
            IV: 4,
            I: 1
        },
        roman = '';

    for (let i of Object.keys(romanToIntMap)) {
        let div = Math.floor(num / romanToIntMap[i]);
        num -= div * romanToIntMap[i];
        roman += i.repeat(div);
    }
    return roman;
}

module.exports = {
    convertIntToRoman
}