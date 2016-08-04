var setup_toggle_list = function(){
    $(".list-group-toggler").click(function (e) {
        e.preventDefault();
        $(this).next('.list-group-item-child').toggleClass("is_open");
        $("i", this).toggleClass("fa-plus fa-minus");
    });

    $('.list-group-link').on('click', function(e) {
        e.preventDefault();
        var checkBox = $(this).next("input[type='checkbox']");
        checkBox.prop("checked", !checkBox.prop("checked"));
        $(this).parents('form[data-listToggle]').submit();
    });

    var activeListItems = $('.list-group-link.is_active');

    if ($(activeListItems).length) {
        $(activeListItems).append('<i class="fa fa-times"></i>');
        $(activeListItems).next("input[type='checkbox']").prop('checked', true);
        $(activeListItems).parents('.list-group-item-child').addClass('is_open');
        $(activeListItems).parents('.list-group-item').addClass('is_active');
        $(activeListItems).parents('.list-group-item')
                            .addClass('is_active')
                            .find('.list-group-toggle-trigger .fa')
                            .toggleClass("fa-plus fa-minus");
    }
};
$(document).ready(setup_toggle_list);
$(document).on('page:load', setup_toggle_list);