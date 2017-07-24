$(document).ready(function(){
    $("#nav-mobile").html($("#nav-main").html());
    $("#nav-trigger span").click(function(){
        if ($("nav#nav-mobile ul").hasClass("expanded")) {
            $("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
            $(this).removeClass("open");
        } else {
            $("nav#nav-mobile ul").addClass("expanded").slideDown(250);
            $(this).addClass("open");
        }
    });
});

$(document).ready(function() {

        var bgArray = ['bg1.jpg', 'bg2.jpg', 'bg3.jpg'];
        var bg = bgArray[Math.floor(Math.random() * bgArray.length)];


        // If you have defined a path for the images
        var path = 'images/';

        // then you can put it right before the variable 'bg'
        $('.parallax').css("background-image", "url("+bg+")");


    });

window.setInterval(function(){
    $(document).ready(function() {

        var bgArray = ['bg1.jpg', 'bg2.jpg', 'bg3.jpg'];
        var bg = bgArray[Math.floor(Math.random() * bgArray.length)];


        // If you have defined a path for the images
        var path = 'images/';

        // then you can put it right before the variable 'bg'
        $('.parallax').css("background-image", "url("+bg+")");


    });
}, 10000);
