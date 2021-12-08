//-------------------------------------------
//サーバー用ファイル
//node app.jsで起動後http://localhost:8080
//でアクセス可能
//--------------------------------------------

// express モジュールのインスタンス作成
const express = require('express');
const app = express();
var fs = require('fs');

// ビューエンジンをejsにセットする
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// express に ejs のテンプレートエンジンを設定した場合
// /views フォルダが index.ejs のデフォルトになります

app.get("/aaa", function(req, res, next){
  res.render("index.ejs", {fs: fs});
});
// パス指定用モジュール
const path = require('path');

// 8080番ポートで待ちうける
app.listen(8080, () => {
  console.log('Running at Port 8080...');
});

// 静的ファイルのルーティング
app.use(express.static(path.join(__dirname, 'public')));

// その他のリクエストに対する404エラー
app.use((req, res) => {
  res.sendStatus(404);
}); 