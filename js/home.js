/*$(window).on('load',function(){
    $('#disclaimer').modal('show');
});*/

jQuery(document).ready(function($) {
    $(".clickable-row").click(function() {
        window.location = $(this).data("href");
    });
});
