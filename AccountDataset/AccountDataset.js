const dataset = require('./dataset.json');

const getObjectProperties = (object, key) => {
    return [...Object.getOwnPropertyDescriptor(object, key).value];
}
const hundredThousandairs = () => {
    return getObjectProperties(dataset, 'bankBalances').filter(val => val.amount > 100000);
}

const datasetWithRoundedDollar = () => {
    return getObjectProperties(dataset, 'bankBalances').map(obj => {
        let modifyObject = obj;
        modifyObject.rounded = Math.round(obj.amount);
        return modifyObject
    });

}

const sumOfBankBalances = () => {
    return getObjectProperties(dataset, 'bankBalances').reduce((acc, current) => { acc += parseFloat(current.amount); return acc; }, 0).toFixed(2);
}

const sumOfInterests = () => {
    let requiredStateCodes = ['WI', 'IL', 'WY', 'OH', 'GA', 'DE'];
    return getObjectProperties(dataset, 'bankBalances').reduce((acc, current) => {
        requiredStateCodes.includes(current.state) ? acc += (parseFloat(current.amount) + parseFloat(current.amount) * 0.189) : acc += 0;
        return acc;
    }, 0).toFixed(2);
}

const higherStateSums = () => {
    let hashTable = new Set();
    let sum = 0;
    getObjectProperties(dataset, 'bankBalances')
        .forEach((element) => {
            hashTable[element.state]
                ? hashTable[element.state] += parseFloat(element.amount)
                : hashTable[element.state] = parseFloat(element.amount)
        });

    return Object.values(hashTable).reduce((acc, current) => { current > "1000000" ? acc += current : acc; return acc });
}

module.exports = { hundredThousandairs, datasetWithRoundedDollar, sumOfBankBalances, sumOfInterests, higherStateSums }