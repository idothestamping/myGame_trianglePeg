var player = [];
var counter = 0;
var allBoxes;
// defining all variables involved


document.addEventListener("DOMContentLoaded", startGame);{
  console.log("dom content has loaded");

  // document.getElementById("reset").addEventListener("click", resetGame 
    // adding event listener and click function for the reset button

  allBoxes = document.getElementsByClassName("gameBox");
  // defining what all boxes are referring to

  for(i = 0; i < allBoxes.length; i++){
    allBoxes[i].addEventListener("click", startPosition);
  }
  // add forloop to iterate through the chosen class into an array
};


function startGame(){
  document.getElementById("message").innerHTML = "Choose a starting spot:" //had to set message back to starting header
  for(i = 0; i < allBoxes.length; i++){
    allBoxes[i].addEventListener("click", startPosition); //turn on event listerner again
  }
}

function startPosition(e){
  player.push(e.target.id);
  document.getElementById(e.target.id).classList.remove("gameBox");
  document.getElementById(e.target.id).classList.add("emptyBall");
}