function include(scriptUrl) {
    document.write('<script src="' + scriptUrl + '"></script>');
}

function isIE() {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
};

/* cookie.JS
 ========================================================*/
include('js/jquery.cookie.js');

/* Easing library
 ========================================================*/
include('js/jquery.easing.1.3.js');

/* Progress Bars
 ========================================================*/

 var bar1 = new ProgressBar.SemiCircle('#progressbar1', {
   strokeWidth: 6,
   color: '#FFEA82',
   trailColor: '#eee',
   trailWidth: 1,
   easing: 'easeInOut',
   duration: 1400,
   svgStyle: null,
   text: {
     value: '',
     alignToBottom: false
   },
   from: {color: '#FFEA82'},
   to: {color: '#4280c9'},
   // Set default step function for all animate calls
   step: (state, bar1) => {
     bar1.path.setAttribute('stroke', state.color);
     var value = Math.round(bar1.value() * 100);

     bar1.setText('5m29');


     bar1.text.style.color = state.color;
   }
 });
 bar1.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
 bar1.text.style.fontSize = '2rem';

 bar1.animate(0.7);  // Number from 0.0 to 1.0

 var bar2 = new ProgressBar.SemiCircle('#progressbar2', {
   strokeWidth: 6,
   color: '#FFEA82',
   trailColor: '#eee',
   trailWidth: 1,
   easing: 'easeInOut',
   duration: 1400,
   svgStyle: null,
   text: {
     value: '',
     alignToBottom: false
   },
   from: {color: '#FFEA82'},
   to: {color: '#4280c9'},
   // Set default step function for all animate calls
   step: (state, bar2) => {
     bar2.path.setAttribute('stroke', state.color);
     var value = Math.round(bar1.value() * 100);

     bar2.setText('1,61s');


     bar2.text.style.color = state.color;
   }
 });
 bar2.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
 bar2.text.style.fontSize = '2rem';

 bar2.animate(0.7);  // Number from 0.0 to 1.0

 var bar3 = new ProgressBar.SemiCircle('#progressbar3', {
   strokeWidth: 6,
   color: '#FFEA82',
   trailColor: '#eee',
   trailWidth: 1,
   easing: 'easeInOut',
   duration: 1400,
   svgStyle: null,
   text: {
     value: '',
     alignToBottom: false
   },
   from: {color: '#FFEA82'},
   to: {color: '#4280c9'},
   // Set default step function for all animate calls
   step: (state, bar3) => {
     bar3.path.setAttribute('stroke', state.color);
     var value = Math.round(bar1.value() * 100);

     bar3.setText('100%');


     bar3.text.style.color = state.color;
   }
 });
 bar3.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
 bar3.text.style.fontSize = '2rem';

 bar3.animate(1.0);  // Number from 0.0 to 1.0



/* ToTop
 ========================================================*/
;
(function($) {
    var o = $('html');
    if (o.hasClass('desktop')) {
        include('js/jquery.ui.totop.js');

        $(document).ready(function() {
            $().UItoTop({
                easingType: 'easeOutQuart'
            });
        });
    }
})(jQuery);

document.querySelector('#toBottom').scrollIntoView({ 
  behavior: 'smooth' 
});

$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});

/* EqualHeights
 ========================================================*/
;
(function($) {
    var o = $('[data-equal-group]');
    if (o.length > 0) {
        include('js/jquery.equalheights.js');
    }
})(jQuery);

/* SMOOTH SCROLLIG
 ========================================================*/
;
(function($) {
    var o = $('html');
    if (o.hasClass('desktop')) {
        include('js/jquery.mousewheel.min.js');
        include('js/jquery.simplr.smoothscroll.min.js');

        $(document).ready(function() {
            $.srSmoothscroll({
                step: 150,
                speed: 800
            });
        });
    }
})(jQuery);

/* Copyright Year
 ========================================================*/
