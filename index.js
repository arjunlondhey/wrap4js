let { simpleIterable } = require('./SimpleIterable/simpleIterable.js');

const iterable = simpleIterable();
const iterator = iterable[Symbol.iterator]();
