$(function () {
  $('#js-close-main-nav').on('click', function () {
    console.log('hey ya');
    $('#js-main-nav-offcanvas').toggleClass('in');
  });

  $('#js-close-account-nav').on('click', function () {
    $("#js-account-nav-offcanvas").toggleClass('in');
  });
});
