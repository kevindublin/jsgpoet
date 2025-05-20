/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
 /*Scroll to top when arrow up clicked END*/
$(window).scroll(function() {		//jQuery to collapse menu on scroll
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});
$(function() {						//Page scrolling feature with kQuery Easing plugin
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// When scrollspy updates the active link
$(window).on('activate.bs.scrollspy', function () {
    $('.navbar-nav > li > a').attr('aria-current', 'false'); // Reset all
    $('.navbar-nav > li.active > a').attr('aria-current', 'page'); // Set current
});
// Initial set on page load if a section is targeted by hash
if(window.location.hash) {
     $('.navbar-nav > li > a[href="' + window.location.hash + '"]').attr('aria-current', 'page');
} else {
    // Optionally set the first relevant link as current if no hash, or #page-top
     $('.navbar-nav > li > a[href="#about"]').first().attr('aria-current', 'page'); // Example for #about
}