var currentYear = (new Date).getFullYear();
$(document).ready(function() {
    $("#copyright-year").text((new Date).getFullYear());
});

/* WOW
 ========================================================*/
;
(function($) {
    var o = $('html');

    if ((navigator.userAgent.toLowerCase().indexOf('msie') == -1) || (isIE() && isIE() > 9)) {
        if (o.hasClass('desktop')) {
            include('js/wow.js');

            $(document).ready(function() {
                new WOW().init();
            });
        }
    }
})(jQuery);

/* Unveil
 ========================================================*/
;
(function($) {
    var o = $('.lazy-img img');

    if (o.length > 0) {
        include('js/jquery.unveil.js');

        $(document).ready(function() {
            $(o).unveil(0, function() {
                if (isIE() && isIE() < 9) {
                    $(this).load().addClass("lazy-loaded");
                } else {
                    $(this).load(function() {
                        $(this).addClass("lazy-loaded");
                    })
                }
            });
        });

        $(window).load(function() {
            $(window).trigger('lookup.unveil');
        });

    }
})(jQuery);

/* Orientation tablet fix
 ========================================================*/
$(function() {
    // IPad/IPhone
    var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
        ua = navigator.userAgent,

        gestureStart = function() {
            viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6, initial-scale=1.0";
        },

        scaleFix = function() {
            if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
                viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
                document.addEventListener("gesturestart", gestureStart, false);
            }
        };

    scaleFix();
    // Menu Android
    if (window.orientation != undefined) {
        var regM = /ipod|ipad|iphone/gi,
            result = ua.match(regM);
        if (!result) {
            $('.sf-menus li').each(function() {
                if ($(">ul", this)[0]) {
                    $(">a", this).toggle(
                        function() {
                            return false;
                        },
                        function() {
                            window.location.href = $(this).attr("href");
                        }
                    );
                }
            })
        }
    }
});
var ua = navigator.userAgent.toLocaleLowerCase(),
    regV = /ipod|ipad|iphone/gi,
    result = ua.match(regV),
    userScale = "";
if (!result) {
    userScale = ",user-scalable=0"
}
document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0' + userScale + '">')

/* Subscribe Form
========================================================*/
;
(function($) {
    var o = $('#subscribe-form');
    if (o.length > 0) {
        include('js/sForm.js');
    }
})(jQuery);

/* Booking Form
 ========================================================*/
;
(function($) {
    var o = $('#bookingForm');
    if (o.length > 0) {
        include('js/booking/booking.js');
        include('js/booking/jquery-ui-1.10.3.custom.min.js');
        include('js/booking/jquery.fancyform.js');
        include('js/booking/jquery.placeholder.js');
        include('js/booking/regula.js');
        $(document).ready(function() {
            o.bookingForm({
                ownerEmail: '#'
            });
        });
    }
})(jQuery);

/* FancyBox
 ========================================================*/
;
(function($) {
    var o = $('.thumb');
    if (o.length > 0) {
        include('js/jquery.fancybox.js');
        include('js/jquery.fancybox-media.js');
        $(document).ready(function() {
            o.fancybox();
        });
    }
})(jQuery);

/* VIDE
 ========================================================*/
;
(function($) {
    var o = $('.vide');
    if (o.length > 0) {
        include('js/jquery.vide.js');


    }
})(jQuery);

/* Owl Carousel
 ========================================================*/
;
(function($) {
    var o = $('.owl-carousel');
    if (o.length > 0) {
        include('js/owl.carousel.min.js');
        $(document).ready(function() {
            o.owlCarousel({
                margin: 30,
                autoplay: true,
                loop: true,
                items: 3,
                smartSpeed: 450,
                dots: true,
                dotsEach: 1,
                nav: false
            });
        });
    }
})(jQuery);

/* Parallax
 =============================================*/
;
(function($) {
    include('js/jquery.rd-parallax.js');
})(jQuery);
