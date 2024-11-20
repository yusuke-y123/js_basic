//ユーザ入力の時に、promptを使う。
// strで持ってるので、数値を使う時は、キャストが必要

var result = prompt("ダイアログに入力してください");

result = Number(result);

if (0 > result || result >= 120) {
  console.log("無効な年齢です");
} else if (result >= 18) {
  console.log("大人です");
} else {
  console.log("未成年です")
}
