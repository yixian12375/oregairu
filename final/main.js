$(document).ready(function () {
    $("marquee").mouseenter(function(){
        this.stop();
      });
    $("marquee").mouseleave(function(){
        this.start();
    })
});