let { simpleIterable } = require('./SimpleIterable/simpleIterable.js');
let { addBigIntegers } = require('./AddBigIntegers/addBigIntegers.js');
const a = addBigIntegers(`3
539
8
201`);

console.log(a);