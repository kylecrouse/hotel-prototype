$(document).ready(
  function(){
    $('#header .navbar').waypoint('sticky');
    $('#footer')
      .waypoint(function(direction) {
        $('#header .navbar').toggleClass('bottom');
      }, {
        offset: 120
      })
      .waypoint(function(direction) {
        $('.body-navbar').toggleClass('bottom');
      }, {
        offset: 212
      });

    $('.body-navbar').waypoint('sticky',{offset:60});

    $('.receipt[data-toggle="sticky"]')
      .waypoint(function(direction) {
        $(this).toggleClass('stuck', direction === 'down');
      }, {
        offset: 90,
      })
      .waypoint(function(direction) {
        $(this).toggleClass('bottom', direction === 'down');
      }, {
        offset: function() {
          return -($('.left-column').outerHeight()-90-$(this).height());
        }
      });

    $('[data-toggle="collapse"]').click(
      function(event) {
        event.preventDefault();
        var $target = $($(this).attr('href'));
        $(this).toggleClass('open');
        $target.toggleClass('in');
      }
    );
  }
);