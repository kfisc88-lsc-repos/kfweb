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


// Begin assignments

/*-------------------------- Exercise 1 --------------------------*/

    // Adds the 'selected' class to any element of the 'author' class
    $('.author').click(function() {
        $(this).addClass('selected');
    });

/*-------------------------- Exercise 2 --------------------------*/

    // Adds 'hidden' class to all other sibling elements when
    // 'chapter-title' element is double clicked
    $('.chapter-title').dblclick(function() {
        $(this).nextAll().toggleClass('hidden');
    });

/*-------------------------- Exercise 3 --------------------------*/

    // List of body classes
    var triggerNumbers = [
        'default',
        'narrow',
        'large'
    ];
    // Counter variable for key presses
    var cycleNext = 0;
    $(document).keyup(function(rArrow) {
        var key = rArrow.keyCode;
        // Tests keydown for right arrow key and changes body classes
        if ((key == 39) && (cycleNext <= 2)) {
            setBodyClass(triggerNumbers[cycleNext]);
            if (cycleNext < 2) {
                cycleNext++;
            }
            else {
                cycleNext = 0;
            }
        }
    });


/*-------------------------- Exercise 4 --------------------------*/

    // Prints the mouse coordinates only when moving over
    // 'p' elements
    $('p').mousemove(function(pMouse) {
        mousePos = pMouse.pageX + ", " + pMouse.pageY;
        console.log(mousePos);
    });

/*-------------------------- Exercise 5 --------------------------*/

    // Gets the position of the mouse when mouse is down
    var mouseClickDown;
    $(document).mousedown(function(mouseEvent) {
        mouseClickDown = mouseEvent.pageY;
        return mouseClickDown;
    });

    // Compares position of mouse down to mouse up, then adds/removes
    // 'hidden' class from all 'p' elements
    $(document).mouseup(function(mouseEvent) {
        // console.log("Mouse down: " + mouseClickDown); <-- Used to display mouse position
        var mouseClickUp = mouseEvent.pageY;
        // console.log("Mouse up: " + mouseClickUp); <-- Used to display mouse position
        if (mouseClickUp < mouseClickDown) {
            $('p').addClass('hidden');
        } else {
            $('p').removeClass('hidden');
        }
    });
/*----------------------------------------------------------------*/
});
// End assignments



/*--------------- DISCARDED CODE FROM CHAPTER WORK ---------------*/

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
