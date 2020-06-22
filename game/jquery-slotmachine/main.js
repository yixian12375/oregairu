let arr=[];
var theSame = 0;
var fullTimes = 1;

$(document).ready(function () {
    $("#nextButton").hide();
    const btn = document.querySelector('#randomizeButton');
    const el1 = document.querySelector('#machine1');
    const el2 = document.querySelector('#machine2');
    const el3 = document.querySelector('#machine3');
    const machine1 = new SlotMachine(el1, { active: 0 });
    const machine2 = new SlotMachine(el2, { active: 1 });
    const machine3 = new SlotMachine(el3, { active: 2 });
    function onComplete(active){
        if (arr.length <= 1) {
            arr.push(active);
        }
        else if (arr.length > 1) {
            arr.push(active);
            if (arr[0] == arr[1] && arr[1] == arr[2])
                theSame++; 
            else
                fullTimes ++;      
            arr = [];
        }
    }
    btn.addEventListener('click', function()  {  
        machine1.shuffle(10, onComplete);
        machine2.shuffle(10, onComplete);
        machine3.shuffle(10, onComplete);
        isTheSame();
        isFullTimes();
        console.log("fullTimes = ", fullTimes);
        console.log("theSame = ", theSame);
    });
    $("#nextButton").click(function () { 
        leadToFinal();
    });
});

function isTheSame() {
    if (theSame == 1 || fullTimes == 100){
        theSame++
        songPause(3);
        quiz();
        fullTimes = 101;
    }
    else if (theSame == 3 || fullTimes == 1000){
        theSame++
        songPause(3);
        guess();
        fullTimes++;
        fullTimes = 1001; 
    }
    else if (theSame == 5 || fullTimes == 1016){
        theSame++
        songPause(3);
        play(playList[9]);
        hideItem("#randomizeButton");
        showItem("#nextButton");
    }
}

function isFullTimes() {
    if (fullTimes == 5){
        songPause(3);
        $("#bgmIcon").attr("src", "../image/mute.jpg");
        play(playList[1]);
    }
    else if (fullTimes == 10){
        songPause(3);
        $("#bgmIcon").attr("src", "../image/mute.jpg");
        play(playList[2]);
    }
    else if (fullTimes == 15){
        songPause(3);
        $("#bgmIcon").attr("src", "../image/mute.jpg");
        play(playList[3]);
    }
    else if (fullTimes == 20){
        songPause(3);
        $("#bgmIcon").attr("src", "../image/mute.jpg");
        play(playList[4]);
        fullTimes = 95;
    }

    if (fullTimes == 106){
        songPause(3);
        $("#bgmIcon").attr("src", "../image/mute.jpg");
        play(playList[5]);
    }
    else if (fullTimes == 111){
        songPause(3);
        $("#bgmIcon").attr("src", "../image/mute.jpg");
        play(playList[6]);
        fullTimes = 995;
    }

    if (fullTimes == 1006){
        songPause(3);
        $("#bgmIcon").attr("src", "../image/mute.jpg");
        play(playList[7]);
    }
    else if (fullTimes == 1011){
        songPause(3);
        $("#bgmIcon").attr("src", "../image/mute.jpg");
        play(playList[8]);
    }
}

function play(val) {
    init();
    hideItem("#randomizeButton");
    $(".top").empty();
    $(".top").html(val);
    if (val != playList[9]) {
        setTimeout(function () { showItem("#randomizeButton") }, 15000);
    }
}
