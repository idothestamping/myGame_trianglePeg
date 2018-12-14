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
      console.log("checking kfdsa;f;fd")
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
            }
        }
    }
    return false;
}

function makeMove(trio){
    document.getElementById(trio[2]).classList.remove("orbOff");
    document.getElementById(trio[2]).classList.add("orbOn");

    document.getElementById(trio[0]).classList.remove("orbPicked");
    document.getElementById(trio[0]).classList.add("orbOff");

    document.getElementById(trio[1]).classList.remove("orbOn");



    document.getElementById(trio[1]).classList.add("orbOff");
  }

  // document.getElementById(trio[1]).classList.remove("orbOn");

  // addOrb(e);
  // document.getElementById(innerArr[1]).classList.remove("orbClicked");
  // playerArr = [];
  // orbCounter--;
 

// function checkPossibleMove(playerArr){
//   for(i = 0; i < checkSolution.length; i++){
//     let innerArr = checkSolution[i]
//   } for (j = 0; j < innerArr.length; j++){
//       if(playerArr.includes(innerArr[j])){
//       pointcounter++;
//       console.log(pointcounter);
//     }
//   }
// }

//   orbClicked = Array.from(document.getElementsByClassName("gameBox"));
//   console.log(orbClicked);
//   orbClicked.forEach(function(orb){
//       orb.addEventListener("click", handleClick); 
//   })
// };


// function checkWin(playerArr){ //playerArr is provided by $onTurn. ID of the box is added within player x array e.g playerX = ["one"] after 1st box click
//   var pointCounter = 0;  
//   for(i = 0; i < winCombo.length; i++){ // iterate through the number of 8 possible win conditions
//     let innerArr = winCombo[i]; 
//     for(j = 0; j < innerArr.length; j++){  // doing an inception forloop here, iterating through the actual winning box combination within the 8 possible win conditions
//       if(playerArr.includes(innerArr[j])){ // checking the playerArr (what box was clicked by who) against the innerARR (win combo).  
//       pointCounter++;  //add pointcounter every check
//       console.log("yes", pointCounter);
//         if(pointCounter === 3){ //once pointcounter reaches 3 = it means 3 boxes are clicked
//         console.log("win");
//         document.getElementById("message").innerHTML = "You WIN!";
//         allBoxesRemove(); // remove eventlistener on all boxes so you can't keep playing after game is done
//         //
//         return true; // someone has met the 3 matching conditions
//         }
//       }
//     }
//     pointCounter = 0; //reset the counter to reset
//   }
//   return false; //tie funtion will be used when this is passed on
// }