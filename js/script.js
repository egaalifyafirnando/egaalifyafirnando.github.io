// efek scroll
// event saat tombol navbar di klik
$('.page-scroll').on('click', function (e) {
    // ambil link href
    var tujuan = $(this).attr('href');

    // tangkap elemen yang bersangkutan
    var elemenTujuan = $(tujuan);

    $('html').animate(
        {
            scrollTop: elemenTujuan.offset().top - 25,
        },
        1000,
        'swing'
    );

    e.preventDefault();
});
// akhir efek scroll

// button click
const tombol = document.querySelector('form .btn');

tombol.addEventListener('click', function () {
    alert('thank you!');
});
// akhir button click

$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    // animasi jumbotron parallax
    $('.jumbotron img').css({
        transform: 'translate(0px, ' + wScroll / 1 + '%)',
    });

    $('.jumbotron h1').css({
        transform: 'translate(0px, ' + wScroll / 2 + '%)',
    });

    $('.jumbotron h5').css({
        transform: 'translate(0px, ' + wScroll + '%)',
    });

    $('.jumbotron p').css({
        transform: 'translate(0px, ' + wScroll + '%)',
    });

    $('.jumbotron span').css({
        transform: 'translate(0px, ' + wScroll + '%)',
    });
    // akhir animasi jumbotron parallax

    // animasi teks about
    if (wScroll > $('.about').offset().top - 400) {
        $('.about .aboutMe').each(function (i) {
            setTimeout(function () {
                $('.about .aboutMe').eq(i).addClass('pmuncul');
            }, 300);
        });
    }
    // akhir animasi teks about

    // animasi portfolio
    if (wScroll > $('.portfolio').offset().top - 350) {
        $('.portfolio .card').each(function (i) {
            setTimeout(function () {
                $('.portfolio .card').eq(i).addClass('muncul');
            }, 300 * (i + 1));
        });
    }
    // akhir animasi portfolio

    // animasi progress
    if (wScroll > $('.portfolio').offset().top - 10) {
        $('.skills .progress').each(function (i) {
            setTimeout(function () {
                $('.skills .progress').eq(i).addClass('pmuncul');
            }, 50);
        });
    }
    // akhir animasi progress

    // animasi sosmed
    if (wScroll > $('.sosmed').offset().top - 240) {
        $('.sosmed li').each(function (i) {
            setTimeout(function () {
                $('.sosmed li').eq(i).addClass('muncul');
            }, 300 * (i + 1));
        });
    }
    // akhir animasi sosmed

    // animasi sosmed
    if (wScroll > $('.sosmed').offset().top - 1000) {
        $('.alert').each(function (i) {
            setTimeout(function () {
                $('.alert').eq(i).addClass('muncul');
            }, 300 * (i + 1));
        });
    }
    // akhir animasi sosmed
});
