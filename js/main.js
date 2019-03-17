// scroll smooth behavior
$(document).ready(function () {
    $('a').on('click', function (event) {
        if (this.hash !== '') {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});

// header nav
$('.btn-nav').click(function () {
    $('.nav-list').slideToggle();
})

// header nav indicator
$(function () {
    $('#progress').progress({
        size: '3px',
        position: 'bottom',
        wapperBg: '#dbdbdb',
        innerBg: '#956641',
    });
});


// slick
$('.carousel').slick({
    infinite: true,
    slideToshow: 1,
    slidesToscroll: 1,
    arrows: false,
});
$('.btn.btn-left').click(function () {
    $('.carousel').slick('slickPrev');
})
$('.btn.btn-right').click(function () {
    $('.carousel').slick('slickNext');
})

// slick slider text
$('#example').typer({
    strings: [
        "FRONT END DEVELOPER",
        "PRACTICE HARDER",
        "BE BEST DEVELOPER"
    ],
    typeSpeed: 80,
    backspaceSpeed: 20,
    backspaceDelay: 800,
    repeatDelay: 1000,
    repeat: true,
    autoStart: true,
});

// portfolio lightgallery
$('.portfolio-img').lightGallery();

// tab
var $tab_list = $('.tab-list');
$tab_list.find('.about-list').hide();
$tab_list.find('.tab-list__item.active .about-list').show();
$tab_list.find('button').click(function (e) {
    e.preventDefault();
    var $this = $(this);
    $this.next('.about-list').show().parent('.tab-list__item').addClass('active').siblings('.tab-list__item').removeClass('active').find('.about-list').hide();
});

function tab_menu(e) {
    e.preventDefault();
    var $this = $(this);
    $this.next('ul').show().parent('li').addClass('active').siblings('li').removeClass('active').find('>ul').hide();
}
$tab_list.find('ul>li>a').click(tab_menu).focus(tab_menu)