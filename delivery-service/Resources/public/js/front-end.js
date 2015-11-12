var Frontend = (function() {
    'use strict';

    var navigrantionbar_scroll = function() {
        $('body').scrollspy({ target: '.navbar' })

        var offsetHeight = 5;
        $('.nav-collapse').scrollspy({
            offset: offsetHeight
        });

        $('.navbar li a').click(function (event) {
            var scrollPos = $('body > .container').find($(this).attr('href')).offset().top - offsetHeight;
            $('body,html').animate({
                scrollTop: scrollPos
            }, 500, function () {
                $(".btn-navbar").click();
            });

            return false;
        });
    };

    var check_agreement = function(checker, sendBtn) {
        if( checker.checked ) {
            sendBtn.disabled = false;
        } else {
            sendBtn.disabled = true;
        }
    };

    return {
        navigrantionbar_scroll : navigrantionbar_scroll,
        check_agreement : check_agreement
    };
}());

document.addEventListener("DOMContentLoaded", function(event) {
   Frontend.navigrantionbar_scroll();
}, true);


