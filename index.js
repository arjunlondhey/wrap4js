let {
    isomorphic
} = require('./Isomorphic/isomorphic.js');

let {
    balancedBraces
} = require('./BalancedBraces/balancedBraces.js');

console.log(balancedBraces('for(i=0;i<x[i];i++){if(x[i]<10){b++;}else{b+=10;}'));