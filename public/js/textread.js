const fs = require('fs');

var text = fs.readFileSync("./test.txt", 'utf8');
console.log(text)