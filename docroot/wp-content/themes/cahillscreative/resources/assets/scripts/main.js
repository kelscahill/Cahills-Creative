/* eslint-disable */

/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can
 * always reference jQuery with $, even when in .noConflict() mode.
 * ======================================================================== */

(function($) {

  // Use this variable to set up the common and page specific functions. If you
  // rename this variable, you will also need to rename the namespace below.
  var cc = {
    // All pages
    'common': {
      init: function() {

        // JavaScript to be fired on all pages

        // Add class if is mobile
        function isMobile() {
          if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            return true;
          }
          return false;
        }
        // Add class if is mobile
        if (isMobile()) {
          $('html').addClass(' touch');
        } else if (!isMobile()){
          $('html').addClass(' no-touch');
        }

        // check window width
        var getWidth = function() {
          var width;
          if (document.body && document.body.offsetWidth) {
            width = document.body.offsetWidth;
          }
          if (document.compatMode === 'CSS1Compat' &&
              document.documentElement &&
              document.documentElement.offsetWidth ) {
             width = document.documentElement.offsetWidth;
          }
          if (window.innerWidth) {
             width = window.innerWidth;
          }
          return width;
        };
        window.onload = function() {
          getWidth();
        };
        window.onresize = function() {
          getWidth();
        };

        // Prevent flash of unstyled content
        $(document).ready(function() {
          $('.no-fouc').removeClass('no-fouc');
        });

        $('.primary-nav--with-subnav.js-toggle > a').click(function(e) {
          e.preventDefault();
        });

        if ($('.btn--download').length) {
          $('body').addClass('margin--80');
        }

        // Show or hide the sticky secondary nav bar button
        var orgTop = 100;
        $('body').scroll(function() {
          var currentTop = $(this).scrollTop(),
              $navBar = $('.header__utility');

          // show/hide nav bar on mobile
          if (currentTop > orgTop) {
            $navBar.addClass('hide-nav');
          } else {
            $navBar.removeClass('hide-nav');
          }

          // be sure not to hide it too soon
          if (currentTop < 100) {
            $navBar.removeClass('hide-nav');
          } else {
            orgTop = currentTop;
          }

          // Add active class if scrolled past the header
          if (currentTop >= 50) {
            $('.header__utility').addClass('is-active');
          } else {
            $('.header__utility').removeClass('is-active');
          }
        });

        // Popup
        $('.popup__close').click(function(e) {
          e.preventDefault();
          $('#popup-container').addClass('popup--hide');
        });

        $('.popup .btn').click(function() {
          $('#popup-container').addClass('popup--hide');
        });

        $(window).load(function(){
          function show_popup(){
            var visits = $.cookie('visits') || 0;
            visits++;
            $.cookie('visits', visits, { expires: 7, path: '/' });

            if ($.cookie('visits') <= 1) {
              $('#popup-container').fadeIn();
              $('#popup-container').removeClass('popup--hide');
            }
          };
           window.setTimeout( show_popup, 2000 ); // 2 seconds
        });

        // Smooth scrolling on anchor clicks
        $(function() {
          $('a[href*="#"]:not([href="#"])').click(function() {
            $('.nav__primary, .nav-toggler').removeClass('main-nav-is-active');
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                $('html, body').animate({
                  scrollTop: target.offset().top - 50
                }, 1000);
                return false;
              }
            }
          });
        });

        /**
         * Slick sliders
         */
        $('.slick').slick({
          prevArrow: '<span class="icon--arrow icon--arrow-prev"></span>',
          nextArrow: '<span class="icon--arrow icon--arrow-next"></span>',
          dots: false,
          autoplay: false,
          arrows: true,
          infinite: true,
          speed: 250,
          fade: true,
          cssEase: 'linear',
          adaptiveHeight: true,
        });

        $('.slick-gallery').slick({
          prevArrow: '<span class="icon--arrow icon--arrow-prev"></span>',
          nextArrow: '<span class="icon--arrow icon--arrow-next"></span>',
          dots: true,
          autoplay: false,
          arrows: true,
          infinite: true,
          speed: 250,
          fade: true,
          cssEase: 'linear',
          adaptiveHeight: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        });

        $('.slick-favorites').slick({
          prevArrow: '<span class="icon--arrow icon--arrow-prev"></span>',
          nextArrow: '<span class="icon--arrow icon--arrow-next"></span>',
          dots: false,
          infinite: false,
          speed: 300,
          slidesToShow: 4,
          slidesToScroll: 4,
          responsive: [
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 375,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]
        });

        /**
         * Fixto
         */
        if (window.location.hash) {
        } else {
          $('.sticky').fixTo('.sticky-parent', {
            className: 'sticky-is-active',
            useNativeSticky: false,
            mind: '.header__utility',
            top: 15
          });
        }

        $('.sticky-filter').fixTo('.main', {
          className: 'sticky-is-active',
          useNativeSticky: false,
          mind: '.header__utility'
        });

        if (getWidth() >= 1200 && $(window).height() > $('.sticky-ad').height()) {
          $('.sticky-ad').fixTo('.section__main', {
            className: 'sticky-is-active',
            useNativeSticky: false,
            mind: '.header__utility',
            top: 15
          });
        }

        $('.filter-toggle').click(function() {
          $('body').toggleClass('filter-is-active');
        });

        $('.filter-clear').click(function(e) {
          e.preventDefault();
          $('.filter-item').removeClass('this-is-active');
          $('.filter-item input[type=checkbox]').attr('checked',false);
          $('.filter-item input[type=checkbox]').val('');
        });

        /**
         * Tooltip
         */
        $(document).on('click', '.tooltip-toggle', function() {
          $(this).parent().addClass('is-active');
          $('.overlay').show();
        });

        $('.tooltip-close').click(function() {
          $(this).parent().parent().removeClass('is-active');
          $('.overlay').hide();
        });

        $('.overlay').click(function() {
          $(this).hide();
          $('.tooltip').removeClass('is-active');
        });

        /**
         * Main class toggling function
         */
        var $toggled = '';
        var toggleClasses = function(element) {
          var $this = element,
              $togglePrefix = $this.data('prefix') || 'this';

          // If the element you need toggled is relative to the toggle, add the
          // .js-this class to the parent element and "this" to the data-toggled attr.
          if ($this.data('toggled') === "this") {
            $toggled = $this.parents('.js-this');
          }
          else {
            $toggled = $('.' + $this.data('toggled'));
          }

          $this.toggleClass($togglePrefix + '-is-active');
          $toggled.toggleClass($togglePrefix + '-is-active');

          // Remove a class on another element, if needed.
          if ($this.data('remove')) {
            $('.' + $this.data('remove')).removeClass($this.data('remove'));
          }
        };

        /*
         * Toggle Active Classes
         *
         * @description:
         *  toggle specific classes based on data-attr of clicked element
         *
         * @requires:
         *  'js-toggle' class and a data-attr with the element to be
         *  toggled's class name both applied to the clicked element
         *
         * @example usage:
         *  <span class="js-toggle" data-toggled="toggled-class">Toggler</span>
         *  <div class="toggled-class">This element's class will be toggled</div>
         *
         */
        $('.js-toggle').on('click', function(e) {
          e.stopPropagation();
          toggleClasses($(this));
        });

        // Toggle parent class
        $('.js-toggle-parent').on('click', function(e) {
          e.preventDefault();
          var $this = $(this);

          $this.parent().toggleClass('is-active');
        });

        // Toggle hovered classes
        $('.js-hover').on('mouseenter mouseleave', function(e) {
          e.preventDefault();
          toggleClasses($(this));
        });

        $('.js-hover-parent').on('mouseenter mouseleave', function(e) {
          e.preventDefault();
          toggleClasses($(this).parent());
        });

        $('#filter').submit(function(){
          var filter = $('#filter');
          $.ajax({
            url:filter.attr('action'),
            data:filter.serialize(), // form data
            type:filter.attr('method'), // POST
            beforeSend:function(xhr){
              filter.find('.filter-apply').text('Processing...'); // changing the button label
            },
            success:function(data){
              filter.find('.filter-apply').text('Apply filter'); // changing the button label back
              $('#response').html(data); // insert data
            }
          });
          return false;
        });

      },
      finalize: function() {
        // JavaScript to be fired on all pages, after page specific JS is fired
      },
    },
    // Home page
    'home': {
      init: function() {
        // JavaScript to be fired on the home page
      },
      finalize: function() {
        // JavaScript to be fired on the home page, after the init JS
      },
    },
  };

  // The routing fires all common scripts, followed by the page specific scripts.
  // Add additional events for more control over timing e.g. a finalize event
  var UTIL = {
    fire: function(func, funcname, args) {
      var fire;
      var namespace = cc;
      funcname = (funcname === undefined) ? 'init' : funcname;
      fire = func !== '';
      fire = fire && namespace[func];
      fire = fire && typeof namespace[func][funcname] === 'function';

      if (fire) {
        namespace[func][funcname](args);
      }
    },
    loadEvents: function() {
      // Fire common init JS
      UTIL.fire('common');

      // Fire page-specific init JS, and then finalize JS
      $.each(document.body.className.replace(/-/g, '_').split(/\s+/), function(i, classnm) {
        UTIL.fire(classnm);
        UTIL.fire(classnm, 'finalize');
      });

      // Fire common finalize JS
      UTIL.fire('common', 'finalize');
    },
  };

  // Load Events
  $(document).ready(UTIL.loadEvents);

})(jQuery); // Fully reference jQuery after this point.
