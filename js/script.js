var playerArr = [];
var orbCounter = 15;
var orbClicked = false;
var grid = []; // [[0], [1,2], [3,4,5],...]
var checkSolution = [ 
				[0, 10, 20],
				[0, 11, 22],
				[10, 20, 30],
				[10, 21, 32],
				[11, 21, 31],
				[11, 22, 33],
				[20, 21, 22],
				[20, 31, 42],
				[20, 30, 40],
				[21, 31, 41],
				[21, 32, 43],
				[22, 32, 42],
				[22, 33, 44],
				[30, 31, 32],
				[31, 32, 33],
				[40, 41, 42],
				[41, 42, 43],
				[42, 43, 44],
				[20, 10, 0],
				[22, 11, 0],
				[30, 20, 10],
				[32, 21, 10],
				[31, 21, 11],
				[33, 22, 11],
				[22, 21, 20],
				[42, 31, 20],
				[40, 30, 20],
				[41, 31, 21],
				[43, 32, 21],
				[42, 32, 22],
				[44, 33, 22],
				[32, 31, 30],
				[33, 32, 31],
				[42, 41, 40],
				[43, 42, 41],
				[44, 43, 42] ];

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


function gameLogic(e){
  console.log("gameLogic Started");

  if(playerArr.length == 0 && e.target.classList.contains("orbOn")){
      playerArr.push(parseInt(e.target.id));
      toggleOrb(e);
      console.log("gameLogic if 1st ran");
  } else if(playerArr.length == 1 && e.target.classList.contains("orbPicked")){
      toggleOrb(e);
      console.log("orb un-selected");
      playerArr = [];
  } else if(playerArr.length == 1 && e.target.classList.contains("orbOff")){
      playerArr.push(parseInt(e.target.id));
      let trio = checkPossibleMove(e);
      console.log("This is tring trio:", trio);
      if(trio){
        makeMove(trio);
        orbCounter--;
        playerArr = [];
        document.getElementById("message").style.visibility = "hidden"; 
      }
      console.log("current playerArr is", playerArr, " and orb counter is", orbCounter);
      checkWin();
  } else {
    console.log("you can't select this");
  }
}


function checkPossibleMove(e){
  console.log("we now here");
    for(i = 0; i < checkSolution.length; i++){
        var innerArr = checkSolution[i];
        for (j = 0; j < innerArr.length; j++){
            if(playerArr[0] == innerArr[0] && playerArr[1] == innerArr[2] && document.getElementById(innerArr[1]).classList.contains("orbOn")){
                console.log("legal move");
                return innerArr;
            } else {
                console.log("possible move array not matched");
                // playerArr.pop();
            }
        }
    }
    return false;
}


function checkWin(){
	console.log("checkWin");
	if(orbCounter == 1){
	document.getElementById("message").style.visibility = "visible";  
    document.getElementById("message").innerHTML = "YOU WON!"
	}
}


function checkStalemate(){
  // need to work on stalemate condition
}


function makeMove(trio){
    document.getElementById(trio[2]).classList.remove("orbOff");
    document.getElementById(trio[2]).classList.add("orbOn");

    document.getElementById(trio[0]).classList.remove("orbPicked");
    document.getElementById(trio[0]).classList.add("orbOff");

    document.getElementById(trio[1]).classList.remove("orbOn");
    document.getElementById(trio[1]).classList.add("orbOff"); 
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
}


function startGame(){
	console.log("starting game");
	document.getElementById("title").style.visibility = "hidden"; 
	document.getElementById("message").classList.remove("flashit");
	document.getElementById("message").classList.add("flashit2");
	document.getElementById("message").innerHTML = "Pick a Starting Position"
	document.getElementById("container").style.visibility = "visible";  
  	console.log("OrbCounter is", orbCounter);
}


function resetGame(){
	console.log("reset running");
	playerArr = [];
	orbCounter = 15;
  
    orbReset = [...document.getElementsByClassName("gameBox")];
    console.log(orbReset);

    orbReset.forEach(function(orb) {
    	orb.classList.remove('orbOff');
    	orb.classList.remove('orbPicked');
    	orb.classList.add('orbOn');
    });

    document.getElementById("message").style.visibility = "visible";  
    document.getElementById("message").innerHTML = "Pick a Starting Position"
}




