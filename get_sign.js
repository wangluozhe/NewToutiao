i = {url:process.argv[2]};
a = require('./sign.js');
n = a.sign;
console.log(n.call(a,i));