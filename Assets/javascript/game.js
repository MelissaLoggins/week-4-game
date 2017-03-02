// jQuery Ready Function waits for the document to complete loading before initiating Javascript
$(document).ready(function(){

// Variables~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var goal
var gem1
var gem2
var gem3
var gem4
var score
var wins=0;
var losses=0; 
var winDisplay = $("#wins");
var lossDisplay = $("#losses");

// Game set-up~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//We set goal equal to a random number between 19 and 120. 
//We set the score equal to 0. 
//We display the score and the goal on the page using jquery. 
function setUp(){
  goal = Math.floor(Math.random()*120+19);
  score=0;
  $('#score').html(score);
  $('#goal').html(goal);
};
//This function testWin() is used to test the win/lose situation for the user. 
//Our first if takes into account whether or not the user has their score equal to the goal.
//If they do, we know that the user has won, so we increment the wins variable by 1. 
//Since they have won, we want to display the wins on the page. 
//We use jQuery to display this on the page via the winDisplay.html(wins).
//We use else if here, because we have to account for every possible scenario, this includes
//Winning, losing and just continue playing. The else if allows us to continue play.
//Lastly, the else covers, in this case, our only remaining scenario in which the player has 
//a score that is higher than the goal, in which case they have lost. 
//Each win/lose statement also calls setUp() to restart the game.
function testWin(){
  if(score === goal){
    wins++; 
    winDisplay.html(wins);
    setUp(); 
  }
  else if(score < goal){
    console.log("Keep going!");
  }
  else{
    losses++;
    lossDisplay.html(losses);
    setUp();
  }
}

// Gem setup===============================================================
        // Each gem below is assigned a variable with the gem's name.
        // Then it is setting that variable equal to a random number between 1 - 9
        // Then we add that gems value to the user's score, since this code
        // will only fire off once we are clicking on the ID in question. 
       $("#gem1").on("click", function() {
           gem1 = Math.floor(Math.random() * 9) + 1;
           score += gem1; 
           console.log("Gem value: "+gem1);
           console.log("User's score is: "+score);
           $('#score').html(score);
           testWin(); 
       });

       $("#gem2").on("click", function() {
           gem2 = Math.floor(Math.random() * 9) + 1;
           score += gem2; 
           console.log("Gem value: "+gem2);
           console.log("User's score is: "+score);
           $('#score').html(score);
           testWin(); 
       });

       $("#gem3").on("click", function() {
           gem3 = Math.floor(Math.random() * 9) + 1;
           score += gem3; 
           console.log("Gem value: "+gem3);
           console.log("User's score is: "+score);
           $('#score').html(score);
           testWin(); 
        })

       $("#gem4").on("click", function() {
          gem4 = Math.floor(Math.random() * 9) + 1;
          score += gem4; 
          console.log("Gem value: "+gem4);
          console.log("User's score is: "+score);
          $('#score').html(score);
          testWin(); 
        });
//Set-up and play the game=================================================
setUp();
});
  

