
let charge = 0;

$(document).ready(function () {  
    alert("點擊CLICK，滿5次即可觀賞影片(最多播放2~4次)\n當機器湊滿3個相同的圖示即可進入特別功能，湊滿3次即可過關\n每次點CLICK前請等待3秒緩衝!");
    alert("錯過的影片可藉由以下幾種方式瀏覽");
    alert("1. 重玩一次\n2. 在Gallery下載影片");
    click();
});

function click() {
    $("#randomizeButton").click(function () {
        charge++;
        if (charge == 1) {
            $(".charge4").css("background-color", "wheat");
            animte(".charge4");
        }
        else if (charge == 2) {
            $(".charge3").css("background-color", "wheat");
            animte(".charge3");
        }
        else if (charge == 3) {
            $(".charge2").css("background-color", "wheat");
            animte(".charge2");
        }
        if (charge == 4) {
            $(".charge1").css("background-color","wheat");
            animte(".charge1");
            $(".battery").css("animation-name", "battery_ring");
            $(".anode").css("animation-name", "anode_ring");
            charge = 0;
        }  
    });

    $(".bgmPlayer").click(function () {
        let icon = $("#bgmIcon").attr("src");
        if (icon == "../image/unmute.jpg")
        {
            songPause(3);
            $("#bgmIcon").attr("src", "../image/mute.jpg");
        }
        else
        {
            normalPlay();
            $("#bgmIcon").attr("src", "../image/unmute.jpg");
        }
            
    });
}

function hideItem(index) {
    $(index).hide(2000);
}

function showItem(index) {
    $(index).show(2000);
}

function animte(index) {
    $(index).css("animation-name", "ring");
}

function init() {
    $(".battery").css("animation-name", "name");
    $(".anode").css("animation-name", "name");
    $(".charge1").css("animation-name", "name");
    $(".charge2").css("animation-name", "name");
    $(".charge3").css("animation-name", "name");
    $(".charge4").css("animation-name", "name");
    $(".charge1").css("background-color","black");
    $(".charge2").css("background-color","black");
    $(".charge3").css("background-color","black");
    $(".charge4").css("background-color","black");
    charge = -1;
}

function leadToFinal() {
    setTimeout(function(){ hideItem("#char"); }, 1000);
    setTimeout(function(){ hideItem(".battery"); },3000);
    setTimeout(function(){ hideItem("#right"); }, 5000);
    setTimeout(function(){ hideItem(".top"); }, 7000);
    setTimeout(function(){ location.assign("../musicplay/teacher/teacher2.html"); }, 9000);  
}