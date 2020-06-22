
let radioValue = 'none';

$(document).ready(function () {
    $("#person").hide();
    $("button").hide();
    $("#options").change(function () { 
        $("#person").empty();
        radioValue = $("input[name='char']:checked").val();
        if (radioValue == "teacher") {
            console.log("teacher");
            $("#person").show(750);
            $("button").show(750);
            appendPersonTeacher();           
        }
    });
    $("button").click(function () { 
        if (radioValue == "teacher") {
            location.assign("../musicplay/teacher/teacher1.html");
        }
    });
});

function appendPersonTeacher() {
    $("#person").append(
        "<a href='https://zh.moegirl.org/zh-tw/%E6%AF%94%E4%BC%81%E8%B0%B7%E5%85%AB%E5%B9%A1' target='_blank'><img src='../image/teacher.jpg' alt='teacher' id='teacher'></img></a>"
    );
    $("#teacher").mouseenter(
        function () {
            $("p").html("<h4>比企谷八幡<h4>");
        },
    );
    $("#teacher").mouseleave(
        function () {
            $("p").empty();
        }
    ); 
}

