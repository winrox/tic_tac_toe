var clickCounter = 0;
var scoreX = 0;
var scoreO = 0;

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
  clickCounter++;
  var x = isEven(clickCounter); //x knows wether the number of clicks is even or odd and tells the dom to "draw and X or O"
  if($('#'+id).attr("src") != "img/blank.png") {
    alert("I'm sorry that square is already taken!");
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

function clearGame(){
  $('#game tr td img').attr("src", "img/blank.png");
}

function findWinner(){
  var state = false;
  var win = [['a1','a2','a3'],['b1','b2','b3'],['c1','c2','c3'],['a1','b1','c1'],['a2','b2','c2'],['a3','b3','c3'],['a1','b2','c3'],['a3','b2','c1']];
  for (var i = 0; i < win.length; i++){
    var indexOfWin = win[i];
  if($('#'+(indexOfWin[0])).attr("src") == "img/X.png" &&
     $('#'+(indexOfWin[1])).attr("src") == "img/X.png" &&
     $('#'+(indexOfWin[2])).attr("src") == "img/X.png"){
      state = true;
      alert("X's have won!!!");
      scoreX++;
      $('#x-score').html(scoreX);
      clearGame();
      clickCounter = 0;
    }
    else if($('#'+(indexOfWin[0])).attr("src") == "img/O.png" &&
            $('#'+(indexOfWin[1])).attr("src") == "img/O.png" &&
            $('#'+(indexOfWin[2])).attr("src") == "img/O.png"){
      state = true;
      alert("O's have won!!!");
      scoreO++;
      $('#o-score').html(scoreO);
      clearGame();
      clickCounter = 0;
    }
    else if(clickCounter == 9 && state == false && i == 7){
      alert("CAT Game Over");
      clearGame();
      clickCounter = 0;
    }
  }
}
