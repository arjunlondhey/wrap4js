const { cacheFunction } = require('./CacheFunction/cacheFunction.js');

const foo = x => (x * x);
const cachedFunction = cacheFunction(foo);
console.log(cachedFunction(5));
console.log(cachedFunction(5));
console.log(cachedFunction(true));
console.log(cachedFunction(true));
console.log(cachedFunction(5));