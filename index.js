const { cacheFunction } = require('./CacheFunction/cacheFunction.js');

const foo = x => (x * x);
const cachedFunction = cacheFunction(foo);
console.log(cachedFunction(5));
console.log(cachedFunction(5));
console.log(cachedFunction(true));
console.log(cachedFunction(true));
console.log(cachedFunction(5));
let {
    isomorphic
} = require('./Isomorphic/isomorphic.js');

let {
    balancedBraces
} = require('./BalancedBraces/balancedBraces.js');
let {
    updateInventory
} = require('./UpdateInventory/updateInventory.js');

console.log(updateInventory([
    [21, 'Bowling Ball'],
    [2, 'Dirty Sock'],
    [1, 'Hair Pin'],
    [5, 'Microphone'],
], [
    [2, 'Hair Pin'],
    [3, 'Half-Eaten Apple'],
    [67, 'Bowling Ball'],
    [7, 'Toothpaste'],
]));
