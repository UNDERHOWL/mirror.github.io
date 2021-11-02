//------------------------------------------------------------------------------------//
//➀取得したmovielink.jsで取得したファイルIDを格納から取り出し文字列にした後に変数に入れる
//➁その後同階層にdivで動画の表示の書き方をしたHTML形式のファイルを出力する              
//以上2点の処理をします                                                    
//------------------------------------------------------------------------------------//

//Googleドライブ取得用ファイルとhtmlファイル作成用のモジュールの読み込み
const movielink = require('./dlivelink')　
const fs = require('fs');

console.log("module is:")

//console.log(moduleB)

// console.log(movielink.getSheetRequest())

//movielink.jsからファイルIDの取得が完了したらHTML形式のファイルを出力する関数
async function testA() {
    let urlID = await movielink.getSheetRequest() //.pop().pop()
    console.log("a = ", urlID)
    var FID = urlID.replace("\[\[\"", "").replace("\"\]\]", "");
    console.log("b = ", FID)
     return fs.writeFile('movieurl.html', '<div class="youtube">' +'\n<video'+'\nclass=\"c-video__embed\"'+'\nsrc='+ "\"https://drive.google.com/uc?id=" + FID + '&export=download\"' +'width=\"800px\"'
    + 'height=\"450px\"'+'\nautoplay'+'\nplaysinline'+'></video>'+'</div>', function (err) {
        if (err) { throw err; }
    });

    var toString = Object.prototype.toString
    console.log((FID)); 
}


testA();
console.log("確認:動画ID更新ファイルです")