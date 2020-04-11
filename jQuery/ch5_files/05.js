// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.

$(document).ready(function() {
  // Exercise 1 - Alter 'back to top'
  $('<a href="#top">back to top</a>').insertAfter('div.chapter p:nth-of-type(n+5)');
  $('<a id="top"></a>').prependTo('body');

  $('div.chapter a[href*="wikipedia"]').attr({
    rel: 'external',
    title: function() {
      return 'Learn more about ' + $(this).text() + ' at Wikipedia';
    },
    id: function(index, oldValue) {
      return 'wikilink-' + index;
    }
  });

  // Exercise 2 - Add <p>You were here</p>
  $('div.chapter p + a').on('click',function() {
    $this = $(this);
    $('<p>You were here.</p>').insertAfter($this);
  });

  // Exercise 3 - Bold author's name on click with jQuery
  $('#f-author').on('click', function() {
    $(this+'nth-child()').wrap('<strong></strong>');
  });

  var $notes = $('<ol id="notes"></ol>').insertBefore('#footer');
  $('span.footnote').each(function(index) {
    $(this)
      .before([
        '<a href="#footnote-',
        index + 1,
        '" id="context-',
        index + 1,
        '" class="context">',
        '<sup>',
        index + 1,
        '</sup></a>'
      ].join('')) //output: <a href="#footnote-1" id="context-1" class="context"><sup>1</sup><?a>
      .appendTo($notes)
      .append([
        '&nbsp;(<a href="#context-',
        index + 1,
        '">context</a>)'
      ].join(''))
      .wrap([
        '<li id="footnote-',
        index + 1,
        '"></li>'
      ].join(''));
  });

  $('span.pull-quote').each(function() {
    var $parentParagraph = $(this).parent('p');
    $parentParagraph.css('position', 'relative');
    var $clonedCopy = $(this).clone();
    $clonedCopy
      .addClass('pulled')
      .find('span.drop')
      .html('&hellip;')
      .end()
      .text($clonedCopy.text())
      .prependTo($parentParagraph);
  });
});
