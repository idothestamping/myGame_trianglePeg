var playerArr = [];
var orbCounter = 15;
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

  orbClicked = Array.from(document.getElementsByClassName("gameBox"));
  console.log("orbClicked");
  orbClicked.forEach(function(orb){
  		orb.addEventListener("click", handleClick); 
  })
};


function handleClick(e){
	if(orbCounter == 1){
		gameOver();
	} else if(orbCounter == 15){
		orbCounter--;
		removeOrb(e);
		document.getElementById("message").innerHTML = "Select your next Move"
	} else {
		gameLogic(e);
		console.log("ran game Logic and current playerArr is", playerArr, " and orb counter is", orbCounter);
	}
}


function removeOrb(e){
	console.log("changing orb of", e.target);
	document.getElementById(e.target.id).classList.remove("orbOn");
    document.getElementById(e.target.id).classList.add("orbOff");
}

function addOrb(e){
	console.log("changing orb of", e.target);
	document.getElementById(e.target.id).classList.remove("orbOff");
    document.getElementById(e.target.id).classList.add("orbOn");
}

function toggleOrb(e){
	console.log("changing orb of", e.target);
	if(e.target.classList.contains("orbOn")){
	document.getElementById(e.target.id).classList.remove("orbOn");
    document.getElementById(e.target.id).classList.add("orbPicked");
	} else if(e.target.classList.contains("orbPicked")){
		document.getElementById(e.target.id).classList.remove("orbPicked")
		document.getElementById(e.target.id).classList.add("orbOn");
	}
}

function init(){
	console.log("init running");
	document.getElementById("message").innerHTML = "Press Start";
	document.getElementById("container").style.visibility = "hidden"; 
	console.log(gameOn);
}

function startGame(){
	console.log("starting game");
	document.getElementById("title").style.visibility = "hidden"; 
	document.getElementById("message").classList.remove("flashit");
	document.getElementById("message").classList.add("flashit2");
	document.getElementById("message").innerHTML = "Pick a Starting Position"
	document.getElementById("container").style.visibility = "visible";  
    // orbList = document.getElementsByClassName("gameBox");
  //   var pos = 0;
  //   var gridRow = [];
  // for (var i=0 ; i<5; i++) {
  //   gridRow = [];
  //   for (var j=0; j<=i; j++) {
  //     // index[] = [i, j]; // fill index
  //     gridRow.push([i, j]);
  //   }
  //   board.push(gridRow);
  // }
  // grid[i] = gridRow; // fill grid
  // console.log(grid);
  console.log("index!!!:",board);
  console.log("OrbCounter is", orbCounter);
}

function resetGame(){
  console.log("reset running");
  // document.getElementById("message").innerHTML = "Press Start"
  // allOrbs = [];
  playerArr = [];
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



