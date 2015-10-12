$(function () {
  $('#header-is_fixed .dropdown').on('shown.bs.dropdown', function () {
    var windowHeight = $(window).height();

    // this timeout allows for the dropdown item to fully expand before height is calculated
    setTimeout(function() { 
      var navHeight = ($('#header-is_fixed').outerHeight()); 
      if (navHeight >= windowHeight) {
        $('body').addClass('body-fixed');
        $('#header-is_fixed').css('max-height', windowHeight);
        $('#header-is_fixed').addClass('is_scrolling');
      };
    }, 250);
    $('.popover.account-popover').popover('hide');
  })

  // unfix body on dropdown close
  $('#header-is_fixed .dropdown').on('hidden.bs.dropdown', function () {
    $('body').removeClass('body-fixed');
    $('#header-is_fixed').removeClass('is_scrolling');
  })

  // unfix body on toggle nav close
  $('#header-is_fixed .navbar-collapse').on('hidden.bs.collapse', function () {
    $('body').removeClass('body-fixed');
    $('#header-is_fixed').removeClass('is_scrolling');
  })
});
