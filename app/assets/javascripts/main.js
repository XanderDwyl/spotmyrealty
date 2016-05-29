// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

(function ($) {
  $(document).on('ready', function() {
    // fix menu when passed
    $('.masthead')
      .visibility({
        once: false,
        onBottomPassed: function() {
          $('.fixed.menu').transition('fade in');
        },
        onBottomPassedReverse: function() {
          $('.fixed.menu').transition('fade out');
        }
      });

    // create sidebar and attach to menu open
    $('.ui.sidebar')
      .sidebar('attach events', '.toc.item');

    // reset page
    $(window).on('resize', function() {
      $('.ui.vertical.sidebar.menu.left').removeClass('uncover visible');
      $('.pusher.dimmed').removeClass('dimmed');
    });
  });
})(jQuery);

