// Scroll suave
$(document).ready(function () {
    $('a.nav-link').on('click', function (event) {
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - 70 // Ajuste para a navbar fixa
        }, 800);
        event.preventDefault();
    });
});

// Inicializar componentes do Bootstrap
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
});