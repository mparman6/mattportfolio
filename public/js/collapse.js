$(function() {
    // console.log( "ready!" );

    $('.select').on('click', function() {
      $('#navigation').hide();
    });

    $('.navbar-toggle').on('click', function() {
      $('#navigation').show();
    });

});