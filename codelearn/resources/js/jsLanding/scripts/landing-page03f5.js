$(document).ready(function () {

    new WOW().init();

    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
            });
        } // End if
    });

    $(".dateline-registed").text("2018-09-25".getLocalDate())

    //$(window).scroll(function () {
    //    var intro = $(".introduction");
    //    if ($(window).scrollTop() > (intro.height() * 0.12)) {
    //        $(".invite-footer").addClass("fixed fadeInUp animated").removeClass("fadeOutDown");
    //    } else {
    //        $(".invite-footer").addClass("fadeOutDown animated").removeClass("fixed fadeInUp");
    //    }
    //});
});