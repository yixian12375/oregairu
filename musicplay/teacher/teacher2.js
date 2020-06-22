var player;
var currentPlay = 1;

$(document).ready(function () {
    onYouTubeIframeAPIReady();
});

function onYouTubeIframeAPIReady() {
    player = new YT.Player("player",
    {
        videoId:playList[currentPlay],
        playerVars:{
            "autoplay":1,
            "controls":0,
            "showinfo":0,//title
            "rel":0,//related video
            "iv_load_policy":3//註解式行銷
        },
        events:{
            "onReady":playerPlay,
            "onStateChange":playerFinish
        }
    });
}

function playerPlay(event) {
    player.playVideo();
}

function playerFinish(event) {  
    if (Math.floor(player.getPlayerState()) == 0) { //end
        if (currentPlay == 1){ //op
            location.assign("../../final/index.html");
            console.log("pause");
        }
    }
    else if (Math.floor(player.getPlayerState()) == 2) { //pause
        if (currentPlay == 1){ //op
            location.assign("../../final/index.html");
        }
    }      
}

