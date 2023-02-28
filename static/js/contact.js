$(function () {
  // textarea栏计数器
  $('#message').bind('input', function () {
    $('.count-num').text($(this).val().length);
    console.log(this);
  })
});