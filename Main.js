document.write("<p>JavaScriptファイルの読み込みテスト</p>");

// alert('アラートのメッセージ');

$(function(){
    $('.test').css('background-color', 'red');
});



$(document).on('click', '#test_button', function(){
  alert("testです");
});