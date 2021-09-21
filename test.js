const movielink = require('./movielink')
console.log("module is:")

//console.log(moduleB)

// console.log(movielink.getSheetRequest())
async function testA() {
    let urlID = await movielink.getSheetRequest() //.pop().pop()
    console.log("a = ", urlID)
    var FID = urlID.replace("\[\[\"", "").replace("\"\]\]", "");
    console.log("b = ", FID)
    var toString = Object.prototype.toString
    console.log("type=", toString.call(urlID)); 
}

testA();