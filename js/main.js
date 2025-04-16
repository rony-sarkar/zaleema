/**
*
* ---------------------------------------------------------------------------
*
* Template Name: Zaleema - Creative App Landing Responsive HTML5 Templates
* Template URL:	http://coderboys.net/zaleema
* Author : themewarehouse
* Description: This is a creative App Landing Responsive HTML5 Templates.
* Version : 1.3
*
* --------------------------------------------------------------------------- 
*
*/

(function ($) {
    'use strict';

    $(document).on('ready', function () {

        /*  ======================================
                Scroll Menu Background Color 
            ====================================== */
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 50) {
                $('.header-area').addClass('fixed-menu');
            } else {
                $('.header-area').removeClass('fixed-menu');
            }
        });

        /*  ======================================
                Smooth scroll
            ====================================== */
        $('a.nav-link').on('click', function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top
            }, 1000);
            e.preventDefault();
        });

        /*  ======================================
                Main % Review Slider
            ====================================== */
        var slider_pulse = $(".slider-wraper, .review-slide");
        slider_pulse.owlCarousel({
            navText: ['<i class="fa fa-arrow-circle-o-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>'],
            loop: true,
            nav: true,
            responsiveClass: true,
            autoplayTimeout: 4000,
            smartSpeed: 500,
            autoplay: true,
            mouseDrag: true,
            touchDrag: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });

        /*  ======================================
                Screen Slider
            ====================================== */
        var screen_slide = $(".screen-carousel");
        screen_slide.owlCarousel({
            loop: true,
            nav: false,
            autoplay: true,
            mouseDrag: true,
            margin: 10,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        });

        /*  ======================================
				slider-brand Owl Carousel 
            ====================================== */
        var slider_brand = $(".partners-brand");
        slider_brand.owlCarousel({
            loop: true,
            nav: false,
            autoplay: true,
            mouseDrag: true,
            margin: 10,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        });

        /*  ======================================
				Parallax
            ====================================== */
        $('.parallax').jarallax({
            speed: 0.5
        });

        /*  ======================================
                wmBox for popup video
            ====================================== */
        $.wmBox();

        /*  ======================================
				waypoints
            ====================================== */
        var $progress = $('.counter');
        $progress.waypoint(function () {
            //counterUp            
            var CounterUp = $('.counter');

            CounterUp.each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                }, {
                    duration: 2500,
                    easing: 'linear',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        //alert('finished');
                    }
                });
            });
        }, {
            offset: '100%'
        });

        /*  ======================================
				Accordion
			====================================== */
        $(function () {
            $("#accordion")
                .accordion({
                    header: "> div > h3"
                })
                .sortable({
                    axis: "y",
                    handle: "h3",
                    stop: function (event, ui) {
                        // IE doesn't register the blur when sorting
                        // so trigger focusout handlers to remove .ui-state-focus
                        ui.item.children("h3").triggerHandler("focusout");

                        // Refresh accordion to handle new order
                        $(this).accordion("refresh");
                    }
                });
        });

        /*  ======================================
                Google Map
            ====================================== */
        $('.slide-map i').on('click', function () {
            $('.map-area').slideToggle('slow');
            $(this).toggleClass('fa-angle-double-up fa-angle-double-down');
        });
        var myCenter = new google.maps.LatLng(-33.7654872, 150.9103569);
        function initialize() {
            var mapProp = {
                zoom: 12,
                center: myCenter,
                disableDefaultUI: true,
                scrollwheel: false,
                styles: [{
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#444444"
                    }]
                }, {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [{
                        "color": "#f2f2f2"
                    }]
                }, {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "road",
                    "elementType": "all",
                    "stylers": [{
                        "saturation": -100
                    }, {
                        "lightness": 45
                    }]
                }, {
                    "featureType": "road.highway",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "simplified"
                    }]
                }, {
                    "featureType": "road.arterial",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [{
                        "color": "#A1295C"
                    }, {
                        "visibility": "on"
                    }]
                }],
                mapTpeIdy: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(document.getElementById("home-map"), mapProp);
            // Marker js
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(-33.7654872, 150.9103569),
                map: map
            });
        }
        google.maps.event.addDomListener(window, 'load', initialize);

        /*  ======================================
                Scroll Up
            ====================================== */
        $.scrollUp({
            scrollName: 'scrollUp', // Element ID
            topDistance: '300', // Distance from top before showing element (px)
            topSpeed: 300, // Speed back to top (ms)
            animation: 'fade', // Fade, slide, none
            animationInSpeed: 200, // Animation in speed (ms)
            animationOutSpeed: 200, // Animation out speed (ms)
            scrollText: '<a class="hvr-icon-bob click-top"></a>', // Text for element
            activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        });

    });

    $(window).on('load', function () {

        /*  ======================================
				preloader
            ====================================== */
        $('.preloader').fadeOut('500');

    });
}(jQuery));
