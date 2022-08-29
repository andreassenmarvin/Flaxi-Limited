$(function () {
    // Loader

    $(window).load(function () {
        $("#preloader").on(500).fadeOut();
        $(".preloader").on(600).fadeOut("slow");
    });

    // Affix

    $('.megamenu').affix({
        offset: {
            top: 0,
            bottom: function() {
                return (this.bottom = $('.footer').outerHeight(true))
            }
        }
    })

})