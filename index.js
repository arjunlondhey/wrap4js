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