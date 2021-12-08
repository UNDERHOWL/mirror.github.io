//------------------------------------------------------------------------------------//
//➀取得したmovielink.jsで取得したファイルIDを格納から取り出し文字列にした後に変数に入れる
//➁その後同階層にdivで動画の表示の書き方をしたHTML形式のファイルを出力する              
//以上2点の処理をします                                                    
//------------------------------------------------------------------------------------//

//Googleドライブ取得用ファイルとhtmlファイル作成用のモジュールの読み込み
const movielink = require('./Daydlivelink')　
const fs = require('fs');

console.log("module is:")

//console.log(moduleB)

// console.log(movielink.getSheetRequest())

//movielink.jsからファイルIDの取得が完了したらHTML形式のファイルを出力する関数
async function testA() {
    let urlID = await movielink.getSheetRequest() //.pop().pop()
    console.log("出力a = ", urlID)
    var FID = urlID.replace("\[\[\"", "").replace("\"\]\]", "");
    console.log("出力b = ", FID)
     return fs.writeFile('Dayword.html', "\<div class=\"notification_calender_dummy\"\>" + "\n\<div class=\"notification_dummy\"\>" + "\n\<a class=\"notification_sentence_dummy\" href=\"movie_page.html\"\>"　+　"\n昨日は【"　+　FID　+　"】があったみたいです。話を聞いてみませんか？" + "\n\<\/a\>" + "\n\<\/div\>" + "\n\<\/div\>" + "\<div class=\"notification_calender\"\>" + "\n\<div class=\"notification\"\>" + "\n\<a class=\"notification_sentence\" href=\"movie_page.html\"\>"　+　"\n昨日は【"　+　FID　+　"】があったみたいです。話を聞いてみませんか？" + "\n\<\/a\>" + "\n\<\/div\>" + "\n\<\/div\>", function (err) {
        if (err) { throw err; }
    });

    var toString = Object.prototype.toString
    console.log((FID)); 
}


testA();
console.log("確認:アウトプットファイルです")