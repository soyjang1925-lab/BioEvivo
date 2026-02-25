$(function() {

    $(".menu").on('mouseenter', function () {
        $(".sub-menu-list").stop().slideDown(500);
      })
    $(".menu").on('mouseleave', function () {
        $(".sub-menu-list").stop().slideUp(500);
      })


});