const {
    init
} = require('./Memoize/memoize');

const {
    convertIntToRoman
} = require('./IntToRoman/intToRoman.js');

const {
    flatten
} = require('./Flatten/flatten.js');
//init();
//convertIntToRoman(19);
flatten([1, 2, [3, 4, [5, 6]]], 2);
