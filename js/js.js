var player = [];
var counter = 0;
var allOrbs;
var position;
var board;
var orbClicked = false;

var gameOn = false;

var grid = []; // [[0], [1,2], [3,4,5],...]
var board = []; // [[0,0], [1,0], [1,1],...]


document.addEventListener("DOMContentLoaded", init);{
  console.log("dom content has loaded");

  document.getElementById("reset").addEventListener("click", resetGame);
  document.getElementById("start").addEventListener("click", startGame);


};

function init(){
  console.log("init running");
  document.getElementById("message").innerHTML = "Press Start";
  document.getElementById("container").style.visibility = "hidden";  
}

function startGame(){
    console.log("starting game");
    document.getElementById("title").style.visibility = "hidden"; 
  document.getElementById("message").classList.remove("flashit");
  document.getElementById("message").classList.add("flashit2");
  document.getElementById("message").innerHTML = "Pick a Starting Position"
  document.getElementById("container").style.visibility = "visible";  
    // orbList = document.getElementsByClassName("gameBox");
    var pos = 0;
    var gridRow = [];
  for (var i=0 ; i<5; i++) {
    gridRow = [];
    for (var j=0; j<=i; j++) {
      // index[] = [i, j]; // fill index
      gridRow.push([i, j]);
    }
    board.push(gridRow);
  }
  // grid[i] = gridRow; // fill grid
  // console.log(grid);
  console.log("index!!!:",board);
  console.log(gameOn);
  
      orbClicked = document.getElementsByClassName("gameBox");
  for(i = 0; i < orbClicked.length; i++){
    orbClicked[i].addEventListener("click", changeOrb);
    console.log("forloop item", orbClicked[i]);
  }
}

function changeOrb(e){
  console.log("changing", e.target);
  if(e.target.classList.contains("orbOn")){
    document.getElementById(e.target.id).classList.remove("orbOn");
      document.getElementById(e.target.id).classList.add("orbOff");

  }
  else {
    document.getElementById(e.target.id).classList.add("orbOn");
      document.getElementById(e.target.id).classList.remove("orbOff");
    }
  
}



function pickStartOrb(e){
  if(e.target.classList.contains("orbOn")){
    document.getElementById(e.target.id).classList.remove("orbOn");
      document.getElementById(e.target.id).classList.add("orbOff");
      // console.log(orbClicked);
  }
  else {
    document.getElementById(e.target.id).classList.add("orbOn");
      document.getElementById(e.target.id).classList.remove("orbOff");
      gameOn();
      console.log("ready to game on")
    }
}


function gameOn(){
  console.log("gameOn Started")
  return true;
}


function resetGame(){
  console.log("reset running");
  // document.getElementById("message").innerHTML = "Press Start"
  // allOrbs = [];
  player = [];
  counter = 0;
  console.log(allOrbs.length);
  // for(i = 0; i < allOrbs.length; i++){
  // allOrbs[i].style.visibility = 'hidden';
  // }
  for(i = 0; i < allOrbs.length; i++){
    if(allOrbs[i].classList == "orbOff"){
        allOrbs[i].classList.remove("orbOff");
    }
    else {
      allOrbs[i].classList.add("orbOn");
      console.log(allOrbs.length);
      }

    if(startGame == false) {
      startGame();
      allOrbs = [];
      console.log(allOrbs.length);
    }
  }
}



