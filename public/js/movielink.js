// Google 公式の npm googleapis
// https://www.npmjs.com/package/googleapis
let {google} = require('googleapis');
 
// ダウンロードしたJSON の鍵ファイルの中身をコピーアンドペースト
const creds = {
  "type": "service_account",
  "project_id": "gsjs-324204",
  "private_key_id": "0e4ec90a8b6f38682b24680e7abefa23af48a933",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDiCMj8U2JUDIbc\nnSk8zXUsuvQNyfaVomfef/Z8XBe1GQWKwf1ovI6le3xA0k6/EkUrmHv1xVEK5aM+\nsGggpsVEcls8PJcCcpADJra76G15c+anv4AiNg6svojUpTxVoNqgTHeg1C/6HiNF\nN0CG806JfIKkpgUCcwawmtVMQQpQ0VrujTXBjKwKKoYzmKGAOdPxSvAywCK8QbGL\nTW/Yig6+IjGOX4cZEyTDLXTApRW8EuTVrkKfDJ/dJqlk6SMPoVh9I8FX/IwE6u9c\neP5o2y3gJIk0HmZ0/FgRLAk8dn3rq0bHd3O5x7VhmQcnVosmKWA+KHDBUOMeT3EH\nzak05kmTAgMBAAECggEAEsDy2AidEGcnq1c4zCwpzCfIxvoaROkAIDRSwZeseeCV\nFqGowk9esHkx4njwgqbj6U2R/167LiHGbRWa1hawKFEqo7FNQC08KJ7GK4oJxzlo\nCkP3wB7nEcsPNEFvY5VgfktJ46SnRGPKvlvqtServPmBJ2ME6GKdy/pUtypwTisg\nqnmoJUtwQ0+MHzbzNmTxlt+hppLxZmcJJ1oduwjE3Lm1ppHAWUBQNA1eevyTEm9g\n8/Tkea1qG6UOVkbxgfiesTvNV8Ki6h8TawZ01d4NFxqiZSdtAI/ByjgLO06Ov3d3\nXRd/MAYTyvd17a+yEQG2V7sGmtL3lOx++NaJ9//pDQKBgQDzJy9lypqlhfzJG660\nt5t7muExGhh7/PHXyCPdo3fl8jsG3vJsd/Udk/xN2BVMKHxnRipRm9derPsY6xFT\n5lHTe9ffM9hka0MJwC1SaGpErTgA8O+3L0sa3w1+IIM7JiMN6P7ROc9tubeYqjGk\n7hVbgIyQYX/drUfRjr+l4nFBzwKBgQDt+g6R/Ej6+Em7LKAzS0Jr1mQSd1RL77ax\n/BHox/xLnN3BqL7Q5rfXkZw8JgXKtLwc74sTzTxHnKLF34ADqPygb7NKwELRwqnT\nSp3tkc6sdTPh+/VDPyjUlYmbT9fDZO+8jOMqKUhBNCUXVgOyF2ouz0s2O4mgz+qy\naDMNBNPA/QKBgFQkkENibEexaTvS549EJnsMqrcKN8TYUHyClt7BDeG2BHUpO60L\nifg1WM87YotbS0mVv1lEW7A4niAOYI2vG0vbBGYKE+0ULTu3lDd7SKMBamrw9ZNn\nu07ON2YZLDCQzvqmUV/n6H8pEH61Dr7rYNqsTng8NTpqF3tOMcXe6aCDAoGATVGa\nXEoYuBnlcr/sCN5h5UGR4AIPTGDE/g0FEJmxWivMTPhzjtH3Vz3DAjPkW9je6ZPW\nnwdml2nH5PxZzlagRcwk95uB2j8iCDlNGHvwJ04pHjpLlJ63uGIhhGmrk5t+3Mb1\no6QoCq9TgcJ7juhWooDNUgCEFdCX04FRXOB9oE0CgYEAhAXG40aLm0SKgbUu7Pv1\nrKECrN6GZ0OdAr/lDieTkkl1X2CT1ZdNg3vZj1MzigrP7pvj9ulaqE/3chZ+g1tR\nFa2QXbyaiiKvmBAl3CapvhASJRgdJaC2DLc3HoAD4/01ShuWpdtf/6Hw/ArGZtzl\nU76gjDRiyIjYbhfs8kDrCUU=\n-----END PRIVATE KEY-----\n",
  "client_email": "gsheet-account@gsjs-324204.iam.gserviceaccount.com",
  "client_id": "112099395480165675840",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/gsheet-account%40gsjs-324204.iam.gserviceaccount.com"
};

 
// JSON Web Token(JWT)の設定
let jwtClient = new google.auth.JWT(
  creds.client_email,
  null,
  creds.private_key,
  ['https://www.googleapis.com/auth/spreadsheets',
   'https://www.googleapis.com/auth/drive']
);
 
// シートのURLから抽出したID = {{SheetID}}
// 仮に以下のURLの場合は ABCDEFGABCDEFGABCDEFGABCDEFGABCDEFG の部分
// https://docs.google.com/spreadsheets/d/ABCDEFGABCDEFGABCDEFGABCDEFGABCDEFG/edit#gid=0
 
const sheet = '18r426QEVLd02xq_K1itztam-89rMDgl53CuBpeyYwHM';
 
// スプレッドシートのセルの指定
let cells = 'シート3!B2';
 
// スプレッドシートAPIはv4を使う
let sheets = google.sheets('v4');
 
async function getSheetRequest(){
 
  // JSON Web Token(JWT) の認証
  let resultJwtClient;
  try {
    resultJwtClient = await jwtClient.authorize();
    // console.log(resultJwtClient);
  } catch (error) {
    console.log("Auth Error: " + error);
  }
 
  // シートを読み込む
  let responseGetSheet;
  try {
    responseGetSheet = await sheets.spreadsheets.values.get({
      auth: jwtClient,
      spreadsheetId: sheet,
      range: cells
    });
    // console.log(JSON.stringify(responseGetSheet.data.values));
    //KY --------------------------------
    //return JSON.stringify(responseGetSheet.data.values)
    return new Promise((resolve, reject) => {
      // Promiseの結果を返す
      // resolve('resolve!!');
      resolve(JSON.stringify(responseGetSheet.data.values))
      //resolve()メソッドで成功したときの結果を戻り値として返せる
  });

  } catch (error) {
    console.log('The API returned an error: ' + error);
  }
}
 
// スプレッドシートを読み込む
//getSheetRequest();

//module.exports = new Date()
exports.getSheetRequest = getSheetRequest