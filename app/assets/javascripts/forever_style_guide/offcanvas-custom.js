$(function () {
  $('#js-close-main-nav').on('click', function () {
    $('#js-main-nav-offcanvas').toggleClass('in');
  });
});

$(function () {
  $('.navbar-offcanvas .dropdown').on('click', function () {
    if ($(this).hasClass('open')) {
      $('.navbar-account-signed_out-btn').addClass('is_fixed_bottom');
    }
    else {
      $('.navbar-account-signed_out-btn').removeClass('is_fixed_bottom');
    }
  });
});
