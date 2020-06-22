let currentLoading = 0;

$(document).ready(function () {
    setTimeout(function(){ nextHtml(); }, 9000);
});

function nextHtml() {
    if (currentLoading == 0) {
        currentLoading++;
        location.assign("../chose/chose.html");
    } 
}