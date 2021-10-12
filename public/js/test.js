const movielink = require('./movielink')
const fs = require('fs');

console.log("module is:")

//console.log(moduleB)

// console.log(movielink.getSheetRequest())
async function testA() {
    let urlID = await movielink.getSheetRequest() //.pop().pop()
    console.log("a = ", urlID)
    var FID = urlID.replace("\[\[\"", "").replace("\"\]\]", "");
    console.log("b = ", FID)
     return fs.writeFile('views\\print', "\"https://drive.google.com/uc?id=" + FID + '&export=download\"', function (err) {
        if (err) { throw err; }
    });

    var toString = Object.prototype.toString
    console.log((FID)); 
}


testA();
