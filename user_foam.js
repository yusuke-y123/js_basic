//フォームを取得
const form = document.getElementById('myFoam');
//フォーム送信時のイベント設定
form.addEventListener('submit',
  function (event) {
    event.preventDefault();
    console.log("フォームがキャンセルされました")
    const username = document.getElementById('name').value;

    if (username.trim() === "") {
      alert('名前を入力してください');
    }
  });