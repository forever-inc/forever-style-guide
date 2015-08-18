$(function () {
  $('.dropdown-toggle').dropdown();

  $(document).on('click', '.navbar-dropdown .dropdown-menu', function(e) {
    e.stopPropagation()
  });

  //$('.dropdown').on('mouseover', function(e) {
  //  var $this = $(this);
  //  $this.trigger('show.bs.dropdown');
  //});
  //
  //$('.dropdown').on('mouseout', function(e) {
  //  //var $this = $(this);
  //  //$this.trigger('hide.bs.dropdown');
  //});
  //
  //// ADD SLIDEDOWN ANIMATION TO DROPDOWN //
  //$('.dropdown').on('show.bs.dropdown', function (e) {
  //  $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
  //});
  //
  //// ADD SLIDEUP ANIMATION TO DROPDOWN //
  //$('.dropdown').on('hide.bs.dropdown', function (e) {
  //  $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
  //});

});


