
$(document).ready(function() {
    $('.menu-trigger').click(function() {
        $('.navig ul').slideToggle(500);
    });//end slide toggle

    $(window).resize(function() {
        if (  $(window).width() > 500 ) {
            $('.navig ul').removeAttr('style');
        }
    });//end resize
});//end ready