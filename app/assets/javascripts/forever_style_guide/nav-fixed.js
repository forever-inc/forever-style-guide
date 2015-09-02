$(function () {
  $('#header-is_fixed .dropdown').on('shown.bs.dropdown', function () {
    var windowHeight = $(window).height();

    setTimeout(function() { 
      var navHeight = ($('#header-is_fixed').outerHeight()); 
      if (navHeight >= windowHeight) {
        $('body').addClass('body-fixed');
        $('#header-is_fixed').css('max-height', windowHeight);
      };
    }, 250);
  })
  $('#header-is_fixed .dropdown').on('hidden.bs.dropdown', function () {
      $('body').removeClass('body-fixed');
  })
  $('#header-is_fixed #collapse-nav').on('hidden.bs.collapse', function () {
    $('body').removeClass('body-fixed');
  })
});
