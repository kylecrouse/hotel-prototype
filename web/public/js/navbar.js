$(document).ready(
  function(){
    $('#header .navbar').waypoint('sticky');
    $('#footer')
      .waypoint(function(direction) {
        $('#header .navbar').toggleClass('bottom');
      }, {
        offset: function() {
          return ($('#header .navbar').outerHeight()+parseInt($('#footer').css('margin-top')));
        }
      })
      .waypoint(function(direction) {
        $('#booknow').toggleClass('bottom');
      }, {
        offset: function() {
          var position = $('#booknow').position() || {};
          var top = position.top;
          return top + $('#booknow').outerHeight();
        }
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
        offset: 135,
      })
      .waypoint(function(direction) {
        $(this).toggleClass('bottom', direction === 'down');
      }, {
        offset: function() {
          return -($('.left-column').outerHeight()-135-$(this).height());
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

    $('.carousel .indicator a').click(
      function(event) {
        event.preventDefault();
        $('.carousel .indicator a.on').removeClass('on');
        $(this).toggleClass('on');
        var slide = parseInt($(this).data('slide'));
        $('.carousel .inner').css('margin-left',-((slide-1)*1200));
      }
    );

    $('a[href="#"]').click(
      function(event) {
        event.preventDefault();
      }
    );
  }
);