// an 'accounPopover' namespace for additional popover functionality.
var accountPopover = (function () {
  /**
    Apply 'danger', 'warning' classes to the
    popover's progress bar and upgrade button.

    Example

    ```javascript
      _addStateClasses($popoverContainer, 'danger');
    ```

    @private
  */
  var _addStateClasses = function (container, state) {
    container.find(".account-popover-link-text").addClass("account-popover-link-" + state);
    container.find(".account-popover-storage-upgrade .btn").addClass("btn-" + state);
    container.find(".progress-bar").addClass("progress-bar-" + state);
  };

  /**
    Removes the 'danger' and 'warning' classes to
    the popover's progress bar and upgrade button.

    Example

    ```javascript
      _resetClasses($popoverContainer);
    ```

    @private
  */
  var _resetClasses = function (container) {
    container.find(".account-popover-link-danger").removeClass("account-popover-link-danger");
    container.find(".account-popover-link-warning").removeClass("account-popover-link-warning");
    container.find(".account-popover-storage-upgrade .btn").removeClass("btn-danger btn-warning");
    container.find(".progress-bar").removeClass("progress-bar-danger progress-bar-warning");
  };

  /**
    Sets the user's storage data in the account
    popover.

    Example

    ```javascript
      var storage = {
        membership_type: "Intro Member",
        percent_used: "35%",
        total_storage: "3GB"
      };

      accountPopover.setAccountStorage(storage)
    ```

    @public
  */
  var setAccountStorage = function (storage) {
    if (!storage.membership_type || !storage.percent_used || !storage.total_storage) {
      return console.warn("argument storage must contain the following keys: 'membership_type', 'percent_used', 'total_storage'");
    }

    var container = $(".account-popover-storage");
    var percentAsInt = parseInt(storage.percent_used);

    _resetClasses(container);

    container.find(".account-popover-membership_type").html(storage.membership_type);
    container.find(".account-popover-percent_used, .progress-label").html(storage.percent_used);
    container.find(".account-popover-total_storage").html(storage.total_storage);
    container.find(".progress-bar").attr("style", "width: " + storage.percent_used + ";");

    if (percentAsInt >= 100) {
      _addStateClasses(container, "danger");
      container.find(".account-popover-storage-upgrade").show();
    } else if (percentAsInt >= 90) {
      _addStateClasses(container, "warning");
    } else {
      container.find(".account-popover-storage-upgrade").hide();
    }
  };

  return {
    setAccountStorage: setAccountStorage
  };
})();

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
