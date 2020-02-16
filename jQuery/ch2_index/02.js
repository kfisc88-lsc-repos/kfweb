// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.

$(document).ready(function() {

    // Creates horizontal navigation, shades bg of sub-menus
    $('#selected-plays > li').addClass('horizontal');
    $('#selected-plays li:not(.horizontal)').addClass('sub-level');

    // Adds mail and pdf icons to respective links, puts emphasis on henry links
    $('a[href^="mailto"]').addClass('mailto');
    $('a[href$=".pdf"]').addClass('pdflink')
    $('a[href^="http"][href*="henry"]').addClass('henrylink');

    // Creates banding for tables, adds bold/italics to all Henry plays
    $('tr:nth-child(odd)').addClass('alt');
    $('td:contains(Henry)').parent().children().addClass('highlight');

    // Adds arrow to all external links
    $('a').filter(function() {
        return this.hostname && this.hostname != location.hostname;
    }).addClass('external');

});
