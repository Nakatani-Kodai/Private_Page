
$(function() {
  $("#header").load("Header.html");
});

$(function(){
    $('.test').css('background-color', 'red');
});

$(document).on('click', '#test_button', function(){
  alert("testです");
});
