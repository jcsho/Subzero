//code adapted from http://stackoverflow.com/questions/29242074/hiding-a-navigation-bar-with-hide
//and http://api.jquery.com/
function navbar() {
    if (document.body.scrollTop > (3 * ($(".parallax-landing").height()) / 4)) {
        $(".top_nav").addClass(" past-landing");
        $(".nav_home").addClass(" past-landing");
    } else {
        $(".top_nav").removeClass(" past-landing");
        $(".nav_home").removeClass(" past-landing");
    }

    if ($(window).width() < 1200) {
        $("#homebtn").attr("href", "#extremecold");
    } else {
        $("#homebtn").attr("href", "#home");
    }
}

function hide_logo() {
    if (document.body.scrollTop > ($(".parallax-landing").height() / 6)) {
        $(".landing-page").fadeOut(600);
    } else {
        $(".landing-page").fadeIn(400);
    }
}

$(window).scroll(function() {
    navbar();
    hide_logo();
});

$(window).resize(function() {
    navbar();
    hide_logo();
    collpase_nav();
});

//code from http://stackoverflow.com/questions/10266412/undo-prepend-on-window-resize-with-jquery
$(document).ready(function() {
    $(".landing-page").hide().delay(500).fadeIn(1200);
    $(window).trigger("resize");
});

//code adapted from http://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link
//smooth scolling for link elements
var $root = $('html, body');
$('a').click(function() {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

//code adopted from https://www.w3schools.com/howto/howto_js_fullscreen_overlay.asp
//mobile navbar
function openNav() { 
    document.getElementById("mobile_nav").style.height ="100%";
}

function closeNav() {
    document.getElementById("mobile_nav").style.height ="0%";
}