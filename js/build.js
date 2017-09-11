
$(document).ready(function() {
    $('.menu-trigger').click(function() {
        $('nav ul').slideToggle(500);
    });//end slide toggle

    $(window).resize(function() {
        if (  $(window).width() > 500 ) {
            $('nav ul').removeAttr('style');
        }
    });//end resize
});//end ready
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhhbWJ1cmdlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcubWVudS10cmlnZ2VyJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnbmF2IHVsJykuc2xpZGVUb2dnbGUoNTAwKTtcclxuICAgIH0pOy8vZW5kIHNsaWRlIHRvZ2dsZVxyXG5cclxuICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKCAgJCh3aW5kb3cpLndpZHRoKCkgPiA1MDAgKSB7XHJcbiAgICAgICAgICAgICQoJ25hdiB1bCcpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7Ly9lbmQgcmVzaXplXHJcbn0pOy8vZW5kIHJlYWR5Il19
