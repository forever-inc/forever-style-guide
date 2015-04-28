$(function () {
  $('[data-toggle="popover"]').popover()
});

$.fn.popover.Constructor.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
  return  placement == 'bottom' ?       { top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2 } :
          placement == 'top' ?          { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
          placement == 'left' ?         { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
          placement == 'bottomleft' ?   { top: pos.top + pos.height, left: (pos.left - actualWidth+ pos.width)  } :
          placement == 'bottomright' ?  { top: pos.top + pos.height, left: pos.left } :
          /* placement == 'right' */    { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }
};

$.fn.popover.Constructor.prototype.replaceArrow = function (delta, dimension, isHorizontal) {
  var $arrow   = this.arrow();
  var arrowWidth  = $arrow[0].offsetWidth;
  var arrowHeight = $arrow[0].offsetHeight;

  var $tip = this.tip();
  var tipWidth = $tip[0].offsetWidth;
  var tipHeight = $tip[0].offsetHeight;

  var $button = this.$element;
  var buttonWidth = $button[0].offsetWidth;
  var buttonHeight = $button[0].offsetHeight;

  switch(this.options.placement) {
    case "bottomleft":
      var centerOfButton = tipWidth - buttonWidth / 2;
      this.arrow().css('left', centerOfButton + "px");
      break;
    case "bottomright":
      var centerOfButton = buttonWidth / 2;
      this.arrow().css('left', centerOfButton + "px");
      break;
    default:
      this.arrow()
        .css(isHorizontal ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
        .css(isHorizontal ? 'top' : 'left', '')
  }
};
