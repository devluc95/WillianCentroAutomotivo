// Smooth scrolling
$(document).ready(function () {
    $('a.nav-link').on('click', function (event) {
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - 70 // Adjust for fixed header
        }, 800);
        event.preventDefault();
    });
});