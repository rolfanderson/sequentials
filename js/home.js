jQuery(document).ready(function($) {
    $(".clickable-row").click(function() {
        window.location = $(this).data("href");
    });
});

$(document).ready(function() {
    $("#hide").click(function(){
        $("#snackbar").hide();
    });
});

setTimeout(function() {
  $("#snackbar").fadeOut().empty();
}, 7000);
