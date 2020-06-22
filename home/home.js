$(document).ready(function () {
    $(".center").hide();
    $(".center").fadeIn(6000);
    $("#next").click(function () { 
        location.assign("../loading/loading.html");
    });
});