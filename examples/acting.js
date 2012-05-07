// Define our plugin.
(function($){
  $.fn.listShuffler = function () {
    // The jQuery chain passes us a jQuery object as 'this'.
    // We iterate through them individually.
    this.each(function(index, item) {
      // 'this' is now a DOM element, so we need to wrap
      // it in a jQuery object with $().
      var $this = $(this);
      $this
      .css('outline', '1px dotted red');
    });
  }
}(jQuery));


// Invoke our plugin.
$(document).ready(function (event) {
  $('ul li')
  .listShuffler()
  /*.css('background-color', 'lightblue')*/;
});