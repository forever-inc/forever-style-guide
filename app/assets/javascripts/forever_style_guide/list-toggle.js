$(function () {
  $(".list-group-toggle-trigger").click(function (e) {
    e.preventDefault();
    $(this).next('.list-group-item-child').toggleClass("is-open");
    $("i",this).toggleClass("fa-plus fa-minus");
  })
});
