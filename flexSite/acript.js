// TOP SQUARES
for(i = 0; i < 4; i++) {
    var sqDiv = document.createElement('div');
    sqDiv.className = "square";
    document.getElementById("topSquare").appendChild(sqDiv);
}
    var sqDiv = document.getElementById("topSquare").children;
    sqDiv[0].className = "square0";
    sqDiv[1].className = "square1";
    sqDiv[2].className = "square2";
    sqDiv[3].className = "square3";

// BOTTON SQUAERS
for(i = 0; i < 8; i++) {
    var sqDivBot = document.createElement('div');
    sqDivBot.className = "square";
    document.getElementById("bottonSquare").appendChild(sqDivBot);
}
    var botDiv = document.getElementById("bottonSquare").children;
    botDiv[0].className = "botSquare0";
    botDiv[1].className = "botSquare1";
    botDiv[2].className = "botSquare2";
    botDiv[3].className = "botSquare3";
    botDiv[4].className = "botSquare4";
    botDiv[5].className = "botSquare5";
    botDiv[6].className = "botSquare6";
    botDiv[7].className = "botSquare7";