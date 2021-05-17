(function ($) {

  Drupal.behaviors.stopCaruselBehavior = {
    attach: function (context) {
      $('#carousel', context).carousel({
        pause: true,
        interval: false
      });
    }
  }

  Drupal.behaviors.caruselBehavior = {
    attach: function (context, settings) {
      $('#carousel[data-type="multi"] .carousel-item', context).each(function () {
        let next = $(this).next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
      });
    }
  };

})(jQuery);
