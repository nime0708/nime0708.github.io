(function () {
    var mainHead = $("#mainHead");
    var wheight = $(window).height();
    mainHead.css("height", wheight);
    $(window).resize(function(){
        mainHead.css("height",$(window).height());
    });

    /*scroll start */
    $('a.scroll-page').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });
    /*scroll end*/

    /*scrollspy start*/
    $('body').scrollspy({
        target: '.navbar-fixed-top'
        , offset: 51
    });
    /*scrollspy end*/

    /*fittext start*/
    $("#navbar h1").fitText(
        0.8, {
            minFontSize: '35px'
            , maxFontSize: '55px'
        }
    );
    /*fittext end*/

    /*affix start*/
    $("#navbar").affix({
        offset: {
            top: 100
        }
    });
    /*affix end*/

    /*magic popup start*/
    // Initialize and Configure Magnific Popup Lightbox Plugin
    $('.popup-gallery').magnificPopup({
        delegate: 'a'
        , type: 'image'
        , tLoading: 'Loading image #%curr%...'
        , mainClass: 'mfp-img-mobile'
        , gallery: {
            enabled: true
            , navigateByImgClick: true
            , preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        }
        , image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

    /*magic popup end*/
    
    /*script reveal start*/
        window.sr = ScrollReveal();
    sr.reveal('.sr-icon', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);
    /*script reveal stop*/
    
    /*responsive menu start*/
        // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
        $('.navbar-toggle:visible').click();
    });

    /*responsive menu end*/
})();