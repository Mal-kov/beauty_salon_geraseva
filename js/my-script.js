jQuery(function($){

    baguetteBox.run('.gallery');

    $(window).scroll(function(){
        if ($(this).scrollTop() > 300) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

    $(".menuTop").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });



    $('#owl-header-left').owlCarousel({
        // items: 1,
        // rtl:true,
        loop:true,
        //autoWidth: true,
        autoplay: true,
        autoplayTimeout:7000,
        autoplayHoverPause:true,
        margin:10,
        nav:  false,
        dots: false,
        responsive:{
            0:{
                items:1
            }
            // 600:{
            //     items:3
            // },
            // 1000:{
            //     items:5
            // }
        }
    });
    $('#owl-header-right').owlCarousel({
        rtl:true,
        loop:true,
        // autoWidth: true,
        autoplay: true,
        autoplayTimeout:7000,
        autoplayHoverPause:true,
        // slideSpeed : 900,
        // paginationSpeed : 900,
        margin:10,
        nav:  false,
        dots: false,
        responsive:{
            0:{
                items:0
            },
            770:{
                items:1
            }
            // 1000:{
            //     items:5
            // }
        }
    });
    $('#owl-awards').owlCarousel({
        // items: 1,

        loop:true,
        //autoWidth: true,
        autoplay: true,
        autoplayTimeout:7000,
        autoplayHoverPause:true,
        // slideSpeed : 900,
        // paginationSpeed : 900,
        margin:10,
        nav:  false,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            800:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });








});