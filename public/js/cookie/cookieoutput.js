//------------------------------------------------------------------------------------//
//➀取得したmovielink.jsで取得したファイルIDを格納から取り出し文字列にした後に変数に入れる
//➁その後同階層にdivで動画の表示の書き方をしたHTML形式のファイルを出力する              
//以上2点の処理をします                                                    
//------------------------------------------------------------------------------------//

//Googleドライブ取得用ファイルとhtmlファイル作成用のモジュールの読み込み
const movielink = require('../dlivelink')　
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
     return fs.writeFile('compare_url.js', "var new_url = " + "\""+ FID + "\""+ "\nvar old_url" + "\n$(document).ready(function(){" + "\nold_url = $.cookie(\"old_url\");" + "\nconsole.log(\'新しいURLは\' + new_url)" + "\nconsole.log(\'古いURLは\' + old_url)" + "\nif (new_url === old_url || new_url === null) {" + "\nconsole.log(\'同じURLのため通知は表示しません\');" + "\n$(\".notification_sentence\").removeClass(\"notification_sentence_block\");" + "\n} else if(new_url != old_url) {" + "\nconsole.log(\'違うURLのため通知を表示し、old_urlを上書きします。\');" + "\n$(\".notification_sentence\").addClass(\"notification_sentence_block\");" + "\nold_url = new_url;" + "\n$.cookie(\"old_url\",old_url);" + "\nconsole.log(old_url)" + "\n}" + "\n})", function (err) {
        if (err) { throw err; }
    });

    var toString = Object.prototype.toString
    console.log((FID)); 
}


testA();
console.log("確認:アウトプットファイルです")