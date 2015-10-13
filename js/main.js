var clickCounter = 0;
var scoreX = 0;
var scoreO = 0;
var winnerFound = false;

function isEven(num){
  if (num === 0){
      return true;
    } else if(num === 1) {
      return false;
    } else if(num < 0) {
    	return isEven(num + 2);
    }
  	else {
      return isEven(num - 2);
    }
  }

function onClick(id){
  if(winnerFound == true){
    return;
  } else {
    clickCounter++;
    var x = isEven(clickCounter); //x knows wether the number of clicks is even or odd and tells the dom to "draw and X or O"
    if($('#'+id).attr("src") != "img/blank.png") {
      $('#win-message h1').html("<p>I'm sorry!<br>That square has already been taken.</p>").show().delay(600).fadeOut();
      clickCounter--;
    }
    else if(x == true){
      $('#'+id).attr("src", "img/O.png");
    }
    else if(x == false){
      $('#'+id).attr("src", "img/X.png");
    }
    else {
      console.log("ERROR!");
      clickCounter--;
    }
    findWinner();
  }
}


function clearGame(){
  $('#game tr td img').attr("src", "img/blank.png");
}

function findWinner(){
  var win = [['a1','a2','a3'],['b1','b2','b3'],['c1','c2','c3'],['a1','b1','c1'],['a2','b2','c2'],['a3','b3','c3'],['a1','b2','c3'],['a3','b2','c1']];
  for (var i = 0; i < win.length; i++){
    var indexOfWin = win[i];
  if($('#'+(indexOfWin[0])).attr("src") == "img/X.png" &&
     $('#'+(indexOfWin[1])).attr("src") == "img/X.png" &&
     $('#'+(indexOfWin[2])).attr("src") == "img/X.png"){
      winnerFound = true;
      $('#win-message h1').html("X wins!!!");
      scoreX++;
      $('#x-score').html(scoreX);
      $('#play-again').html('<button id="replay" onclick="buttonPress();">Play Again</button>').show();
    }
    else if($('#'+(indexOfWin[0])).attr("src") == "img/O.png" &&
            $('#'+(indexOfWin[1])).attr("src") == "img/O.png" &&
            $('#'+(indexOfWin[2])).attr("src") == "img/O.png"){
      winnerFound = true;
      $('#win-message h1').html("O wins!!!");
      scoreO++;
      $('#o-score').html(scoreO);
      $('#play-again').html('<button id="replay" onclick="buttonPress();">Play Again</button>').show();
    }
    else if(clickCounter == 9 && winnerFound == false && i == 7){
      $('#win-message h1').html("<p>No winner this time!<br>Please play again.</p>");
      $('#play-again').html('<button id="replay" onclick="buttonPress();">Play Again</button>').show();
    }
  }
}

function buttonPress() {
  $('#win-message h1').html('');
  clearGame();
  winnerFound = false;
  clickCounter = 0;
  $('#play-again').html('<button id="replay" onclick="buttonPress();">Play Again</button>').hide();
}
