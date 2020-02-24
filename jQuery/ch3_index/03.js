// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.
$(document).ready(function() {
    // Enable hover effect on the style switcher
    $('#switcher').hover(function() {
        $(this).addClass('hover');
    }, function() {
        $(this).removeClass('hover');
    });

    // Allow the style switcher to expand and collapse
    var toggleSwitcher = function(event) {
        if (!$(event.target).is('button')) {
            $('#switcher button').toggleClass('hidden');
        }
    };
    $('#switcher').on('click', toggleSwitcher);

    // Simulate a click so we start in a collapsed state
    $('#switcher').click();

    // The setBodyClass() function changes the page style
    // The style switcher state is also updated
    var setBodyClass = function(className) {
        $('body').removeClass().addClass(className);
        $('#switcher button').removeClass('selected');
        $('#switcher-' + className).addClass('selected');
        $('#switcher').off('click', toggleSwitcher);
        if (className == 'default') {
            $('#switcher').on('click', toggleSwitcher);
        }
    };

    // Begin with the switcher-default button "selected"
    $('#switcher-default').addClass('selected');

    // Map key codes to their corresponding buttons to click
    var triggers = {
        D: 'default',
        N: 'narrow',
        L: 'large'
    };

    // Call setBodyClass() when a button is clicked
    $('#switcher').click(function(event) {
        if ($(event.target).is('button')) {
            var bodyClass = event.target.id.split('-')[1];
            setBodyClass(bodyClass);
        }
    });

    // Call setBodyClass() when a key is pressed
    $(document).keyup(function(event) {
        var key = String.fromCharCode(event.keyCode);
        if (key in triggers) {
            setBodyClass(triggers[key]);
        }
    });
});



// $(document).ready(function() {
//     $('#switcher button').click(function() {
//         $('#switcher').off('click', toggleSwitcher);
//         if (this.id == 'switcher-default') {
//         }
//     });
// });
//
// $(document).ready(function() {
//     }
//     $('#switcher').on('click', 'button', function() {
//         var bodyClass = this.id.split('-')[1];
//         $(this).addClass('selected');
//     });
// });



// $(document).ready(function() {
//     $('#switcher').hover(function() {
//         $(this).addClass('hover');
//     }, function() {
//         $(this).removeClass('hover');
//     });
// });
//
// $(document).ready(function() {
//     var triggers = {
//         D: 'default',
//         N: 'narrow',
//         L: 'large'
//     };
//     $(document).keyup(function(event) {
//         var key = String.fromCharCode (event.which);
//         if (key in triggers) {
//             $('#switcher-' + triggers[key]).click();
//         }
//     });
// });
//
// $(document).ready(function() {
//     var toggleSwitcher = function(event) {
//         if (!$(event.target).is('button')) {
//             $('#switcher button').toggleClass('hidden');
//         }
//     };
//     $('#switcher').on('click', toggleSwitcher);
//     $('#switcher button').click(function() {
//         $('#switcher').off('click', toggleSwitcher);
//         if (this.id == 'switcher-default') {
//             $('#switcher').on('click', toggleSwitcher);
//         }
//     });
//     $('#switcher').trigger('click');
// });
//
// $(document).ready(function() {
//     $('#switcher-default').addClass('selected');
//
//     $('#switcher').on('click', 'button', function() {
//         var bodyClass = this.id.split('-')[1];
//         $('body').removeClass().addClass(bodyClass);
//         $('#switcher button').removeClass('selected');
//         $(this).addClass('selected');
//     });
// });



// $('#switcher-narrow, #switcher-large').click(function() {
//     $('#switcher').off('click.collapse');
// });
// $('#switcher-default').click(function() {
//     $('#switcher').on('click.collapse', toggleSwitcher);
// });



// $(document).ready(function() {
//     $('#switcher').hover(function() {
//         $(this).addClass('hover');
//     }, function() {
//         $(this).removeClass('hover');
//     });
// });
//
// $(document).ready(function() {
//     $('#switcher-default').addClass('selected');
//     $('#switcher').click(function(event) {
//         if ($(event.target).is('button')) {
//             var bodyClass = event.target.id.split('-')[1];
//             $('body').removeClass().addClass(bodyClass);
//             $('#switcher button').removeClass('selected');
//             $(event.target).addClass('selected');
//         } else {
//             $('#switcher button').toggleClass('hidden');
//         }
//     });
// });



// $(document).ready(function() {
//     $('#switcher-default').addClass('selected');
//     $('#switcher button').on('click', function() {
//         $('body').removeClass();
//         $('#switcher button').removeClass('selected');
//         $(this).addClass('selected');
//     });
//
//     $('#switcher-narrow').on('click', function() {
//         $('body').addClass('narrow');
//     });
//
//     $('#switcher-large').on('click', function() {
//         $('body').addClass('large');
//     });
// });



// $(document).ready(function() {
//     $('#switcher-default').addClass('selected').on('click', function() {
//         $('body').removeClass();
//     });
//
//     $('#switcher-narrow').on('click', function() {
//         $('body').addClass('narrow');
//     });
//
//     $('#switcher-large').on('click', function() {
//         $('body').addClass('large');
//     });
//
//     $('#switcher button').on('click', function() {
//         $('#switcher button').removeClass('selected');
//         $(this).addClass('selected');
//     });
// });



// $(document).ready(function() {
//     $('#switcher-default').addClass('selected').on('click', function() {
//         $('body').removeClass('narrow');
//         $('body').removeClass('large');
//         $("#switcher button").removeClass("selected");
//         $(this).addClass("selected");
//     });
//     $('#switcher-large').on('click', function() {
//         $('body').removeClass('narrow');
//         $('body').addClass('large');
//         $("#switcher button").removeClass("selected");
//         $(this).addClass("selected");
//     });
//     $('#switcher-narrow').on('click', function() {
//         $('body').addClass('narrow');
//         $('body').removeClass('large');
//         $("#switcher button").removeClass("selected");
//         $(this).addClass("selected");
//     });
// });
