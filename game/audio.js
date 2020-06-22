
function BGMPlay(index) {
    var song1 = document.getElementById("song1");
    var song2 = document.getElementById("song2");
    song1.volume = 0.3;
    song2.volume = 0.3;

    if (index == 1)
        song1.play();
    else if (index == 2)
        song2.play();
}

function normalPlay() {
    let current = 2;
    var song3 = document.getElementById("song3");
    song3.volume = 0.3;

    song3.play();
    song3.addEventListener("ended", function() {
        current++;
        if (current == 7) {
            current = 2;
        }
        else{           
            $("#song3").attr("src", "../musicplay/bgm/bgm"+current+".mp3");
            song3.play();
        }
    });
    
}

function songPause(index) {
    switch (index) {
        case 1:
            song1.pause();
            break;
        case 2:
            song2.pause();
            break;
        case 3:
            song3.pause();
            break;
        default:
            break;
    }
}
