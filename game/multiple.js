

function quiz() {
    init();
    hideItem("#randomizeButton");
    $(".top").empty();
    BGMPlay(1);   
    $(".top").append(
        "<div class='quiz'>" +
        "<h1 id='title'>大老師你熟不熟---問答</h1>"+
        "<div>"+
           "<h2 id='question'></h2>"+
            "<div id='options'></div>"+
        "</div>"+
        "<input id='startButton' type='button' value='開始作答' >"+
        "<input id='evolution' type='button' value='Evolution' >"+
        "</div>"
    );
    $("#evolution").hide();
    let currentQuiz = null;
    $("#startButton").click(function () { 
        if (currentQuiz == null) {
            currentQuiz = 0;
            $("#question").text(questions[0].question); //questions's question content
            $("#options").empty();
            for (let x = 0; x < questions[0].answers.length; x++) {  //questions's answer quantity
                $("#options").append(
                    "<input name='options' type='radio' value='"+x+"' id='"+x+"'>" + //using single quotes avoid double quotes wrong coding
                    "<label for='"+x+"'>" + questions[0].answers[x][0] + "</label>"+
                    "<br><br>"
                );
            }
            $("#startButton").attr("value", "Next");
        }else{
            $.each(
                $(":radio"),function(i, val){  //travel each radio (i = index, val = value)
                    if(val.checked){ //true = chosen number
                        if (isNaN(questions[currentQuiz].answers[i][1])) { //isNAN = is not a number
                            let finalResult = questions[currentQuiz].answers[i][1]; //take the ABCD
                            $("#question").text(finalAnswers[finalResult][0]);  //[ABCD][room1]
                            $("#options").empty();
                            $("#title").hide();
                            $("#options").append(finalAnswers[finalResult][1] + "<br><br>");  //[ABCD][room2]
                            if (questions[currentQuiz].answers[i][1] == "Y") {
                                $("#startButton").hide();
                                $("#evolution").show();
                                $("#evolution").click(function () { 
                                    $("#teacher").attr("src", "../image/teacher.jpg");
                                    $(".quiz").empty();
                                    songPause(1);
                                    showItem("#randomizeButton");
                                    songPause(1);
                                });
                            } else {
                                currentQuiz = null;
                                $("#startButton").attr("value", "Restart");
                            }
                        }else{
                            currentQuiz = (questions[currentQuiz].answers[i][1])-1; //current answer[room1][next number]
                            $("#question").text(questions[currentQuiz].question);
                            $("#options").empty();
                            for (let x = 0; x < questions[currentQuiz].answers.length; x++) {
                                $("#options").append(
                                    "<input name='options' type='radio' value='"+x+"' id='"+x+"'>" + //using single quotes avoid double quotes wrong coding
                                    "<label for='"+x+"'>" + questions[currentQuiz].answers[x][0] + "</label>"+
                                    "<br><br>"
                                );
                            }
                        }
                        return false; //force to end the travel each
                    }
                }
            );
        }
    });
}

function guess() {
    init();
    hideItem("randomizeButton");
    $(".top").empty();
    BGMPlay(2);
    table();
    let stratDate = new Date();
    let answer;
    $("#inputDate").change(function(){
        let inputDate = $(this).val();
        let splitText = inputDate.split("-");
        answer = splitText[1]+"/"+splitText[2];
        $("h2").html(answer);     
    });
    $("#confirm").click(function () { 
        console.log(answer);
        if (answer == "03/03") {
            $("h2").html("就算不結婚，有妹妹不就好了嗎?");
            setTimeout(function(){ $(".guess").empty(); }, 2000);
            songPause(2);
            showItem("randomizeButton");
        } else {
            $("h2").html("錯誤，請利用善用萌娘百科(點擊角色圖)");
        }
    }); 

    function table() {
        $(".top").html(
            "<div class='guess'>" +
            "<h1 id='title'>大老師你熟不熟---妹妹的生日</h1>"+
            "<div>"+
                "<input type='date' id='inputDate' min='2005-01-01' max='2005-12-31' value='2005-06-06'>"+
            "</div>"+
            "<h2></h2>"+
            "<input id='confirm' type='button' value='比對日期'>"+
            "</div>"
        );
    }
}