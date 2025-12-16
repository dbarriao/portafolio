// Scroll suave con jQuery
$('a[href^="#"]').on('click', function (e) {
    e.preventDefault();

    const target = $($(this).attr('href'));

    if (target.length) {
    $('html, body').animate(
        {
        scrollTop: target.offset().top - 70
        },
        600
    );
    }
});
