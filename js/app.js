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
            bottom: function () {
                return (this.bottom = $('.footer').outerHeight(true))
            }
        }
    })

    $("#contactform").submit(function (event) {
        event.preventDefault();

        this.reset();
        $(".message-sent").fadeIn();

        setTimeout(function () {
            window.location.href = "/";
        }, 3000);
    });

    // Testing Video

    $(".testing-vid").on('ended', function() {
        $(".testing-vid").get(0).pause();
        $(".testing-vid").get(0).currentTime = 0;
    })

    // Modal Video
    $('.btn-play').click(function () {
        $('#myModal').fadeIn();
        $('.modal-overlay').fadeIn();
        $(".testing-vid").get(0).pause();
        $(".testing-vid").get(0).currentTime = 0;
    })

    $('.modal-close').click(function() {
        $('#myModal').fadeOut();
        $('.modal-overlay').fadeOut();
        $(".testing-vid").get(0).play();
        $('iframe').attr('src', $('iframe').attr('src'));
    })
})