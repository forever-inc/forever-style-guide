$(function () {
  $('.dropdown-toggle').dropdown();

  $(document).on('click', '.navbar-dropdown .dropdown-menu', function(e) {
    e.stopPropagation()
  });
});


