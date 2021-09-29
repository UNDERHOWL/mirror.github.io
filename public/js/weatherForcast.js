//htmlのul要素（id = 'messages'）を呼び出し
var messageList = $('#messages');

//openweathermap（天気予報API）に接続
var request = new XMLHttpRequest();
var cityName = "osaka";
var owmApiKey = "33a63a89ad780cabe8eac7b33698ee49";
var owmURL = "http://api.openweathermap.org/data/2.5/weather?q=osaka,jp&units=metric&appid=33a63a89ad780cabe8eac7b33698ee49"
request.open('GET', owmURL, true);
//結果をjson型で受け取る
request.responseType = 'json';

request.onload = function () {
 var data = this.response;
 console.log(data);
 var messageElement = $("<il><p class='weather'>" + data["weather"][0]["main"] + "</p></il>");
 //HTMLに取得したデータを追加する
 messageList.append(messageElement);
};

request.send();