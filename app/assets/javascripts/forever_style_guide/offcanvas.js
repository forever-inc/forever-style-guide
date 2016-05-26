// https://github.com/iamphill/Bootstrap-Offcanvas
$(document).on('ready page:load', function() {
  (function() {
    var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

    (function($, window) {
      var Offcanvas, OffcanvasDropdown, OffcanvasTouch, transformCheck;
      OffcanvasDropdown = (function() {
        function OffcanvasDropdown(element) {
          this.element = element;
          this._clickEvent = __bind(this._clickEvent, this);
          this.element = $(this.element);
          this.nav = this.element.closest(".nav");
          this.dropdown = this.element.parent().find(".dropdown-menu");
          this.element.on('click', this._clickEvent);
        }
      })();

      window.Offcanvas = Offcanvas = (function() {
        function Offcanvas(element) {
          var t, target;
          this.element = element;
          this.bodyOverflow = __bind(this.bodyOverflow, this);
          this._sendEventsAfter = __bind(this._sendEventsAfter, this);
          this._sendEventsBefore = __bind(this._sendEventsBefore, this);
          this._documentClicked = __bind(this._documentClicked, this);
          this._close = __bind(this._close, this);
          this._open = __bind(this._open, this);
          this._clicked = __bind(this._clicked, this);
          this._navbarHeight = __bind(this._navbarHeight, this);
          target = this.element.attr('data-target') ? this.element.attr('data-target') : false;
          if (target) {
            this.target = $(target);
            if (this.target.length && !this.target.hasClass('js-offcanvas-done')) {
              this.element.addClass('js-offcanvas-has-events');
              this.location = this.target.hasClass("navbar-offcanvas-right") ? "right" : "left";
              this.target.addClass(transform ? "offcanvas-transform js-offcanvas-done" : "offcanvas-position js-offcanvas-done");
              this.target.data('offcanvas', this);
              this.element.on("click", this._clicked);
              this.target.on('transitionend', (function(_this) {
                return function() {
                  if (_this.target.is(':not(.in)')) {
                    return _this.target.height('');
                  }
                };
              })(this));
              $(document).on("click", this._documentClicked);
              if (this.target.hasClass('navbar-offcanvas-touch')) {
                t = new OffcanvasTouch(this.element, this.target, this.location, this);
              }
              this.target.find(".dropdown-toggle").each(function() {
                var d;
              });
              this.target.on('offcanvas.toggle', (function(_this) {
                return function(e) {
                  return _this._clicked(e);
                };
              })(this));
              this.target.on('offcanvas.close', (function(_this) {
                return function(e) {
                  return _this._close(e);
                };
              })(this));
              this.target.on('offcanvas.open', (function(_this) {
                return function(e) {
                  return _this._open(e);
                };
              })(this));
            }
          } else {
            console.warn('Offcanvas: `data-target` attribute must be present.');
          }
        }

        Offcanvas.prototype._navbarHeight = function() {
          if (this.target.is('.in')) {
            return this.target.height($(window).outerHeight());
          }
        };

        Offcanvas.prototype._clicked = function(e) {
          e.preventDefault();
          this._sendEventsBefore();
          $(".navbar-offcanvas").not(this.target).trigger('offcanvas.close');
          this.target.toggleClass('in');
          this.element.toggleClass('is-open');
          this._navbarHeight();
          return this.bodyOverflow();
        };

        Offcanvas.prototype._open = function(e) {
          e.preventDefault();
          if (this.target.is('.in')) {
            return;
          }
          this._sendEventsBefore();
          this.target.addClass('in');
          this.element.addClass('is-open');
          this._navbarHeight();
          return this.bodyOverflow();
        };

        Offcanvas.prototype._close = function(e) {
          e.preventDefault();
          if (this.target.is(':not(.in)')) {
            return;
          }
          this._sendEventsBefore();
          this.target.removeClass('in');
          this.element.removeClass('is-open');
          this._navbarHeight();
          return this.bodyOverflow();
        };

        Offcanvas.prototype._documentClicked = function(e) {
          var clickedEl;
          clickedEl = $(e.target);
          if (!clickedEl.hasClass('offcanvas-toggle') && clickedEl.parents('.offcanvas-toggle').length === 0 && clickedEl.parents('.navbar-offcanvas').length === 0 && !clickedEl.hasClass('navbar-offcanvas')) {
            if (this.target.hasClass('in')) {
              e.preventDefault();
              this._sendEventsBefore();
              this.target.removeClass('in');
              this.element.removeClass('is-open');
              this._navbarHeight();
              return this.bodyOverflow();
            }
          }
        };

        Offcanvas.prototype._sendEventsBefore = function() {
          if (this.target.hasClass('in')) {
            return this.target.trigger('show.bs.offcanvas');
          } else {
            return this.target.trigger('hide.bs.offcanvas');
          }
        };

        Offcanvas.prototype._sendEventsAfter = function() {
          if (this.target.hasClass('in')) {
            return this.target.trigger('shown.bs.offcanvas');
          } else {
            return this.target.trigger('hidden.bs.offcanvas');
          }
        };

        Offcanvas.prototype.bodyOverflow = function() {
          if (this.target.is('.in')) {
            $('body').addClass('offcanvas-stop-scrolling');
          } else {
            $('body').removeClass('offcanvas-stop-scrolling');
          }
          return this._sendEventsAfter();
        };

        return Offcanvas;

      })();
      transformCheck = (function(_this) {
        return function() {
          var asSupport, el, regex, translate3D;
          el = document.createElement('div');
          translate3D = "translate3d(0px, 0px, 0px)";
          regex = /translate3d\(0px, 0px, 0px\)/g;
          el.style.cssText = "-webkit-transform: " + translate3D + "; -moz-transform: " + translate3D + "; -o-transform: " + translate3D + "; transform: " + translate3D;
          asSupport = el.style.cssText.match(regex);
          return _this.transform = asSupport.length != null;
        };
      })(this);
      return $(function() {
        transformCheck();
        $('[data-toggle="offcanvas"]').each(function() {
          var oc;
          return oc = new Offcanvas($(this));
        });
        $(window).on('resize', function() {
          return $('.navbar-offcanvas.in').each(function() {
            return $(this).height('').removeClass('in');
          });
        });
        return $('.offcanvas-toggle').each(function() {
          return $(this).on('click', function(e) {
            var el, selector;
            if (!$(this).hasClass('js-offcanvas-has-events')) {
              selector = $(this).attr('data-target');
              el = $(selector);
              if (el) {
                el.height('');
                el.removeClass('in');
                return $('body').css({
                  overflow: '',
                  position: ''
                });
              }
            }
          });
        });
      });
    })(window.jQuery, window);
  }).call(this);

  $('#js-close-main-nav').on('click', function () {
    $('#js-main-nav-offcanvas').toggleClass('in');
  });

  $('.navbar-offcanvas .dropdown').on('click', function () {
    if ($(this).hasClass('open')) {
      $('.navbar-account-signed_out-btn').addClass('is_fixed_bottom');
    }
    else {
      $('.navbar-account-signed_out-btn').removeClass('is_fixed_bottom');
    }
  });
})
