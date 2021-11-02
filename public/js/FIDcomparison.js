const fs = require('fs');
const movielink = require('./dlivelink')
var text1 = fs.readFileSync("./FIDtxtsave.txt", 'utf8');
var text2 = fs.readFileSync("./FIDtxtsave2.txt", 'utf8');


console.log(text1);
console.log(text2);

var x = text1;
var y = text2;
if(x != y){
    const tuuti = require('./tuuti.js')
    console.log("module is:")
    async function testA() {
        let urlID = await movielink.getSheetRequest() //.pop().pop()
        console.log("比較a = ", urlID)
        var FID = urlID.replace("\[\[\"", "").replace("\"\]\]", "");
        console.log("比較b = ", FID)
         return fs.writeFile('FIDtxtsave2.txt', FID, function (err) {
            if (err) { throw err; }
        });
    }
    
    
    testA();
    console.log(text2);
} 
console.log("確認:比較ファイルです")
