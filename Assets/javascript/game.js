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

// Gem set-up~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function setUp(){
  goal = Math.floor(Math.random()*120+19);
  gem1 = Math.floor(Math.random()*12+1);
  gem2 = Math.floor(Math.random()*12+1);
  gem3 = Math.floor(Math.random()*12+1);
  gem4 = Math.floor(Math.random()*12+1);
  score=0;
  $('#goal').html(goal)
  console.log("Gem1: "+gem1);
  console.log("Gem2: "+gem2);
  console.log("Gem3: "+gem3);
  console.log("Gem4: "+gem4);
};

// Click results~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  function outcome() {
    if(score===goal){
      $('outcome').html("Lookatcha!");
      winner.play();
      wins++;
      $('#score').empty();
      setUp();
    }
    else if(score>goal) {
      $('.outcome').html("Loser!");
      loser.play();
      losses++;
      $('#score').empty();
      setUp();
    }

    $('#wins').html("Wins: " + wins);
    $('#losses').html("Losses: "+losses);
  }





//Variables================================================================
 // var min = 19;
 // var max = 120;
 // var gemValue = 0;

 // Variables for counter displays*****************************************
// var winDisplay = $("#wins");
// var lossDisplay = $("#losses");
// var userScoreDisplay = $("#userTurn");
// var guruNumber = $("#guruHead");


// Variables of random number and of the user score~~~~~~~~~~~~~~~~~~~~~~~~
// var wins = 0;
// var losses = 0;
// var userTurn = 0;

// function getRandomNumber(a, b) {
//   guruhead = Math.floor(Math.random() * (b-a) + a);
//   $("#guruNumber").html(guruHead);
//   console.log(guruHead);
// }

// Gem setup===============================================================
        // When random-button is clicked...
       // $("#gem1").on("click", function() {
        
       //   var randomNumber="";

       //   for (var i = 0; i < 2; i++) {
       //     var random = Math.floor(Math.random() * 9) + 1;

       //    randomNumber = random + randomNumber; 
       //   }
       //   console.log(randomNumber)
       // })


       // $("#gem2").on("click", function() {
        
       //   var randomNumber="";

       //   for (var i = 0; i < 2; i++) {
       //     var random = Math.floor(Math.random() * 9) + 1;

       //     randomNumber = random + randomNumber; 
       //   }
       //  console.log(randomNumber)
       // })

       // $("#gem3").on("click", function() {
        
   // ...create a string which will hold the random gem number.
         // var randomNumber="";

// // Then create a loop that generates 2(?) separate numbers.
         // for (var i = 0; i < 2; i++) {
         //   var random = Math.floor(Math.random() * 9) + 1;

// // Add to the randomNumber number.
       //     randomNumber = random + randomNumber; 
       //   }
       //   console.log(randomNumber)
       // })

       // $("#gem4").on("click", function() {
        
       //   var randomNumber="";

       //   for (var i = 0; i < 2; i++) {
       //     var random = Math.floor(Math.random() * 9) + 1;

       //     randomNumber = random + randomNumber; 
       //   }
       //   console.log(randomNumber)
       //  })

        
    
       // }
 

//Set-up and play the game=================================================
setUp();
playGame();
console.log("Goal: "+goal);

});
	

