/* 
function efeitoSlide(){
    $(document).ready(function() {
        $('#efeito-slide').pagepiling({
            scrollingSpeed: 200,
            direction: 'horizontal',
            verticalCentered:false,
            easing: 'swing',
            keyboardScrolling: true,
            loopBottom: true,
            loopTop: true,
            navigation: {
                'position': 'right',
                'textColor': '#000',
                'bulletsColor': '#000',
                'tooltips': ['Home', 'sobre mim', 'portfolio', 'contato']
               },

                // esconder menu lateral em determinada página 
               onLeave: function (index, nextIndex, direction) {
                //reaching our last section? The one with our normal site?
               if (nextIndex >= 6) {
                   $('#pp-nav').fadeOut();
               }
               else{
                $('#pp-nav').fadeIn();
               }
            },
            
               sectionSelector: '.section',
        });
    });
} */



//função abaixo anima as letras do 'main', para animar outras áreas do site é necessario criar mais uma linha dentro
//da função

function animaTexto() {
    $(document).ready(function () {
        $('.texto-1').funnyText({
            speed: 400

        });
    });

    $(document).ready(function () {
        $('.text-2').funnyText({
            speed: 400

        });
    });
}

animaTexto();

/*função animate ao clicar na ancora do site */
function ancoraAnimate() {

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var id = $(this).attr('href'),
            targetOffset = $(id).offset().top;

        $('html, body').animate({
            scrollTop: targetOffset - 40
        }, 800);
    });
}

ancoraAnimate();



/********Area de Carousel do portfolio *********/
function areaCarousel() {

    $('.owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        items: 3,
        margin: 31,
        stagePadding: 30,
        smartSpeed: 650,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,

        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            },
            1024: {
                items: 2
            },
            1600: {
                items: 1
            }
        }
    })
}

areaCarousel();