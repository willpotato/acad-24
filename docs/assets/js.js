// scroll-to-top button
function ttop() {
        var body = $("html, body");
        body.stop().animate({scrollTop:0}, 800, 'swing', function() {
        });
    }