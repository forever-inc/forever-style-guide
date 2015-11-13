$(function () {
  $(".list-group-toggle-trigger").click(function (e) {
    e.preventDefault();
    $(this).next('.list-group-item-child').toggleClass("is_open");
    $("i", this).toggleClass("fa-plus fa-minus");
  })
});

$(function () {
  var activeListItems = $('.list-group-link-is_active');

  if ($(activeListItems).length) {
    $(activeListItems).append('<i class="fa fa-times"></i>');
    $(activeListItems).parents('.list-group-item-child').addClass('is_open');
    $(activeListItems).parents('.list-group-item').addClass('is_active');
    $(activeListItems).parents('.list-group-item').find('.list-group-toggle-trigger .fa').toggleClass("fa-plus fa-minus");
  }
});
