$(document).ready(function() {

    var timer;

    $("#slideshow > div:gt(0)").hide();

    $("#slideshow")
        // when mouse enters, clear the timer if it has been set
        .mouseenter(function() {
            if (timer) { clearInterval(timer) }
        })
        // when mouse goes out, start the slideshow
        .mouseleave(function() {
            timer = setInterval(function() {
                $("#slideshow > div:first")
                    .fadeOut(1000)
                    .next()
                    .fadeIn(1000)
                    .end()
                    .appendTo("#slideshow");
            }, 3000);
        })
        // trigger mouseleave for initial slideshow starting
        .mouseleave();

});​