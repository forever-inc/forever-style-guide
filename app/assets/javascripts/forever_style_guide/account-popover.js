// Trigger account popovers
$(function () {
  $('[data-toggle="popover-desktop"]').popover({
    html: true,
    content: function () {
      return $('.account-popover').html();
    },
    template: '<div class="popover account-popover hidden-sm hidden-xs"><div class="arrow"></div><div class="popover-content"></div></div>',
    container: '.account-popover-container',
    placement: 'bottom'
  })
    $('[data-toggle="popover-mobile"]').popover({
    html: true,
    content: function () {
      return $('.account-popover').html();
    },
    template: '<div class="popover account-popover account-popover-mobile hidden-md hidden-lg"><div class="arrow"></div><div class="popover-content"></div></div>',
    container: '.account-popover-container-mobile',
    placement: 'bottom'
  })
});

// Compare height of viewport against height of header on popover expansion
$(function () {
  $('.account-popover-trigger').on('shown.bs.popover', function () {
    var windowHeight = $(window).height();

    $(function() { 
      var navHeight = ($('#header-is_fixed').outerHeight()); 
      if (navHeight >= windowHeight) {
        $('body').addClass('body-fixed');
        $('#header-is_fixed').css('max-height', windowHeight);
        $('#header-is_fixed').addClass('is_scrolling');
      };
    })
  })
  // unfix body on popover close
  $('.account-popover-trigger').on('hidden.bs.popover', function () {
    $('body').removeClass('body-fixed');
    $('#header-is_fixed').removeClass('is_scrolling');
  })

  // hide account popover on toggle nav close
  $('#header-is_fixed .navbar-collapse').on('hide.bs.collapse', function () {
    $('.popover.account-popover').popover('hide');
  })
});
